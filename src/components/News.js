import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:`in`,
    pageSize:8,
    category:`general`

  }
  static propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  }
  
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: false,
      page:1,
      totalResults: 0

    }
    document.title=`News-APP ${this.props.category}`;
  }
  async componentDidMount(){
    this.props.setProgress(10);

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c4e864674d34efd919df72a9e20ad1e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    this.props.setProgress(30);
    let passeddata=await data.json();
    this.props.setProgress(70);
    this.setState({articles: passeddata.articles,totalResults:passeddata.totalResults,loading:false})
    this.props.setProgress(100);
  }
  handlePrevClick=async()=>{
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c4e864674d34efd919df72a9e20ad1e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    this.props.setProgress(30);
   let passeddata=await data.json();
   this.props.setProgress(70);
  this.setState({
    articles: passeddata.articles,
    page:this.state.page-1,
    loading:false
  });
  this.props.setProgress(100);
  }

 handleNextClick=async()=>{
  if (this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

  }
  else{
    this.props.setProgress(10);
  
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c4e864674d34efd919df72a9e20ad1e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data=await fetch(url);
  this.props.setProgress(30);
  let passeddata=await data.json();
  this.props.setProgress(70);
  
  this.setState({
    articles: passeddata.articles,
    page:this.state.page+1,
    loading:false
  });
  this.props.setProgress(100);
}

}
  render() {
    const {mode}=this.props;
    return (
      <div className='container my-3' style={{color:mode==='dark'?'white':'#042743'}}>
        <h1 className="text-center"style={{color:mode==='dark'?'white':'#042743',marginTop:"90px"}}>NewsApp -Top Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
         {!this.state.loading&&this.state.articles.map((element)=>{
            return < div className="col-md-4" key={element.url}>
             <NewsItem mode={mode}title={element.title?element.title:""} description={element.description?element.description.slice(0,88):""}
             imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
             </div>
          })}
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
           
       
        </div>
      </div>
    )
  }
}

export default News
