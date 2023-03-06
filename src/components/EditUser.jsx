import React, { useState, useEffect } from "react";
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
import { useParams, useNavigate } from "react-router-dom";

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
const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get(`http://localhost:5000/api/v1/users/single/${id}`);
      setInput(res.data);
    };
    getAllData();
  }, [id]);
  const handleEditedData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/v1/users/${id}`,input)
    navigate('/users/all');
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
              setInput({ ...input, [e.target.name]: e.target.value })
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
              setInput({ ...input, [e.target.name]: e.target.value })
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
              setInput({ ...input, [e.target.name]: e.target.value })
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
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="Number"
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleEditedData}>
            Update user
          </Button>
        </FormControl>
      </FormContainer>
    </>
  );
};

export default EditUser;
