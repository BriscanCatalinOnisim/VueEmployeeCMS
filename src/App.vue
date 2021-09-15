<template>
  <v-app>
    <div id="app">
      <Navbar/> 
      <Spacer/>
      <Content/>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import Content from './components/content.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Content,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
