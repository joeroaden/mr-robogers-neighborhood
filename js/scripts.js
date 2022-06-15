//Utility Logic//




//Business Logic
function beepBoop(number1) {
  let array = [];
  let result = [];
  let beep = [1];
  let boop = [2];
  let wontYou = [3];


    for (let index = 0; index <= number1 ; index += 1) {
    result.push(index);

    if (result.includes(1)) {
      return array + "Beep!"
    }

    //if (result.includes(2)) {
      //return array +
    //}
  }
  return result
  }

  
  


//UI Logic//
$(document).ready(function(){
  console.log(beepBoop(number1));
  $("form#counter").submit(function(event){
    event.preventDefault();
    const input1 = $("#number1").val ();
    const result = beepBoop(input1);
    $("#output").html(result + "");
    $("#output").click(function() {
      $(this).remove();
    });
  });
});