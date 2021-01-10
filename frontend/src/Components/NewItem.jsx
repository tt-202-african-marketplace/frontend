import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
// handle submit axios call for submit button

const New_Item = (props) => {

  const[goods, setGoods] = useState({ item_name: "", price: "", category_id: "", description: ""})

  const handleChange = (event => {
    setGoods({ ...goods, [event.target.name]: event.target.value });
})   

const handleSubmit = (event) => {
event.preventDefault();
setGoods({...goods});
axios.post('https://tt-202-african-marketplace.herokuapp.com/api/auth/add-product', goods )
                .then(res => {
                    console.log('AXIOS SUCCESS: ', res);
                })
                .catch(err => {
                    console.error('There was an error registering: ', err)
                    console.log('AXIOS FAIL: values attempted: ', goods )
                })
    
// console.log(goods)
// console.log(typeof goods.price)
};
  
    return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Item Name</Label>
        <Input type="text" name="item_name" id="name" placeholder="" value={goods.item_name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="price">Item Price</Label>
        <Input type="number" name="price" id="price" placeholder="" value={goods.price} onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="Select">Category</Label>
        <Input type="select" name="category_id" id="Select" value={goods.category_id} onChange={handleChange}>
          <option value= {1}>"Animal Products"</option>
          <option value= {2}>Cereals</option>
          <option value= {3}>Clothing and Shoes</option>
          <option value= {4}>Cosmetics</option>
          <option value= {5}>Fruits</option>
          <option value= {6}>Seeds and Nuts</option>
          <option value= {7}>Vegetables</option>
          <option value= {8}>Other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="itemDescription">Item Description</Label>
        <Input type="textarea" name="description" id="itemDescription" value={goods.description} onChange={handleChange}/>
      </FormGroup>
      <Button value= 'submit'>Submit</Button>
    </Form>
  );
}

export default New_Item;
