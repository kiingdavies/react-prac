import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount(){
     this.imageRef.current.addEventListener('load', this.setSpans) //we added the vanila js addEventListener to be able to listen when the image loads after componentDidMount method which only returns the img height as zero on initial load
      
  }

  setSpans = () => {
   
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height /10); //the 1 is added to round-up the image height

    this.setState({ spans }); //this is same as writing {spans: spans}
    
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
