<script lang="ts" context="module">
  let totalCount = 0;
  export const getTotalCount = () => totalCount;
</script>

<script lang="ts">
  let counter = 0;

  const clickHandler = () => {
    counter++;
    totalCount++;
  };
</script>

<button on:click="{clickHandler}">Count: {counter}</button>
