import { Link, Menu } from "@material-ui/core";
import {HiArrowDown} from "react-icons/hi";
import React, { useState } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
  Container, Header, H1, Title, Body, InputContainer, Background
} from "./styles";
import { padding } from "@material-ui/system";

function Insumos(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  

    return (
        <Container>
        <Background>
            <Header >
                <H1>
                Fazenda das Flores
                </H1>
                <HiArrowDown size={15} style={{marginLeft:"5px"}}/>

                <H1 style={{marginLeft: "550px"}}>
                Painel de Controle
                </H1>
                <H1>
                Insumos
                </H1>
                <H1>
                Custos
                </H1>
                <H1>
                Créditos
                </H1>
                <H1>
                Perfil
                </H1>
            </Header>
            <Title>
                Insumos
            </Title>
        </Background>
        <Body>
        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Sementes</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    label="Sementes"
                    onChange={handleChange}
                
                >
                    <MenuItem value={10}>Insumo</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <Button style={{marginLeft:"20px",height:"20px", marginTop:"30px", borderRadius:"30px", color:"#d5e4d9", backgroundColor:"#1b4557"}} variant="contained" >Editar</Button>
        </InputContainer>

        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Fertilizantes</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    label="Fertilizantes"
                    onChange={handleChange}
                
                >
                    <MenuItem value={10}>Insumo</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <Button style={{marginLeft:"20px",height:"20px", marginTop:"30px", borderRadius:"30px", color:"#d5e4d9", backgroundColor:"#1b4557"}} variant="contained" >Editar</Button>
        </InputContainer>
        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Defensivos</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    label="Defensivos"
                    onChange={handleChange}
                
                >
                    <MenuItem value={10}>Insumo</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <Button style={{marginLeft:"20px",height:"20px", marginTop:"30px", borderRadius:"30px", color:"#d5e4d9", backgroundColor:"#1b4557"}} variant="contained" >Editar</Button>
        </InputContainer>
        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Corretivos</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    label="Fertilizantes"
                    onChange={handleChange}
                
                >
                    <MenuItem value={10}>Insumo</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
            <Button style={{marginLeft:"20px",height:"20px", marginTop:"30px", borderRadius:"30px", color:"#d5e4d9", backgroundColor:"#1b4557"}} variant="contained" >Editar</Button>
        </InputContainer>

        
        
        </Body>
        
    </Container>
  );
}

export default Insumos;