<script setup>
import '../assets/css/project-code.css';
</script>

<template>
<div class="projects-code__grid">
  <div class="grid-code__content">
    <h3>Ox Bot</h3>
    <p>A Dungeons and Dragons Multi purpose Discord bot</p>
    <p>Created using Node.js and the Discord.js library, as well as the Discord-Music-Player npm package to handle music requests. Features including:</p>
    <ol class="grid-code__nolist">
      <li>Dice rolling with multiple dies and modifiers</li>
      <li>Admin controlled music player for voice channels</li>
      <li>Font end web portal to enter user stats to firebase</li>
      <li>Web portal hosted on local machine acting as server</li>
      <li>Dice modifiers and player stats queried from database</li>
    </ol>
  </div>
  <div class="grid-code__photo">
    <img src="/oxbot.jpg" alt="oxbot-image">
  </div>

  <div class="grid-code__photo">
    <img src="/rogm.jpg" alt="rogm-image">
  </div>
  <div class="grid-code__content">
    <h3>Rod of godly might</h3>
    <p>A C# script for automatic setup of game asset in Unity</p>
    <p>Created using C# utilizing the Unity game engine library, features include:</p>
    <ol class="grid-code__nolist">
      <li>Automatic placement and parenting of gameobjects from project folder to selected avatar</li>
      <li>Prefab scale slider</li>
      <li>Buttons to highlight objects to move for adjustment to avatar</li>
      <li>Finalize button to mirror placement points</li>
      <li>Button to remove prefab entirely</li>
    </ol>
  </div>

  <div class="grid-code__content">
    <h3>Shopify Theme</h3>
    <p>A basic fully featured shopify store</p>
    <p>Created using Shopify's liquid templating language, mixed with Vue for reactivity and animations</p>
    <ol class="grid-code__nolist">
      <li>Responsive Mobile first design</li>
      <li>Custom made animated cart flyout</li>
      <li>Highly Modular component design</li>
    </ol>
  </div>
  <div class="grid-code__photo">
    <img src="/shopify-demo.jpg" alt="shopify-image">
  </div>

  <div class="grid-code__photo">
    <img src="/portfolio-site.jpg" alt="shopify-image">
  </div>
  <div class="grid-code__content">
    <h3>This website</h3>
    <p>My personal portfolio website</p>
    <p>Created using Vue3 & Scss</p>
    <ol class="grid-code__nolist">
      <li>Responsive Mobile first design</li>
      <li>Conditionally rendered pages</li>
      <li>Highly Modular component design</li>
    </ol>
  </div>

</div>
</template>