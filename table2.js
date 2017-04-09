
var score = 0; //Keeps track of score of the game
var correctIndex = 0; //index of the correct answer
var numberOne = 0;
var numberTwo = 0;
var correctAnswer = 0;
var operators = ["*","+","-"]
//function to generate random numbers based on the input limit
$("button").on("click", function(){


start();
$("button").html("Reset Game")
})

function randomOperator(){
  var operatorIndex =  randomNumbers(3);
  return operators[operatorIndex]
}

function randomNumbers(limit){
  if(limit === 4 || limit === 3){
    return Math.floor(Math.random()*limit)
  }
  else{
  var num = Math.floor(Math.random()*limit)+1;
  return num;
}
}
function start(){
    correctIndex = randomNumbers(4)
    numberOne = randomNumbers(9);
    numberTwo = randomNumbers(9);
    operation = randomOperator();

    console.log(operation)
    $("#num1").html(numberOne)
    $("#num2").html(numberTwo)
    $("#operator").html(operation)
    correctAnswer = eval($("#math").text());
    console.log(eval($("#math").text()))
    for(var i = 0;i<$(".options").length;i++){
        $(".options").eq(i).html(randomNumbers(9)*randomNumbers(9)) //Calling random numbers to populate the options
      }
    $(".options").eq(correctIndex).html(correctAnswer) //Using currentIndex, we place the evaluated sum as one of the options
}


for(i=0; i<4; i++){
    $(".options").eq(i).on("click",function(){
      console.log(correctAnswer)
        if($(this).html() == correctAnswer){
        console.log("correctAnswer")
        score = score+1;
        console.log(score);
        start();
        $("#actualScore").html(score)
      }
      else{
        console.log("wrong!")
      }

})
}
