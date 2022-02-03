import { Game } from '../domain/game';

export function gameMock(props: Partial<Game>): Game {
  return Game.create({
    categories: [],
    image: 'image',
    name: 'name',
    id: 'id',
    ...props
  });
}
