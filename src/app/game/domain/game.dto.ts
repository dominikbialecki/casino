import { GameCategory } from './game-category';

export interface GameDto {
  readonly id: string;
  readonly categories: ReadonlyArray<GameCategory>;
  readonly name: string;
  readonly image: string;
}
