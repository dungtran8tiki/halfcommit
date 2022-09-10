package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgOpenChannel = "open_channel"

var _ sdk.Msg = &MsgOpenChannel{}

func NewMsgOpenChannel(creator string, partA string, partB string, coinA *sdk.Coin, coinB *sdk.Coin, name string) *MsgOpenChannel {
	return &MsgOpenChannel{
		Creator: creator,
		PartA:   partA,
		PartB:   partB,
		CoinA:   coinA,
		CoinB:   coinB,
		Name:    name,
	}
}

func (msg *MsgOpenChannel) Route() string {
	return RouterKey
}

func (msg *MsgOpenChannel) Type() string {
	return TypeMsgOpenChannel
}

func (msg *MsgOpenChannel) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgOpenChannel) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgOpenChannel) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
