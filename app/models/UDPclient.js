// var PORT = 2000
// var HOST = '192.168.1.3'
//
// var dgram = require('dgram')
// var message = new Buffer('*OPEN* ' + ' Wherefore art thou?\n*CLOS*')
// var client = dgram.createSocket('udp4');
//
// function send_udp(){
//   client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
//     if(err) throw err;
//     console.log(err, bytes)
//     console.log('UDP message sent to ' + HOST + ':' + PORT);
//     client.close();
//   });
//
// }
//
//
// module.exports = send_udp
