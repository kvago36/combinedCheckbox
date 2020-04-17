import React, { useState } from 'react';
import './App.css';

import Checkbox from './Checkbox'

function App() {
  const [state, setState] = useState({ parent: true, child: true })

  return (
    <div style={{ fontFamily: 'system-ui' }}>
      <label>
        <Checkbox
          name="parent"
          checked={state.parent}
          onChange={() => setState({ ...state, parent: !state.parent })}
        />
        <span style={{ marginLeft: 8 }}>Label 1</span>
      </label>
      <label>
        <Checkbox
          child
          name="child"
          parent={state.parent}
          checked={state.child}
          onChange={() => setState({ ...state, child: !state.child })}
        />
        <span style={{ marginLeft: 8 }}>Label 2</span>
      </label>
  </div>
  );
}

export default App;
