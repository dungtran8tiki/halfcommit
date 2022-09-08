package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "halfcommit/testutil/keeper"
	"halfcommit/testutil/nullify"
	"halfcommit/x/halfcommit/keeper"
	"halfcommit/x/halfcommit/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNHalfcommit(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Halfcommit {
	items := make([]types.Halfcommit, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetHalfcommit(ctx, items[i])
	}
	return items
}

func TestHalfcommitGet(t *testing.T) {
	keeper, ctx := keepertest.HalfcommitKeeper(t)
	items := createNHalfcommit(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHalfcommit(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestHalfcommitRemove(t *testing.T) {
	keeper, ctx := keepertest.HalfcommitKeeper(t)
	items := createNHalfcommit(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHalfcommit(ctx,
			item.Index,
		)
		_, found := keeper.GetHalfcommit(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestHalfcommitGetAll(t *testing.T) {
	keeper, ctx := keepertest.HalfcommitKeeper(t)
	items := createNHalfcommit(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHalfcommit(ctx)),
	)
}
