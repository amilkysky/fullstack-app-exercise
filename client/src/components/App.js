import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import shortid from 'shortid';
import Image from './Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '', 
      caption: '',
    	images: []
    }
    this.handleUserTitleInput = this.handleUserTitleInput.bind(this);
    this.handleUserUrlInput = this.handleUserUrlInput.bind(this);
    this.handleUserCaptionInput = this.handleUserCaptionInput.bind(this);
    this.saveUserInputs = this.saveUserInputs.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount() {
    this.fetchImages();
  }

  handleUserTitleInput(event) {
    this.setState({
    	title: event.target.value
    })
    event.preventDefault();
  }

  handleUserUrlInput(event) {
    this.setState({
    	url: event.target.value
    })
    event.preventDefault();
  }

  handleUserCaptionInput(event) {
    this.setState({
    	caption: event.target.value
    })
    event.preventDefault();
  }

  saveUserInputs(event) {
	  event.preventDefault();
  	console.log('firing save')
	  axios.post('/savepics', {
	  	title: this.state.title,
      url: this.state.url,
      caption: this.state.caption
	  })
	    .then((res) => {
	      this.setState({
	      	title: '',
		      url: '', 
		      caption: ''
	      })
	      this.fetchImages();
	    })
	    .catch((error) => {
	      console.log('User inputs were not saved', error);
	    });  	
  }

  fetchImages() {
	  axios.get('/artpics')
	    .then((response) => {
        this.setState({
       	  images: response.data
        })
	    })
	    .catch((error) => {
        console.log('Unable to fetch images', error)
	    });
  }

	render() {
	  return (
	    <div>
	      <h1>The Magical Image Displaying Wizard</h1>
	      <form onSubmit={this.saveUserInputs}>
	        <label>
	          <input type="text" placeholder="Enter Image title here" value={this.state.title} onChange={this.handleUserTitleInput} /><br />
            <input type="text" placeholder="Enter Image URL here" value={this.state.url} onChange={this.handleUserUrlInput} /><br />
            <input type="text" placeholder="Enter Image caption here" value={this.state.caption} onChange={this.handleUserCaptionInput} /><br />
            <button type="submit" value="Submit">
              Submit
            </button>
          </label>
	      </form>
	      {this.state.images.map((image) => {
	      	return <Image 
		      	key={shortid.generate()} 
		      	title={image.title} 
		      	url={image.url} 
		      	caption={image.caption} />
	      })}
	    </div>
	  );
	}

}

export default App;
