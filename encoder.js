$("#divname").keydown(function(e) {
  $("translationInputText").keydown(function(e) {
    if(e.keyCode == 13) {
    //translate
    var message = $("translationInputText").val();
    var messageArray = message.split("");
    for (i = 0; i < cols; i++) {
      messageArray[i].charCodeAt(0)-32+1
    }
    }
  })
});

$("input[type='radio']"._____(function() {
  $("input:checked").prop('checked', ____)
  $(this).prop('checked', ____);
});

if ($("input:checked").val() == "echo") {
  // code here
}

var messageArray = messageToDecode.split("")
