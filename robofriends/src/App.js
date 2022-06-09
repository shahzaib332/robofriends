import React,{Component} from "react";
import CardList from "./CardList";
//import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
// now we use state
class App extends Component{
    constructor(){
        super()
       this.state= {
        robots: [] ,
        searchfield:''
    }}
    //onSearchChange(event) we will mak ethis arrow function
onSearchChange=(event)=>{
// now we use filter
this.setState({searchfield:event.target.value})

     

   // console.log(event.target.value)
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}));
}


// <SearchBox searchChange={this.onSearchChange}/> this is used bcz on search change is an opvbject
    render(){
       
        const filterRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc '>
                
            <h1>ROBOTS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
          
         <Scroll>
             <ErrorBoundary>
        <CardList robots={filterRobots}/>
        </ErrorBoundary>
        </Scroll>

        
        </div>

        )
    }

}

    

export default App;