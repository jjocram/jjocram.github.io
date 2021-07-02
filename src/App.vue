<template>
  <Header></Header>
  <AboutMe></AboutMe>
  <Statistics></Statistics>
  <Projects></Projects>
</template>

<script>
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import Statistics from './components/Statistics.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Header,
    AboutMe,
    Statistics,
    Projects
  },
  created() {
    document.title = 'Marco Ferrati | Portfolio';
    var fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://use.fontawesome.com/d525360c90.js'
    document.head.appendChild(fontAwesomeScript);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
