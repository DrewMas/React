import './App.css';
import CharacterComponents from "./components/characters/character.components";



function App() {
  return (
      <div>

        <CharacterComponents desctiption={'pikachu'}
                             image={'https://www.pngarts.com/files/3/Pokemon-Pikachu-PNG-Photo.png'}/>
        <CharacterComponents desctiption={'charmander'}
                             image={'https://www.pngarts.com/files/3/Pokemon-Transparent-Background-PNG.png'}/>
        <CharacterComponents desctiption={'squirtle'}
                             image={'https://www.pngarts.com/files/3/Pokemon-PNG-Download-Image.png'}/>
        <CharacterComponents desctiption={'bulbasaur'}
                             image={'https://www.pngarts.com/files/3/Bulbasaur-Free-PNG-Image.png'}/>

      </div>
  );
}

export default App;
