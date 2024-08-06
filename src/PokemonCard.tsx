import React, { useState } from 'react';
import './PokemonCard.css';

interface PokemonCardProps {
  name: string;
  hp: number;
  imageUrl: string;
  moves: string[];
  abilities: string[];
  movesInfo: string[];
  abilitiesInfo: string[];
  baseExperience: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, hp, imageUrl, moves, abilities, movesInfo, abilitiesInfo, baseExperience }) => {
  const [moveHover, setMoveHover] = useState<number | null>(null);
  const [abilityHover, setAbilityHover] = useState<number | null>(null);
  const isSingleAbility = abilities.length == 1

  return (
    <div className="pokemon-card">
      <div className='inline-container'>
      <h2>{name.replace(name[0], name[0].toLocaleUpperCase())}</h2>
      <p className="hp">{hp} hp</p>
      </div>
      <div className='image-container'>
        <img src={imageUrl} alt={name} className='image'/>
      </div>
      <div className="moves">
        <h3>Moves</h3>
        <ul>
          {moves.map((move, index) => (
            <li 
              key={index}
              onMouseEnter={() => setMoveHover(index)}
              onMouseLeave={() => setMoveHover(null)}
            >
              {move}
              {moveHover === index && <p className="move-info">{movesInfo[index]}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div>
      <h3 style={{ display: 'inline-block', marginRight: '5px', marginTop: '20px' }}>
        {isSingleAbility ? 'Ability:' : 'Abilities:'}
      </h3>
      {isSingleAbility ? (
        <p
          key={abilities[0]}
          onMouseEnter={() => setAbilityHover(0)}
          onMouseLeave={() => setAbilityHover(null)}
          style={{ 
            display: 'inline', 
            cursor: 'pointer',
            margin: 0,
            fontSize: '1.2em'
          }}
        >
          {abilities[0]}
          {abilityHover === 0 && <span style={{ color: 'white', fontSize: '0.9em' }}>{abilitiesInfo[0]}</span>}
        </p>
      ) : (
        <ul>
          {abilities.map((ability, index) => (
            <li
              key={index}
              onMouseEnter={() => setAbilityHover(index)}
              onMouseLeave={() => setAbilityHover(null)}
              style={{ cursor: 'pointer', marginBottom: '10px' }}
            >
              {ability}
              {abilityHover === index && <span style={{ color: 'white', fontSize: '0.9em' }}>{abilitiesInfo[index]}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default PokemonCard;
