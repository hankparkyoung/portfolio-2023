<script lang='ts'>
  import type { CardObj } from '../../types/card.type';
  import type { Shape } from '../../types/shape.type';
  import type { Color } from '../../types/color.type';
  import type { Background } from '../../types/background.type';

  import { shapes } from '../../types/shape.type';
  import { colors } from '../../types/color.type';
  import { backgrounds } from '../../types/background.type';

  import Board from './Board.svelte';

  const fullDeck: CardObj[] = [];
  shapes.forEach((shape: Shape) => {
    return colors.forEach((color: Color) => {
      return backgrounds.map((bg: Background) => {
        return fullDeck.push({
          selected: false,
          shape: shape,
          color: color,
          bg: bg,
        })
      })
    })
  });

  const testDeck: CardObj[] = fullDeck.slice(0, 9);

</script>

<Board
  cards={testDeck}
/>
