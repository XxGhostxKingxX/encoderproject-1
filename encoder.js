$("#divname").keydown(function(e) {
  // code to execute when user presses a key goes here
});

<input type="radio" name="echo" id="echo" value="echo"> Echo<br>
<input type="radio" name="caesarcipher" id="cipher" value="cipher"> Caesarr Cipher<br>
<input type="radio" name="heiroglyphics" id="heiroglyphics" value="heiroglyphics"> Heiroglyphics<br>

$("input[type='radio']"._____(function() {
  $("input:checked").prop('checked', ____)
  $(this).prop('checked', ____);
});

if ($("input:checked").val() == "echo") {
  // code here
}

var messageArray = messageToDecode.split("")
