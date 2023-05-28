<script setup lang="ts">
defineProps<{ title: string, icon?: string }>();
</script>

<template>

  <div v-if="icon" class="bg-slate-700 p-4 mb-4 flex justify-between text-white">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <span>
      <Icon :name="icon"></Icon>
    </span>
  </div>
  <h1 v-else class="bg-slate-700 p-4 mb-4 flex justify-between text-2xl font-bold text-white">{{ title }}</h1>
</template>

<style scoped>

</style>