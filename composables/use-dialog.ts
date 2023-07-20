export const useDialog = (open?: boolean) => {
    const isOpen = ref<boolean>(!!open);

    const openDialog = (): boolean => isOpen.value = true;
    const closeDialog = (): boolean => isOpen.value = false;

    return { isOpen, openDialog, closeDialog }
}