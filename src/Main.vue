<script setup>
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';
import './assets/css/main.css';
</script>

<template>
  <div>
    <Header :stuff="'test'"/>
    <MainContent />
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