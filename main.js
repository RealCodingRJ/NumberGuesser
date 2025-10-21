function App() {
    var button = document.getElementById("button");
    button.addEventListener("click", function () {
        var guess = Math.floor(Math.random() * 5);
        var input = document.getElementById("input");
        var value = parseInt(input.value);
        if (value === guess) {
            input.style.backgroundColor = "green";
            getDocument("demo", "The Number: " + value + " is Correct");
        }
        else {
            input.style.backgroundColor = "red";
            getDocument("demo", "The Number: " + value + " is Not Correct");
            getDocument("demo", "The Number: " + guess.toString() + " Was The Guess");
        }
    });
}
App();
function getDocument(doc, text) {
    var textContent = document.getElementById(doc);
    textContent.textContent = text;
}
