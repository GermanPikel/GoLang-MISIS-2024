package storage

import (
	"reflect"

	"go.uber.org/zap"
)

type Storage struct {
	Inner  map[string]any
	logger *zap.SugaredLogger
}

func (s *Storage) Set(key, value string) {
	logger, _ := zap.NewProduction()
	s.Inner[key] = value
	logger.Info("The key " + key + " was setted ")
	defer logger.Sync()
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
