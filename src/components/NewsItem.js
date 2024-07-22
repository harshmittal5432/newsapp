import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
   let {mode,title,description,imageurl,newsurl,author,date}=this.props;
   const cardStyle = {
    backgroundColor: mode === 'dark' ? 'purple' : 'white',
    color: mode === 'dark' ? 'white' : '#042743'
  };
    return (
      <div className='my-3' style={cardStyle}>
        <div className="card" style={cardStyle}>
        <img src={imageurl?imageurl:"https://ichef.bbci.co.uk/news/1024/branded_sport/c13b/live/8b07f920-215f-11ef-aead-6901c9f8b9ac.jpg"
} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a rel="norefrence" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
      </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
