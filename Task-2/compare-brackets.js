var compareButton = document.getElementById("compareButton");
var outputSpan = document.getElementById("outputSpan");
// console.log(outputSpan);
var compareBrackets = function () {
    var inputField = document.getElementById("inputField");
    var brackets = { "(": ")", "[": "]", "{": "}" };
    var result = [];
    if (!inputField.value) {
        outputSpan.textContent = "Please enter brackets!";
        outputSpan.style.color = "red";
        return;
    }
    var inputArr = inputField.value.split("");
    for (var _i = 0, inputArr_1 = inputArr; _i < inputArr_1.length; _i++) {
        var bracket = inputArr_1[_i];
        if (["(", "[", "{"].includes(bracket))
            result.push(bracket);
        else if ([")", "]", "}"].includes(bracket)) {
            var lastBracket = result.pop();
            if (lastBracket === undefined || brackets[lastBracket] !== bracket) {
                outputSpan.textContent = "False";
                outputSpan.style.color = "red";
                return;
            }
        }
        else {
            outputSpan.textContent = "Enter only brackets";
            outputSpan.style.color = "red";
            return;
        }
    }
    if (result.length === 0) {
        outputSpan.textContent = "True";
        outputSpan.style.color = "green";
    }
    else {
        outputSpan.textContent = "False";
        outputSpan.style.color = "red";
    }
};
compareButton.addEventListener("click", compareBrackets);
