const { app, BrowserWindow } = require('electron')
app.whenReady().then(() => {

  const myWindow = new BrowserWindow({
    webPreferences:{
      nodeIntegration:true
      }

  })
  myWindow.maximize()
  myWindow.loadFile('login.html')

});
