package main

import (
	"fmt"
	storage "hw1/internal/pkg"
)

func main() {
	s := storage.Storage{
		Inner: make(map[string]any),
	}

	s.Set("one", "first")
	fmt.Println(s)

	k := s.Get("one")
	fmt.Println(k)
}
