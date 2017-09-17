import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <div className="root">
        Hello World!
      </div>
    );
  }
}

export default App;
