PTZCamera
=========

Pan-tilt-zoom an PTZ Camera, such as Logitech BCC950 ConferenceCam
http://www.hanselman.com/blog/CloudControlledRemotePanTiltZoomCameraAPIForALogitechBCC950CameraWithAzureAndSignalR.aspx

## Installation

  npm install ptzcamera --save

## Usage

CameraMove = require('ptzcamera');
CameraMove({'direction':'UP', 'devicename': 'BCC950 ConferenceCam', 'deviceindex': 0}, function (error, result) {
    if (error) console.log(error);
    console.log(result);
});
/*
	direction: [LEFT, RIGHT, UP, DOWN, ZOOMIN, ZOOMOUT]
	devicename: Camera Windows name
	deviceindex: device index of the same name
*/

## Tests

  npm test

## Release History

* 0.1.0 Initial release