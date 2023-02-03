<script setup>
import('../assets/css/about.css')
import ScssIcon from '../assets/icons/ScssIcon.vue';
import HtmlIcon from '../assets/icons/HtmlIcon.vue';
import CssIcon from '../assets/icons/CssIcon.vue';
import VueIcon from '../assets/icons/VueIcon.vue';
import JsIcon from '../assets/icons/JsIcon.vue';
import ReactIcon from '../assets/icons/ReactIcon.vue';
import ShopifyIcon from '../assets/icons/ShopifyIcon.vue';
import CameraIcon from '../assets/icons/CameraIcon.vue';
import VideoIcon from '../assets/icons/VideoIcon.vue';
import DroneIcon from '../assets/icons/DroneIcon.vue';
import ScubaIcon from '../assets/icons/ScubaIcon.vue';
import SnowboardIcon from '../assets/icons/SnowboardIcon.vue';
import BikingIcon from '../assets/icons/BikingIcon.vue';
import GamingIcon from '../assets/icons/GamingIcon.vue';
import GithubIcon from '../assets/icons/GithubIcon.vue';
import JavaIcon from '../assets/icons/JavaIcon.vue';
import PythonIcon from '../assets/icons/PythonIcon.vue';
import PhotoshopIcon from '../assets/icons/PhotoshopIcon.vue';
import IllustratorIcon from '../assets/icons/IllustratorIcon.vue';
import UnityIcon from '../assets/icons/UnityIcon.vue';
import BlenderIcon from '../assets/icons/BlenderIcon.vue';
import PrintIcon from '../assets/icons/PrintIcon.vue';
</script>

<template>
  <div class="about">
    <div class="about__image-container">
      <img class="about__featured-image" src="/about-me-pic.jpg" alt="about picture">
    </div>
    <div class="about__content">
      <h1>About Me</h1>
      <div class="about__text">I've learned many skills on my journey. I started with a passion for graphic design and 3d modeling in high school, that continues to be what I love to do. I branched out to fashion and costume design because of my desire to create tangible things, using my knowledge of 3d modeling to design 3d printed parts for costumes. I went on to continue developing those skills until I was hired to create models for industrial manufacturing, as well as teaching my skills in CAD and design. I also have an interest in photography, videography, and drone flying, that I have used on a few projects as well as the editing skills to process them. Today I am contracted to use my skills to design and create 3d models for VR clients in my spare time, as well as my experience in video editing and programming to manage and create content to promote myself. In my professional time, I am at the begining of my career in web development, where all my skills behind me provide me with a foundation to draw from. I continue to learn and improve on whatever I set my sights on. My adaptability and drive to learn is what makes me a capable and resourceful full stack web developer.
      </div>
      <div class="content__footer">
        <div>
          <p>What I like</p>
          <div class="content__icon-grid">
            <div class="content__icon">
              <camera-icon />
            </div>
            <div class="content__icon">
              <video-icon />
            </div>
            <div class="content__icon">
              <drone-icon />
            </div>
            <div class="content__icon">
              <scuba-icon />
            </div>
            <div class="content__icon">
              <snowboard-icon />
            </div>
            <div class="content__icon">
              <biking-icon />
            </div>
            <div class="content__icon">
              <gaming-icon />
            </div>
            <div class="content__icon">
              <print-icon />
            </div>
          </div>
        </div>
        <div>
          <p>What I do</p>
          <div class="content__icon-grid">
            <div class="content__icon">
              <html-icon />
            </div>
            <div class="content__icon">
              <css-icon />
            </div>
            <div class="content__icon">
              <js-icon />
            </div>
            <div class="content__icon">
              <scss-icon />
            </div>
            <div class="content__icon">
              <vue-icon />
            </div>
            <div class="content__icon">
              <react-icon />
            </div>
            <div class="content__icon">
              <github-icon />
            </div>
            <div class="content__icon">
              <java-icon />
            </div>
            <div class="content__icon">
              <python-icon />
            </div>
            <div class="content__icon">
              <shopify-icon />
            </div>
            <div class="content__icon">
              <photoshop-icon />
            </div>
            <div class="content__icon">
              <illustrator-icon />
            </div>
            <div class="content__icon">
              <unity-icon />
            </div>
            <div class="content__icon">
              <blender-icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>