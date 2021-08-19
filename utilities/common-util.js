class CommonUtils{


    // Capture and save screenshot
    captureScreenshot(path){
        browser.saveScreenshot(path);
    }

}

export default new CommonUtils();