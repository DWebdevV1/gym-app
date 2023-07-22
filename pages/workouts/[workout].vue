<script setup lang="ts">
const route = useRoute();

const { data: exercises } = await useFetch<Exercise[]>('/api/exercise/exercises');
const { data: activeWorkout } = await useFetch<ActiveWorkout>('/api/workout/active-workout',
    { query: { workoutId: route.params['workout'] }});

const chest = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'chest'));
const back = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'back'));
const legs = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'legs'));
const shoulders = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'shoulders'));
const biceps = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'biceps'));
const triceps = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'triceps'));

const selectedSession = ref({});

const selectSession = (session: any) => {
  console.log('session', session);
  selectedSession.value = session;
};

const selectExercise = (exercise: any) => {
  console.log('exercise', exercise);
}
 </script>

<template>
  <Headline :title="activeWorkout?.name as string" icon="cil:weightlifitng"></Headline>

  <div class="grid grid-cols-2 gap-6">
    <div class="flex flex-col gap-6">
      <div v-for="(session, index) of activeWorkout?.sessions"
           :key="index"
           @click="selectSession(session)"
           class="flex justify-center items-center font-bold bg-gray-700 p-6 rounded-lg h-14
           hover:cursor-pointer hover:border-2 hover:border-yellow-500">
        <div>{{ session?.name }}</div>
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <h1 class="text-2xl mb-4">Select Exercises for Session</h1>

      <Accordion title="Chest">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="exercise of chest" :key="exercise?.id" @click="selectExercise(exercise)"
               class="flex justify-center items-center font-bold bg-gray-700 p-6
               rounded-lg h-52 border-2 border-yellow-500 hover:cursor-pointer">
            {{ exercise?.id }} {{ exercise?.name }}
          </div>
        </div>
      </Accordion>

      <Accordion title="Back">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="exercise of back" :key="exercise?.id" @click="selectExercise(exercise)"
               class="flex justify-center items-center font-bold bg-gray-700 p-6
               rounded-lg h-52 border-2 border-yellow-500 hover:cursor-pointer">
            {{ exercise?.id }} {{ exercise?.name }}
          </div>
        </div>
      </Accordion>

      <Accordion title="Legs">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="exercise of legs" :key="exercise?.id" @click="selectExercise(exercise)"
               class="flex justify-center items-center font-bold bg-gray-700 p-6
               rounded-lg h-52 border-2 border-yellow-500 hover:cursor-pointer">
            {{ exercise?.id }} {{ exercise?.name }}
          </div>
        </div>
      </Accordion>

      <Accordion title="Shoulders">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="exercise of shoulders" :key="exercise?.id" @click="selectExercise(exercise)"
               class="flex justify-center items-center font-bold bg-gray-700 p-6
               rounded-lg h-52 border-2 border-yellow-500 hover:cursor-pointer">
            {{ exercise?.id }} {{ exercise?.name }}
          </div>
        </div>
      </Accordion>

      <Accordion title="Biceps">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="exercise of biceps" :key="exercise?.id" @click="selectExercise(exercise)"
               class="flex justify-center items-center font-bold bg-gray-700 p-6
               rounded-lg h-52 border-2 border-yellow-500 hover:cursor-pointer">
            {{ exercise?.id }} {{ exercise?.name }}
          </div>
        </div>
      </Accordion>

      <Accordion title="Triceps">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="exercise of triceps" :key="exercise?.id" @click="selectExercise(exercise)"
               class="flex justify-center items-center font-bold bg-gray-700 p-6
               rounded-lg h-52 border-2 border-yellow-500 hover:cursor-pointer">
            {{ exercise?.id }} {{ exercise?.name }}
          </div>
        </div>
      </Accordion>

    </div>
  </div>
</template>

<style scoped>

</style>