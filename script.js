const btn = document.querySelector("[data-form-btn]");


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

console.log(btn);

//Arrow function
btn.addEventListener("click", createTask);
//Listener


