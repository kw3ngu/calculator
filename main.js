let number = document.querySelectorAll(".number");

number.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        getNumber(e.target.textContent)
    })
})
function getNumber(num){
    console.log(num)
}
