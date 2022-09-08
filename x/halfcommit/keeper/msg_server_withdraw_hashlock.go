package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"halfcommit/x/halfcommit/types"
)

func (k msgServer) WithdrawHashlock(goCtx context.Context, msg *types.MsgWithdrawHashlock) (*types.MsgWithdrawHashlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	val, found := k.Keeper.GetHalfcommit(ctx, msg.Index)
	if !found {
		return nil, errors.New("time lock is not existing")
	}

	if val.ToHashlock != msg.To {
		return nil, errors.New("not matching receiver address!")
	}

	hash := sha256.Sum256([]byte(msg.Secret))
	if val.Hashcode != base64.StdEncoding.EncodeToString(hash[:]) {
		return nil, errors.New("Wrong hash !")
	}

	to, err := sdk.AccAddressFromBech32(msg.To)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, to, sdk.Coins{*val.Amount})
	if err != nil {
		return nil, err
	}

	k.Keeper.RemoveHalfcommit(ctx, msg.Index)

	return &types.MsgWithdrawHashlockResponse{}, nil
}
