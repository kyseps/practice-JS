// summary
function summary(text, charlength) {
  let result = text.substr(0, charlength);
  return console.log(`${result}....`);
}
// secret card
function secretCard(cardNumber) {
  let result = `${cardNumber.substr(0, 12)}****`;
  console.log(result);
}
// censore
function censore(text, word) {
  const result = text.replaceAll(word, "*".repeat(word.length));
  console.log(result);
}

console.log(censore("khoshooomadi oskole aziz", "oskole"));
// level
function level(exp) {
  if (exp <= 2) {
    return console.log("junior");
  } else if (exp < 5) {
    return console.log("mid level");
  } else {
    return console.log("senior");
  }
}
