const {app ,BrowserWindow} = require('electron');

function renderWindow(){
    let window = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });

    window.removeMenu();
    window.loadFile("src/index.html");
}

app.on('ready', () => {
    renderWindow();
});

app.on('window-all-closed', ()=> {
    app.quit();
});