import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSide from '../components/RightSide/RightSide'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import MenuTable from '../components/Menu/MenuTable'
import { useState } from 'react'
import { Button, FormControl, FormLabel, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useParams, useLocation } from 'react-router-dom'
import useQuery from '../components/useQuery'
import MainContainer from '../components/MainContainer'

function CreateMenu() {
  const [formVal, setFormVal] = useState({
    restaurantID: 1,
    restaurantName: '',
    title: '',
    description: '',
    imageUrl: '',
    price: '',
    category: '',
    basePrice: '',
  })
  const params = useLocation()
  let parameter = useQuery();

  const [restaurant, setRestaurant] = useState([])
  const SubmitHandler = async (e) => {
    e.preventDefault()

    if (parameter.get('id')) {
      const rawResponse = await fetch(`https://uber-food-clone-a209f-default-rtdb.firebaseio.com/menu/${parameter.get('id')}.json`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formVal)
      });

      alert('Update success')
    }
    else {
      const rawResponse = await fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/menu.json', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formVal)
      });

      alert('Create success')
    }

  }

  const hanldeInput = (e) => {
    var { name, value } = e.target;
    if (name == 'restaurantID') {
      const resId = Object.keys(restaurant).find(id => restaurant[id].id == value)
      setFormVal((pre) => {
        return {
          ...pre,
          restaurantID: value,
          restaurantName: restaurant[resId].name,
        }
      })
      return
    }

    setFormVal((pre) => {
      return {
        ...pre,
        [name]: value
      }
    })
  }

  useEffect(() => {

    if (parameter.get('id')) {
      fetch(`https://uber-food-clone-a209f-default-rtdb.firebaseio.com/menu/${parameter.get('id')}.json`).then((res) => res.json()).then(json => setFormVal(json));
    }
  }, [params])

  useEffect(() => {
    fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/restaurant.json').then((res) => res.json()).then(json => setRestaurant(json));
  }, [])


  const STATICCAT = ['burger', 'pizza', 'bar', 'fastfood']

  return (
    <MainContainer>

      <Sidebar />
      <div className='MainDash'>
        <h1>  {parameter.get('id') ? 'Edit Menu' : 'Create Menu'}</h1>
        <form onSubmit={SubmitHandler} className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Restaurant Name</FormLabel>
                <Select
                  size='small'
                  style={{ width: 500 }}
                  value={formVal.restaurantID}
                  onChange={hanldeInput}
                  name='restaurantID'
                >
                  {Object.keys(restaurant).map((id) => <MenuItem value={restaurant[id].id}>{restaurant[id].name}</MenuItem>)}
                </Select>

              </FormControl>
            </Grid>
            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Menu Title</FormLabel>
                <TextField style={{ width: 500 }} name='title' variant="outlined" size='small' onChange={hanldeInput} value={formVal.title} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Base Price</FormLabel>
                <TextField style={{ width: 500 }} name='basePrice' variant="outlined" type='number' size='small' onChange={hanldeInput} value={formVal.basePrice} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Price</FormLabel>
                <TextField style={{ width: 500 }} name='price' variant="outlined" type='number' size='small' onChange={hanldeInput} value={formVal.price} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <TextField style={{ width: 500 }} name='description' variant="outlined" size='small' onChange={hanldeInput} value={formVal.description} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <TextField style={{ width: 500 }} name='imageUrl' variant="outlined" size='small' onChange={hanldeInput} value={formVal.imageUrl} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  size='small'
                  style={{ width: 500 }}
                  value={formVal.category}
                  onChange={hanldeInput}
                  name='category'
                >
                  {STATICCAT.map((val) => <MenuItem value={val}>{val}</MenuItem>)}
                </Select>

              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div className="inputfield">
                <Button type='submit' variant="contained">Submit</Button>
              </div>
            </Grid>

          </Grid>
        </form>
      </div>
      {/* <RightSide /> */}
      <div></div>
    </MainContainer>
  )
}

export default CreateMenu
