"use client";
import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
})

export const chain = defineChain(1);

const contractAddress = '0xBb33d8CdA74f7EA06BD917003d478d6B2361AD60';
const contractABI = [
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint56",
        name: "",
        type: "uint56",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint56",
        name: "",
        type: "uint56",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const CONTRACT = getContract({
    client: client,
    chain: chain,
    abi: contractABI,
    address: contractAddress
})

// lvrNbu9JqaGjn5kM0LxX5d2WYPliBHPS_V6CImUSvwyLlP4mrE18r7yDFQ8BWUYTzGlInPpqmChNM8ykpyJNdw