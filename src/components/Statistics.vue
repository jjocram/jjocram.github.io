<template>
  <section class="section">
    <div class="has-text-centered mb-3">
      <h1 class="title">Projects statistics</h1>
      <h2 class="subtitle">
        This section contains some statistics about my projects
      </h2>
    </div>
    <h3 class="subtitle">Technologies and topics - top ten</h3>
    <vue-frappe
      id="tags"
      :labels="this.tags_label"
      type="pie"
      :maxSlices="10"
      :height="300"
      :colors="[]"
      :tooltipOptions="this.tooltipOptions"
      :dataSets="this.data">
    </vue-frappe>
  </section>
</template>

<script>
import { VueFrappe } from 'vue2-frappe';
import projectsData from "../assets/projects.json";
export default {
  name: 'Statistics',
  components: {
    VueFrappe,
  },
  methods: {
    log(message){
      console.log(message);
    }
  },
  data() {
    var tags = {}
    var tags_values = [];
    var tags_names = [];
    for (const project of projectsData){
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
      tags_names.push(maxKey);
      tags_values.push(tags[maxKey]);
      delete tags[maxKey];
    }

    return {
      tags_label:tags_names,
      data: [{
        name: "Tags", 
        chartType: 'pie',
        values: tags_values
      }],
      tooltipOptions: {
        formatTooltipX: (d) => (d + "").toUpperCase(),
        formatTooltipY: (d) => d,
      }
    }
  }
}
</script>
