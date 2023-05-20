<script setup lang="ts">
const props = defineProps({
  exercise: { type: Object, required: true }
});
</script>

<template>
  <div class="flex flex-col xl:flex-row bg-slate-50 shadow-sm hover:cursor-pointer hover:opacity-70 hover:border-l-2 hover:border-slate-700">
    <img :src="props.exercise.image" alt="exercise" loading="lazy" class="h-full max-h-56 w-full object-cover">
    <div class="p-6">
      <h1 class="text-xl font-bold">{{ props.exercise.name }}</h1>
      <p>{{ textShorterByLength(props.exercise.description, 150) }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>