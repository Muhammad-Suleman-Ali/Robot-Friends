import React from 'react';
import {Content} from './Content.js'
import Card from './Card.js';

const CardArray=()=>{
 const arr= Content.map((user,i)=>{
    return  <Card key={i} id={user.id} name={user.name} email={user.email}/>
    ;})
    return arr;
};
export default CardArray;

