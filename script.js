function checkWord() {
  let wordInput = document.querySelector(".inputs input");
  let word = wordInput.value.replace(/\s/g, "");
  let wordArray = word.split("");
  let wordReverse = wordArray.reverse().join("");

  if (word === wordReverse) {
    document.querySelector(".info-txt").innerHTML =
      "Yes! " + "<span>" + wordInput.value + "</span>" + " is a palindrome!";
  } else {
    document.querySelector(".info-txt").innerHTML =
      "No!" + "<span> " + wordInput.value + "</span>" + " is not a palindrome!";
  }
}
