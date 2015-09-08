PTZCamera
=========

Pan-tilt-zoom an PTZ Camera, such as Logitech BCC950 ConferenceCam
see more:
http://www.hanselman.com/blog/CloudControlledRemotePanTiltZoomCameraAPIForALogitechBCC950CameraWithAzureAndSignalR.aspx

## Installation

```shell
  npm install ptzcamera --save
```

## Usage

```js
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
```

## Tests

```shell
  npm test
```

## Release History

* 0.1.0 Initial release