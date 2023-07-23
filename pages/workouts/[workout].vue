<script setup lang="ts">
const route = useRoute();
const { isOpen, openDialog, closeDialog } = useDialog(false);

const { data: exercises } = await useFetch<Exercise[]>('/api/exercise/exercises');
const { data: activeWorkout } = await useFetch<ActiveWorkout>('/api/workout/active-workout',
    { query: { workoutId: route.params['workout'] }});

const chest = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'chest'));
const back = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'back'));
const legs = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'legs'));
const shoulders = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'shoulders'));
const biceps = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'biceps'));
const triceps = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'triceps'));
const cardio = computed(() => exercises.value.filter(e => e.type.toLowerCase() === 'cardio'));

const selectedSession = ref<Session>();
const selectedExercises = ref<Exercise[]>([]);

const selectSession = (session: Session) => {
  console.log('session', session);
  selectedSession.value = session;
  openDialog();
};

const selectExercise = (exercise: Exercise) => {
  console.log('exercise', exercise);
}
 </script>

<template>
  <Headline :title="activeWorkout?.name as string" icon="cil:weightlifitng"></Headline>

  <div class="grid grid-cols-1 gap-6">
    <div class="flex flex-col gap-6">
      <div v-for="(session, index) of activeWorkout?.sessions"
           :key="index"
           @click="selectSession(session)"
           class="flex justify-center items-center font-bold bg-gray-700 p-6 h-14
           hover:cursor-pointer hover:border-2 hover:border-yellow-500">
        <div>{{ session?.name }}</div>
      </div>
    </div>

    <GymDialog :is-open="isOpen">

      <div class="flex justify-between items-center px-3 mb-3">
        <h1 class="text-2xl font-bold">{{ selectedSession?.name }}</h1>
        <div class="flex items-center gap-6">
          <GymButton title="Cancel" @click="closeDialog" add-class="w-52"></GymButton>
          <GymButton title="Confirm Selection" @click="closeDialog" is-primary add-class="w-52"></GymButton>
        </div>

      </div>

      <div class="p-3 grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Accordion title="Chest" is-open>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="exercise of chest" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

        <Accordion title="Back" is-open>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div v-for="exercise of back" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

        <Accordion title="Legs">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div v-for="exercise of legs" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

        <Accordion title="Shoulders">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div v-for="exercise of shoulders" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

        <Accordion title="Biceps">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div v-for="exercise of biceps" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

        <Accordion title="Triceps">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div v-for="exercise of triceps" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

        <Accordion title="Cardio">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div v-for="exercise of cardio" :key="exercise?.id" @click="selectExercise(exercise)"
                 class="flex justify-center items-center font-bold bg-gray-700 p-6 h-32 border-2 border-white
                 hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-500 hover:cursor-pointer">
              {{ exercise?.name }}
            </div>
          </div>
        </Accordion>

      </div>
    </GymDialog>
  </div>
</template>

<style scoped>

</style>