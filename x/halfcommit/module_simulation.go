package halfcommit

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"halfcommit/testutil/sample"
	halfcommitsimulation "halfcommit/x/halfcommit/simulation"
	"halfcommit/x/halfcommit/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = halfcommitsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateHalfcommit = "op_weight_msg_create_halfcommit"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateHalfcommit int = 100

	opWeightMsgWithdrawTimelock = "op_weight_msg_withdraw_timelock"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawTimelock int = 100

	opWeightMsgWithdrawHashlock = "op_weight_msg_withdraw_hashlock"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawHashlock int = 100

	opWeightMsgCloseChannel = "op_weight_msg_close_channel"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCloseChannel int = 100

	opWeightMsgOpenChannel = "op_weight_msg_open_channel"
	// TODO: Determine the simulation weight value
	defaultWeightMsgOpenChannel int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	halfcommitGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&halfcommitGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateHalfcommit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateHalfcommit, &weightMsgCreateHalfcommit, nil,
		func(_ *rand.Rand) {
			weightMsgCreateHalfcommit = defaultWeightMsgCreateHalfcommit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateHalfcommit,
		halfcommitsimulation.SimulateMsgCreateHalfcommit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawTimelock int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawTimelock, &weightMsgWithdrawTimelock, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawTimelock = defaultWeightMsgWithdrawTimelock
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawTimelock,
		halfcommitsimulation.SimulateMsgWithdrawTimelock(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawHashlock int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawHashlock, &weightMsgWithdrawHashlock, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawHashlock = defaultWeightMsgWithdrawHashlock
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawHashlock,
		halfcommitsimulation.SimulateMsgWithdrawHashlock(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCloseChannel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCloseChannel, &weightMsgCloseChannel, nil,
		func(_ *rand.Rand) {
			weightMsgCloseChannel = defaultWeightMsgCloseChannel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCloseChannel,
		halfcommitsimulation.SimulateMsgCloseChannel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgOpenChannel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgOpenChannel, &weightMsgOpenChannel, nil,
		func(_ *rand.Rand) {
			weightMsgOpenChannel = defaultWeightMsgOpenChannel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgOpenChannel,
		halfcommitsimulation.SimulateMsgOpenChannel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
