let form = document.getElementById("form");
let msg = document.getElementById("msg");

form.addEventListener("submit",function(event) {
    event.preventDefault();
    msg.textContent = "Form submitted successfully!";
});
