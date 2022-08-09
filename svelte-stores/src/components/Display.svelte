<script lang="ts">
  import { count, customCount } from '../store/stores';
</script>

<h2>Current count: {$count}</h2>
<h2>Custom count: {$customCount}</h2>
<button on:click="{() => customCount.increment(2)}">
  Increment custom count (2)
</button>
<button on:click="{() => customCount.decrement(2)}">
  Decrement custom count(2)
</button>
<button on:click="{() => customCount.reset(10)}">
  Reset custom count (10)
</button>
