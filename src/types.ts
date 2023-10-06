export interface PokemonInterface {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack"?: number;
    "Sp. Defense"?: number;
    SpAttack?: number;
    SpDefense?: number;
    Speed: number;
  };
}

export interface PokemonSaveInterface {
  selectedTypeOne: string;
  selectedTypeTwo?: string;
  englishName: string;
  japaneseName?: string;
  chineseName?: string;
  frenchName?: string;
  hp: number;
  defense: number;
  attack: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

export interface SelectComponentProps {
  text: string;
  disabled?: boolean;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface Languages {
  english: string;
  chinese: string;
  japanese: string;
}
