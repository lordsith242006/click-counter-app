const express = require('express');
const path = require('path');
const requestLogger = require('./middleware/requestLogger');
const counterRoutes = require('./routes/counterRoutes');

const app = express();
const PORT = 3000;

// парсинг тела запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// собственный middleware
app.use(requestLogger);

// статика
app.use(express.static(path.join(__dirname, 'public')));

// API маршруты
app.use('/api/counter', counterRoutes);

// простой маршрут с query-параметром, чтобы показать req.query
app.get('/hello', (req, res) => {
  const name = req.query.name || 'Гость';
  res.send(`Привет, ${name}! Это пример query-параметра.`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
