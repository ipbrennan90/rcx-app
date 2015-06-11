$(document).ready(function(){
  debugger;

  $('body').addEventListener("keydown", whichKey, false);

  function whichKey(e){
    debugger;
    var keyCode = e.keyCode;
    if(keyCode){
      alert("you hit" + keyCode.toString())
    }

  }



})
