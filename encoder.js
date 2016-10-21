var letters = {
  //letters to translate
  64: "z",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z"
}


$("#inputText").keydown(function(e) {
  if ($("input:checked").val() == "echo") {
    // echo coding
    $("#textArea").append(letters[e.keyCode])
  }

  if ($("input:checked").val() == "cipher") {
    // cipher coding
    $("#textArea").append(letters[e.keyCode - 1])
  }

  if ($("input:checked").val() == "heiroglyphics") {
    // heiroglyphics coding
    var htmlString = "<img src='images/heiroglyphics/" + letters[e.keyCode] +  ".gif'>"
    $("#textArea").append(htmlString)
  }

});

$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false)
  $(this).prop('checked', true)
});

$("#translationInputText").keydown(function(e) {
  if(e.keyCode == 13) {
  //translate
  var message = $("#translationInputText").val();
  var messageArray = message.split("");
  for (i = 0; i < messageArray.length; i++) {
    var translatedNumber = messageArray[i].charCodeAt(0)-32+1;
    $("#translationArea").append(letters[translatedNumber])
  }
}
})
