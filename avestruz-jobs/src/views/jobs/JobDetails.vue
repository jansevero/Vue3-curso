<template>
<div v-if="job">
  <h1>{{ job.title }}</h1>
  <p>The Job id is {{ id }}</p>
  <p>{{ job.details }}</p>
</div>
<div v-else>
  <p>Loading job details...</p>
</div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    cocorico() {
      console.log(this.job)
    }
  }
  /*data() {
    return {
      id: this.$route.params.id
    }
  }*/
}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>