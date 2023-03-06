import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'


const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const Head = styled(Typography)`
  text-align: center;
  font-weight: 600;
`;
const CreateUser = () => {
    const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleSubmit = async (e) => {
    await axios.post("http://localhost:5000/api/v1/users/create", input);
    setInput({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <>
      <FormContainer>
        <Head variant="h4">create User Below</Head>
        <FormControl>
          <InputLabel>Name:</InputLabel>
          <Input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
            type="text"
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email:</InputLabel>
          <Input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
            type="email"
          />
        </FormControl>
        <FormControl>
          <InputLabel>password:</InputLabel>
          <Input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
            type="password"
          />
        </FormControl>
        <FormControl>
          <InputLabel>phone:</InputLabel>
          <Input
            name="phone"
            value={input.phone}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
            type="Number"
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={()=>handleSubmit( navigate('/users/all'))} >Create user</Button>
        </FormControl>
      </FormContainer>
    </>
  );
};

export default CreateUser;
