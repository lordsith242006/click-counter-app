const counterIdInput = document.getElementById('counterId');
const valueSpan = document.getElementById('value');
const loadBtn = document.getElementById('loadBtn');
const clickBtn = document.getElementById('clickBtn');
const click2Btn = document.getElementById('click2Btn');
const newIdInput = document.getElementById('newId');
const newInitialInput = document.getElementById('newInitial');
const createBtn = document.getElementById('createBtn');
const logDiv = document.getElementById('log');

function log(message) {
  const p = document.createElement('p');
  p.textContent = message;
  logDiv.prepend(p);
}

async function loadCounter() {
  const id = counterIdInput.value.trim();
  if (!id) return;

  const res = await fetch(`/api/counter/${id}`);
  if (!res.ok) {
    valueSpan.textContent = '-';
    log(`Ошибка загрузки: ${res.status}`);
    return;
  }
  const data = await res.json();
  valueSpan.textContent = data.value;
  log(`Загружен счётчик "${id}" = ${data.value}`);
}

async function click(step = 1) {
  const id = counterIdInput.value.trim();
  if (!id) return;

  const res = await fetch(`/api/counter/${id}/click?step=${step}`, {
    method: 'PUT'
  });
  if (!res.ok) {
    log(`Ошибка клика: ${res.status}`);
    return;
  }
  const data = await res.json();
  valueSpan.textContent = data.value;
  log(`Клик по "${id}" шаг ${step} → ${data.value}`);
}

async function createCounter() {
  const id = newIdInput.value.trim();
  const initialValue = newInitialInput.value;

  if (!id) {
    return log('Введите id счётчика');
  }

  const res = await fetch('/api/counter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, initialValue })
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    log(`Ошибка создания: ${data.error || res.status}`);
    return;
  }

  log(`Создан счётчик "${id}" = ${data.value}`);
}

loadBtn.addEventListener('click', loadCounter);
clickBtn.addEventListener('click', () => click(1));
click2Btn.addEventListener('click', () => click(2));
createBtn.addEventListener('click', createCounter);

loadCounter();
