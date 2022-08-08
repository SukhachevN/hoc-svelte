<script lang="ts">
  interface IName {
    firstName: string;
    lastName: string;
  }

  const names: IName[] = [
    { firstName: 'Nikita', lastName: 'Pham' },
    { firstName: 'Binh', lastName: 'Pham' },
  ];
</script>

<ul>
  {#each names as name (name)}
    <li><slot name="fullName" {...name} /></li>
  {/each}
</ul>
