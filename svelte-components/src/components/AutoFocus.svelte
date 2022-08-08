<script lang="ts">
  import { onMount } from 'svelte';

  let inputRef: HTMLInputElement;

  onMount(() => inputRef.focus());
</script>

<input type="text" bind:this={inputRef} />
