<script lang="ts">
  import { count } from '../store/stores';

  const decrement = () => count.update((value) => value - 1);
</script>

<button on:click="{decrement}">Decrement</button>
