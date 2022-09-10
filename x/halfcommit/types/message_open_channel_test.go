package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"halfcommit/testutil/sample"
)

func TestMsgOpenChannel_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgOpenChannel
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgOpenChannel{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgOpenChannel{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
