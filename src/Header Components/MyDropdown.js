import Dropdown from 'react-bootstrap/Dropdown';
import classes from './MyDropdown.module.css';
import WebContext from '../Context Container/WebContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyDropdown() {

  const contxt = useContext(WebContext);
  const [error, setError] = useState('');
  const navigate = useNavigate('');

  const userEmail = contxt.users.email;


  const logoutHandler = async() =>{
    try{
      await contxt.logoutUser();
      navigate('/sign-up')
    }catch (err){
      setError(err)
    }
  }

  return (
    <Dropdown className={classes.dropdown_container}>
      <Dropdown.Toggle id="dropdown-basic" className={classes.dropdown}>
        User Details
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item style={{color:'black'}}>{userEmail}</Dropdown.Item>        <Dropdown.Item onClick={logoutHandler} style={{color:'black'}}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;