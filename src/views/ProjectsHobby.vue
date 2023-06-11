<script setup>
import '../assets/css/projects-hobby.css';

const images = [
  {
    pic: 'armor',
    text: 'Metalwork project'
  },
  {
    pic: 'chase',
    text: 'Green arrow costume & headshots'
  },
  {
    pic: 'tara',
    text: 'Photoshoot event'
  },
  {
    pic: 'skate',
    text: 'Skate park photography'
  },
  {
    pic: 'e3',
    text: 'E3 Warner bros. event in costume'
  },
  {
    pic: 'e3-destiny',
    text: 'E3 magazine shoot of my costume'
  },
  {
    pic: 'muslin',
    text: 'Concept draft for 18th century dress'
  },
  {
    pic: 'tail-light',
    text: '3D printed replacement tail lights'
  }
]
</script>

<template>
<div class="projects-hobby">

  <div class="projects-hobby__text">
    <p>Some things here are a mix of personal and professional,
      because I like doing for fun what I do for work. Some of these things are
      Photography, Videography, 3d printing, Drone imaging, Costume design and creation.
      My interests span many areas, mostly in the arts. I like creating both tangible and digital things.
      I've worked with metal, electronics, fabric, foam and plastics. I would love to fulfill my passion creating on the job wherever I go.
    </p>
    
  </div>

  <div class="projects-hobby__grid">
    <div v-for="(image, idx) in images" :key="idx">
      <img :src="`${image.pic}.jpg`" alt="hobby-image">
      <p v-text="`${image.text}`"></p>
    </div>
  </div>

</div>
</template>