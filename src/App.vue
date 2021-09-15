<template >
  <v-app>
    <div id="app">
      <Navbar/> 
      <Content/>
      <Table/>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import Content from './components/content.vue';
import Table from './components/table.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Content,
    Table,
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

.css-selector {
    background: linear-gradient(270deg, #70f3bc, #045e29);
    background-size: 400% 400%;
 

    -webkit-animation: AnimationName 30s ease infinite;

    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
}
 
@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
