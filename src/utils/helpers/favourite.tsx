import { get, save } from "../services/localstorage";

interface character {
  id: string;
}

function favouriteCharacterList(): character[]|[] {
   let favouriteCharacters : string|null = get("characters");
   if(!favouriteCharacters) return [];
   else return JSON.parse(favouriteCharacters);
}

function favouriteCharacterIndex (characters: character[]|[], currentCharacter: character): number {
  return characters.findIndex (function ( character : character) : boolean {
    return character.id === currentCharacter.id ;
  });
}

function favouriteACharacter(character: character): void {
  let characters : character[]|never = favouriteCharacterList();
  const isCharacterFavourite : number = favouriteCharacterIndex(characters, character); 
  if (isCharacterFavourite === -1) {
    characters.splice(isCharacterFavourite, 1);
    save("characters", JSON.stringify(characters));
  } else {
    characters.push(character);
    save("characters", JSON.stringify(characters));
  }
}

export { favouriteCharacterList, favouriteCharacterIndex, favouriteACharacter };
