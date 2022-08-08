<script lang="ts">
</script>

<div class="card">
  <div class="card__header"><slot name="header" /></div>
  <div class="card__content"><slot name="content" /></div>
  {#if $$slots.footer}
    <hr />
  {/if}
  <div class="card__footer"><slot name="footer" /></div>
</div>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
