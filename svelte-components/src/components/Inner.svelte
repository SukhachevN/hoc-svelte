<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const greet = () => dispatch('greet', 'hello');
</script>

<button on:click={greet}>Greet</button>
