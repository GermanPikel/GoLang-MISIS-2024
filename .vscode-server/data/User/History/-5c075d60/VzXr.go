package storage

import (
	"reflect"

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

func (s Storage) GetKind(key string) string {
	logger, _ := zap.NewProduction()

	defer logger.Info("Kind of key has been taken")
	defer logger.Sync()

	if reflect.TypeOf(s.Inner[key]) == reflect.TypeOf(int(0)) || reflect.TypeOf(s.Inner[key]) == reflect.TypeOf(3.14) {
		return "D"
	}
	return "S"
}

/* Не особо понял, что требуется в ТЗ. Возвращать тип значения ключа(всегда будем возвращать S, т.к. в ф-ии Set() можно устанавливать
только значения типа string) или ответ на вопрос, лежит ли в значении ключа число или строка(не чистое число) (тут уже можно проверять).
func (s Storage) GetKind(key string) string {
	logger, _ := zap.NewProduction()

	defer logger.Info("Kind of key has been taken")
	defer logger.Sync()

	value := s.Inner[key]
	strValue := value.(string)

	if _, err := strconv.ParseFloat(strValue, 64); err == nil {
		return "D"
	} else {
		return "S"
	}
}
*/
