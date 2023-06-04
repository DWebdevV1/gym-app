<script setup lang="ts">
const props = defineProps<{ title: string, isOpen?: boolean, rootClasses?: string }>();
const showHeader = ref(props.isOpen);
const toggleHeader = () => showHeader.value = !showHeader.value;
</script>

<template>
  <div :class="rootClasses">
    <div class="bg-slate-700 p-4 flex justify-between select-none">
      <p class="m-0 font-bold text-white">{{ title?.toUpperCase() }}</p>
      <p class="m-0 font-bold text-white hover:cursor-pointer hover:opacity-50" @click="toggleHeader">
        <Icon v-if="showHeader" name="mdi:chevron-double-up"></Icon>
        <Icon v-else name="mdi:chevron-double-down"></Icon>
      </p>
    </div>
    <div v-show="showHeader" class="p-6 bg-slate-50">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>