<script setup lang="ts">

const props = defineProps<{ exercise: Exercise }>();

const openExerciseDetailPage = () => {
  if (props.exercise) {
    const { setOwnState } = useOwnState();
    setOwnState(props.exercise);
    navigateTo(`/exercise/${props.exercise.id}`);
  }
}
</script>

<template>
  <div class="flex flex-col xl:flex-row bg-slate-50 shadow-sm hover:cursor-pointer hover:opacity-70 hover:border-l-2 hover:border-slate-700"
       @click="openExerciseDetailPage">
    <img :src="exercise?.image" alt="exercise" loading="lazy" class="h-full max-h-56 w-full object-cover">
    <div class="p-6">
      <h1 class="text-xl font-bold">{{ exercise?.name }}</h1>
      <p>{{ textShorterByLength(exercise?.description, 150) }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>