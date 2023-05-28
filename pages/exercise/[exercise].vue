<script setup lang="ts">
const route = useRoute();
const currentExercise = ref(null);

onMounted( () => {
  const { getOwnState } = useOwnState();
  currentExercise.value = getOwnState();

  if (!currentExercise.value) {
    navigateTo('/explore');
  }
})

</script>

<template>
  <h1>exercise {{ route.params?.exercise }} works...</h1>
  <pre>{{ currentExercise }}</pre>
</template>

<style scoped>

</style>