<script lang='ts'>
  import type { CardObj } from '../../types/card.type';
  export let card: CardObj;
</script>

<button class={`card card--${card.bg}`}>
  <div class={'overlay'} />
  <div class={`
    shape
    shape--${card.shape}
    shape--${card.selected ? card.color : `${card.color}--selected`}
  `}/>
</button>

<style lang='scss'>

  button {
    border: none;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin: 8px;
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

  .shape {
    width: 60px;
    height: 60px;
    &--purple {
      background-color: #BF5DFF;
      &--selected {
        background-color: #BF5DFF; // change this
      }
    }
    &--green {
      background-color: #35D062;
      &--selected {
        background-color: #35D062; // change this
      }
    }
    &--orange {
      background-color: #F9BB4A;
      &--selected {
        background-color: #F9BB4A; // change this
      }
    }
    &--square {
      width: 52px;
      height: 52px;
      border-radius: 8px;
    }
    &--circle {
      border-radius: 30px;
    }
    &--line {
      border-radius: 8px;
      width: 20px;
    }
  }

</style>