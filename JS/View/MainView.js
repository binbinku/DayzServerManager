
alert("hello world");
const ssc = require('./Controller/ServerSettingController');
alert("hello man");

function StartServer()
{
    ServerSettingController.StartServer();
    alert("服务器启动");
}
