<template>
  <p>Tempo de reação: {{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data () {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 300) {
      this.rank = 'Ninja'
    } else if (this.score < 400) {
      this.rank = 'Reflexos rápidos'
    } else {
      this.rank = 'Lesma...'
    }
  }
}
</script>

<style>
  .rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
</style>