import { app, dialog, globalShortcut, ipcMain } from "electron";
import * as path from "path";
import ControlWindow from "./handlers/ControlWindow";
import CreateTray from "./handlers/CreateTray";
import CreateWindow from "./handlers/CreateWindow";
// import ControlWindow from '../handlers/ControlWindow';
// import CreateWindow from '../handlers/CreateWindow';
// import CreateTray from '../handlers/CreateTray';
// import Server_Http from '../../server';
console.log("Index - Electron");

let Window: any;
let Tray: any;
const Server = ""; //new Server_Http();

function RunElectron() {
  // Handle creating/removing shortcuts on Windows when installing/uninstalling.
  if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    app.quit();
  }

  if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient("electron-fiddle", process.execPath, [
        path.resolve(process.argv[1]),
      ]);
    }
  } else {
    app.setAsDefaultProtocolClient("electron-fiddle");
  }

  function StartElectron() {
    console.log("Start Eectron");
    Window = CreateWindow();
    Tray = CreateTray(Server);
    globalShortcut.register("f5", function () {
      console.log("f5 is pressed");
      Window.reload();
    });
    globalShortcut.register("CommandOrControl+R", function () {
      console.log("CommandOrControl+R is pressed");
      Window.reload();
    });

    const { toggle } = ControlWindow(Window, Tray);
    Tray.on("click", toggle);
  }

  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
  } else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
      // Someone tried to run a second instance, we should focus our window.
      if (Window) {
        const { show } = ControlWindow(Window, Tray);
        const deeplinkingUrl = commandLine.find((arg) =>
          arg.startsWith("electron-fiddle://")
        );

        if (deeplinkingUrl?.includes("electron-fiddle://open/?qrcode=")) {
          console.log("opening");
          Window.webContents.send(
            "new-qrcode",
            deeplinkingUrl.split("open/?qrcode=")[1]
          );
          show();
        }
        if (deeplinkingUrl?.includes("electron-fiddle://close")) {
          console.log("Closing");
          Window.webContents.send("clean-qrcode", "");
          Window.hide();
        }
      }
    });

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(() => {
      console.log("Index - Electron ready");
      StartElectron();
    });

    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });

    // Handle the protocol. In this case, we choose to show an Error Box.
    app.on("open-url", (event, url) => {
      dialog.showErrorBox("Welcome Back", `You arrived from: ${url}`);
    });
  }

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.

  ipcMain.on("open-qrcode", async (event, params) => {
    console.log("open-qrcode", params);
    return true;
  });
  ipcMain.on("close-qrcode", async (event, params) => {
    console.log("close-qrcode", params);
    return true;
  });
}
export default RunElectron;
