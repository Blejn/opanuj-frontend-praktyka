import { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
}
export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <li key={character.id} className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  );
};
