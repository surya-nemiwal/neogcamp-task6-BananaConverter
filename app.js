var textarea = document.querySelector("#textarea");
var translateBtn = document.querySelector("#translateBtn");
var outputArea = document.querySelector(".output");
// outputArea.innerHTML = "hello world"
function convertToBanana() {
    // console.log(textarea.value)
    fetch(`https://api.funtranslations.com/translate/minion.json?text=${textarea.value}`)
    .then((response) => response.json())
    .then(data => {outputArea.innerHTML= data.contents.translated;
    console.log(data.contents.translated)});
    

}
translateBtn.addEventListener("click", convertToBanana);
// console.log(textarea.value);
