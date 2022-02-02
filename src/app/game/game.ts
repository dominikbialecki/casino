import { Id } from '../core/id';
import { GameCategory } from './game-category';

export interface GameProps {
  id: Id;
  categories: GameCategory[];
  name: string;
  image: string;
}

export class Game {
  id: Id;
  categories: GameCategory[];
  name: string;
  image: string;

  constructor(props: GameProps) {
    this.id = props.id;
    this.categories = props.categories;
    this.name = props.name;
    this.image = props.image;
  }

  hasCategory(category: GameCategory): boolean {
    return this.categories.some(c => c === category);
  }
}
