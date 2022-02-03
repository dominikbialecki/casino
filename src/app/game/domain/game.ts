import { Id } from '../../core/domain/id';
import { Money } from '../../core/domain/money';
import { GameCategory } from './game-category';

export interface Game {
  readonly id: Id;
  readonly categories: ReadonlyArray<GameCategory>;
  readonly name: string;
  readonly image: string;
  readonly jackpot?: Money;
  readonly isTop: boolean;
  readonly isNew: boolean;
}
