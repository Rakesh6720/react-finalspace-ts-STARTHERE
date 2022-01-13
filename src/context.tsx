import React, { useState } from 'react';

type CharacterIdType = {
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
};

const context = React.createContext<CharacterIdType>({} as CharacterIdType);

const CharacterIdProvider: React.FC = ({ children }) => {
  const [characterId, setCharacterId] = useState(1);
  return (
    <context.Provider value={{ characterId, setCharacterId }}>
      {children}
    </context.Provider>
  );
};

export default CharacterIdProvider;

export const useCharacterId = () => React.useContext(context);
