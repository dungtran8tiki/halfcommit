package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"halfcommit/x/halfcommit/types"
)

var _ = strconv.Itoa(0)

func CmdCloseChannel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "close-channel [from] [to-a] [coin-a] [to-b] [coin-b]",
		Short: "Broadcast message close-channel",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argToA := args[1]
			//argCoinA := args[2]
			argToB := args[3]
			//argCoinB := args[4]
			_, err = sdk.AccAddressFromBech32(argFrom)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid from address (%s)", err)
			}

			_, err = sdk.AccAddressFromBech32(argToA)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid toA address (%s)", err)
			}

			_, err = sdk.AccAddressFromBech32(argToB)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid toB address (%s)", err)
			}

			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[2])
			if err != nil {
				return err
			}
			coinA, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[4])
			if err != nil {
				return err
			}
			coinB, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgCloseChannel(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argToA,
				&coinA,
				argToB,
				&coinB,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
