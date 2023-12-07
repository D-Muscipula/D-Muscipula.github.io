var courses = new Accumulator(0);

function addItem() {
    courses.read();
}

function getTotal() {
    if (courses.value > 0)
    {alert(`Спасибо за поддержку! Вы отправили нам ${courses.value}₽`);}
    courses.value = 0;
    document.getElementById('totalValue').textContent = courses.value;
}

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        const userInput = parseFloat(prompt("Добавить", 0));

        if (!isNaN(userInput)) {
            this.value += userInput;
            if (this.value < 0) {
                this.value = 0;
            }
            document.getElementById('totalValue').textContent = courses.value;
        } else {
            alert("Некорректное значение");
        }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelectorAll('.content p');
    box.forEach((element) => {
        element.textContent = truncate(element.textContent, 57);
    });
});

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '…';
    } else {
        return str;
    }
}