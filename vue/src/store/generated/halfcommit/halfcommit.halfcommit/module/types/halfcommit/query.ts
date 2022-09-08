/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../halfcommit/params";
import { Halfcommit } from "../halfcommit/halfcommit";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "halfcommit.halfcommit";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetHalfcommitRequest {
  index: string;
}

export interface QueryGetHalfcommitResponse {
  halfcommit: Halfcommit | undefined;
}

export interface QueryAllHalfcommitRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHalfcommitResponse {
  halfcommit: Halfcommit[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetHalfcommitRequest: object = { index: "" };

export const QueryGetHalfcommitRequest = {
  encode(
    message: QueryGetHalfcommitRequest,
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
  ): QueryGetHalfcommitRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHalfcommitRequest,
    } as QueryGetHalfcommitRequest;
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

  fromJSON(object: any): QueryGetHalfcommitRequest {
    const message = {
      ...baseQueryGetHalfcommitRequest,
    } as QueryGetHalfcommitRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetHalfcommitRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHalfcommitRequest>
  ): QueryGetHalfcommitRequest {
    const message = {
      ...baseQueryGetHalfcommitRequest,
    } as QueryGetHalfcommitRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetHalfcommitResponse: object = {};

export const QueryGetHalfcommitResponse = {
  encode(
    message: QueryGetHalfcommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.halfcommit !== undefined) {
      Halfcommit.encode(message.halfcommit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHalfcommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHalfcommitResponse,
    } as QueryGetHalfcommitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.halfcommit = Halfcommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHalfcommitResponse {
    const message = {
      ...baseQueryGetHalfcommitResponse,
    } as QueryGetHalfcommitResponse;
    if (object.halfcommit !== undefined && object.halfcommit !== null) {
      message.halfcommit = Halfcommit.fromJSON(object.halfcommit);
    } else {
      message.halfcommit = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHalfcommitResponse): unknown {
    const obj: any = {};
    message.halfcommit !== undefined &&
      (obj.halfcommit = message.halfcommit
        ? Halfcommit.toJSON(message.halfcommit)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHalfcommitResponse>
  ): QueryGetHalfcommitResponse {
    const message = {
      ...baseQueryGetHalfcommitResponse,
    } as QueryGetHalfcommitResponse;
    if (object.halfcommit !== undefined && object.halfcommit !== null) {
      message.halfcommit = Halfcommit.fromPartial(object.halfcommit);
    } else {
      message.halfcommit = undefined;
    }
    return message;
  },
};

const baseQueryAllHalfcommitRequest: object = {};

export const QueryAllHalfcommitRequest = {
  encode(
    message: QueryAllHalfcommitRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHalfcommitRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHalfcommitRequest,
    } as QueryAllHalfcommitRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHalfcommitRequest {
    const message = {
      ...baseQueryAllHalfcommitRequest,
    } as QueryAllHalfcommitRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHalfcommitRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHalfcommitRequest>
  ): QueryAllHalfcommitRequest {
    const message = {
      ...baseQueryAllHalfcommitRequest,
    } as QueryAllHalfcommitRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHalfcommitResponse: object = {};

export const QueryAllHalfcommitResponse = {
  encode(
    message: QueryAllHalfcommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.halfcommit) {
      Halfcommit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHalfcommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHalfcommitResponse,
    } as QueryAllHalfcommitResponse;
    message.halfcommit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.halfcommit.push(Halfcommit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHalfcommitResponse {
    const message = {
      ...baseQueryAllHalfcommitResponse,
    } as QueryAllHalfcommitResponse;
    message.halfcommit = [];
    if (object.halfcommit !== undefined && object.halfcommit !== null) {
      for (const e of object.halfcommit) {
        message.halfcommit.push(Halfcommit.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHalfcommitResponse): unknown {
    const obj: any = {};
    if (message.halfcommit) {
      obj.halfcommit = message.halfcommit.map((e) =>
        e ? Halfcommit.toJSON(e) : undefined
      );
    } else {
      obj.halfcommit = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHalfcommitResponse>
  ): QueryAllHalfcommitResponse {
    const message = {
      ...baseQueryAllHalfcommitResponse,
    } as QueryAllHalfcommitResponse;
    message.halfcommit = [];
    if (object.halfcommit !== undefined && object.halfcommit !== null) {
      for (const e of object.halfcommit) {
        message.halfcommit.push(Halfcommit.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Halfcommit by index. */
  Halfcommit(
    request: QueryGetHalfcommitRequest
  ): Promise<QueryGetHalfcommitResponse>;
  /** Queries a list of Halfcommit items. */
  HalfcommitAll(
    request: QueryAllHalfcommitRequest
  ): Promise<QueryAllHalfcommitResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Halfcommit(
    request: QueryGetHalfcommitRequest
  ): Promise<QueryGetHalfcommitResponse> {
    const data = QueryGetHalfcommitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Query",
      "Halfcommit",
      data
    );
    return promise.then((data) =>
      QueryGetHalfcommitResponse.decode(new Reader(data))
    );
  }

  HalfcommitAll(
    request: QueryAllHalfcommitRequest
  ): Promise<QueryAllHalfcommitResponse> {
    const data = QueryAllHalfcommitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "halfcommit.halfcommit.Query",
      "HalfcommitAll",
      data
    );
    return promise.then((data) =>
      QueryAllHalfcommitResponse.decode(new Reader(data))
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
