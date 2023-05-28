import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSide from '../components/RightSide/RightSide'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import MenuTable from '../components/Menu/MenuTable'
import { useState } from 'react'
import { Button, FormControl, FormLabel, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useParams, useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import useQuery from '../components/useQuery'
import MainContainer from '../components/MainContainer'

function CreateRestaurant() {
  const [formVal, setFormVal] = useState({
    address: '',
    id: dayjs().format('x'),
    is_closed: '',
    name: '',
    price: '',
    transactions: '',
    image_url: '',
    category: '',
  })
  const params = useLocation()
  let parameter = useQuery();

  const [restaurant, setRestaurant] = useState([])
  const SubmitHandler = async (e) => {
    e.preventDefault()
    const mapped = { ...formVal, transactions: [formVal.transactions] }

    if (parameter.get('id')) {
      const rawResponse = await fetch(`https://uber-food-clone-a209f-default-rtdb.firebaseio.com/restaurant/${parameter.get('id')}.json`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapped)
      });

      alert('Update success')
    }
    else {
      const rawResponse = await fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/restaurant.json', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapped)
      });

      alert('Create success')
    }

  }

  const hanldeInput = (e) => {
    var { name, value } = e.target;

    setFormVal((pre) => {
      return {
        ...pre,
        [name]: value
      }
    })
  }
  useEffect(() => {

    if (parameter.get('id')) {
      fetch(`https://uber-food-clone-a209f-default-rtdb.firebaseio.com/restaurant/${parameter.get('id')}.json`).then((res) => res.json()).then(json => setFormVal({ ...json, transactions: json.transactions[0] }));
    }
  }, [params])
  useEffect(() => {

    fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/restaurant.json').then((res) => res.json()).then(json => setRestaurant(json));
  }, [])


  const STATICCAT = ['burger', 'bars', 'italian', 'seafood', 'sushi']

  return (
    <MainContainer>

      <Sidebar />
      <div className='MainDash'>
        <h1>{parameter.get('id') ? 'Edit Retaurant' : 'Create Retaurant'}</h1>
        <form onSubmit={SubmitHandler} className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Restaurant Name</FormLabel>
                <TextField style={{ width: 500 }} name='name' variant="outlined" size='small' onChange={hanldeInput} value={formVal.name} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <TextField style={{ width: 500 }} name='address' variant="outlined" size='small' onChange={hanldeInput} value={formVal.address} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Transactions</FormLabel>
                <Select
                  size='small'
                  style={{ width: 500 }}
                  value={formVal.transactions}
                  onChange={hanldeInput}
                  name='transactions'
                >
                  <MenuItem value='delivery'>delivery</MenuItem>)
                  <MenuItem value='pickup'>pickup</MenuItem>)
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Price</FormLabel>
                <Select
                  size='small'
                  style={{ width: 500 }}
                  value={formVal.price}
                  onChange={hanldeInput}
                  name='price'
                >
                  <MenuItem value='$'>$</MenuItem>)
                  <MenuItem value='$$'>$$</MenuItem>)
                  <MenuItem value='$$$'>$$$</MenuItem>)
                  <MenuItem value='$$$$'>$$$$</MenuItem>)
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <TextField style={{ width: 500 }} name='image_url' variant="outlined" size='small' onChange={hanldeInput} value={formVal.image_url} />
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

export default CreateRestaurant
