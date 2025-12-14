# Click Counter App

Простое Express-приложение «Счётчик кликов».

## Запуск

1. Установить зависимости:

npm install

2. Запустить в dev-режиме:

npm run dev

Приложение будет доступно по адресу: http://localhost:3000

## API

| Метод | Эндпоинт                 | Описание                                      |
|-------|--------------------------|-----------------------------------------------|
| GET   | /api/counter             | Все счётчики                                  |
| GET   | /api/counter/:id         | Получить конкретный счётчик (req.params)     |
| POST  | /api/counter             | Создать счётчик (req.body, JSON/urlencoded)  |
| PUT   | /api/counter/:id/click   | Увеличить счётчик, step через req.query      |
| DELETE| /api/counter/:id         | Удалить счётчик по id                         |

Примеры:
- `PUT /api/counter/main/click` — увеличить `main` на 1  
- `PUT /api/counter/main/click?step=5` — увеличить `main` на 5  

## Скриншоты

![Интерфейс](screenshot-interface.png)

![API логи](screenshot-network.png)