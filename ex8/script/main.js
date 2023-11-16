document.addEventListener("DOMContentLoaded", function () {
    window.location.href= '#';

    var Modal = new bootstrap.Modal(document.getElementById('Modal'))
    const form = document.getElementById('form');
    const open = document.getElementById('btn-open');
    const close = document.getElementById('btn-close');
    const x = document.getElementById('btn-x');

    close.addEventListener("click", function(event) { 
        history.back();
    });

    x.addEventListener("click", function(event) {
        history.back();
    });

    open.addEventListener("click", function(event) { 
        history.pushState({ page: "popup" }, "Форма", "#popup"); 
    });

    form.addEventListener("submit", function (event) {
        const form_inf = {
            name: document.getElementById("InputName").value,
            email: document.getElementById("InputEmail").value,
            phone: document.getElementById("InputTel").value,
            organization: document.getElementById("InputOrg").value,
            message: document.getElementById("InputMessage").value,
            agree: document.getElementById("Check").checked,
        };
        
        var slapform = new Slapform();
        event.preventDefault();
        slapform.submit({
            form: '4BGY8YmjYI', 
            data: form_inf,
        })
        .then(function (response) { // This function runs only on success
            console.log('Success!', response);
            alert("Регистрация успешна!");
        })
        .catch(function (response) { // This function runs only on error
            console.log('Fail!', response);
        })
        .finally(function () { // This function runs regardless of success or error
            console.log('This always runs!');
        });

        localStorage.setItem("form_inf", JSON.stringify(form_inf));
        setTimeout(function () {
            history.back();
            Modal.hide();
            form.reset();
            localStorage.removeItem("form_inf");
        }, 1000);
    });
});