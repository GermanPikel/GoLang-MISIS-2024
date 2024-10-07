package main

import "fmt"

type Value struct {
	s string
	d int
	a any
	b bool
}

type Storage struct {
	innerString map[string]Value
}

func main() {
	val1 := Value{"GoGo", 73, 32, true}
	m := make(map[string]Value)
	m["key1"] = val1
	s1 := Storage{m}
	fmt.Println(s1.innerString["key1"])
}
