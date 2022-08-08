<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div>
  <h2>This is popup</h2>
  <button on:click={() => dispatch('close', 'text')}>close popup</button>
</div>
