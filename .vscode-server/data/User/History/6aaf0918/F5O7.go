package main

import (
	"fmt"
	storage "hw1/internal/pkg"
)

func main() {
	s := storage.Storage{
		Inner: map[string]any{},
	}

	s.Set("one", "first")
	s.Set("two", "second")
	fmt.Println(s)

	v := s.Get("one")
	fmt.Println(v)

	t := s.GetKind("two")
	fmt.Println(t)
}
