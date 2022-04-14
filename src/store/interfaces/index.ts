export type Category = 'mens' | 'womens' | 'academy' | 'training';

export type Type = 'article' | 'gallery' | 'video';

export interface ICard {
  title: string;
  url?: string;
  date: string;
  featuredImage: string;
  category?: Category;
  type?: Type;
  categoryUrl?: string;
}

export interface IPromo {
  title: string;
  label?: string;
  backgroundImage: string;
  featuredImage: string;
  buttonLink?: string;
  buttonText?: string;
}

export interface IAppContext {
  state: IState;
}

export interface IState {
  cards?: ICard[];
}