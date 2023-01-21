<script lang='ts'>
  import Set from '../../../lib/components/Set.svelte';
</script>

<div class='container'>
  <h1 class='title'>Set</h1>
  <Set />
</div>

<style lang='scss'>

:global(*) {
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 480px;
    background-color: #dedede;
    border-radius: 4px;
    margin: 12px auto;
    padding: 8px;
  }

  .title {
    padding: 12px;
    font-size: 4rem;
    text-align: center;
  }

</style>