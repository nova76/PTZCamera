var edge = require('edge');
module.exports = edge.func({
	source: require('path').join(__dirname, 'ptz.csx'), 
	references: [require('path').join(__dirname, 'dll/PTZDevice.dll') ]
});