<script lang="ts">
  import type { GreetProps } from 'src/interfaces';

  export let { name, country }: GreetProps = { name: '', country: 'Việt Nam' };
</script>

<h2>Xin chào {name} từ {country}!</h2>
