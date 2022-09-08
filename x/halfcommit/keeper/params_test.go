package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "halfcommit/testutil/keeper"
	"halfcommit/x/halfcommit/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HalfcommitKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
