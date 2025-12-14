const counters = {
  main: 0
};

exports.getAllCounters = (req, res) => {
  res.json(counters);
};

exports.getCounterById = (req, res) => {
  const { id } = req.params;
  if (!(id in counters)) {
    return res.status(404).json({ error: 'Counter not found' });
  }
  res.json({ id, value: counters[id] });
};

exports.createCounter = (req, res) => {
  const { id, initialValue } = req.body; // пример работы с req.body (json/urlencoded)
  if (!id) {
    return res.status(400).json({ error: 'id is required' });
  }
  if (id in counters) {
    return res.status(400).json({ error: 'Counter already exists' });
  }
  counters[id] = Number(initialValue) || 0;
  res.status(201).json({ id, value: counters[id] });
};

exports.incrementCounter = (req, res) => {
  const { id } = req.params; // пример req.params
  const step = Number(req.query.step) || 1; // пример req.query
  if (!(id in counters)) {
    return res.status(404).json({ error: 'Counter not found' });
  }
  counters[id] += step;
  res.json({ id, value: counters[id] });
};

exports.deleteCounter = (req, res) => {
  const { id } = req.params;
  if (!(id in counters)) {
    return res.status(404).json({ error: 'Counter not found' });
  }
  delete counters[id];
  res.status(204).send();
};
