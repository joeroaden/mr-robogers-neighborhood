//Utility Logic//




//Business Logic
function beepBoop(number1) {
  let array = [];
  let result = [];


    for (let index = 0; index <= parseInt(number1); index += 1) {
    result.push(index);

    if (result.includes(1)) {
      return array + "Beep!"
    }
  }
  return result;
  }

  
  


//UI Logic//
$(document).ready(function(){
  console.log(beepBoop(number1));
  $("form#counter").submit(function(event){
    event.preventDefault();
    const input1 = $("#number1").val ();
    const result = beepBoop(input1);
    $("#Output").html(result + "");
  });
});