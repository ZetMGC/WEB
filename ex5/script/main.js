const Prices = [100, 43, 544, 12];

const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);

function getFormValue(event) {
    event.preventDefault();
    const Number = form.querySelector('[name ="number"]');
    const Product = form.querySelector('[name ="product"]');
    const Result = form.querySelector('[name ="result"]');
    
    var CurrentCost;
    if (Product.value === 'SSD') CurrentCost = Prices[0];
    else if (Product.value === 'HDD') CurrentCost = Prices[1];
    else if (Product.value === 'CPU') CurrentCost = Prices[2];
    else if (Product.value === 'RAM') CurrentCost = Prices[3];
    else alert("Вы не выбрали продукт");

    Result.value =(Number.value * CurrentCost) + "$";
};
