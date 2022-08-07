<script lang="ts">
  let count = 0;

  const handleClick = (diff: number) => (count += diff);

  interface IFormValues {
    name: string;
    age: number | null;
    profileSummary: string;
    country: string;
    jobLocations: string[];
  }

  const formValues: IFormValues = {
    name: '',
    age: null,
    profileSummary: '',
    country: '',
    jobLocations: [],
  };
</script>

<main>
  <div>
    <button on:click={() => handleClick(-1)}>decrease count {count}</button>
    <button on:click={() => handleClick(1)}> increase count {count}</button>
    <button on:click={(e) => console.log(e)}>show type</button>
  </div>
  <div>
    {JSON.stringify(formValues)}
  </div>
  <div>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={formValues.name} />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" id="age" bind:value={formValues.age} />
      </div>
      <div>
        <label for="profile">Profile</label>
        <textarea id="profile" bind:value={formValues.profileSummary} />
      </div>
      <div>
        <label for="country">Country</label>
        <select id="country" bind:value={formValues.country}>
          <option value="">Select a country</option>
          <option value="VN">Việt Nam</option>
          <option value="RU">Nga</option>
          <option value="LA">Lào</option>
        </select>
      </div>
      <div>
        <label for="jobLocations">Job locations</label>
        <select multiple id="jobLocations" bind:value={formValues.jobLocations}>
          <option value="VN">Việt Nam</option>
          <option value="RU">Nga</option>
          <option value="LA">Lào</option>
        </select>
      </div>
    </form>
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
</style>
