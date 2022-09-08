package halfcommit_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "halfcommit/testutil/keeper"
	"halfcommit/testutil/nullify"
	"halfcommit/x/halfcommit"
	"halfcommit/x/halfcommit/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HalfcommitKeeper(t)
	halfcommit.InitGenesis(ctx, *k, genesisState)
	got := halfcommit.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
