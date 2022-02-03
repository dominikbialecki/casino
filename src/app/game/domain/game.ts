import { Id } from '../../core/domain/id';
import { Money } from '../../core/domain/money';
import { GameCategory } from './game-category';

interface GameProps {
  readonly id: Id;
  readonly categories: ReadonlyArray<GameCategory>;
  readonly name: string;
  readonly image: string;
  readonly jackpot?: Money;
}

export interface Game {
  readonly id: Id;
  readonly categories: ReadonlyArray<GameCategory>;
  readonly name: string;
  readonly image: string;
  readonly jackpot?: Money;
  readonly isTop: boolean;
  readonly isNew: boolean;
}

export class Game {
  static create(props: GameProps): Game {
    return {
      ...props,
      categories: props.jackpot ? [...props.categories, GameCategory.JACKPOT] : props.categories,
      isTop: props.categories.includes(GameCategory.TOP),
      isNew: props.categories.includes(GameCategory.NEW)
    };
  }
}
