//Utility Logic//




//Business Logic
 let beepBoop = function(input) {
  let results = [];
  for (let i = 0; i <= input; i++) {
    results.push(i.toString());
  };


 
let beepBoopBeep = results.map(function(array) {
  let beep = "Beep!";
  let boop = "Boop!";
  let neighbor = "Won't you be my neighbor?";
  if (array.includes("3")) {
    return array = neighbor;
  }
  else if (array.includes("2")) {
    return array = boop;
  }
  else if (array.includes("1")) {
    return array = beep;
  } else {
    return array;
  };
});
  return beepBoopBeep;
 };

    
   
  

//UI Logic//
  $(document).ready(function(){
    $("form#counter").submit(function(event) {
    event.preventDefault();
    const input1 = parseInt($("#number1").val());
    const resultFinal = beepBoop(input1);
    $("#output").text(resultFinal);
    });
  });

  //$("input#new-home-address").val("");//  to reset after click