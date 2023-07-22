<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>();
const dialog = ref<{ showModal(): void, close(): void }>();

onMounted(() => toggleDialog());
onUpdated(() => toggleDialog());

const toggleDialog = () => {
  if (props.isOpen) {
    dialog.value?.showModal();
  } else {
    dialog.value?.close();
  }
}
</script>

<template>
  <dialog ref="dialog"
          class="box-border max-h-[75vh] min-h-[10vh] min-w-[90vw] lg:min-w-[60vw] overflow-x-hidden
          overflow-scroll bg-neutral-900 text-white border-2 border-yellow-500 drop-shadow-lg">
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog::backdrop {
  background: rgba(0, 0, 0, .66);
}
</style>