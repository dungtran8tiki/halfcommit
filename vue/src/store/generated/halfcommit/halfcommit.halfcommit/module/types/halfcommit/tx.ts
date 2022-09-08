/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "halfcommit.halfcommit";

export interface MsgCreateHalfcommit {
  creator: string;
  from: string;
  toTimelock: string;
  blockheight: number;
  toHashlock: string;
  hashcode: string;
  coin: Coin | undefined;
}

export interface MsgCreateHalfcommitResponse {
  index: string;
}

const baseMsgCreateHalfcommit: object = {
  creator: "",
  from: "",
  toTimelock: "",
  blockheight: 0,
  toHashlock: "",
  hashcode: "",
};

export const MsgCreateHalfcommit = {
  encode(
    message: MsgCreateHalfcommit,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.toTimelock !== "") {
      writer.uint32(26).string(message.toTimelock);
    }
    if (message.blockheight !== 0) {
      writer.uint32(32).uint64(message.blockheight);
    }
    if (message.toHashlock !== "") {
      writer.uint32(42).string(message.toHashlock);
    }
    if (message.hashcode !== "") {
      writer.uint32(50).string(message.hashcode);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateHalfcommit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateHalfcommit } as MsgCreateHalfcommit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.toTimelock = reader.string();
          break;
        case 4:
          message.blockheight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.toHashlock = reader.string();
          break;
        case 6:
          message.hashcode = reader.string();
          break;
        case 7:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHalfcommit {
    const message = { ...baseMsgCreateHalfcommit } as MsgCreateHalfcommit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.toTimelock !== undefined && object.toTimelock !== null) {
      message.toTimelock = String(object.toTimelock);
    } else {
      message.toTimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = Number(object.blockheight);
    } else {
      message.blockheight = 0;
    }
    if (object.toHashlock !== undefined && object.toHashlock !== null) {
      message.toHashlock = String(object.toHashlock);
    } else {
      message.toHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin);
    } else {
      message.coin = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateHalfcommit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.toTimelock !== undefined && (obj.toTimelock = message.toTimelock);
    message.blockheight !== undefined &&
      (obj.blockheight = message.blockheight);
    message.toHashlock !== undefined && (obj.toHashlock = message.toHashlock);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateHalfcommit>): MsgCreateHalfcommit {
    const message = { ...baseMsgCreateHalfcommit } as MsgCreateHalfcommit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.toTimelock !== undefined && object.toTimelock !== null) {
      message.toTimelock = object.toTimelock;
    } else {
      message.toTimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = object.blockheight;
    } else {
      message.blockheight = 0;
    }
    if (object.toHashlock !== undefined && object.toHashlock !== null) {
      message.toHashlock = object.toHashlock;
    } else {
      message.toHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    } else {
      message.coin = undefined;
    }
    return message;
  },
};

const baseMsgCreateHalfcommitResponse: object = { index: "" };

export const MsgCreateHalfcommitResponse = {
  encode(
    message: MsgCreateHalfcommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateHalfcommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateHalfcommitResponse,
    } as MsgCreateHalfcommitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHalfcommitResponse {
    const message = {
      ...baseMsgCreateHalfcommitResponse,
    } as MsgCreateHalfcommitResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgCreateHalfcommitResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateHalfcommitResponse>
  ): MsgCreateHalfcommitResponse {
    const message = {
      ...baseMsgCreateHalfcommitResponse,
    } as MsgCreateHalfcommitResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateHalfcommit(
    request: MsgCreateHalfcommit
  ): Promise<MsgCreateHalfcommitResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateHalfcommit(
    request: MsgCreateHalfcommit
  ): Promise<MsgCreateHalfcommitResponse> {
    const data = MsgCreateHalfcommit.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Msg",
      "CreateHalfcommit",
      data
    );
    return promise.then((data) =>
      MsgCreateHalfcommitResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
