export type Category = 
  | 'All' 
  | 'Bengali Art' 
  | 'Folk Art' 
  | 'Heritage & Cinema' 
  | 'Floral & Nature' 
  | 'Textile Art'
  | 'Stitch Art';

export interface Artwork {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  featured: boolean;
  aspect?: 'landscape' | 'portrait' | 'square';
  technique?: string;
  details?: string[];
}

export type PageRoute = 'home' | 'handcrafts' | 'about' | 'contact';

export interface ContactFormData {
  name: string;
  contact: string;
  email: string;
  interest: string;
  message: string;
}
