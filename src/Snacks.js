// Snacks Component Implementation 


// Dependencies 
import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


// Components & Necessary Files 
import dbData from './db.json';
import './Snacks.css';

// Snacks Component 
function Snacks() {

    const [ snacks, setSnacks ] = useState( dbData.snacks.length );

    return(
        <div className = 'container'>
            <Card className = 'snacks-menu-container'>
                <CardHeader className = 'snacks-header'> Snacks Menu </CardHeader>
                <CardBody>
                    <ul className = 'snacks-list'>
                        { dbData.snacks.map(( item, index ) => (
                            <li key = { index }> <Link to = {`/snack/${ item.name }`} className = 'snacks-link'> {item.name} </Link> </li>
                        ))}
                    </ul>
                    <p className = 'menu-description'> Enjoy from our selection of <span className = 'snacks-count'> { snacks } </span> different house made snacks </p>
                </CardBody> 
            </Card>
        </div>
    )
}

export default Snacks;
