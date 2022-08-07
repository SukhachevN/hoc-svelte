<script lang="ts">
  const hello = 'Hello World';
  const boldText = '<b>bold text</b>';
  const id = 'heading';
  const disabled = false;
  const status = 'success';
  const promoted = true;
  const num = 1;
  const names = ['Nikita', 'Bình'];

  interface IFullName {
    firstName: string;
    lastName: string;
  }
  const fullNames: IFullName[] = [
    {
      firstName: 'Bình',
      lastName: 'Phạm',
    },
    {
      firstName: 'Nikita',
      lastName: 'Phạm',
    },
  ];
</script>

<main>
  <h1>{hello}</h1>
  <div>{@html boldText}</div>
  <h2 {id}>This is heading</h2>
  <button {disabled}>click me</button>
  <h2 class="underline">Underlined text</h2>
  <h2 class={status}>Status - {status}</h2>
  <h2 class:promoted>Movie</h2>
  {#if !num}
    <h2>number is zero</h2>
  {:else if num === 1}
    <h2>number is one</h2>
  {:else}
    <h2>number is not zero and not one</h2>
  {/if}
  <ul>
    {#each names as name, index (name)}
      <li>{index + 1}, {name}</li>
    {/each}
    {#each fullNames as { firstName, lastName }, index (firstName + lastName)}
      <li>{index + 1}, {firstName} {lastName}</li>
    {/each}
  </ul>
</main>

<style>
  main {
    margin: 0 auto;
  }

  .underline {
    text-decoration: underline;
  }

  .danger {
    color: red;
  }

  .success {
    color: olive;
  }

  .promoted {
    font-style: italic;
  }
</style>
