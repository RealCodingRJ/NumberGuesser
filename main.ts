import { AppsClient } from "./DB/db";

function App() {
  const button = document.getElementById("button") as HTMLButtonElement;

  button.addEventListener("click", () => {
    const guess = Math.floor(Math.random() * 5);
    const input = document.getElementById("input") as HTMLInputElement;
    const value = parseInt(input.value);
    if (value === guess) {
      input.style.backgroundColor = "green";
      getDocument("demo", "The Number: " + value + " is Correct");
      AppsClient("The Number: " + value + " is Correct").then((e) =>
        console.log(e)
      );
    } else {
      input.style.backgroundColor = "red";
      getDocument("demo", "The Number: " + value + " is Not Correct");
      getDocument("demo", "The Number: " + guess.toString() + " Was The Guess");

      AppsClient("The Number: " + guess.toString() + " Was The Guess").then(
        (e) => console.log(e)
      );
    }
  });
}

App();

function getDocument(doc: string, text: string) {
  const textContent = document.getElementById(doc) as HTMLElement;
  textContent.textContent = text;
}
function AppClient() {
  throw new Error("Function not implemented.");
}
