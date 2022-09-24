<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted } from "vue";
import type { ProjectModel } from "@/models/project";

const props = defineProps({
  projects: { type: Array<ProjectModel>, required: true },
});

onMounted(() => {
  var tags: Map<string, number> = new Map();
  var tagsTopTen: Map<string, number> = new Map();

  for (const project of props.projects) {
    for (const tag of project.tags) {
      tags.set(tag, (tags.get(tag) ?? 0) + 1);
    }
  }

  for (let i = 0; i < 10; i++) {
    const largestElement = [...tags.entries()].reduce((a, e) =>
      e[1] > a[1] ? e : a
    );
    tagsTopTen.set(largestElement[0], largestElement[1]);
    tags.delete(largestElement[0]);
  }

  const canvas = document.getElementById("top-tech") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const data = {
    labels: Array.from(tagsTopTen.keys()),
    datasets: [
      {
        label: "Top ten Technologies",
        data: Array.from(tagsTopTen.values()),
        backgroundColor: [
          "rgb(255,99,71)",
          "rgb(106,90,205)",
          "rgb(139,0,0)",
          "rgb(144,238,144)",
          "rgb(47,79,79)",
          "rgb(128,128,128)",
          "rgb(0,128,0)",
          "rgb(255,165,0)",
          "rgb(255,228,196)",
          "rgb(200,240,245)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  new Chart(ctx, {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
</script>

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
        <p style="font-size: 10vh" class="has-text-centered">
          {{ projects.length }}
        </p>
      </div>
      <div class="column">
        <h3 class="subtitle has-text-centered">
          Technologies and topics - top ten
        </h3>
        <div id="top-tech-wrapper">
          <canvas id="top-tech"></canvas>
        </div>
      </div>
    </div>
  </section>
</template>
