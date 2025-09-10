const compareButton = document.getElementById(
  "compareButton"
) as HTMLButtonElement;
const outputSpan = document.getElementById("outputSpan") as HTMLSpanElement;
// console.log(outputSpan);

const compareBrackets = () => {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const brackets: Record<string, string> = { "(": ")", "[": "]", "{": "}" };
  const result: string[] = [];

  if (!inputField.value) {
    outputSpan.textContent = "Please enter brackets!";
    outputSpan.style.color = "red";

    return;
  }

  const inputArr: string[] = inputField.value.split("");

  for (let bracket of inputArr) {
    if (["(", "[", "{"].includes(bracket)) result.push(bracket);
    else if ([")", "]", "}"].includes(bracket)) {
      const lastBracket = result.pop();

      if (lastBracket !== undefined && brackets[lastBracket] !== bracket) {
        outputSpan.textContent = "False";
        outputSpan.style.color = "red";

        return;
      }
    } else {
      outputSpan.textContent = "Enter only brackets";
      outputSpan.style.color = "red";
      return;
    }
  }
  if (result.length === 0) {
    outputSpan.textContent = "True";
    outputSpan.style.color = "green";
  } else {
    outputSpan.textContent = "False";
    outputSpan.style.color = "red";
  }
};

compareButton.addEventListener("click", compareBrackets);
