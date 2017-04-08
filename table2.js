var score = 0; //Keeps track of score of the game
var correctIndex = 0; //index of the correct answer
//Numbers to be evaluated
var numberOne = 0;
var numberTwo = 0;


//function to generate random numbers based on the input limit
function randomNumbers(limit){
  if(limit === 3){
    return Math.floor(Math.random()*limit)
  }
  else{
  var num = Math.floor(Math.random()*limit)+1;
  return num;
}
}

//This function resets the board with new vaues. Everytime a correct value is clicked this function is called to reset the numbers.
function start(){
    correctIndex = randomNumbers(4); //Out of four options, a random index value is generated to place the calculated value.
    console.log(correctIndex)
    numberOne = randomNumbers(9);
    numberTwo = randomNumbers(9);
    $("#num1").html(numberOne)
    $("#num2").html(numberTwo)
    for(var i = 0;i<$(".options").length;i++){
        $(".options").eq(i).html(randomNumbers(9)*randomNumbers(9)) //Calling random numbers to populate the options
      }
    $(".options").eq(correctIndex).html(eval($("#puzzleDisplay").text())) //Using currentIndex, we place the evaluated sum as one of the options
    console.log("in start: "+ correctIndex)
    return correctIndex;
}

start()

$(".options").eq(correctIndex).on("click", function(){
  score = score+1;
  $("#actualScore").html(score);
  start()
})
