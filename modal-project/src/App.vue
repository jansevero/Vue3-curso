<template>
  <h1>{{ title }}</h1>
  <!--<input type="text" ref="name">-->
  <!--<button @click="handleClick">Clique aqui</button>-->
  <p>Bem vindo</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#"> cadastre-se</a> 
        <a href="#"> mais informações</a> 
      </template>
      <h1> {{ header }} </h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <h1> Bom Dia </h1>
      <p> Bom dia amiguinho, como vai amiguinho e a família como vai? </p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click.ctrl="toggleModalTwo">open modal two (ctrl)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Título',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
