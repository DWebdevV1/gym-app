<script setup lang="ts">
defineProps<{ title: string, icon?: string, rootClasses?: string }>();
</script>

<template>
  <div v-if="icon" class="bg-yellow-500 p-4 mb-4 flex justify-between text-black" :class="rootClasses">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <span>
      <Icon :name="icon"></Icon>
    </span>
  </div>
  <h1 v-else class="bg-yellow-500 p-4 mb-4 flex justify-between text-2xl font-bold text-black">{{ title }}</h1>
</template>

<style scoped>

</style>