<script setup lang="ts">
defineProps<{ title: string,
  type?: 'button' | 'submit' | 'reset',
  icon?: string,
  isPrimary?: boolean,
  isDisabled?: boolean,
  addClass?: string }>();
</script>

<template>
  <button v-if="isPrimary"
          :type="type ? type : 'button'"
          :class="addClass"
          :disabled="isDisabled"
          class="flex justify-center items-center gap-2 font-bold p-3 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black">
    <Icon v-if="icon" :name="icon"></Icon>
    <span>{{ title }}</span>
  </button>

  <button v-else
          type="button"
          :class="addClass"
          :disabled="isDisabled"
          class="flex justify-center items-center gap-2 font-bold p-3 border-2 border-gray-300 hover:bg-gray-300 hover:text-black">
    <Icon v-if="icon" :name="icon"></Icon>
    <span>{{ title }}</span>
  </button>
</template>

<style scoped>

</style>