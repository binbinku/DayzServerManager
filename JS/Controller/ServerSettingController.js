
const { exec } = require("child_process");
var DayZServer = null;

function StartServer() 
{

    var mainInfo = "";

    const mainDir = "D:\\Software\\Steam\\steamapps\\common\\DayZServer\\";

    const mainExe = "DayZServer_x64.exe";

    const serverConfig = " -config=" + mainDir + "serverDZ.cfg";

    const serverPort = " -port=23203";

    const serverCPUCount = " -cpuCount=4";

    const mainProfiles = " -profiles=" + mainDir + "set\\server01";


    mainInfo += mainDir + mainExe;
    mainInfo += serverConfig;
    mainInfo += serverPort;
    mainInfo += serverCPUCount;
    mainInfo += mainProfiles;

    //console.log(mainInfo);

    console.log("[服务器]开始启动");

    DayZServer = exec(mainInfo, { windowsHide: true }, (error, stdout, stderr) => {
        
        console.log(DayZServer.uid);
        if (error) {
            console.error(error);
            console.log("[服务器]运行停止");
            return;
        }
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }
        console.log("[服务器]运行停止,无异常");
    });
    
    console.log("[服务器]启动完成");
    console.log(DayZServer.pid);
    console.log(DayZServer.killed);
}

module.exports.StartServer = StartServer;