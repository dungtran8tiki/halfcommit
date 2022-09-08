package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"halfcommit/x/halfcommit/types"
)

// SetHalfcommit set a specific halfcommit in the store from its index
func (k Keeper) SetHalfcommit(ctx sdk.Context, halfcommit types.Halfcommit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HalfcommitKeyPrefix))
	b := k.cdc.MustMarshal(&halfcommit)
	store.Set(types.HalfcommitKey(
		halfcommit.Index,
	), b)
}

// GetHalfcommit returns a halfcommit from its index
func (k Keeper) GetHalfcommit(
	ctx sdk.Context,
	index string,

) (val types.Halfcommit, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HalfcommitKeyPrefix))

	b := store.Get(types.HalfcommitKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHalfcommit removes a halfcommit from the store
func (k Keeper) RemoveHalfcommit(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HalfcommitKeyPrefix))
	store.Delete(types.HalfcommitKey(
		index,
	))
}

// GetAllHalfcommit returns all halfcommit
func (k Keeper) GetAllHalfcommit(ctx sdk.Context) (list []types.Halfcommit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HalfcommitKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Halfcommit
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
