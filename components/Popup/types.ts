export interface popupProps {
  title: string;
  description: string;
  releaseYear: number;
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    };
  };
};