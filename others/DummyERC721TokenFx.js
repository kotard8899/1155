/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyERC721TokenFx = void 0;
const contracts_1 = require("@ethersproject/contracts");
class DummyERC721TokenFx extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_name, _symbol, overrides) {
        return super.deploy(_name, _symbol, overrides || {});
    }
    getDeployTransaction(_name, _symbol, overrides) {
        return super.getDeployTransaction(_name, _symbol, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
    static interface() {
        return contracts_1.Contract.getInterface(_abi);
    }
}
exports.DummyERC721TokenFx = DummyERC721TokenFx;
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode =
    "60806040523480156200001157600080fd5b5060405162002b4238038062002b42833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b50604052505050620001cd6301ffc9a760e01b6200024f60201b60201c565b8160069080519060200190620001e592919062000358565b508060079080519060200190620001fe92919062000358565b50620002176380ac58cd60e01b6200024f60201b60201c565b6200022f635b5e139f60e01b6200024f60201b60201c565b6200024763780e9d6360e01b6200024f60201b60201c565b50506200040e565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003905760008555620003dc565b82601f10620003ab57805160ff1916838001178555620003dc565b82800160010185558215620003dc579182015b82811115620003db578251825591602001919060010190620003be565b5b509050620003eb9190620003ef565b5090565b5b808211156200040a576000816000905550600101620003f0565b5090565b612724806200041e6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a257806395d89b411161007157806395d89b411461056d578063a22cb465146105f0578063b88d4fde14610640578063c87b56dd14610745578063e985e9c5146107ec5761010b565b80634f6ccce7146103f85780636352211e1461043a5780636c0360eb1461049257806370a08231146105155761010b565b806318160ddd116100de57806318160ddd1461029c57806323b872dd146102ba5780632f745c591461032857806342842e0e1461038a5761010b565b806301ffc9a71461011057806306fdde0314610173578063081812fc146101f6578063095ea7b31461024e575b600080fd5b61015b6004803603602081101561012657600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610866565b60405180821515815260200191505060405180910390f35b61017b6108cd565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101bb5780820151818401526020810190506101a0565b50505050905090810190601f1680156101e85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102226004803603602081101561020c57600080fd5b810190808035906020019092919050505061096f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61029a6004803603604081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a0a565b005b6102a4610b4e565b6040518082815260200191505060405180910390f35b610326600480360360608110156102d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b5f565b005b6103746004803603604081101561033e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bd5565b6040518082815260200191505060405180910390f35b6103f6600480360360608110156103a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c30565b005b6104246004803603602081101561040e57600080fd5b8101908080359060200190929190505050610c50565b6040518082815260200191505060405180910390f35b6104666004803603602081101561045057600080fd5b8101908080359060200190929190505050610c73565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61049a610caa565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104da5780820151818401526020810190506104bf565b50505050905090810190601f1680156105075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105576004803603602081101561052b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d4c565b6040518082815260200191505060405180910390f35b610575610e21565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105b557808201518184015260208101905061059a565b50505050905090810190601f1680156105e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61063e6004803603604081101561060657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610ec3565b005b6107436004803603608081101561065657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106bd57600080fd5b8201836020820111156106cf57600080fd5b803590602001918460018302840111640100000000831117156106f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611079565b005b6107716004803603602081101561075b57600080fd5b81019080803590602001909291905050506110f1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107b1578082015181840152602081019050610796565b50505050905090810190601f1680156107de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61084e6004803603604081101561080257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113c2565b60405180821515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109655780601f1061093a57610100808354040283529160200191610965565b820191906000526020600020905b81548152906001019060200180831161094857829003601f168201915b5050505050905090565b600061097a82611456565b6109cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612619602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a1582610c73565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061269d6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610abb611473565b73ffffffffffffffffffffffffffffffffffffffff161480610aea5750610ae981610ae4611473565b6113c2565b5b610b3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061256c6038913960400191505060405180910390fd5b610b49838361147b565b505050565b6000610b5a6002611534565b905090565b610b70610b6a611473565b82611549565b610bc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806126be6031913960400191505060405180910390fd5b610bd083838361163d565b505050565b6000610c2882600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061188090919063ffffffff16565b905092915050565b610c4b83838360405180602001604052806000815250611079565b505050565b600080610c6783600261189a90919063ffffffff16565b50905080915050919050565b6000610ca3826040518060600160405280602981526020016125ce6029913960026118c69092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d425780601f10610d1757610100808354040283529160200191610d42565b820191906000526020600020905b815481529060010190602001808311610d2557829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dd3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806125a4602a913960400191505060405180910390fd5b610e1a600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206118e5565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eb95780601f10610e8e57610100808354040283529160200191610eb9565b820191906000526020600020905b815481529060010190602001808311610e9c57829003601f168201915b5050505050905090565b610ecb611473565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f6c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000610f79611473565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611026611473565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b61108a611084611473565b83611549565b6110df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806126be6031913960400191505060405180910390fd5b6110eb848484846118fa565b50505050565b60606110fc82611456565b611151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061266e602f913960400191505060405180910390fd5b6000600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111fa5780601f106111cf576101008083540402835291602001916111fa565b820191906000526020600020905b8154815290600101906020018083116111dd57829003601f168201915b50505050509050600061120b610caa565b90506000815114156112215781925050506113bd565b6000825111156112f25780826040516020018083805190602001908083835b602083106112635780518252602082019150602081019050602083039250611240565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106112b45780518252602082019150602081019050602083039250611291565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506113bd565b806112fc8561196c565b6040516020018083805190602001908083835b60208310611332578051825260208201915060208101905060208303925061130f565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106113835780518252602082019150602081019050602083039250611360565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061146c826002611ab390919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166114ee83610c73565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061154282600001611acd565b9050919050565b600061155482611456565b6115a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612540602c913960400191505060405180910390fd5b60006115b483610c73565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061162357508373ffffffffffffffffffffffffffffffffffffffff1661160b8461096f565b73ffffffffffffffffffffffffffffffffffffffff16145b80611634575061163381856113c2565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661165d82610c73565b73ffffffffffffffffffffffffffffffffffffffff16146116c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806126456029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561174f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124f66024913960400191505060405180910390fd5b61175a838383611ade565b61176560008261147b565b6117b681600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611ae390919063ffffffff16565b5061180881600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611afd90919063ffffffff16565b5061181f81836002611b179092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061188f8360000183611b4c565b60001c905092915050565b6000806000806118ad8660000186611bcf565b915091508160001c8160001c9350935050509250929050565b60006118d9846000018460001b84611c68565b60001c90509392505050565b60006118f382600001611d5e565b9050919050565b61190584848461163d565b61191184848484611d6f565b611966576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806124c46032913960400191505060405180910390fd5b50505050565b606060008214156119b4576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611aae565b600082905060005b600082146119de578080600101915050600a82816119d657fe5b0491506119bc565b60008167ffffffffffffffff811180156119f757600080fd5b506040519080825280601f01601f191660200182016040528015611a2a5781602001600182028036833780820191505090505b50905060006001830390508593505b60008414611aa657600a8481611a4b57fe5b0660300160f81b82828060019003935081518110611a6557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611a9e57fe5b049350611a39565b819450505050505b919050565b6000611ac5836000018360001b611f88565b905092915050565b600081600001805490509050919050565b505050565b6000611af5836000018360001b611fab565b905092915050565b6000611b0f836000018360001b612093565b905092915050565b6000611b43846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612103565b90509392505050565b600081836000018054905011611bad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124a26022913960400191505060405180910390fd5b826000018281548110611bbc57fe5b9060005260206000200154905092915050565b60008082846000018054905011611c31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806125f76022913960400191505060405180910390fd5b6000846000018481548110611c4257fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611d2f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cf4578082015181840152602081019050611cd9565b50505050905090810190601f168015611d215780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611d4257fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b6000611d908473ffffffffffffffffffffffffffffffffffffffff166121df565b611d9d5760019050611f80565b6000611f0763150b7a0260e01b611db2611473565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611e36578082015181840152602081019050611e1b565b50505050905090810190601f168015611e635780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016124c4603291398773ffffffffffffffffffffffffffffffffffffffff166121f29092919063ffffffff16565b90506000818060200190516020811015611f2057600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146120875760006001820390506000600186600001805490500390506000866000018281548110611ff657fe5b906000526020600020015490508087600001848154811061201357fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061204b57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061208d565b60009150505b92915050565b600061209f838361220a565b6120f85782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506120fd565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156121aa578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506121d8565b828560000160018303815481106121bd57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612201848460008561222d565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612288576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061251a6026913960400191505060405180910390fd5b612291856121df565b612303576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612352578051825260208201915060208101905060208303925061232f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146123b4576040519150601f19603f3d011682016040523d82523d6000602084013e6123b9565b606091505b50915091506123c98282866123d5565b92505050949350505050565b606083156123e55782905061249a565b6000835111156123f85782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561245f578082015181840152602081019050612444565b50505050905090810190601f16801561248c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220b779f4a58a12d63a8e971c9e9c113647ee40300c333157f09e0126aac666733b64736f6c63430007060033";
//# sourceMappingURL=DummyERC721TokenFx.js.map
