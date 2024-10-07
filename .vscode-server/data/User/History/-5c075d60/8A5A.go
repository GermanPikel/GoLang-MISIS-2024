package storage

type Storage struct {
	inner map[string]any
}

func (s *Storage) Set(key, value string) {
	s.inner[key] = value
}

func (s Storage) Get(key string) any {
	return s.inner[key]
}
