//Utility Logic//
let beep = "beep!"
let boop = "boop!"
let wontYou = "Won't you be my neighbor?"



//Business Logic
let beepBoop = function(number1) {
  let array = [];
  for (let i = 0; i <= number1; i++) {
      array.push(i.toString());
  };
}
return array
    
    //return beepBoop;
    //if (array[i] == 1 {
          //array + "Beep!"
    //}

    
  

//UI Logic//
  $(document).ready(function(){
    $("form#counter").submit(function(event){
    event.preventDefault();
    const input1 = $("#number1").val ();
    const result = beepBoop(input1);
    $("#output").html(result + "");
    $("#output").click(function() {
      $(this).remove();
    });
  });
