<script lang="ts">
  import { onMount } from 'svelte';

  interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  let posts: IPost[] = [];

  onMount(async () => {
    const response = await fetch(postsUrl);
    posts = await response.json();
  });
</script>

{#each posts as { id, title, body } (id)}
  <h3>{id}. {title}</h3>
  <p>{body}</p>
  <hr />
{:else}
  <div>loading...</div>
{/each}
