<script setup>
import('../assets/css/projects.css');
import ProjectsCode from './ProjectsCode.vue';
import ProjectsDesign from './ProjectsDesign.vue';
import ProjectsTBD from './ProjectsTBD.vue';
</script>

<template>
<div class="projects">
  <ul class="projects__headers">
    <li @mouseenter="SelectedProject = 1, setProject1()" :class="{projects__selected: project1}">Coding</li>
    <li @mouseenter="SelectedProject = 2, setProject2()" :class="{projects__selected: project2}">Design</li>
    <li @mouseenter="SelectedProject = 3, setProject3()" :class="{projects__selected: project3}">TBD</li>
  </ul>

  <ProjectsCode v-if="SelectedProject == 1"/>
  <ProjectsDesign v-if="SelectedProject == 2"/>
  <ProjectsTBD v-if="SelectedProject == 3"/>

</div>
</template>


<script>
export default {
  data() {
    return {
      SelectedProject: 1,
      project1: true,
      project2: false,
      project3: false,
    }
  },
  methods: {
    setProject1() {
      this.project1 = true
      this.project2 = false
      this.project3 = false
    },
    setProject2() {
      this.project1 = false
      this.project2 = true
      this.project3 = false
    },
    setProject3() {
      this.project1 = false
      this.project2 = false
      this.project3 = true
    },
  }
}
</script>