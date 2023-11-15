var slapform = new Slapform();
const form = document.getElementById('form');

const form_inf = {
    name: document.getElementById("InputName").value,
    email: document.getElementById("InputEmail").value,
    phone: document.getElementById("InputTel").value,
    organization: document.getElementById("InputOrg").value,
    message: document.getElementById("InputMessage").value,
    agree: document.getElementById("Check").checked,
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    slapform.submit({
        form: '4BGY8YmjYI', 
        data: form_inf
    })
    .then(function (response) { // This function runs only on success
        console.log('Success!', response);
    })
    .catch(function (response) { // This function runs only on error
        console.log('Fail!', response);
    })
    .finally(function () { // This function runs regardless of success or error
        console.log('This always runs!');
    });

    localStorage.setItem("form_inf", JSON.stringify(form_inf)); //
});