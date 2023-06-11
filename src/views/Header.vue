<script setup>
import '../assets/css/header.css';
import EIcon from '../assets/icons/EIcon.vue';
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue';
import GithubIcon from '../assets/icons/GithubIcon.vue';
</script>

<template>
  <header class="header">
    <ul class="header__list header__icons">
      <li>
        <router-link :to="{ name: 'Home' }"><EIcon /></router-link>
      </li>
    </ul>

    <ul class="header__list">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Projects' }">Projects</router-link>
      </li>
    </ul>

    <ul class="header__list header__icons">
      <li>
        <a href="https://www.linkedin.com/in/ethan-lieberman/" target="_blank"><LinkedinIcon /></a>
      </li>
      <li>
        <a href="https://github.com/EthanLieberman" target="_blank"><GithubIcon /></a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  components: { },
props: {
  stuff: String
},
data() {
  return {
    pickle: "now"
  }
},
}
</script>