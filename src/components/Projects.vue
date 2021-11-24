<template>
  <section class="section">
    <div class="has-text-centered mb-3">
      <h1 class="title">Projects</h1>
      <h2 class="subtitle">
        This section contains the projects I worked and I'm working on
      </h2>
    </div>
        <div class="card mb-4" v-for="project in projects.slice().reverse()" :key="project.title">
          <header class="card-header">
            <p class="card-header-title">
            {{ project.title }}
            </p>
            <div class="tags">
              <span class="tag is-light" v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </header>

          <div class="card-content">
            <div class="content">
              <p v-for="paragraph in project.paragraphs" :key="paragraph" v-html="paragraph"></p>
            </div>
          </div>

          <footer class="card-footer">
            <a v-for="link in project.links" :key="link.link" v-bind:href="link.link" target="_blank" class="card-footer-item">
              {{ link.name }}
            </a>
          </footer>
        </div>

  </section>
</template>

<script>
import projectsData from "../assets/projects.json"

export default {
  name: 'Projects',
  data() {
    return {
      projects: projectsData,
    }
  }
}
</script>
