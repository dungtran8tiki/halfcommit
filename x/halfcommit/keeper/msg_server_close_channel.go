package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"halfcommit/x/halfcommit/types"
)

var _ types.MsgServer = msgServer{}

func (k msgServer) CloseChannel(goCtx context.Context, msg *types.MsgCloseChannel) (*types.MsgCloseChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message

	if err := k.bankKeeper.IsSendEnabledCoins(ctx, *msg.CoinA); err != nil {
		return nil, err
	}

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}
	toA, err := sdk.AccAddressFromBech32(msg.ToA)
	if err != nil {
		return nil, err
	}
	toB, err := sdk.AccAddressFromBech32(msg.ToB)
	if err != nil {
		return nil, err
	}

	if k.bankKeeper.BlockedAddr(toA) {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "%s is not allowed to receive funds", msg.ToA)
	}
	if k.bankKeeper.BlockedAddr(toB) {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "%s is not allowed to receive funds", msg.ToB)
	}

	err = k.bankKeeper.SendCoins(ctx, from, toA, sdk.Coins{*msg.CoinA})
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.SendCoins(ctx, from, toB, sdk.Coins{*msg.CoinB})
	if err != nil {
		return nil, err
	}

	//Telemtrics and event is temporary commetns
	/*defer func() {
		for _, a := range msg.CoinA {
			if a.CoinA.IsInt64() {
				telemetry.SetGaugeWithLabels(
					[]string{"tx", "msg", "send"},
					float32(a.CoinA.Int64()),
					[]metrics.Label{telemetry.NewLabel("denom", a.Denom)},
				)
			}
		}
	}()

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
		),
	)
	*/
	return &types.MsgCloseChannelResponse{}, nil
}
