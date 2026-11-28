// 1. Массив данных каталога
const catalog = [
    {
    position: 1,
    name: "телефон",
    specs: "белый , большой",
    description: "для затяжный разговоров"
    },
    {
    position: 2,
    name: "кнопочный телефон",
    specs: "Серый, неубиваемый",
    description: "Компактная орехоколка "
    },
    {
    position: 3,
    name: "смартфон",
    specs: "Голубой , стильный",
    description: "Для весёлого время провождения"
    }
];

// 2. Функция фильтрации по названию (из пары 22)
function filterByText(items, query) {
    const normalized = query.trim().toLowerCase();
    if (normalized === "") {
        return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// 3. Поиск элементов на странице
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

// 4. Функция отрисовки карточек и обновления счётчика
function renderCatalog(items) {
    catalogList.replaceChildren();

    for (const item of items) {
        const card = document.createElement("article");
        card.className = "card";

        const title = document.createElement("h2");
        title.textContent = item.name;

        const specs = document.createElement("p");
        specs.textContent = item.specs;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(title, specs, description);
        catalogList.append(card);
    }

    if (items.length === 0) {
        statusText.textContent = "Ничего не найдено";
    } else {
        statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
    }
}

// 5. Первичный вывод всех карточек при открытии страницы
renderCatalog(catalog);

// 6. Связь поля поиска с фильтром
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
    const found = filterByText(catalog, searchInput.value);
    renderCatalog(found);
});
