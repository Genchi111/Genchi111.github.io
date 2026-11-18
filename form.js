// ============================================================
// 1. КОНСТАНТЫ И ФУНКЦИЯ РАСЧЁТА (из пары 20)
// ============================================================
const unitValue = 500;   // Величина на единицу
const extraValue = 150;  // Общая добавка

function getResult(quantityText, unitValue, extraValue) {
    const trimmed = quantityText.trim();

    if (trimmed === "") {
        return "Укажите количество";
    }

    const quantity = Number(trimmed);

    if (Number.isNaN(quantity)) {
        return "Введите число";
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        return "Нужно положительное целое количество";
    }

    const total = quantity * unitValue + extraValue;
    return "Итого: " + total;
}

// ============================================================
// 2. ОБРАБОТКА ФОРМЫ И ВЫВОД РЕЗУЛЬТАТА
// ============================================================
const form = document.querySelector("form");
const result = document.querySelector("#result");

if (form && result) {
    form.addEventListener("submit", function (event) {
        // Отменяем стандартную отправку и перезагрузку страницы
        event.preventDefault();

        // Получаем введённое количество
        const quantityInput = document.querySelector("#quantity");
        const quantityText = quantityInput ? quantityInput.value : "";

        // Получаем название выбранной позиции из списка
        const select = document.querySelector("#item");
        // Вычисляем результат или текст ошибки
        const message = getResult(quantityText, unitValue, extraValue);

        // Выводим итог в абзац #result
        result.textContent = message;
    });
}
