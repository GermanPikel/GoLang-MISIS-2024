package storage

import (
	"reflect"
)

type Storage struct {
	inner map[string]any
}

func (s *Storage) Set(key, value string) {
	s.inner[key] = value
}

func (s Storage) Get(key string) any {
	return s.inner[key]
}

func (s Storage) GetKind(key string) string {
	if reflect.TypeOf(s.inner[key]) == reflect.TypeOf(int(0)) {
		return "D"
	}
	return "S"
}
