const form = document.querySelector(".form");
const input = document.querySelectorAll("input");
const responseText  = document.querySelector("#response-text");
const thankYouPage = document.querySelector("#components");
const mainPage = document.querySelector("#container")
let inputValue;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let i = 0; i < input.length; i++) {
        if(input[i].checked)
        {
            inputValue =  input[i].value;
        }
    }
    
    responseText.innerText = `You selected ${inputValue ? inputValue : 0} out of 5`;
    mainPage.classList.add("hide");
    thankYouPage.classList.remove("hide");
})

