import React from 'react';
import './App.css';

const BlockName  = (props) =>(
    <div className="blockName text-center btn btn-danger">
        {props.name}
    </div>
)
export default BlockName