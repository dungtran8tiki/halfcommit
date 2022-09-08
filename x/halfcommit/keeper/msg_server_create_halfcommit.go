package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"halfcommit/x/halfcommit/types"
)

func (k msgServer) CreateHalfcommit(goCtx context.Context, msg *types.MsgCreateHalfcommit) (*types.MsgCreateHalfcommitResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	msg.GetSigners()
	msg.GetSignBytes()

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{
		sdk.Coin{
			Denom:  msg.Coin.Denom,
			Amount: msg.Coin.Amount,
		},
	})
	if err != nil {
		return nil, err
	}

	indexStr := fmt.Sprintf("%s:%s:%s:%d:%d", msg.From, msg.Hashcode, msg.Coin.Denom, msg.Coin.Amount.Int64(), ctx.BlockHeight())

	//unlockBlock := msg.Blockheight + uint64(ctx.BlockHeight())

	//timeLock := types.Timelock{
	//	Index:       indexStr,
	//	From:        msg.Sender,
	//	To:          msg.Receiver,
	//	Amount:      msg.Amount,
	//	BlockHeight: unlockBlock,
	//}
	//k.Keeper.SetTimelock(ctx, timeLock)

	if err != nil {
		return nil, err
	}
	return &types.MsgCreateHalfcommitResponse{
		Index: indexStr,
	}, nil

}
