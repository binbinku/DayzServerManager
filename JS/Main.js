// 1、引入electron模块
let electron = require('electron');
 
// 2、创建electron引用
let app = electron.app;
 
// 3、创建窗口引用
let BrowserWindow = electron.BrowserWindow;
 
// 4、声明要打开的主窗口
let mainWindow = null;
 
app.on('ready',() => 
{
    
    // 设置窗口大小
    mainWindow = new BrowserWindow(
        {
            frame:false,
            titleBarStyle: 'customButtonsOnHover',
            width:1280, 
            height:800,
            resizable: false
        });


    // 加载哪个页面
    mainWindow.loadFile("./HTML/index.html");
 
    // 监听关闭事件,把主窗口设置为null，否则内存占用越来越多
    
    mainWindow.on('closed',() => 
    {
        mainWindow = null;
    });
});