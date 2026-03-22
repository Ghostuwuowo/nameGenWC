const {app, BrowserWindow} = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width: 292,
        height: 430,
        resizable: false,
        maximizable: false,
        fullscreenable: false,
        frame: true,
        transparent: false,
        webPrefernces:{
            contextIsolation: true
        }

    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});