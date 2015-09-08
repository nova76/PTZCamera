using System;
using System.Threading.Tasks;
using PTZ;

public class Startup
{
	public const string LEFT = "LEFT";
	public const string RIGHT = "RIGHT";
	public const string UP = "UP";
	public const string DOWN = "DOWN";
	public const string ZOOMIN = "ZOOMIN";
	public const string ZOOMOUT = "ZOOMOUT";

	public PTZDevice PPTZDevice = null;

	public async Task<object> Invoke(dynamic input)
	{
		string devicename = (string) input.devicename;
		int index 	 = (int) input.deviceindex;
		
		this.PPTZDevice = PTZDevice.GetDevice(devicename, PTZType.Relative, index);

		var move = (string) input.direction;

		if (move == LEFT)
		{
			this.PPTZDevice.Move(-1, 0);
		}
		else if (move == RIGHT)
		{
			this.PPTZDevice.Move(1, 0);
		}
		else if (move == UP)
		{
			this.PPTZDevice.Move(0, 1);
		}
		else if (move == DOWN)
		{
			this.PPTZDevice.Move(0, -1);
		}
		else if (move == ZOOMOUT)
		{
			this.PPTZDevice.Zoom(1);
		}
		else if (move == ZOOMIN)
		{
			this.PPTZDevice.Zoom(-1);
		}
		
		
		
		return devicename;
	}
}

