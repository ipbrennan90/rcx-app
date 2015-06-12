var keyDecoder = {'87':'w', '65':'a', '83':'s', '68':'d', '69':'e', '81':'q'};

$(document).ready(function(){

  $('body').on("keydown", function keyDown(e){
    var keyCode = e.keyCode;
    if(keyDecoder.hasOwnProperty(keyCode)){
      $.ajax({
        type: "POST",
        url: "/",
        data: {"message": keyDecoder[keyCode.toString()]},
        success: function(data){
          console.log("received")
        }
      });
    }else{
      console.log(keyCode);
    }
  });

  $('body').on('keyup', function keyUp(e){
    var keyCode = e.keyCode;
    if(keyCode){
      console.log(keyCode)
    }
  })

});
