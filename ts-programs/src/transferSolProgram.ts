import { AccountInfo } from "@solana/web3.js";
import {
  Account,
  Numeric,
  Pubkey,
  Result,
  Signer,
  SystemAccount,
  SystemProgram,
  TokenAccount,
  TokenProgram,
  u32,
  u64,
  u8,
  UncheckedAccount,
} from "@solanaturbine/poseidon";

export default class TransferSol {
  static PROGRAM_ID = new Pubkey(
    "4fQVnLWKKKYxtxgGn7Haw8v2g2Hzbu8K61JvWKvqAi7W"
  );

  transferSolWithCpi(
    amount: u64,
    payer: Signer,
    recipient: SystemAccount
  ): Result {
    SystemProgram.transfer(payer, recipient, amount);
  }
}
