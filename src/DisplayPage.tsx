import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './DisplayPage.css';


const DisplayPage: React.FC = () => {
  const location = useLocation();
  const { pokemon } = location.state;
  const [movesInfo, setMovesInfo] = useState<string[]>([]);
  const [abilitiesInfo, setAbilitiesInfo] = useState<string[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (!pokemon) return; // Return early if pokemon is undefined

    const fetchMovesInfo = async () => {
      try {
        // Ensure moves array is defined and has at least two elements
        const move1Url = pokemon.moves[0]?.move?.url;
        const move2Url = pokemon.moves[1]?.move?.url;
        
        if (move1Url && move2Url) {
          const move1 = await axios.get(move1Url);
          const move2 = await axios.get(move2Url);
          setMovesInfo([move1.data.effect_entries[0].effect, move2.data.effect_entries[0].effect]);
        }
      } catch (error) {
        console.error('Error fetching moves info', error);
      }
    };

    const fetchAbilitiesInfo = async () => {
        try {
          // Ensure abilities array is defined
          const abilities = pokemon.abilities || [];
          const abilitiesInfoArray = await Promise.all(
            abilities
              .filter((ability: any) => !ability.is_hidden)
              .map(async (ability: any) => {
                const response = await axios.get(ability.ability.url);
                return response.data.effect_entries[0].effect;
              })
          );
          setAbilitiesInfo(abilitiesInfoArray);
        } catch (error) {
          console.error('Error fetching abilities information', error);
        }
      };

    fetchMovesInfo();
    fetchAbilitiesInfo();
  }, [pokemon]);

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="display-page">
      <PokemonCard
        name={pokemon.name}
        hp={pokemon.stats[0]?.base_stat || 'N/A'}
        imageUrl={pokemon.sprites?.front_default || ''}
        moves={[pokemon.moves[0]?.move?.name || [], pokemon.moves[1]?.move?.name || []]}
        abilities={pokemon.abilities?.filter((ability: any) => !ability.is_hidden).map((ability: any) => ability.ability.name) || []}
        movesInfo={movesInfo}
        abilitiesInfo={abilitiesInfo}
        baseExperience={pokemon.base_experience || 'N/A'}
      />
      <p>
        <button onClick={goBack} className="btn">Back</button>
      </p>
    </div>
  );
};

export default DisplayPage;

