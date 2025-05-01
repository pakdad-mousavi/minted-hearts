import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

export const devnetCluster = new Connection(
  clusterApiUrl("devnet"),
  "confirmed"
);

const getBackendWallet = () => {
  const secret = JSON.parse(process.env.SOLANA_SECRET_KEY);
  return Keypair.fromSecretKey(Uint8Array.from(secret));
};

export const addSOLToBackendWallet = async (amountInLamports) => {
  const wallet = getBackendWallet();

  try {
    const sig = await devnetCluster.requestAirdrop(
      wallet.publicKey,
      Number(amountInLamports)
    );
    await devnetCluster.confirmTransaction({
      signature: sig,
      commitment: "confirmed",
    });
  } catch (e) {
    console.error("Airdrop failed:", e);
  }
};

export const getBackendWalletBalance = async () => {
  const wallet = getBackendWallet();
  return await devnetCluster.getBalance(wallet.publicKey);
};

// // Example usage
// (async () => {
//   await addSOLToBackendWallet(0.5 * LAMPORTS_PER_SOL);
//   const balance = await getBackendWalletBalance();
//   console.log(`💰 Balance: ${balance / LAMPORTS_PER_SOL} SOL`);
// })();
