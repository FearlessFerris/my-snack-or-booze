// Home Component Implementation 


// Dependencies 
import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardHeader, Button } from 'reactstrap';
import { BrowserRouter, NavLink } from 'react-router-dom';


// Components & Other Necessary Files 
import dbData from './db.json';
import './Home.css';


// Home Component 
function Home() {

    const [ drinks, setDrinks ] = useState( dbData.drinks.length );
    const [ snacks, setSnacks ] = useState( dbData.snacks.length );

    return(
        <div className = 'container'>
            <Card className = 'homepage-container'>
                <CardHeader className = 'homepage-header'> Menu Options </CardHeader>
                <CardBody className = 'homepage-body'>
                    <NavLink to = '/snacks' className = 'btn homepage-snacks-link'> Snacks </NavLink> 
                    <NavLink to = '/drinks' className = 'btn homepage-drinks-link'> Drinks </NavLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default Home;