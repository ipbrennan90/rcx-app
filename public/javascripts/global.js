$(document).ready(function(){


  $('body').on("keydown", function whichKey(e){

    var keyCode = e.keyCode;
    if(keyCode){
      alert("you hit" + keyCode.toString())
    }

  })



})
