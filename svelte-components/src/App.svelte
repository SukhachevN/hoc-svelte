<script lang="ts">
  import Counter, { getTotalCount } from './components/Counter.svelte';
</script>

<main>
  <button on:click="{() => alert(getTotalCount())}">Alert total count</button>
  <Counter />
  <Counter />
  <Counter />
</main>

<style>
  :global(h3) {
    color: red;
  }

  main {
    margin: 0 auto;
  }

  h4 {
    color: orange;
  }
</style>
