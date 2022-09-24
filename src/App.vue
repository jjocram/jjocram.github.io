<script setup lang="ts">
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import Statistics from "./components/Statistics.vue";
import { ProjectModel } from "@/models/project";
import projectsData from "./assets/projects.json";

const projects: Array<ProjectModel> = projectsData.map(p => Object.assign(new ProjectModel(), p));

document.title = 'Marco Ferrati | Portfolio';
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <AboutMe />
    <Statistics :projects="projects" />
    <Projects :projects="projects" />
  </main>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
