import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectButton, useAccount, useBalance } from "@web3modal/react";

function App() {
  const { isConnected } = useAccount();
  return (
    <div className="App">
      <header className="App-header">
        {isConnected ? <Balances /> : <ConnectButton />}
      </header>
    </div>
  );
}

export default App;

const Balances = () => {
  const { address } = useAccount();
  const [ethBal, setEthBal] = useState<string>("");
  const [wethBal, setWethBal] = useState<string>("");

  const { data, isLoading, error } = useBalance({
    addressOrName: "0xed45ff9490723c2fb4a354e4b554c357604ea73c",
    formatUnits: "ether",
    watch: false,
  });

  const {
    data: wethData,
    isLoading: wethIsLoading,
    error: wethError,
  } = useBalance({
    addressOrName: "0xed45ff9490723c2fb4a354e4b554c357604ea73c",
    formatUnits: "ether",
    token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    watch: false,
  });

  // console.log("data", data);

  //you can comment this useEffect and try the console log above, but it doesn't resolve the issue
  useEffect(() => {
    if (!isLoading) {
      setEthBal(parseFloat(data?.formatted!).toFixed(2));
    }
    if (!wethIsLoading) {
      setWethBal(parseFloat(wethData?.formatted!).toFixed(2));
    }
  }, [address, isLoading, wethIsLoading]);
  return (
    <>
      <span>Eth:{isLoading ? "Loading..." : ethBal}</span>
      <span>Weth:{wethIsLoading ? "Loading..." : wethBal}</span>
    </>
  );
};
