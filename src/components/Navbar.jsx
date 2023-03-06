import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import { Link } from 'react-router-dom'
const Container = styled(AppBar)`
    background-color: #000000;
    height: 70px;
    margin-top: 5px;
`
const Tabs = styled(Link)`
    font-size: 20px;
    margin-right: 20px;
    text-decoration: none;
    color : inherit;
`

const Navbar = () => {
  return (
    <div style={{marginTop: 10}}>
    <Container position='static'>
        <Toolbar>
            <Tabs to='/'>Crud-App</Tabs>
            <Tabs to='/users/create'>Create User</Tabs>
            <Tabs to='/users/all'>Show Users</Tabs>
        </Toolbar>
    </Container>

    </div>
  )
}

export default Navbar