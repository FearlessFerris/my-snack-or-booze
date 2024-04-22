// Drinks Recipies Component Implementation 


// Dependencies 
import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';


// Components & Necessary Files 
import dbData from './db.json';
import './SnacksRecipes.css';


// Drinks Recipies Component 
function SnacksRecipes() {

    const { id } = useParams();
    const selectedSnack = dbData.snacks.find(( snack ) => snack.id ===  id );

    return(
        <div className = 'container'>
            <Card className = 'snacks-recipe-container'>
                <CardHeader className = 'snacks-recipe-header'> Snacks Recipes </CardHeader>
                <CardBody>
                    <h1> { selectedSnack.name } </h1>
                    <h3> { selectedSnack.description } </h3>
                    <h3 className = 'snacks-recipe'> { selectedSnack.recipe } </h3>
                    <h3> { selectedSnack.serve } </h3>
                </CardBody>
            </Card>
        </div>
    )
}

export default SnacksRecipes;