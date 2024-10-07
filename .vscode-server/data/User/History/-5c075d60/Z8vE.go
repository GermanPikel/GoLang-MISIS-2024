package storage

import (
	"strconv"

	"go.uber.org/zap"
)

type Storage struct {
	Inner map[string]any
	// logger *zap.Logger
}

func (s *Storage) Set(key, value string) {
	logger, _ := zap.NewProduction()

	defer logger.Sync()

	s.Inner[key] = value
	logger.Info("The key " + key + " was setted ")

}

func (s Storage) Get(key string) any {
	logger, _ := zap.NewProduction()

	defer logger.Info("The key " + key + " has been taken")
	defer logger.Sync()

	return s.Inner[key]
}

/* func (s Storage) GetKind(key string) string {
	logger, _ := zap.NewProduction()

	defer logger.Info("Kind of key has been taken")
	defer logger.Sync()

	if reflect.TypeOf(s.Inner[key]) == reflect.TypeOf(int(0)) || reflect.TypeOf(s.Inner[key]) == reflect.TypeOf(3.14) {
		return "D"
	}
	return "S"
} */

func (s Storage) GetKind(key string) string {
	logger, _ := zap.NewProduction()

	defer logger.Info("Kind of key has been taken")
	defer logger.Sync()

	if _, err := strconv.Atoi(key); err == nil {
		return "D"
	} else if _, err := strconv.ParseFloat("2.78", 64); err == nil {
		return "jh"
	} else {
		return "S"
	}
}
