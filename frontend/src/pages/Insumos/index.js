import { Link, Menu } from "@material-ui/core";
import {HiArrowDown} from "react-icons/hi";
import React, { useState } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
  Container, Header, H1, Title, Body, InputContainer, Background, HeaderTop
} from "./styles";
import { padding } from "@material-ui/system";

function Insumos(props) {

    const [semente, setSemente] = React.useState('');
    const [fertilizante, setFertilizante] = React.useState('');
    const [defensivo, setDefensivo] = React.useState('');
    const [corretivo, setCorretivo] = React.useState('');


    return (
        <Container>
        
            <Header >
                <HeaderTop>

                <H1>
                Fazenda das Flores
                </H1>
                <HiArrowDown size={15} style={{marginLeft:"5px", color:"#556B2F"}}/>

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
                </HeaderTop>

                <Title>
                Insumos
            </Title>
            

            </Header>
            
        <Body>
        <InputContainer>
            <FormControl  variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-standard-label">Sementes</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={semente}
                    label="Sementes"
                    onChange={(event)=> setSemente(event.target.value)}
                    
                
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
                    value={fertilizante}
                    label="Fertilizantes"
                    onChange={(event)=> setFertilizante(event.target.value)}
                
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
                    value={defensivo}
                    label="Defensivos"
                    onChange={(event)=> setDefensivo(event.target.value)}
               
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
                    value={corretivo}
                    label="Fertilizantes"
                    onChange={(event)=> setCorretivo(event.target.value)}
                    
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