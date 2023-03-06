import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const Trow = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const TrowData = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/users/all");
      setUsers(res.data);
    };
    getAllData();
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/users/${id}`);
    const newUsers = users.filter((item) => {
      return item._id !== id;
    });
    setUsers(newUsers);
  };
  return (
    <>
      <StyledTable>
        <TableHead>
          <Trow>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Phone No.</TableCell>
            <TableCell></TableCell>
          </Trow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TrowData key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Link to={`${user._id}`}>
                    <Button variant="contained" style={{ marginRight: 10 }}>
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TrowData>
            );
          })}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default ShowUsers;
