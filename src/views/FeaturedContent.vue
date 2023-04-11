<script setup>
import '../assets/css/featured-content.css';
</script>
  
<template>
  <div class="featured-content">
    <h2 v-text="name"></h2>
    <img class="featured-content__image" src="/profile-pic.png"/>
    <div>
      <h2 :style="{ opacity: isVisible ? 1 : 0, transition: 'opacity 1.5s ease' }" v-text="displayText"></h2>
      <h2 style="margin-left: 100px; margin-top: -20px;">Always learning</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "<Ethan Lieberman/>",
      displayText: 'Full Stack Web Dev',
      displayTexts: ['Full Stack Web Dev', '3D modeler', 'Photographer'],
      displayColor: 'white',
      isVisible: true,
      currentTextIndex: 0
    }
  },

  created() {
  setInterval(() => {
    this.isVisible = false;
    setTimeout(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.displayTexts.length;
      this.displayText = this.displayTexts[this.currentTextIndex];
      setTimeout(() => {
        this.isVisible = true;
      }, 500);
    }, 1500);
  }, 3000);
  },
}
</script>