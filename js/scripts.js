//Utility Logic//
let beep = "beep!"
let boop = "boop!"
let wontYou = "Won't you be my neighbor?"



//Business Logic
 function beepBoop(number1) {
  let array = "";
  let result = [];
  for (let i = 0; i <= number1; i+=1) {
    
  };
}
//return result;

    
   
  

//UI Logic//
  $(document).ready(function(){
    $("form#counter").submit(function(event) {
    event.preventDefault();
    const input1 = $("#number1").val();
    const result = beepBoop(input1);
    $("#output").html(result + "");
   
    });
  });

