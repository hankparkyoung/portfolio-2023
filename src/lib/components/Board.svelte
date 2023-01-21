<script lang='ts'>
  import type { CardObj } from '../../types/card.type';
  import Card from './Card.svelte';
  export let cards: CardObj[];

  const row1: CardObj[] = cards.slice(0, 3);
  const row2: CardObj[] = cards.slice(3, 6);
  const row3: CardObj[] = cards.slice(6, 9); 
</script>

<div class={'row'}>
  {#each row1 as card}
    <Card
      card={card}
    />
  {/each}
</div>
<div class={'row'}>
{#each row2 as card}
  <Card
    card={card}
  />
{/each}
</div>
<div class={'row'}>
{#each row3 as card}
  <Card
    card={card}
  />
{/each}
</div>

<style lang='scss'>
  .row {
    display: flex;
    justify-content: center;
  }
</style>