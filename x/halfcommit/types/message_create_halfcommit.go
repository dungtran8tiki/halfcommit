package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateHalfcommit = "create_halfcommit"

var _ sdk.Msg = &MsgCreateHalfcommit{}

func NewMsgCreateHalfcommit(creator string, from string, toTimelock string, blockheight uint64, toHashlock string, hashcode string, coin *sdk.Coin) *MsgCreateHalfcommit {
	return &MsgCreateHalfcommit{
		Creator:     creator,
		From:        from,
		ToTimelock:  toTimelock,
		Blockheight: blockheight,
		ToHashlock:  toHashlock,
		Hashcode:    hashcode,
		Coin:        coin,
	}
}

func (msg *MsgCreateHalfcommit) Route() string {
	return RouterKey
}

func (msg *MsgCreateHalfcommit) Type() string {
	return TypeMsgCreateHalfcommit
}

func (msg *MsgCreateHalfcommit) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateHalfcommit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateHalfcommit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
