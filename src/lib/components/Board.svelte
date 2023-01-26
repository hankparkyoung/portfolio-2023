<script lang='ts'>
  import type { CardObj } from '../../types/card.type';
  import Card from './Card.svelte';
  export let cards: CardObj[];
  export let onClick: (card: CardObj) => void;

  let row1: CardObj[];
  $: row1 = cards.slice(0, 3);
  let row2: CardObj[];
  $: row2 = cards.slice(3, 6);
  let row3: CardObj[];
  $: row3 = cards.slice(6, 9); 
</script>

<div class={'row'}>
  {#each row1 as card}
    <Card
      card={card}
      onClick={onClick}
    />
  {/each}
</div>
<div class={'row'}>
{#each row2 as card}
  <Card
    card={card}
    onClick={onClick}
  />
{/each}
</div>
<div class={'row'}>
{#each row3 as card}
  <Card
    card={card}
    onClick={onClick}
  />
{/each}
</div>

<style lang='scss'>
  .row {
    display: flex;
    justify-content: center;
  }
</style>