import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'form'};
    var request = new Request('/data', {
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });
    var text = fetch(request).then((res) => {
      return res.text();
    });

    text.then((res) => console.log(res));
  }
  render() {
    return (
      <div className={styles.app}>
        {this.state.test} bar
      </div>
    );
  }
}
