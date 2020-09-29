import React,{Component}  from 'react';
import 'tachyons';

export default class Searchfield extends Component{

    render(){
        return (<>
           <input 
              className='b--green'
              onChange={this.props.onchange}
              type="Search" 
              placeholder='search'
           />
</>) 
}}