<script lang="ts">
  import { count } from '../store/stores';

  const increment = () => count.update((value) => value + 1);
</script>

<button on:click="{increment}">Icrement</button>
