package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"halfcommit/x/halfcommit/types"
)

var _ = strconv.Itoa(0)

func CmdCreateHalfcommit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-halfcommit [from] [to-timelock] [blockheight] [to-hashlock] [hashcode] [coin]",
		Short: "Broadcast message create-halfcommit",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argToTimelock := args[1]
			//argBlockheight := args[2]
			argToHashlock := args[3]
			argHashcode := args[4]
			//argCoin := args[5]

			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			argBlockheight, err := strconv.Atoi(args[2])
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[5])
			if err != nil {
				return err
			}
			coin, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgCreateHalfcommit(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argToTimelock,
				uint64(argBlockheight),
				argToHashlock,
				argHashcode,
				&coin,
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
