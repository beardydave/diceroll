
function diceRoll() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  document.querySelector("h1").innerHTML="You rolled a "+randomNumber;
  var phraseList = ["Sweet!","Awesome!","Well done!","Epic!","Great!","Nice one!"];
  var randomPhraseNumber = Math.floor(Math.random() * phraseList.length);
  var randomPhrase = phraseList[randomPhraseNumber];
  document.querySelector("h2").innerHTML=randomPhrase;
}

function twoDiceRoll() {
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  document.querySelector("h1").innerHTML="You rolled a "+a+" and a "+b;
  document.querySelector("h2").innerHTML="Sweet!";
  var phraseList = ["Sweet!","Awesome!","Well done!","Epic!","Great!","Nice one!"];
  var randomPhraseNumber = Math.floor(Math.random() * phraseList.length);
  var randomPhrase = phraseList[randomPhraseNumber];
  document.querySelector("h2").innerHTML=randomPhrase;
}
