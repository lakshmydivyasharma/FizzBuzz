document.getElementById("button").onclick=getAnswer

document.getElementById("showCode").onclick=showCode

function showCode(){
document.getElementById("display").innerHTML= "for (var i = 1; i <=100;i++) {\n"+
`if (i % 15 === 0){ \n
  let element = document.createElement('li');\n
  element.textContent = 'FizzBuzz'\n
  document.getElementById('answer').appendChild(element);\n
}else if (i % 3 == 0){\n
  let element = document.createElement('li');
  element.textContent ='Fizz'
  document.getElementById('answer').appendChild(element);
}else if (i % 5 === 0){
  let element = document.createElement('li');
  element.textContent ='Buzz'
  document.getElementById('answer').appendChild(element);

}else {
  let element = document.createElement('li');
  element.textContent = i
  document.getElementById('answer').appendChild(element);
}`
}

function getAnswer(){
for (var i = 1; i <=100;i++) {
if (i % 15 === 0){
  let element = document.createElement('li');
  element.textContent = "FizzBuzz"
  document.getElementById("answer").appendChild(element);
}else if (i % 3 == 0){
  let element = document.createElement('li');
  element.textContent ="Fizz"
  document.getElementById("answer").appendChild(element);
}else if (i % 5 === 0){
  let element = document.createElement('li');
  element.textContent ="Buzz"
  document.getElementById("answer").appendChild(element);

}else {
  let element = document.createElement('li');
  element.textContent = i
  document.getElementById("answer").appendChild(element);
}

}
}
