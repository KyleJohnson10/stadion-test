export type Category = 'mens' | 'womens' | 'academy' | 'training';

export type Type = 'article' | 'gallery' | 'video';

export interface ICard {
  title: string;
  url?: string;
  date: string;
  featuredImage: string;
  category?: Category;
  type?: Type;
}