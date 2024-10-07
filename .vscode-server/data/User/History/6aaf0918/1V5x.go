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
	val1 := Value{s = "GoGo"}
	fmt.Println(val1)
}
