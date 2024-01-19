let word = document.getElementById("word");
let meaning = document.getElementById("meaning");

let getMeaning = () =>{
    meaning.classList.remove('fade');
    let wordValue = word.value;
    let baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`;
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
    let meaningOfWord = data[0]['meanings'][0]['definitions'][0]['definition'];
    meaning.textContent = meaningOfWord;
    meaning.classList.add('fade');
})

}

let meaningButton = document.getElementById("search-btn");

meaningButton.addEventListener("click" , getMeaning);
