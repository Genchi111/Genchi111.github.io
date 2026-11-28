let catalog1 = {
    position: 1,
    name: "телефон",
    specs: "белый , большой",
    description: "для затяжный разговоров"
};

// Таблица 2
let catalog2 = {
    position: 2,
    name: "кнопочный телефон",
    specs: "Серый, неубиваемый",
    description: "Компактная орехоколка "
};

// Таблица 3
let catalog3 = {
    position: 3,
    name: "смартфон",
    specs: "Голубой , стильный",
    description: "Для весёлого время провождения"
};

const catalog = [catalog1, catalog2, catalog3];



//console.table(catalog1);

//console.log(catalog1.name.length);

//console.log([catalog1].map(item => item.name));

//console.log([catalog1].filter(item => item.name.length > 5));

//const selectedName = "фикус";
//const found = [catalog1].find(item => item.name === selectedName)?.name;
//console.log(found);

// 1. Вывод числа записей и первого названия в абзац #status
const status = document.querySelector("#status");
if (status) {
    const first = catalog[0].name;
    status.textContent = first + " — " + catalog.length + " записей";
}

// 2. Функция создания списка названий
const namesList = document.querySelector("#names");
function renderNames() {
    namesList.replaceChildren(); // Очищаем список перед выводом
    for (const item of catalog) {
        const line = document.createElement("li");
        line.textContent = item.name;
        namesList.append(line);
    }
}

// 3. Обработчик нажатия на кнопку
const showButton = document.querySelector("#show-names");
if (showButton) {
    showButton.addEventListener("click", renderNames);
}


