<script setup lang="ts">

</script>

<template>
  <nav class="mb-6 p-6 lg:px-0 bg-yellow-500">
    <ul class="text-sm flex justify-center flex-col gap-4 lg:flex-row lg:justify-evenly lg:gap-0 w-full text-black">
      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/dashboard">
        <Icon name="dashicons:dashboard"></Icon>Dashboard</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/workouts">
        <Icon name="cil:weightlifitng"></Icon>My Workouts</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/explore">
        <Icon name="solar:dumbbell-large-minimalistic-bold"></Icon>Explore Workouts</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/soon">
        <Icon name="material-symbols:shopping-cart"></Icon>Shop</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/soon">
        <Icon name="streamline:food-drinks-cocktail-shaker-alcohol-drink-mix-shake-cocktail"></Icon>Supplements</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/soon">
        <Icon name="material-symbols:directions-bike"></Icon>Equipment</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/about">
        <Icon name="material-symbols:contact-support"></Icon>About</NuxtLink>

      <NuxtLink class="flex items-center gap-1 hover:cursor-pointer hover:opacity-50" to="/contact">
        <Icon name="mingcute:contacts-fill"></Icon>Contact</NuxtLink>
    </ul>
  </nav>
</template>

<style scoped>

</style>