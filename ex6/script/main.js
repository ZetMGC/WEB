const form = document.getElementById('form');
const radio = document.getElementById('radio');
const HDD = document.getElementById('HDD');
const CPU = document.getElementById('CPU');
const SSD = document.getElementById('SSD');

FormChangeHandler();

form.addEventListener('change', getFormValue);
radio.addEventListener('change', FormChangeHandler);

function FormChangeHandler(event) {
    if (HDD.checked) {
        document.getElementById('Select').hidden = true;
        document.getElementById('checkbox').hidden = true;
    } else if (CPU.checked) {
        document.getElementById('Select').hidden = false;
        document.getElementById('checkbox').hidden = true;
    } else if (SSD.checked) {
        document.getElementById('Select').hidden = true;
        document.getElementById('checkbox').hidden = false;
    }
};

function getFormValue(event) {
    event.preventDefault();
    const Number = form.querySelector('[name ="number"]');
    const ProductType = form.querySelector('[name ="productType"]');
    const Result = form.querySelector('[name ="result"]');
    const CheckBox = form.querySelector('[name ="checkbox"]');
    
    if (HDD.checked) {
        Result.value = (Number.value * 30) + "$";
    } else if (CPU.checked) {
        if (ProductType.value === 'new') Result.value = (500 * Number.value * 1.5) + "$";
        else if (ProductType.value === 'used') Result.value = (500 * Number.value * 0.9) + "$";
        else if (ProductType.value === 'showcase') Result.value = (500 * Number.value * 1.2) + "$";
        else Result.value = 'Выберите тип';
    } else if (SSD.checked) {
        if (CheckBox.checked) Result.value = (Number.value * 80 + 20) + "$";
        else Result.value = (Number.value * 80) + "$";
    }
};
