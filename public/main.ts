function App() {
  const button = document.getElementById("button") as HTMLButtonElement;

  button.addEventListener("click", () => {
    const guess = Math.floor(Math.random() * 5);
    const input = document.getElementById("input") as HTMLInputElement;
    const value = parseInt(input.value);
    if (value === guess) {
      input.style.backgroundColor = "green";
      getDocument("demo", "The Number: " + value + " is Correct");
    } else {
      input.style.backgroundColor = "red";
      getDocument("demo", "The Number: " + value + " is Not Correct");
      getDocument("demo", "The Number: " + guess.toString() + " Was The Guess");
    }
  });
}

App();

function getDocument(doc: string, text: string) {
  const textContent = document.getElementById(doc) as HTMLElement;
  textContent.textContent = text;
}
