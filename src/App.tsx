/* eslint-disable 
import { useState } from 'react'
import { Grettings } from './Grettings'
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import newImage from './assets/hero.png';
import './App.css'

function App() {
  const name: string = "Barry";
  const lastName: string = "Allen";
  const age: number = 25; 
  const isLearningReact: boolean = true;
  const city: string = "Central City";

  const secretIdentity: string = "The Flash";
  const wife: string = "Iris West";
  const mainEnemy: string = "Reverse Flash (Eobard Thawne)";
  const teamFlash: string[] = ["Cisco Ramon", "Caitlin Snow", "Harrison Wells"];
  const powers: string[] = ["Supervelocidad", "Regeneración celular", "Viajes en el tiempo"];

  function greet(name: string, lastName: string, age: number, city: string): string {
    return `Hola, soy ${name} ${lastName}, tengo ${age} años y vivo en ${city}.`;
  }

  function showMessage(): void {
    alert('Hola, soy ' + name + ' ' + lastName);
  }

  return (
    <div className='app-container'>
      <h1>{greet(name, lastName, age, city)}</h1>
      <Grettings secretIdentity={secretIdentity} wife={wife} mainEnemy={mainEnemy} teamFlash={teamFlash} powers={powers} />
      <Button variant="contained" color="primary" onClick={showMessage}>Click me</Button>
      <Button variant="text" color="primary">Click me</Button>
      <Button variant="outlined" color="primary">Click me</Button>
      <Avatar alt="Remy Sharp" src={newImage} />
      <p className='pregunta'>
        ¿Está aprendiendo React {name}?
        {isLearningReact ? " Sí" : " No"}
      </p>
    </div>
  );
}

export default App
*/

/*
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
 
type Person = {
  id: number;
  name: string;
  age?: number;
  image: string;
};
 
function App() {
  const people: Person[] = [
    {
      id: 1,
      name: "Dalia",
      age: 30,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "Antonella",
      image: "https://i.pravatar.cc/150?img=10",
    },
  ];
 
  function viewProfile(name: string) {
    alert(`Abrir el perfil de ${name}`);
  }
 
  return (
<Stack spacing={2} sx={{ padding: 3 }}>
<h1>Perfiles</h1>
 
      {people.map((person) => (
<Stack
          key={person.id}
          direction="row"
          spacing={2}
          sx={{
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: 2,
            alignItems: "center",
          }}
>
<Avatar src={person.image} alt={person.name} />
 
          <div>
<strong>{person.name}</strong>
 
            {person.age !== undefined && (
<p>Edad: {person.age}</p>
            )}
</div>
 
          <Button
            variant="outlined"
            onClick={() => viewProfile(person.name)}
>
            Ver perfil
</Button>
</Stack>
      ))}
</Stack>
  );
}
 
*/

import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./App.css";

type Character = {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  function viewProfile(name: string) {
    alert(`Abriendo los archivos interdimensionales de ${name}`);
  }

  return (
    <div className="app-container">
      <h1 className="titulo-principal">Perfiles de Rick and Morty</h1>

      <Stack spacing={2}>
        {characters.map((character) => (
          <Stack
            key={character.id}
            direction="row"
            spacing={2}
            className="tarjeta-personaje"
          >
            <Avatar 
              src={character.image} 
              alt={character.name} 
              sx={{ width: 64, height: 64 }} 
            />

            <div className="info-personaje">
              <strong>{character.name}</strong>
              <p className="especie">Especie: {character.species}</p>
              <p className={`estatus status-${character.status.toLowerCase()}`}>
                Estado: {character.status}
              </p>
            </div>

            <Button
              variant="outlined"
              className="boton-perfil"
              onClick={() => viewProfile(character.name)}
            >
              Ver perfil
            </Button>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default App;

/* Hola*/