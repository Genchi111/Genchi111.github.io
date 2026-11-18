
function CheckQuntityText(quantityText){
    let CheckText = quantityText.trim();

    if (CheckText === "") {
        console.log("Введите положительное число")
        return false;
    }
    
    if (CheckText.includes(".")){
        console.log("Ошибка: нужно положительное целое количество");
        return false;
    }

    if (CheckText.includes("-")){
        console.log("Ошибка: нужно положительное целое количество");
        return false;
    }

    if (isNaN(CheckText)){
        console.log("Ошибка: введите число");
        return false;
    }

    let checkNum = Number(CheckText);

    if (checkNum < 1) {
        console.log("Введите положительное число")
        return false;
    }
    return true;
}



function main() {
    let quantityText;
    let unitValue;
    let extraValue;
    do {
        quantityText = prompt("Количество растений: ");
    } while (!CheckQuntityText(quantityText));
    console.log("литров грунта на одно растение: ");
    unitValue = prompt("литров грунта на одно растение: ");
    console.log("литров общего запаса грунта: ");
    extraValue = parseInt(prompt("литров общего запаса грунта: "));
    console.log("Итого: ", quantityText * unitValue + extraValue);

}

main();