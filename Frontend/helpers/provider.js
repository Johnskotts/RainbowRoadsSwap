import { useState, useEffect } from "react";

const getProvider = () => {
  if (typeof window !== "undefined") {
    if ("phantom" in window) {
      const provider = window?.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }
  }

  return false;
};

module.exports = getProvider;
