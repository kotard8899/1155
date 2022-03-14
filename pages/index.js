import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { W3PocketConnectButton } from '@/components/W3Pocket'
import useW3Pocket from '../components/W3Pocket/useW3Pocket'
import { BigNumber } from "@ethersproject/bignumber"
import { Zero, One, AddressZero } from "@ethersproject/constants"
import Web3 from "web3"
import ABI from "../public/ABI.json"
import fABI from "../public/fABI.json"

export default function Home() {
  const [isApproved, setIsApproved] = useState(false)
  const [address1155, setAddress1155] = useState("0x5ca26b7a7096ebbe9981aa8ceb526ed39b93e1ba")
  const [ids, setIds] = useState([])
  const [values, setValues] = useState([])
  const [order, setOrder] = useState({})
  const [sign, setSign] = useState("")
  const { accounts, provider, connected } = useW3Pocket()
  const account = accounts[0]
  const web3 = new Web3(provider)
  // const a1155 = "0xb462512ad8f6b795b551749Bf6d25Dd382D9bd64"
  // const a1155 = "0xcb14eca89ad5d6af203f19c68bdeced6a4d00655"
  // const a1155 = "0x5ca26b7a7096ebbe9981aa8ceb526ed39b93e1ba" // new
  const contract = address1155 && new web3.eth.Contract(ABI, address1155)

  useEffect(() => {
    account && address1155 && handleAsync()
  }, [account, address1155])

  const handleAsync = async () => {
    const isApproved = await contract.methods.isApprovedForAll(account, process.env.ERC1155PROXY).call()
    setIsApproved(isApproved)
  }

  const handleApprove = () => {
    contract.methods
      .setApprovalForAll(process.env.ERC1155PROXY, true)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        console.log(hash)
      })
      .on("receipt", (receipt) => {
        console.log(receipt)
      })
      .on("error", (error) => {
        console.log(error)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSign = async () => {
    const { orderHashUtils, assetDataUtils, signatureUtils } = await import(
      "@0x/order-utils"
    )
    const { ecSignOrderAsync } = signatureUtils
    const _ids = ids.map(e => BigNumber.from(e))
    const _values = values.map(e => BigNumber.from(e))

    const erc1155Data = assetDataUtils.encodeERC1155AssetData(
      address1155,
      _ids,
      _values,
      "0x",
    )
      
    const erc20Data = assetDataUtils.encodeERC20AssetData("0xc778417e063141139fce010982780140aa0cd5ab")
    //0xf7d3e65fc7a97d69d311d4bc514e01f4bd7955a2
    // 0xf47261b0000000000000000000000000c778417e063141139fce010982780140aa0cd5ab
    const ts = Date.now()
    const salt = ts.toString()

    const expirationTimeSeconds = Math.floor((ts + 60 * 60 * 1e3) / 1e3).toString()

    const order = {
      makerAssetAmount: "1",
      makerAssetData: erc1155Data,
      takerAssetAmount: "100000000000000000",
      takerAssetData: erc20Data,
      makerAddress: account,
      exchangeAddress: process.env.EXCHANGE,
      salt,
      expirationTimeSeconds,
      feeRecipientAddress: AddressZero,
      takerAddress: AddressZero,
      senderAddress: AddressZero,
      makerFee: "0",
      takerFee: "0",
    }

    const zeroXProvider = await import("@0x/subproviders").then(
      ({ MetamaskSubprovider }) => new MetamaskSubprovider(provider))
    const { signature } = await ecSignOrderAsync(
      zeroXProvider,
      order,
      account,
    )
    setSign(signature)
    setOrder(order)
  }

  const fillOrder = () => {
    const fContract = new web3.eth.Contract(fABI, process.env.FORWARDER)
    const args = [
      [order],
      1,
      [sign],
      [],
      [],
      0,
      AddressZero
    ]
    fContract.methods
      .marketBuyOrdersWithEth(...args)
      .send({ from: account, value: web3.utils.toWei("0.1", "ether") })
      .on("transactionHash", (hash) => {
        console.log(hash)
      })
      .on("receipt", (receipt) => {
        console.log(receipt)
      })
      .on("error", (error) => {
        console.log(error)
      })
  }

  const handleIds = (e) => {
    const arr = e.target.value.split(",")
    setIds(arr)
  }
  const handleValues = (e) => {
    const arr = e.target.value.split(",")
    setValues(arr)
  }

  return (
    <div className={styles.container}>
      <W3PocketConnectButton />
      {account ? sign 
        ? <button onClick={fillOrder}>
            fillOrder
          </button>
        : !isApproved
          ? <button onClick={handleApprove}>
              同意授權
            </button>
          : <button onClick={handleSign}>
              簽名上架
            </button> : ""
      }
      <div>
        <input type="text" placeholder="erc1155 address" value={address1155} onChange={(e) => setAddress1155(e.target.value)} />{' '}
        contractAddress: {address1155}
      </div>
      <div>
        <input type="text" placeholder="id,id,id" value={ids} onChange={handleIds} />{' '}
        ids: [{ids.map(e => e + ",")}]
      </div>
      <div>
        <input type="text" placeholder="value,value,value" value={values} onChange={handleValues} />{' '}
        values: [{values.map(e => e + ",")}]
      </div>
    </div>
  )
}
