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
import ABI721 from "../public/ABI721.json"
import fABI from "../public/fABI.json"
import axios from "axios"

export default function Home() {
  const [isApproved, setIsApproved] = useState(false)
  const [address1155, setAddress1155] = useState("")
  const [ids, setIds] = useState([])
  const [values, setValues] = useState([])
  const [order, setOrder] = useState({})
  const [sign, setSign] = useState("")
  const [feeRecipientAddress, setFeeRecipientAddress] = useState("0x7ebb6000feA30E11683A896cB745A5D51DdEEc6F")
  const [makerFee, setMakerFee] = useState(0)
  const [price, setPrice] = useState(0.1)
  const [proxy, setProxy] = useState("")
  const [erc20, setErc20] = useState("")
  const [is721, setIs721] = useState(false)
  const [exchange, setExchange] = useState("")
  const { accounts, provider, connected } = useW3Pocket()
  const account = accounts[0]
  const web3 = new Web3(provider)
  // const a1155 = "0xb462512ad8f6b795b551749Bf6d25Dd382D9bd64"
  // const a1155 = "0xcb14eca89ad5d6af203f19c68bdeced6a4d00655"
  // const a1155 = "0x5ca26b7a7096ebbe9981aa8ceb526ed39b93e1ba" // new
  const contract = address1155 && is721 ? new web3.eth.Contract(ABI721, address1155) : new web3.eth.Contract(ABI, address1155)

  useEffect(() => {
    account && proxy && address1155 && handleAsync()
  }, [account, address1155, proxy])

  const handleAsync = async () => {
    const isApproved = await contract.methods.isApprovedForAll(account, proxy).call()
    setIsApproved(isApproved)
  }

  const handleApprove = () => {
    contract.methods
      .setApprovalForAll(proxy, true)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        console.log(hash)
      })
      .on("receipt", (receipt) => {
        console.log(receipt)
        handleAsync()
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
    const { ecSignOrderAsync, convertECSignatureToSignatureHex } = signatureUtils
    const _ids = ids.map(e => BigNumber.from(e))
    const _values = values.map(e => BigNumber.from(e))
    let erc1155Data
    if (!is721) {
      erc1155Data = assetDataUtils.encodeERC1155AssetData(
        address1155,
        _ids,
        _values,
        "0x",
      )
    } else {
      erc1155Data = assetDataUtils.encodeERC721AssetData(
        address1155,
        _ids[0]
      )
    }
    // const erc20Data = assetDataUtils.encodeERC20AssetData("0xc778417e063141139fce010982780140aa0cd5ab")
    const erc20Data = assetDataUtils.encodeERC20AssetData(erc20)
    const ts = Date.now()
    const salt = ts.toString()

    const expirationTimeSeconds = Math.floor((ts + 60 * 60 * 1e3) / 1e3).toString()

    const order = {
      makerAssetAmount: "1",
      makerAssetData: erc1155Data,
      takerAssetAmount: (web3.utils.toWei(price.toString(), "ether") * (1 - makerFee / 100)).toString(),
      takerAssetData: erc20Data,
      makerAddress: account,
      exchangeAddress: exchange,
      salt,
      expirationTimeSeconds,
      feeRecipientAddress: feeRecipientAddress,
      takerAddress: AddressZero,
      senderAddress: AddressZero,
      makerFee: "0",
      takerFee: (web3.utils.toWei(price.toString(), "ether") * (makerFee / 100)).toString(),
    }
    console.log(order)

    const zeroXProvider = await import("@0x/subproviders").then(
      ({ MetamaskSubprovider }) => new MetamaskSubprovider(provider))
    const { signature } = await ecSignOrderAsync(
      zeroXProvider,
      order,
      account,
    )
    // const orderHash = orderHashUtils.getOrderHashHex(order)
    // const so = order
    // so.signature = signature
    // so.orderHash = orderHash
    // console.log(so)
    // const cso = convertECSignatureToSignatureHex(so)
    // const r = await axios.post("https://api.rinkeby.dex.lootex.io/v2/orders?chainId=4",so)
    // console.log(r)
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
      .send({ from: account, value: web3.utils.toWei(price.toString(), "ether") })
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
        <input type="text" value={is721} onChange={(e) => setIs721(e.target.value)} />{' '}
        is721?: {is721}
      </div>
      <div>
        <input type="text" placeholder="erc20Address" value={erc20} onChange={(e) => setErc20(e.target.value)} />{' '}
        erc20Address: {erc20}
      </div>
      <div>
        <input type="text" placeholder="proxy" value={proxy} onChange={(e) => setProxy(e.target.value)} />{' '}
        proxy: {proxy} (erc721proxy || erc1155proxy)
      </div>
      <div>
        <input type="text" placeholder="token address" value={address1155} onChange={(e) => setAddress1155(e.target.value)} />{' '}
        contractAddress: {address1155}
      </div>
      <div>
        <input type="text" placeholder="exchange address" value={exchange} onChange={(e) => setExchange(e.target.value)} />{' '}
        exchangeAddress: {exchange}
      </div>
      <div>
        <input type="text" placeholder="id,id,id" value={ids} onChange={handleIds} />{' '}
        ids: [{ids.map(e => e + ",")}] (if is erc721 then input one id and dont need value)
      </div>
      <div>
        <input type="text" placeholder="value,value,value" value={values} onChange={handleValues} />{' '}
        values: [{values.map(e => e + ",")}]
      </div>
      <div>
        <input type="text" placeholder="賣價" value={price} onChange={(e) => setPrice(e.target.value)} />{' '}
        price: {price}ether
      </div>
      <div>
        <input type="text" placeholder="feeRecipientAddress" value={feeRecipientAddress} onChange={(e) => setFeeRecipientAddress(e.target.value)} />{' '}
        feeRecipientAddress: {feeRecipientAddress}
      </div>
      <div>
        <input type="number" placeholder="makerFee" value={makerFee} onChange={(e) => setMakerFee(e.target.value)} />{' '}
        makerFee: {makerFee}%
      </div>
    </div>
  )
}
