<script setup lang="ts">
const { data: activeWorkout } = await useFetch<ActiveWorkout>('/api/workout/active-workout', { query: { active: true }});
const { data: activeWorkouts } = await useFetch<ActiveWorkout[]>('/api/workout/active-workout');
const { data: lastVisitedExercises } = await useFetch<LastVisitedExercise[]>('/api/exercise/last-visited-exercises');

const navigateToWorkout = (workout: ActiveWorkout) => {
  navigateTo(`/workouts/${workout.id}`);
}

const navigateToExercise = (exercise: LastVisitedExercise) => {
  const path = (`/explore/${exercise.type}/${exercise.id}`).toLowerCase();
  navigateTo(path);
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
    <div>
      <Headline title="My active Workout" icon="material-symbols:notifications-active"></Headline>
      <div class="bg-zinc-700 mb-6 p-6 flex justify-between font-bold hover:cursor-pointer hover:opacity-50"
           @click="navigateToWorkout(activeWorkout as ActiveWorkout)">
        <span>{{ activeWorkout?.name }}</span>
        <Icon name="material-symbols:arrow-circle-right"></Icon>
      </div>
    </div>
    <div>
      <Headline title="My Workout List" icon="material-symbols:format-list-bulleted"></Headline>
      <div v-for="(workout, index) of activeWorkouts" :key="index"
           class="bg-zinc-700 mb-6 p-6 flex justify-between font-bold hover:cursor-pointer hover:opacity-50"
           @click="navigateToWorkout(workout as ActiveWorkout)">
        <div>{{ workout?.name }}</div>
        <Icon name="material-symbols:arrow-circle-right"></Icon>
      </div>
    </div>
  </div>

  <div>
    <Headline title="Last visited Exercises" icon="ic:baseline-remove-red-eye"></Headline>
    <div v-for="(exercise, index) of lastVisitedExercises" :key="index" @click="navigateToExercise(exercise as LastVisitedExercise)"
          class="bg-zinc-700 mb-6 hover:cursor-pointer hover:opacity-50">
      <div class="flex items-center">
        <img class="h-32" :src="exercise?.image" alt="exercise" />
        <div class="p-6 flex flex-col gap-1 sm:gap-0 sm:flex-row items-end sm:justify-between w-full">
          <p>
            <span class="text-yellow-500 italic">{{ exercise?.type }}</span>
            <br />
            <span class="font-bold">{{ exercise?.name }}</span>
          </p>
          <span>{{ exercise?.visitedOn }}</span>
          <Icon name="material-symbols:arrow-circle-right"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>