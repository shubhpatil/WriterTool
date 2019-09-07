import { ipcRenderer, remote } from 'electron';
import fs from 'fs';
let lineNumber = "on";

class FileManager {
  constructor({ editor, monaco }) {
    this.editor = editor;
    this.monaco = monaco;

    // When we receive a 'open-file' message, open the file
    // ipcRenderer.on('open-file', (e, url) => this.openFile(url));

    // document.querySelector('#save').onclick = () => this.saveFile();
    document.querySelector('#ok').onclick = () => this.ok();
    document.querySelector('#fontup').onclick = () => this.fontup();
    document.querySelector('#fontdown').onclick = () => this.fontdown();
    document.querySelector('#themeDark').onclick = () => this.themeDark();
    document.querySelector('#themeLight').onclick = () => this.themeLight();
    document.querySelector('#LineNumber').onclick = () => this.LineNumber();
  }

  ok(){
    // console.log(this.editor);
    this.editor.updateOptions({
      // lineNumbers: "off"
      fontSize: 30,
      theme: 'vs-dark'
    });
  }

  fontup(){
    this.editor.updateOptions({
      fontSize: 25
    });
  }

  fontdown(){
    this.editor.updateOptions({
      fontSize: 15
    });
  }

  LineNumber(){
    if(lineNumber == "on"){
      this.editor.updateOptions({
        lineNumbers: "off"
      });
      lineNumber = "off";
    }
    else{
      this.editor.updateOptions({
        lineNumbers: "on"
      });
      lineNumber = "on";
    }
    
  }

  themeLight(){
    this.editor.updateOptions({
      theme: 'vs-light'
    });
  }

  themeDark(){
    this.editor.updateOptions({
      theme: 'vs-dark'
    });
  }

  // openFile(url) {
  //   // fs.readFile doesn't know what `file://` means
  //   const parsedUrl = (url.slice(0, 7) === 'file://') ? url.slice(7) : url;

  //   fs.readFile(parsedUrl, 'utf-8', (err, data) => {
  //     this.editor.setModel(this.monaco.editor.createModel(data, 'javascript'));
  //   });
  // }

  // saveFile() {
  //   remote.dialog.showSaveDialog((filename) => {
  //     if (!filename) return;

  //     const model = this.editor.getModel();
  //     let data = '';

  //     model._lines.forEach((line) => {
  //       data += line.text + model._EOL;
  //     });

  //     fs.writeFile(filename, data, 'utf-8');
  //   });
  // }


}

module.exports = FileManager;
