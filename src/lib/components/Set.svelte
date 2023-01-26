<script lang='ts'>
  import type { CardObj } from '../../types/card.type';
  import type { Shape } from '../../types/shape.type';
  import type { Color } from '../../types/color.type';
  import type { Background } from '../../types/background.type';

  import { shapes } from '../../types/shape.type';
  import { colors } from '../../types/color.type';
  import { backgrounds } from '../../types/background.type';

  import Board from './Board.svelte';

  let score: number = 0;
  let message: string = 'Good luck!';

  const fullDeck: CardObj[] = [];
  shapes.forEach((shape: Shape) => {
    return colors.forEach((color: Color) => {
      return backgrounds.forEach((bg: Background) => {
        return fullDeck.push({
          shape: shape,
          color: color,
          bg: bg,
        })
      })
    })
  });
  let deck: CardObj[] = [];
  let board: CardObj[] = [];
  let selection: CardObj[] = [];

  const drawCard = () => {
    const newCardIndex: number = Math.floor(Math.random() * deck.length);
    board.push(deck.splice(newCardIndex, 1)[0]);
  }

  const newDeal = () => {
    deck = [...fullDeck];
    board = [];
    selection = [];
    for (let i = 0; i < 9; i++) {
      drawCard();
    }
    score = 0;
    message = 'Good luck!';
  }

  const selectCard = (card: CardObj) => {
    const index = selection.indexOf(card);
    if (index === -1) {
      selection.push(card);
    } else {
      selection.splice(index, 1);
    }

    console.log(selection);
  };

  newDeal();

  const checkSet = (cards: CardObj[]) => {
    if (cards.length !== 3) {
      message = 'You must select exactly 3 cards!';
      return false;
    }
    const colors: Set<Color> = new Set(cards.map((c: CardObj) => c.color));
    const shapes: Set<Shape> = new Set(cards.map((c: CardObj) => c.shape));
    const backgrounds: Set<Background> = new Set(cards.map((c: CardObj) => c.bg));

    if (
      (colors.size === 1 || colors.size === 3) &&
      (shapes.size === 1 || shapes.size === 3) &&
      (backgrounds.size === 1 || backgrounds.size === 3)
    ) {
      score += 1;
      message = 'Set!';
      return true;
    }
    score -= 1;
    message = 'Incorrect!';
    return false;
  };

</script>

<Board
  cards={board}
  onClick={(e) => selectCard(e)}
/>
<p>{score}</p>
<p>{message}</p>

<button on:click={() => console.log(checkSet(selection))}>Set Check</button>
<button on:click={newDeal}>Reset</button>
