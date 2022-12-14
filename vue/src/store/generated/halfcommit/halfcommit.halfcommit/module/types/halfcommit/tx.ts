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

export interface MsgWithdrawTimelock {
  creator: string;
  to: string;
  index: string;
}

export interface MsgWithdrawTimelockResponse {}

export interface MsgWithdrawHashlock {
  creator: string;
  to: string;
  index: string;
  secret: string;
}

export interface MsgWithdrawHashlockResponse {}

export interface MsgCloseChannel {
  creator: string;
  from: string;
  toA: string;
  coinA: Coin | undefined;
  toB: string;
  coinB: Coin | undefined;
}

export interface MsgCloseChannelResponse {}

export interface MsgOpenChannel {
  creator: string;
  partA: string;
  partB: string;
  coinA: Coin | undefined;
  coinB: Coin | undefined;
  name: string;
}

export interface MsgOpenChannelResponse {}

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

const baseMsgWithdrawTimelock: object = { creator: "", to: "", index: "" };

export const MsgWithdrawTimelock = {
  encode(
    message: MsgWithdrawTimelock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawTimelock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawTimelock {
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawTimelock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawTimelock>): MsgWithdrawTimelock {
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgWithdrawTimelockResponse: object = {};

export const MsgWithdrawTimelockResponse = {
  encode(
    _: MsgWithdrawTimelockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawTimelockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawTimelockResponse,
    } as MsgWithdrawTimelockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawTimelockResponse {
    const message = {
      ...baseMsgWithdrawTimelockResponse,
    } as MsgWithdrawTimelockResponse;
    return message;
  },

  toJSON(_: MsgWithdrawTimelockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawTimelockResponse>
  ): MsgWithdrawTimelockResponse {
    const message = {
      ...baseMsgWithdrawTimelockResponse,
    } as MsgWithdrawTimelockResponse;
    return message;
  },
};

const baseMsgWithdrawHashlock: object = {
  creator: "",
  to: "",
  index: "",
  secret: "",
};

export const MsgWithdrawHashlock = {
  encode(
    message: MsgWithdrawHashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.secret !== "") {
      writer.uint32(34).string(message.secret);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawHashlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawHashlock {
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = String(object.secret);
    } else {
      message.secret = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawHashlock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.index !== undefined && (obj.index = message.index);
    message.secret !== undefined && (obj.secret = message.secret);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawHashlock>): MsgWithdrawHashlock {
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    } else {
      message.secret = "";
    }
    return message;
  },
};

const baseMsgWithdrawHashlockResponse: object = {};

export const MsgWithdrawHashlockResponse = {
  encode(
    _: MsgWithdrawHashlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawHashlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawHashlockResponse,
    } as MsgWithdrawHashlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawHashlockResponse {
    const message = {
      ...baseMsgWithdrawHashlockResponse,
    } as MsgWithdrawHashlockResponse;
    return message;
  },

  toJSON(_: MsgWithdrawHashlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawHashlockResponse>
  ): MsgWithdrawHashlockResponse {
    const message = {
      ...baseMsgWithdrawHashlockResponse,
    } as MsgWithdrawHashlockResponse;
    return message;
  },
};

const baseMsgCloseChannel: object = { creator: "", from: "", toA: "", toB: "" };

export const MsgCloseChannel = {
  encode(message: MsgCloseChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.toA !== "") {
      writer.uint32(26).string(message.toA);
    }
    if (message.coinA !== undefined) {
      Coin.encode(message.coinA, writer.uint32(34).fork()).ldelim();
    }
    if (message.toB !== "") {
      writer.uint32(42).string(message.toB);
    }
    if (message.coinB !== undefined) {
      Coin.encode(message.coinB, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
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
          message.toA = reader.string();
          break;
        case 4:
          message.coinA = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.toB = reader.string();
          break;
        case 6:
          message.coinB = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseChannel {
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
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
    if (object.toA !== undefined && object.toA !== null) {
      message.toA = String(object.toA);
    } else {
      message.toA = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromJSON(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toB !== undefined && object.toB !== null) {
      message.toB = String(object.toB);
    } else {
      message.toB = "";
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromJSON(object.coinB);
    } else {
      message.coinB = undefined;
    }
    return message;
  },

  toJSON(message: MsgCloseChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.toA !== undefined && (obj.toA = message.toA);
    message.coinA !== undefined &&
      (obj.coinA = message.coinA ? Coin.toJSON(message.coinA) : undefined);
    message.toB !== undefined && (obj.toB = message.toB);
    message.coinB !== undefined &&
      (obj.coinB = message.coinB ? Coin.toJSON(message.coinB) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseChannel>): MsgCloseChannel {
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
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
    if (object.toA !== undefined && object.toA !== null) {
      message.toA = object.toA;
    } else {
      message.toA = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromPartial(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toB !== undefined && object.toB !== null) {
      message.toB = object.toB;
    } else {
      message.toB = "";
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromPartial(object.coinB);
    } else {
      message.coinB = undefined;
    }
    return message;
  },
};

const baseMsgCloseChannelResponse: object = {};

export const MsgCloseChannelResponse = {
  encode(_: MsgCloseChannelResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCloseChannelResponse,
    } as MsgCloseChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCloseChannelResponse {
    const message = {
      ...baseMsgCloseChannelResponse,
    } as MsgCloseChannelResponse;
    return message;
  },

  toJSON(_: MsgCloseChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCloseChannelResponse>
  ): MsgCloseChannelResponse {
    const message = {
      ...baseMsgCloseChannelResponse,
    } as MsgCloseChannelResponse;
    return message;
  },
};

const baseMsgOpenChannel: object = {
  creator: "",
  partA: "",
  partB: "",
  name: "",
};

export const MsgOpenChannel = {
  encode(message: MsgOpenChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.partA !== "") {
      writer.uint32(18).string(message.partA);
    }
    if (message.partB !== "") {
      writer.uint32(26).string(message.partB);
    }
    if (message.coinA !== undefined) {
      Coin.encode(message.coinA, writer.uint32(34).fork()).ldelim();
    }
    if (message.coinB !== undefined) {
      Coin.encode(message.coinB, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOpenChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.partA = reader.string();
          break;
        case 3:
          message.partB = reader.string();
          break;
        case 4:
          message.coinA = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.coinB = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenChannel {
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.partA !== undefined && object.partA !== null) {
      message.partA = String(object.partA);
    } else {
      message.partA = "";
    }
    if (object.partB !== undefined && object.partB !== null) {
      message.partB = String(object.partB);
    } else {
      message.partB = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromJSON(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromJSON(object.coinB);
    } else {
      message.coinB = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgOpenChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.partA !== undefined && (obj.partA = message.partA);
    message.partB !== undefined && (obj.partB = message.partB);
    message.coinA !== undefined &&
      (obj.coinA = message.coinA ? Coin.toJSON(message.coinA) : undefined);
    message.coinB !== undefined &&
      (obj.coinB = message.coinB ? Coin.toJSON(message.coinB) : undefined);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgOpenChannel>): MsgOpenChannel {
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.partA !== undefined && object.partA !== null) {
      message.partA = object.partA;
    } else {
      message.partA = "";
    }
    if (object.partB !== undefined && object.partB !== null) {
      message.partB = object.partB;
    } else {
      message.partB = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromPartial(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromPartial(object.coinB);
    } else {
      message.coinB = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgOpenChannelResponse: object = {};

export const MsgOpenChannelResponse = {
  encode(_: MsgOpenChannelResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOpenChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgOpenChannelResponse {
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    return message;
  },

  toJSON(_: MsgOpenChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgOpenChannelResponse>): MsgOpenChannelResponse {
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateHalfcommit(
    request: MsgCreateHalfcommit
  ): Promise<MsgCreateHalfcommitResponse>;
  WithdrawTimelock(
    request: MsgWithdrawTimelock
  ): Promise<MsgWithdrawTimelockResponse>;
  WithdrawHashlock(
    request: MsgWithdrawHashlock
  ): Promise<MsgWithdrawHashlockResponse>;
  CloseChannel(request: MsgCloseChannel): Promise<MsgCloseChannelResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  OpenChannel(request: MsgOpenChannel): Promise<MsgOpenChannelResponse>;
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

  WithdrawTimelock(
    request: MsgWithdrawTimelock
  ): Promise<MsgWithdrawTimelockResponse> {
    const data = MsgWithdrawTimelock.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Msg",
      "WithdrawTimelock",
      data
    );
    return promise.then((data) =>
      MsgWithdrawTimelockResponse.decode(new Reader(data))
    );
  }

  WithdrawHashlock(
    request: MsgWithdrawHashlock
  ): Promise<MsgWithdrawHashlockResponse> {
    const data = MsgWithdrawHashlock.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Msg",
      "WithdrawHashlock",
      data
    );
    return promise.then((data) =>
      MsgWithdrawHashlockResponse.decode(new Reader(data))
    );
  }

  CloseChannel(request: MsgCloseChannel): Promise<MsgCloseChannelResponse> {
    const data = MsgCloseChannel.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Msg",
      "CloseChannel",
      data
    );
    return promise.then((data) =>
      MsgCloseChannelResponse.decode(new Reader(data))
    );
  }

  OpenChannel(request: MsgOpenChannel): Promise<MsgOpenChannelResponse> {
    const data = MsgOpenChannel.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Msg",
      "OpenChannel",
      data
    );
    return promise.then((data) =>
      MsgOpenChannelResponse.decode(new Reader(data))
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
