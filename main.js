"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
function App() {
    var button = document.getElementById("button");
    button.addEventListener("click", function () {
        var guess = Math.floor(Math.random() * 5);
        var input = document.getElementById("input");
        var value = parseInt(input.value);
        if (value === guess) {
            input.style.backgroundColor = "green";
            getDocument("demo", "The Number: " + value + " is Correct");
            (0, db_1.AppsClient)("The Number: " + value + " is Correct").then(function (e) {
                return console.log(e);
            });
        }
        else {
            input.style.backgroundColor = "red";
            getDocument("demo", "The Number: " + value + " is Not Correct");
            getDocument("demo", "The Number: " + guess.toString() + " Was The Guess");
            (0, db_1.AppsClient)("The Number: " + guess.toString() + " Was The Guess").then(function (e) { return console.log(e); });
        }
    });
}
App();
function getDocument(doc, text) {
    var textContent = document.getElementById(doc);
    textContent.textContent = text;
}
function AppClient() {
    throw new Error("Function not implemented.");
}
