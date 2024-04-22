// Drinks Recipies Component Implementation 


// Dependencies 
import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';


// Components & Necessary Files 
import dbData from './db.json';
import './DrinksRecipes.css';


// Drinks Recipies Component 
function DrinksRecipes() {

    const { id } = useParams();
    const selectedDrink = dbData.drinks.find(( drink ) => drink.id ===  id );

    return(
        <div className = 'container'>
            <Card className = 'drinks-recipe-container'>
                <CardHeader className = 'drinks-recipe-header'> Drinks Recipes </CardHeader>
                <CardBody>
                    <h1> { selectedDrink.name } </h1>
                    <h3> { selectedDrink.description } </h3>
                    <h3 className = 'drinks-recipe'> { selectedDrink.recipe } </h3>
                    <h3> { selectedDrink.serve } </h3>
                </CardBody>
            </Card>
        </div>
    )
}

export default DrinksRecipes;