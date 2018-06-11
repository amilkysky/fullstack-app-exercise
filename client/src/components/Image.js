import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.url} />
		    <p>{this.props.caption}</p>
      </div>
  	)
  }
}

export default Image;
