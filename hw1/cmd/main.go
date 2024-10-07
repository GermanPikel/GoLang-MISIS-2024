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
	s.Set("two", "2")
	s.Set("pi", "3.1415")
	fmt.Println(s.Inner)

	v := s.Get("one")
	fmt.Println(v)

	t := s.GetKind("one") // Этот метод имеет два варианта реализации. Смотреть в storage.go
	fmt.Println(t)
}
