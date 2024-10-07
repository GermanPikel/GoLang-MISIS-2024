package storage

import (
	"reflect"

	"go.uber.org/zap"
)

type Storage struct {
	Inner  map[string]any
	logger *zap.Logger
}

func (s *Storage) Set(key, value string) {
	s.Inner[key] = value
	s.logger.Info("key set", zap.Any())
}

func (s Storage) Get(key string) any {
	return s.Inner[key]
}

func (s Storage) GetKind(key string) string {
	if reflect.TypeOf(s.Inner[key]) == reflect.TypeOf(int(0)) {
		return "D"
	}
	return "S"
}
