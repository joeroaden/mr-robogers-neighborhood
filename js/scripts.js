//Utility Logic//




//Business Logic
 let beepBoop = function(input) {
  let results = [];
  for (let i = 0; i <= input; i++) {
    results.push(i.toString());
  };


 
let beepBoopBeep = results.map(function(number) {
  let beep = "Beep!"
  if (number.includes("1")) {
    return number = beep;
  } else {
    return number;
  };
});
  return beepBoopBeep;
 };

    
   
  

//UI Logic//
  $(document).ready(function(){
    $("form#counter").submit(function(event) {
    event.preventDefault();
    const input1 = parseInt($("#number1").val());
    const result = beepBoop(input1);
    $("#output").text(result);
    });
  });