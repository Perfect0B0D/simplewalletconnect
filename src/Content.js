import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Web3Provider } from "@ethersproject/providers";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export default function () {
  const web3React = useWeb3React();

  console.log(web3React);

  useEffect(() => {
    // web3React.activate(new InjectedConnector());

    const walletconnect = new WalletConnectConnector({
       rpc: {
    137: "https://polygon-mainnet.g.alchemy.com/v2/eiVLdTffoYP7cJL_-P1uegaKtak9Vzx6"
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000
    });

    web3React.activate(walletconnect);
  }, []);

  useEffect(() => {
    console.log("new chain id ", web3React.chainId);
  }, [web3React.chainId]);

  useEffect(() => {
    console.log("new account ", web3React.account);

    if (web3React.account) {
      web3React.library
        .getSigner(web3React.account)
        .signMessage("👋")
        .then((signature) => {
          window.alert(`Success!\n\n${signature}`);
        });
    }
  }, [web3React.account]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
