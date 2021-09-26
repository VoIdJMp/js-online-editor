import { useEffect } from 'react';

import './assets/scss/main.scss';

import * as CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/show-hint.css';

import 'codemirror/keymap/sublime.js';

import emmet from '@emmetio/codemirror-plugin';

emmet(CodeMirror);

export function initCodeEditor(dom, mode) {
  const editor = CodeMirror.fromTextArea(dom, {
    mode,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    matchBrackets: true,
    smartIndent: true,
    indentUnit: 4,
    theme: 'eclipse',
    keymap: 'sublime',
    extraKeys: {
      Tab: 'emmetExpandAbbreviation',
      Esc: 'emmetResetAbbreviation',
      Enter: 'emmetInsertLineBreak',
      Ctrl: 'autocomplete',
    },
    lineNumbers: true,
  });
  editor.setOption('value', `let sum = 0;\nfor(let i = 0;i <= 10;i++) { \n   sum += i;\n}`);

  return editor;
}

function App() {
  useEffect(() => {
    const editor = initCodeEditor(document.getElementById('js'), 'javascript');
    editor.execCommand('selectAll');
    editor.execCommand('goDocEnd');
  }, []);

  return (
    <>
      <div className="editor_class">
        <textarea name="js_code" id="js" cols="50" rows="50" />
      </div>
    </>
  );
}

export default App;
