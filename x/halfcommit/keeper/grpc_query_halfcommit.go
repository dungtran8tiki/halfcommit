package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"halfcommit/x/halfcommit/types"
)

func (k Keeper) HalfcommitAll(c context.Context, req *types.QueryAllHalfcommitRequest) (*types.QueryAllHalfcommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var halfcommits []types.Halfcommit
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	halfcommitStore := prefix.NewStore(store, types.KeyPrefix(types.HalfcommitKeyPrefix))

	pageRes, err := query.Paginate(halfcommitStore, req.Pagination, func(key []byte, value []byte) error {
		var halfcommit types.Halfcommit
		if err := k.cdc.Unmarshal(value, &halfcommit); err != nil {
			return err
		}

		halfcommits = append(halfcommits, halfcommit)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHalfcommitResponse{Halfcommit: halfcommits, Pagination: pageRes}, nil
}

func (k Keeper) Halfcommit(c context.Context, req *types.QueryGetHalfcommitRequest) (*types.QueryGetHalfcommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHalfcommit(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHalfcommitResponse{Halfcommit: val}, nil
}
