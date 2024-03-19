import React, { Component } from 'react'
import Comp from './Comp';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      articles:this.articles,
      loading:false
    }
  }
  async componentDidMount(){ 
    console.log('mounting')
    let url = 'https://newsapi.org/v2/top-headlines?articlesry=us&category=business&apiKey=0b84fdc73a324b859645e6fcb6ce25f0';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <div className="container">
      
          <h1>gopi</h1>
          <div className="">
          {this.state.articles && this.state.articles.map((e)=>{
            return <div className="" key ={e.url}>
            <Comp title={e.title}/> 
            </div>
          })}
          </div>
          </div>
    )
  }
}

export default App


// import React, { Component } from 'react'
// import Comp from './Comp';

// export class App extends Component {
  
//   state = {
//       name:'',
//       age:30,
//       articles:0
//   }
//   inc=()=>{
//     this.setState({articles: this.state.articles+1})
//   }
  
//   async componentDidMount(){
//     setTimeout(()=>{
//       this.setState({name: this.state.name='khushbu'});
//       console.log('component created and name is updated');
//     },3000)
    
//     setTimeout(()=>{
//       this.setState({articles: this.state.articles=1000000});
//       console.log('component created and articles is updated');
//     },6000)
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>Class Components</h1>  
//         <h3>{this.state.name}</h3>
//         <h3>{this.state.articles}</h3> 
//        <button onClick={this.inc}>
//           Increment</button>
         
//           </div> 
//     )
//   }
// }

// export default App

