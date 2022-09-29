import styles from "./Jsonprettier.css";

import React from "react";

export default class Jsonprettier extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  render() {
    return (
      <div style={styles.root}>
        <pre style={styles.pre}>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}
