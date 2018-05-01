let message = [
"8ballyes.png",
"8ballletsdoit.png",
"8ballnahchill.png",
"8ballaskagain.png",
"8ballgetyamoney.png"
];
var random = _.sample(message);
console.log(random);

var question = document.querySelector("#question");
question.addEventListener("change", function(){
  console.log(question.value)
  var random = _.sample(message)
  var response = document.querySelector("#response")
  response.src = random
})


function getName(){
  var name = document.getElementById('inputBox').value;
  document.getElementById('postName').innerHTML = "Hello " + name + ", Get Ready To Play Hangman";
  document.getElementById('greeting').innerHTML = " ";
  console.log(name);

}

function ghost(){
  document.getElementById('submitButton').innerHTML = " ";
  document.getElementById('disapear').innerHTML = " ";

}
