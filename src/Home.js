// Home Component Implementation 


// Dependencies 
import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardHeader } from 'reactstrap';

// Components & Other Necessary Files 
import dbData from './db.json';

// Home Component 
function Home() {

    const [ drinks, setDrinks ] = useState( dbData.drinks.length );
    const [ snacks, setSnacks ] = useState( dbData.snacks.length );

    return(
    <section className = 'homepage'> 
        <div className = 'menu-container'> 
            <Card className = 'drinks-container'>
                <CardHeader className = 'drinks-header'> Drinks </CardHeader>
                <CardBody>
                    <ul className = 'drinks-list'> 
                        { dbData.drinks.map( ( item, index ) => (
                            <li key = { index }> { item.name } </li>
                        ))}
                    </ul>
                    <p className = 'menu-description'> Enjoy from our selection of { drinks } different house made beverages </p>
                </CardBody>
            </Card>
            <Card className = 'snacks-container'>
                <CardHeader className = 'snacks-header'> Snacks </CardHeader>
                <CardBody> 
                    <ul className = 'snacks-list'> 
                        { dbData.snacks.map( ( items, index ) => (
                            <li key = { index }> { items.name } </li>
                        ))}
                    </ul>
                    <p className = 'menu-description'> Spark your taste buds with one of our { snacks } specialty snack items </p>
                </CardBody>
            </Card>
        </div>
    </section>
    )
}

export default Home;