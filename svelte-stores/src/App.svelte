<script lang="ts">
  import Decrement from './components/Decrement.svelte';
  import Display from './components/Display.svelte';
  import Increment from './components/Increment.svelte';
  import Reset from './components/Reset.svelte';
  import Time from './components/Time.svelte';
</script>

<main>
  <Time />
  <Display />
  <Increment />
  <Decrement />
  <Reset />
</main>

<style>
  main {
    margin: 0 auto;
  }
</style>
