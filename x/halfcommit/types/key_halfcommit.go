package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HalfcommitKeyPrefix is the prefix to retrieve all Halfcommit
	HalfcommitKeyPrefix = "Halfcommit/value/"
)

// HalfcommitKey returns the store key to retrieve a Halfcommit from the index fields
func HalfcommitKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
