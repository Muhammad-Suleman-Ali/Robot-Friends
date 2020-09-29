import React,{Component}  from 'react';
import CardArray from './CardArray.js';
import Searchfield from './Searchfield.js';
import 'tachyons'
import {Content} from './Content';


export default class App extends Component{
    state={
        content: Content,
        searchfield:''
    }
    onChange=(e)=>{
       this.setState({searchfield:e.target.value}) 
      
     
    }
 render(){
    const filterarry = Content.filter((num)=>{
        return num.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
             })
             
       
        return (< >
        <div className='tc'>
            <div className='tc bg-light-blue ma2 pa3 b--green '>    
            
                <h1>RoboFriends</h1>
                <Searchfield onchange={this.onChange}/> 
            </div>
                <CardArray filterarry={filterarry}/>
           
           </div>
        </>) 
    }
}