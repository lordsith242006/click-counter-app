const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counterController');

// GET /api/counter        — все счётчики
router.get('/', counterController.getAllCounters);

// GET /api/counter/:id    — один счётчик (req.params)
router.get('/:id', counterController.getCounterById);

// POST /api/counter       — создать счётчик (req.body)
router.post('/', counterController.createCounter);

// PUT /api/counter/:id/click?step=2  — клик по счётчику (req.params + req.query)
router.put('/:id/click', counterController.incrementCounter);

// DELETE /api/counter/:id — удалить счётчик
router.delete('/:id', counterController.deleteCounter);

module.exports = router;
