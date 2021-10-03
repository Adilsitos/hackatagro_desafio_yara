import { Link, Menu } from "@material-ui/core";
import {HiArrowDown} from "react-icons/hi";
import React, { useState } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
  Container, Header, H1, Title, Body, InputContainer
} from "./styles";
import { padding } from "@material-ui/system";

function Insumos(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  

    return (
        <Container>
        <Header >
            <Title>
            Insumos
            </Title>
        </Header>
        <Body>
        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                
                >
                    <MenuItem value={10}>Insumo</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <Button style={{marginLeft:"20px"}} variant="contained" >Outlined</Button>
        </InputContainer>

        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                
                >
                    <MenuItem value={10}>Insumo</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <Button style={{marginLeft:"20px"}} variant="contained" >Outlined</Button>
        </InputContainer>

        
        
        </Body>
        
        </Container>
  );
}

export default Insumos;