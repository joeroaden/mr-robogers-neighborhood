//Utility Logic//
let beep = "beep!"
let boop = "boop!"
let wontYou = "Won't you be my neighbor?"



//Business Logic
 let beepBoop = function(input) {
  let results = [];
  for (let i = 0; i <= input; i++) {
    results.push(i);
  };
}
 

    
   
  

//UI Logic//
  $(document).ready(function(){
    $("form#counter").submit(function(event) {
    event.preventDefault();
    const input1 = parseInt($("#number1").val());
    const result = beepBoop(input1);
    $("#output").html(result);
    });
  });