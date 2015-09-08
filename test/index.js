/*	
CameraMove({'direction':'UP', 'devicename': 'BCC950 ConferenceCam', 'deviceindex': 0}, function (error, result) {
    if (error) console.log(error);
    console.log(result);
});
*/
CameraMove = require('../index');

var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
var deviceindex = 0
stdin.on('data', function(key){
    if (key == '\u001B\u005B\u0041') {
        CameraMove({'direction':'UP', 'devicename': 'BCC950 ConferenceCam', 'deviceindex': deviceindex});
    }
    else if (key == '\u001B\u005B\u0043') {
        CameraMove({'direction':'RIGHT', 'devicename': 'BCC950 ConferenceCam', 'deviceindex': deviceindex});
    }
    else if (key == '\u001B\u005B\u0042') {
        CameraMove({'direction':'DOWN', 'devicename': 'BCC950 ConferenceCam', 'deviceindex': deviceindex});
    }
    else if (key == '\u001B\u005B\u0044') {
        CameraMove({'direction':'LEFT', 'devicename': 'BCC950 ConferenceCam', 'deviceindex': deviceindex});
    }
    else if (key == '1') {
        deviceindex = 0;
    }	
    else if (key == '2') {
        deviceindex = 1;
    }	
    else if (key == '\u0003') { process.exit(); }    // ctrl-c
});