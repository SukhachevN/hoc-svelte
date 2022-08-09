<script lang="ts">
  import { elapsedTime, time } from '../store/stores';
</script>

<h2>Current time: {$time.toLocaleTimeString()}</h2>
<h2>Elapsed time: {$elapsedTime} seconds</h2>
