import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import dbData from './db.json';
import './AddItemForm.css'; 

function AddItemForm() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemRecipe, setItemRecipe] = useState('');
  const [itemServe, setItemServe] = useState('');
  const navigate = useNavigate();

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: itemName.toLowerCase().replace(/\s/g, '-'), 
      name: itemName,
      description: itemDescription,
      recipe: itemRecipe,
      serve: itemServe,
    };

    const itemCategory = document.getElementById('itemCategory').value;
    if (itemCategory === 'drinks') {
      dbData.drinks.push(newItem);
    } else if (itemCategory === 'snacks') {
      dbData.snacks.push(newItem);
    }

    navigate('/');
  };

  return (
    <div className="container">
      <Card className="add-item-form-container">
        <CardHeader className="add-item-form-header">Add New Item</CardHeader>
        <CardBody>
          <Form onSubmit={handleAddItem}>
            <FormGroup>
              <Label for="itemName">Name:</Label>
              <Input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="itemDescription">Description:</Label>
              <Input type="textarea" id="itemDescription" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="itemRecipe">Recipe:</Label>
              <Input type="textarea" id="itemRecipe" value={itemRecipe} onChange={(e) => setItemRecipe(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="itemServe">Serve:</Label>
              <Input type="text" id="itemServe" value={itemServe} onChange={(e) => setItemServe(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="itemCategory">Category:</Label>
              <Input type="select" id="itemCategory">
                <option value="drinks">Drinks</option>
                <option value="snacks">Snacks</option>
              </Input>
            </FormGroup>
            <Button type="submit" color="primary">Add Item</Button>
            <Link to="/" className="btn btn-secondary">Cancel</Link>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddItemForm;
