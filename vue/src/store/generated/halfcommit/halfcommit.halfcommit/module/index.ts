// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgWithdrawHashlock } from "./types/halfcommit/tx";
import { MsgCreateHalfcommit } from "./types/halfcommit/tx";
import { MsgCloseChannel } from "./types/halfcommit/tx";
import { MsgOpenChannel } from "./types/halfcommit/tx";
import { MsgWithdrawTimelock } from "./types/halfcommit/tx";


const types = [
  ["/halfcommit.halfcommit.MsgWithdrawHashlock", MsgWithdrawHashlock],
  ["/halfcommit.halfcommit.MsgCreateHalfcommit", MsgCreateHalfcommit],
  ["/halfcommit.halfcommit.MsgCloseChannel", MsgCloseChannel],
  ["/halfcommit.halfcommit.MsgOpenChannel", MsgOpenChannel],
  ["/halfcommit.halfcommit.MsgWithdrawTimelock", MsgWithdrawTimelock],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgWithdrawHashlock: (data: MsgWithdrawHashlock): EncodeObject => ({ typeUrl: "/halfcommit.halfcommit.MsgWithdrawHashlock", value: MsgWithdrawHashlock.fromPartial( data ) }),
    msgCreateHalfcommit: (data: MsgCreateHalfcommit): EncodeObject => ({ typeUrl: "/halfcommit.halfcommit.MsgCreateHalfcommit", value: MsgCreateHalfcommit.fromPartial( data ) }),
    msgCloseChannel: (data: MsgCloseChannel): EncodeObject => ({ typeUrl: "/halfcommit.halfcommit.MsgCloseChannel", value: MsgCloseChannel.fromPartial( data ) }),
    msgOpenChannel: (data: MsgOpenChannel): EncodeObject => ({ typeUrl: "/halfcommit.halfcommit.MsgOpenChannel", value: MsgOpenChannel.fromPartial( data ) }),
    msgWithdrawTimelock: (data: MsgWithdrawTimelock): EncodeObject => ({ typeUrl: "/halfcommit.halfcommit.MsgWithdrawTimelock", value: MsgWithdrawTimelock.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
