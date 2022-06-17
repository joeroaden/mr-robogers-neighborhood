//Business Logic
function beepBoop(input) {
  let results = [];
  for (let i = 0; i <= input; i++) {
    results.push(i.toString());
  }

  let beepBoopBeep = results.map(function (array) {
    let one = "Beep!";
    let two = "Boop!";
    let three = "Won't you be my neighbor?";
    if (array.includes("3")) {
      return (array = three);
    } else if (array.includes("2")) {
      return (array = two);
    } else if (array.includes("1")) {
      return (array = one);
    } else {
      return array;
    }
  });
  return beepBoopBeep;
}

//UI Logic//
$(document).ready(function () {
  $("form#counter").submit(function (event) {
    event.preventDefault();
    const input1 = parseInt($("#number1").val());
    const resultFinal = beepBoop(input1);
    $("#output").text(resultFinal);
  });
});
