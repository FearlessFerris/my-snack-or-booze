// Drinks Component Implementation 


// Dependencies 
import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


// Components & Necessary Files 
import dbData from './db.json';
import './Drinks.css';

// Drinks Component 
function Drinks(){ 

    const [ drinks, setDrinks ] = useState( dbData.drinks.length );

    return(
        <div className = 'container'>
            <Card className = 'drinks-menu-container'>
                <CardHeader className = 'drinks-header'> Drinks Menu </CardHeader>
                <CardBody>
                    <ul className = 'drinks-list'>
                        { dbData.drinks.map(( item, index ) => (
                            <li key = { index }> <Link to = {`/drinks/${ item.name }`} className = 'drinks-link'> {item.name} </Link> </li>
                        ))}
                    </ul>
                    <p className = 'menu-description'> Enjoy from our selection of <span className = 'drinks-count'> { drinks } </span> different house made beverages </p>
                </CardBody> 
            </Card>
        </div>
    )
}

export default Drinks;