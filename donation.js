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




function showLoading(direction) {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('fixed', 'left-0', 'w-full', 'h-full', 'bg-opacity-75', 'bg-gray-500', 'flex', 'items-center', 'justify-center', 'z-50', 'text-gray-500');
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin fa-3x"></i>';
    loadingIndicator.style.top = '25vh';
    document.body.appendChild(loadingIndicator);

    setTimeout(() => {
        loadingIndicator.remove();
        
    }, 3000);
}