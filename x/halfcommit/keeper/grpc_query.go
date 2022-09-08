package keeper

import (
	"halfcommit/x/halfcommit/types"
)

var _ types.QueryServer = Keeper{}
