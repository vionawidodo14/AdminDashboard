import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSide from '../components/RightSide/RightSide'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import MenuTable from '../components/Menu/MenuTable'
import { useState } from 'react'
import { Button, FormControl, FormLabel, Grid, MenuItem, Select, TextField } from '@mui/material'
import MainContainer from '../components/MainContainer'

function EditMenu() {
  const [formVal, setFormVal] = useState({
    restauranID: 1,
    restauranName: '',
    title: '',
    price: '',
    category: '',
  })
  const SubmitHandler = async (e) => {
    e.preventDefault()
  }

  const hanldeInput = (e) => {
    const { name, value } = e.target;
    setFormVal((pre) => {
      return {
        ...pre,
        [name]: value
      }
    })
  }

  const STATICMENU = [
    {
      id: 1,
      name: 'McDonald'
    },
    {
      id: 2,
      name: 'Pizza Hut'
    },
    {
      id: 3,
      name: 'Starbucks'
    }
  ]
  return (
    <MainContainer>
      <Sidebar />
      <div className='MainDash'>
        <h1>Edit Menu</h1>
        <form onSubmit={SubmitHandler} className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Restaurant Name</FormLabel>
                <Select
                  size='small'
                  style={{ width: 500 }}
                  value={formVal.restauranID}
                  onChange={hanldeInput}
                >
                  {STATICMENU.map(i => <MenuItem value={i.id}>{i.name}</MenuItem>)}
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
                <FormLabel>Price</FormLabel>
                <TextField style={{ width: 500 }} name='price' variant="outlined" type='number' size='small' onChange={hanldeInput} value={formVal.price} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <TextField style={{ width: 500 }} name='category' variant="outlined" size='small' onChange={hanldeInput} value={formVal.category} />
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

export default EditMenu
