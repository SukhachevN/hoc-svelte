<script lang="ts">
  let count = 0;

  const handleClick = (diff: number) => (count += diff);

  interface IFormValues {
    name: string;
    age: number | null;
    profileSummary: string;
    country: string;
    jobLocations: string[];
    remoteWork: boolean;
    skills: string[];
    experience: string;
  }

  const formValues: IFormValues = {
    name: '',
    age: null,
    profileSummary: '',
    country: '',
    jobLocations: [],
    remoteWork: false,
    skills: [],
    experience: '',
  };

  const handleSubmit = (e: SubmitEvent) => console.log(formValues);
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
    <form on:submit|preventDefault={handleSubmit}>
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
      <div>
        <label for="remoteJob">Remote job</label>
        <input
          id="remoteJob"
          type="checkbox"
          bind:checked={formValues.remoteWork}
        />
      </div>
      <div>
        Skills:
        <input
          type="checkbox"
          id="html"
          value="html"
          bind:group={formValues.skills}
        />
        <label for="html">HTML</label>
        <input
          type="checkbox"
          id="css"
          value="css"
          bind:group={formValues.skills}
        />
        <label for="css">CSS</label>
        <input
          type="checkbox"
          id="javascript"
          value="javascript"
          bind:group={formValues.skills}
        />
        <label for="javascript">JavaScript</label>
      </div>
      <div>
        Years of experience
        <input
          type="radio"
          id="0"
          value="0"
          bind:group={formValues.experience}
        />
        <label for="0">0</label>
        <input
          type="radio"
          id="1-3"
          value="1-3"
          bind:group={formValues.experience}
        />
        <label for="1-3">1-3</label>
        <input
          type="radio"
          id="3-6"
          value="3-6"
          bind:group={formValues.experience}
        />
        <label for="3-6">3-6</label>
        <input
          type="radio"
          id="6+"
          value="6+"
          bind:group={formValues.experience}
        />
        <label for="6+">6+</label>
      </div>
      <div><button type="submit">Submit</button></div>
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
