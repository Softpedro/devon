export interface Movies {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

export interface catsProps {
  title: string;
  description: string;
  link: string;
  button: string;
}

export enum CategoriesEnum {
  Series = 'series',
  Peliculas = 'peliculas',
}