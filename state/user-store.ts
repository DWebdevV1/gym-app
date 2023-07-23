import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
// state
//const user = ref(null);
const user = ref({ id: 1, name: 'User 01', email: 'user01@mail.com' });

// getters
const getUser = computed(() => user.value);

// actions
const setUser = (newUser: Object) => user.value = newUser;
const deleteUser = () => user.value = null;

return { user, getUser, setUser, deleteUser };
})