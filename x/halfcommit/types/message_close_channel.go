package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCloseChannel = "close_channel"

var _ sdk.Msg = &MsgCloseChannel{}

func NewMsgCloseChannel(creator string, from string, toA string, coinA *sdk.Coin, toB string, coinB *sdk.Coin) *MsgCloseChannel {
	return &MsgCloseChannel{
		Creator: creator,
		From:    from,
		ToA:     toA,
		CoinA:   coinA,
		ToB:     toB,
		CoinB:   coinB,
	}
}

func (msg *MsgCloseChannel) Route() string {
	return RouterKey
}

func (msg *MsgCloseChannel) Type() string {
	return TypeMsgCloseChannel
}

func (msg *MsgCloseChannel) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCloseChannel) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCloseChannel) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
