"use client";
import Image from "next/image";
import Item from "./components/Item";
import BoughtItem from "./components/BoughtItem";
import { useState, useEffect } from "react";
import fetchMultipleData from "./Functionality/fetchIPFS";
// bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600
export default function Home() {
  const [connected, setConnected] = useState(false);
  const [showMint, setShowMint] = useState(false);
  const [mintAndBurnCondition, setmintAndBurnCondition] = useState(false);
  const [transferFriendCondition, setTransferFriendCondition] = useState(false);
  const [boughtCondition, setBoughtCondition] = useState(false);
  const [nftCollection, setNftCollection] = useState();

  const MarketPlace = [
    {
      name: "Fire Dragon",
      description: "",
      image:
        "https://ipfs.io/ipfs/QmZS6GGeDK6CcfDoQtvSmkPLtnctqvER6UswYZ46v6CQRu",
      price: 100,
    },
    {
      name: "Dwarf Forging",
      description: "",
      image:
        "https://ipfs.io/ipfs/Qmc2SEeXC95porcbT1c69AdsWGXUR7yU8miLav5oWB9bFj",
      price: 80,
    },
    {
      name: "Fire Dragon",
      description: "",
      image:
        "https://ipfs.io/ipfs/QmZS6GGeDK6CcfDoQtvSmkPLtnctqvER6UswYZ46v6CQRu",
      price: 100,
    },
    {
      name: "Fire Dragon",
      description: "",
      image:
        "https://ipfs.io/ipfs/QmZS6GGeDK6CcfDoQtvSmkPLtnctqvER6UswYZ46v6CQRu",
      price: 100,
    },
    {
      name: "Fire Dragon",
      description: "",
      image:
        "https://ipfs.io/ipfs/QmZS6GGeDK6CcfDoQtvSmkPLtnctqvER6UswYZ46v6CQRu",
      price: 100,
    },
    {
      name: "Fire Dragon",
      description: "",
      image:
        "https://ipfs.io/ipfs/QmZS6GGeDK6CcfDoQtvSmkPLtnctqvER6UswYZ46v6CQRu",
      price: 100,
    },
    {
      name: "Fire Dragon",
      description: "",
      image:
        "https://ipfs.io/ipfs/QmZS6GGeDK6CcfDoQtvSmkPLtnctqvER6UswYZ46v6CQRu",
      price: 100,
    },
  ];

  // function fetchingData() {
  //   fetch("https://ipfs.io/ipfs/QmQ6wwxiZdH1pnWXpTBzPYspaL2mD3EYFAuSvwTk6xWjL5")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }

  function MintAndBurnInput() {
    return (
      <div className=" bg-black text-white grid grid-cols-2 m-10">
        <form className="grid bg-[#005C78] px-20 py-10  col-start-1 col-end-3 mx-64 rounded-xl">
          <label className="grid col-start-1 col-end-1 ">
            Enter the Amount
          </label>
          <input
            className="text-white bg-slate-800 p-5 rounded-md mx-5 my-5"
            required
          />
        </form>

        <div className="flex justify-center col-span-2 items-center py-5">
          <button className="bg-blue-900 p-5 rounded-xl hover:bg-rose-900">
            Start Minting...
          </button>
        </div>
      </div>
    );
  }

  function BoughtItems() {
    return (
      <div className="mt-10 col-start-1 col-end-4 bg-opacity-90 p-10 justify-center space-x-8 space-y-5">
        <BoughtItem
          itemSrc={`https://ipfs.io/ipfs/QmRiSc9erN8aFsUQu26aiJ7heb42YEx8V7SmNco3ZLV14e`}
        />
        <BoughtItem
          itemSrc={`https://ipfs.io/ipfs/QmRiSc9erN8aFsUQu26aiJ7heb42YEx8V7SmNco3ZLV14e`}
        />
      </div>
    );
  }

  function TransferFriend() {
    return (
      <div className=" bg-black text-white grid grid-cols-2 m-10">
        <form className="grid bg-[#005C78] px-20 py-10  col-start-1 col-end-3 mx-64 rounded-xl">
          <label className="grid col-start-1 col-end-1 ">
            Enter the Address
          </label>
          <input
            className="text-white bg-slate-800 p-5 rounded-md mx-5 my-5"
            required
          />
          <label className="grid col-start-1 col-end-1 ">
            Enter the Amount
          </label>
          <input
            className="text-white bg-slate-800 p-5 rounded-md mx-5 my-5"
            required
          />
        </form>

        <div className="flex justify-center col-span-2 items-center py-5">
          <button className="bg-blue-900 p-5 rounded-xl hover:bg-rose-900">
            Transfer
          </button>
        </div>
      </div>
    );
  }

  const mintAndBurnTokens = async () => {
    setTransferFriendCondition(false);
    setmintAndBurnCondition(!mintAndBurnCondition);
  };

  const transferToFriend = async () => {
    setmintAndBurnCondition(false);
    setTransferFriendCondition(!transferFriendCondition);
  };

  const boughtItems = async () => {
    setBoughtCondition(!boughtCondition);
  };

  const mintNFTs = async (name, description, price, imageSrc) => {
    console.log(
      `Name is ${name} and ${description} and ${price} and ${imageSrc}`
    );
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-black">
      <div className="grid grid-cols-3">
        <div className="grid col-start-1 col-end-4">
          <div className="col-span-4 flex flex-col items-center">
            <h1 className="text-4xl">Account</h1>
          </div>
          <div className="col-span-4 flex flex-col items-center my-10">
            <button className="rounded-2xl p-5 pt-3 pb-3.5 bg-rose-800 shadow-xl shadow-zinc-800">
              {connected ? "Connected" : "Connect To metamask"}
            </button>
          </div>
          <div className="text-2xl col-start-1 col-end-1 justify-start ml-5">
            <p> Account Address : 0x161aBA4657174De9a36C3Ee71bC8163118d88d43</p>
          </div>
          <div className="text-xl col-span-3 flex justify-end mr-5">
            Balance : 100 DGN Tokens
          </div>
        </div>
      </div>
      <div className="w-full grid items-center my-10">
        <div className="grid grid-cols-4 gap-5">
          <div className="flex justify-center">
            <button
              onClick={() => mintAndBurnTokens()}
              className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
            >
              Mint DGN Tokens
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => transferToFriend()}
              className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
            >
              Transfer DGN Tokens
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => mintAndBurnTokens()}
              className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
            >
              Burn DGN Tokens
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => boughtItems()}
              className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
            >
              View Bought NFTs
            </button>
          </div>
        </div>
      </div>
      {mintAndBurnCondition && <MintAndBurnInput />}
      {transferFriendCondition && <TransferFriend />}
      {boughtCondition && <BoughtItems />}

      <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />

      <div className="mt-10 col-start-1 col-end-4 bg-opacity-90 p-10 justify-center space-x-8 space-y-5">
        <div className="text-2xl bolder flex justify-center mb-10 ">
          <p className="bg-gradient-to-r from-red-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent px-10 text-5xl">
            NFT STORE
          </p>
        </div>
        {MarketPlace.map((eachItem) => (
          <Item
            itemName={eachItem.name}
            itemDescription={eachItem.description}
            itemSrc={eachItem.image}
            itemPrice={eachItem.price}
            mintNFTFunction={mintNFTs}
          />
        ))}
        ;
        <Item
          itemName={"Fire Dragon"}
          itemDescription={"To Destroy your enemy with fire"}
          itemSrc={"https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"}
          itemPrice={"100"}
          mintNFTFunction={mintNFTs}
        />
        {/* <Item itemSrc={``} />
        <Item itemSrc={"lightningDragon.jpg"} />
        <Item itemSrc={"undeadSkeleton.jpg"} /> */}
      </div>
    </div>
  );
}
