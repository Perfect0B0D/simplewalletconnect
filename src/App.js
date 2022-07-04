import React from "react";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import "./styles.css";
import { Web3Provider } from "@ethersproject/providers";
import Content from "./Content";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Content />
    </Web3ReactProvider>
  );
}
