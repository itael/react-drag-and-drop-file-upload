import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UploadFiles from './components/upload-files.component';

function App() {
  return (
    <div className="container" style={{ width: '400px' }}>
      <div style={{ margin: '20px 0' }}>
        <a href="https://www.bezkoder.com/react-drag-drop-file-upload/">
          bezkoder.com
        </a>
        <h4>React Drag & Drop File Upload</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;
