import Feedback from '../components/Feedback';

import React from 'react';

class App extends React.Component {
  static defaultProps = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  render() {
    return <Feedback props={this.props} />;
  }
}

export default App;
