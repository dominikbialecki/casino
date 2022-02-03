import { Id } from '../../core/domain/id';
import { Money } from '../../core/domain/money';

export interface Jackpot {
  gameId: Id;
  amount: Money;
}
