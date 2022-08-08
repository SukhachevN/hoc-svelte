<script lang="ts">
  import { getContext } from 'svelte';

  const userName = getContext('userNameContext');
</script>

<h2>Child F Component</h2>
<h2>Child F username - {userName}</h2>
