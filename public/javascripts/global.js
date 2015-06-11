$(document).ready(function(){
  var keyDecoder = {'87':'w', '65':'a', '83':'s', '68':'d'}


  $('body').on("keydown", function whichKey(e){

    var keyCode = e.keyCode;
    if(keyCode){
      console.log("you hit " + keyDecoder[keyCode.toString()])
    }

  })



})
