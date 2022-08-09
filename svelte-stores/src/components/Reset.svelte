<script lang="ts">
  import { count } from '../store/stores';

  const reset = () => count.set(0);
</script>

<button on:click="{reset}">Reset</button>
