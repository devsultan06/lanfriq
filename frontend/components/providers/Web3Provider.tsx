"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultConfig,
  getDefaultWallets,
  ConnectButton,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import "@rainbow-me/rainbowkit/styles.css";

const { wallets } = getDefaultWallets();

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "8d5c41935661647f525530b13d6a2f7c";

const config = getDefaultConfig({
  appName: "Lanfriq",
  projectId,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={
            theme === "dark"
              ? darkTheme({
                  accentColor: "#6B9E31",
                  borderRadius: "large",
                })
              : lightTheme({
                  accentColor: "#6B9E31",
                  borderRadius: "large",
                })
          }
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
