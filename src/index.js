import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import { data } from './Content.js'

ReactDOM.render(
<>
    <Card id={data[0].id} name={data[0].name} email={data[0].email} />
    <Card id={data[1].id} name={data[1].name} email={data[1].email}/>
    <Card id={data[2].id} name={data[2].name} email={data[2].email}/>
    <Card id={data[4].id} name={data[4].name} email={data[4].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>
    <Card id={data[3].id} name={data[3].name} email={data[3].email}/>


</>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
