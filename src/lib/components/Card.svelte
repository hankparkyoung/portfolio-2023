<script lang='ts'>
  import type { CardObj } from '../../types/card.type';
  export let card: CardObj;

  export let selected: boolean = false;

</script>

<button class={`
  card
  card--${card.bg}
`}>
  {#if selected}
    <div class={'selected'} />
  {/if}
  <div class={`
    ${card.shape}
    ${card.color}
  `}/>
</button>

<style lang='scss'>

  button {
    border: none;
  }

  .selected {
    position: absolute;
    width: 120px;
    height: 120px;
    backdrop-filter: blur(4px) saturate(50%);
    border-radius: 8px;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin: 12px;
    border-radius: 8px;
    &--black {
      background-color: #363636;
      &:hover {
        background-color: #0c0c0c;
      }
    }
    &--grey {
      background-color: #979797;
      &:hover {
        background-color: #7e7e7e;
      }
    }
    &--white {
      background-color: #F1F1F1;
      &:hover {
        background-color: #d2d1d1;
      }
    }
  }

  .square {
    width: 52px;
    height: 52px;
    border-radius: 8px;
  }
  .circle {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .line {
    width: 20px;
    height: 60px;
    border-radius: 8px;
  }

  .purple {
    background-color: #BF5DFF;
  }
  .green {
    background-color: #35D062;
  }
  .orange {
    background-color: #F9BB4A;
  }

</style>