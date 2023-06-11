<script setup>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
import './assets/css/main.css';
</script>

<template>
  <div>
    <Header :stuff="'test'"/>
    <router-view/>
    <Footer />
    <div class="background">
      <span v-for="(span, idx) in spans" v-bind:key="idx" class="span"></span>
    </div>
  </div>
</template>

<script>
export default {
  components: { Header },
  data() {
    return {
      test: "hi there",
      spans: 10
    }
  }
}
</script>