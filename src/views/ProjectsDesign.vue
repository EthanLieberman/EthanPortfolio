<script setup>
import '../assets/css/project-design.css';

const projects = [
  {
    image: 'iron-giant.jpg',
    content: 'Iron Giant model made for VRchat with more humainoid proportions'
  },
  {
    image: 'gd-tech.jpg',
    content: 'Model made for VRchat with specialty clothing made for it'
  },
  {
    image: 'gd-rpo.jpg',
    content: 'Digital clothing made based on the red dress scenes from the movie Ready Player One'
  },
  {
    image: 'crop-half.jpg',
    content: 'Topology cross view of a crop top made for digital models'
  },
  {
    image: 'lowpoly-chud.jpg',
    content: 'Low poly view of quad topology for a clients clothing request'
  },
  {
    image: 'portal-rifle.jpg',
    content: 'CAD model of a rifle inspired by the Portal game series'
  },
  {
    image: 'sniper.jpg',
    content: 'Sniper model from Destiny to be 3d printed, with user swappable scope'
  },
  {
    image: 'trials-rifle.jpg',
    content: 'Destiny inspired Trial of Osiris Rifle in CAD, later 3d printed and finished'
  },
  {
    image: 'jacket.jpg',
    content: 'Persnoal project leather jacket, inspired by 80s automobiles'
  },
  {
    image: 'napoleon.jpg',
    content: 'Theater costume of a court man for the play Napoleon'
  },
  {
    image: 'dress-med.jpg',
    content: 'Theater costume of court woman for the play King Arthur'
  },
  {
    image: 'count-musk.jpg',
    content: 'Theater costume of Count Richelieu for the play The Three Musketeers'
  },
]
</script>

<template>
<div class="project-design">
  <div class="project-design__block" v-for="(project, idx) in projects" :key="idx">
    <img :src="`${project.image}`" alt="project-thumbnail">
    <div>{{ project.content }}</div>
  </div>
</div>
</template>