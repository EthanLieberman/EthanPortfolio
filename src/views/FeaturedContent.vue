<script setup>
import '../assets/css/featured-content.css';
</script>
  
<template>
  <div class="featured-content">
    <h2 v-text="name"></h2>
    <img class="featured-content__image" src="/profile-pic.png"/>
    <div>
      <h2>Full stack web dev</h2>
      <h2 style="margin-left: 100px; margin-top: -20px;">Always learning</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "<Ethan Lieberman/>",
    }
  }
}
</script>