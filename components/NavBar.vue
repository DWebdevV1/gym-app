<script setup lang="ts">

</script>

<template>
  <nav class="bg-slate-700 py-6 mb-6">
      <ul class="flex justify-evenly text-xl text-white">
          <NuxtLink class="hover:cursor-pointer hover:opacity-50 hover:underline" to="/dashboard">Dashboard</NuxtLink>
          <NuxtLink class="hover:cursor-pointer hover:opacity-50 hover:underline" to="/workouts">My Workouts</NuxtLink>
          <NuxtLink class="hover:cursor-pointer hover:opacity-50 hover:underline" to="/explore">Explore Workouts</NuxtLink>
          <NuxtLink class="hover:cursor-pointer hover:opacity-50 hover:underline" to="/about">About</NuxtLink>
          <NuxtLink class="hover:cursor-pointer hover:opacity-50 hover:underline" to="/contact">Contact</NuxtLink>
      </ul>
  </nav>
</template>

<style scoped>

</style>