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
  const isSingleMove = moves.length == 1

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
  <h3 style={{ display: 'inline-block', marginRight: '5px', marginTop: '20px' }}>
    {isSingleMove ? 'Move:' : 'Moves:'}
  </h3>
  {isSingleMove ? (
    <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
      <li
        key={moves[0]}
        onMouseEnter={() => setMoveHover(0)}
        onMouseLeave={() => setMoveHover(null)}
        style={{ 
          cursor: 'pointer', 
          marginBottom: '10px',
          position: 'relative',
          display: 'inline-block' 
        }}
      >
        {moves[0]}
        {moveHover === 0 && (
          <span style={{ 
            color: 'white', 
            fontSize: '0.9em',
            display: 'block', 
            marginTop: '5px'
          }}>
            {movesInfo[0]}
          </span>
        )}
      </li>
    </ul>
  ) : (
    <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
      {moves.map((move, index) => (
        <li
          key={index}
          onMouseEnter={() => setMoveHover(index)}
          onMouseLeave={() => setMoveHover(null)}
          style={{ 
            cursor: 'pointer', 
            marginBottom: '10px',
            marginLeft: '15px',
            position: 'relative'
          }}
        > 
          {move}
          {moveHover === index && (
            <span style={{ 
              color: 'white', 
              fontSize: '0.9em',
              display: 'block', // Ensure it starts on a new line
              marginTop: '5px' // Space between ability and description
            }}>
              {movesInfo[index]}
            </span>
          )}
        </li>
      ))}
    </ul>
  )}
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
            fontSize: '1.2em',
            marginTop: '5px'
          }}
        >
          {abilities[0]}
          {abilityHover === 0 && <span style={{ color: 'white', fontSize: '0.9em', display: 'block'}}>{abilitiesInfo[0]}</span>}
        </p>
      ) : (
        <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
          {abilities.map((ability, index) => (
            <li
              key={index}
              onMouseEnter={() => setAbilityHover(index)}
              onMouseLeave={() => setAbilityHover(null)}
              style={{ cursor: 'pointer', marginBottom: '10px', marginLeft: '15px', }}
            >
              {ability}
              {abilityHover === index && <span style={{ color: 'white', fontSize: '0.9em', display: 'block', marginTop: '5px'}}>{abilitiesInfo[index]}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>

    </div>
  );
};

export default PokemonCard;
