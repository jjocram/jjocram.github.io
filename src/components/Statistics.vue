<template>
  <section class="section">
    <div class="has-text-centered mb-3">
      <h1 class="title">Projects statistics</h1>
      <h2 class="subtitle">
        This section contains some statistics about my projects
      </h2>
    </div>
    <div class="columns">
      <div class="column">
        <h3 class="subtitle has-text-centered">Number of projects</h3>
        <p style="font-size:10vh" class="has-text-centered">{{ number_of_projects }}</p>
      </div>
      <div class="column">
        <h3 class="subtitle has-text-centered">Technologies and topics - top ten</h3>
        <div id="top-tech-wrapper">
          <canvas id="top-tech"></canvas>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js/auto'
import projectsData from "../assets/projects.json";
export default {
  name: 'Statistics',
  methods: {
    log(message) {
      console.log(message);
    }
  },
  mounted() {
    const ctx = document.getElementById('top-tech').getContext("2d");
    ctx.canvas.height = 300;
    const data = {
      labels: JSON.parse(JSON.stringify(this.tags_label)),
      datasets: [{
        label: 'My First Dataset',
        data: JSON.parse(JSON.stringify(this.tags_values)), // Necessary to pass from Proxy obj
        backgroundColor: [
          'rgb(255,99,71)',
          'rgb(106,90,205)',
          'rgb(139,0,0)',
          'rgb(144,238,144)',
          'rgb(47,79,79)',
          'rgb(128,128,128)',
          'rgb(0,128,0)',
          'rgb(255,165,0)',
          'rgb(255,228,196)',
          'rgb(200,240,245)'
        ],
        hoverOffset: 4
      }],
    };
    new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  },
  data() {
    var tags = {}
    var tags_values = [];
    var tags_names = [];
    var number_of_projects = 0;
    for (const project of projectsData) {
      number_of_projects += 1;

      for (const tag of project.tags) {
        if (tag in tags) {
          tags[tag] = tags[tag] + 1;
        } else {
          tags[tag] = 1;
        }
      }
    }

    for (let i = 0; i < 10; i++) {
      const maxKey = Object.keys(tags).filter(x => {
        return tags[x] == Math.max.apply(null,
          Object.values(tags));
      })[0];
      tags_names.push(`${maxKey}: ${tags[maxKey]}`);
      tags_values.push(tags[maxKey]);
      delete tags[maxKey];
    }

    return {
      number_of_projects: number_of_projects,
      tags_label: tags_names,
      tags_values: tags_values,

      tooltipOptions: {
        formatTooltipX: (d) => (d + "").toUpperCase(),
        formatTooltipY: (d) => d,
      }
    }
  }
}
</script>
