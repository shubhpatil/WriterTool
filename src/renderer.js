import loader from 'monaco-loader';
import { remote } from 'electron';
import FileManager from './filemanager';

loader().then((monaco) => {
  var editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    //vs-light, vs-dard, hc-black
    theme: 'vs-light', 
    automaticLayout: true,
    lineNumbers: "on",
    fontSize: 15,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 40,
    fontFamily: 'arial',
    minimap: {
      enabled: true,
      showSlider: 'always'
    },
  });

  

  const fileManager = new FileManager({ editor, monaco });

  remote.getCurrentWindow().show();
});
