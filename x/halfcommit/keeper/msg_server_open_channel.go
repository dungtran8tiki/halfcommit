package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"halfcommit/x/halfcommit/types"
)

func (k msgServer) OpenChannel(goCtx context.Context, msg *types.MsgOpenChannel) (*types.MsgOpenChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	addreesB, err := sdk.AccAddressFromBech32(msg.PartB)
	if err != nil {
		return nil, err
	}

	//accB := k.ak.GetAccount(ctx, addreesB)
	//if accB == nil {
	//	return nil, fmt.Errorf("test B")
	//}

	addreesA, err := sdk.AccAddressFromBech32(msg.PartA)
	if err != nil {
		return nil, err
	}
	//accA := k.ak.GetAccount(ctx, addreesA)
	//if accA == nil {
	//	return nil, fmt.Errorf("test A")
	//}

	multiAddr := msg.GetSigners()[0]

	k.bankKeeper.SendCoins(ctx, addreesA, multiAddr, sdk.Coins{*msg.CoinA})
	k.bankKeeper.SendCoins(ctx, addreesB, multiAddr, sdk.Coins{*msg.CoinB})

	return &types.MsgOpenChannelResponse{}, nil
}
