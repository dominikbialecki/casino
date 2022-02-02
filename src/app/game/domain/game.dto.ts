import { Id } from '../../core/id';
import { GameCategory } from './game-category';

export interface GameDto {
  readonly id: Id;
  readonly categories: ReadonlyArray<GameCategory>;
  readonly name: string;
  readonly image: string;
}
