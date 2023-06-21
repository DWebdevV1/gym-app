<script setup lang="ts">
const props = defineProps<{ item: Workout }>();

const loadExploreExercise = () => {
  navigateTo(`/explore/${props.item.name?.toLowerCase()}`);
}
const { data: numberOfExercises } = await useFetch('/api/exercises-amount', {
  query: { exerciseType: props.item.name }
});
</script>

<template>
  <div class="bg-zinc-700 p-6 h-56 shadow-sm hover:cursor-pointer hover:opacity-70 hover:border-l-2 hover:border-slate-700"
       @click="loadExploreExercise">
    <h2 class="text-3xl font-bold">{{ item?.name }}</h2>
    <p class="mt-2 italic"><span class="text-yellow-500 text-xl">{{ numberOfExercises }}</span><span class="ml-1">Exercises</span></p>
  </div>
</template>

<style scoped>

</style>