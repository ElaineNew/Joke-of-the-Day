

const btn = document.querySelector("#joke_btn");
const textField = document.querySelector(".text");
const authorField = document.querySelector(".author");
btn.addEventListener("click", ()=>{
    fetch("https://icanhazdadjoke.com/",{
        headers: {
                'Accept': 'application/json',
            }
        })
    .then(response => {
        return response.json();
    })
    .then(data=>{
        console.log(data);
        textField.textContent = data.joke;
    })
    .catch(error=>{
        console.error(error);
    })


})