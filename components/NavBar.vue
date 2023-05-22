<script setup lang="ts">

</script>

<template>
  <nav class="mb-6 p-6 md:px-0 bg-slate-700">
      <ul class="flex justify-center flex-col gap-4 md:flex-row md:justify-evenly md:gap-0 w-full text-xl text-white">
          <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/dashboard">
            <Icon name="dashicons:dashboard"></Icon>Dashboard</NuxtLink>

          <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/workouts">
            <Icon name="material-symbols:sports-tennis-rounded"></Icon>My Workouts</NuxtLink>

          <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/explore">
            <Icon name="material-symbols:travel-explore"></Icon>Explore Workouts</NuxtLink>

          <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/about">
            <Icon name="material-symbols:contact-support"></Icon>About</NuxtLink>

          <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/contact">
            <Icon name="mingcute:contacts-fill"></Icon>Contact</NuxtLink>
      </ul>
  </nav>
</template>

<style scoped>

</style>