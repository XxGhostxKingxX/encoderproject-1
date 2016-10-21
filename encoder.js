var letters = {
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
  76: "l"
}


$("#inputText").keydown(function(e) {
  if ($("input:checked").val() == "echo") {
    // code here
    $("#textArea").append(letters[e.keyCode])
  }

  if ($("input:checked").val() == "cipher") {
    // code here
    $("#textArea").append(letters[e.keyCode - 1])
  }

  if ($("input:checked").val() == "heiroglyphics") {
    // code here
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
