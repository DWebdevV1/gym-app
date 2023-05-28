const ownStateKey = '_ownState';
const ownState = ref(null);

export function useOwnState() {
    function setOwnState(newState: any) {
        ownState.value = newState;
        localStorage.setItem(ownStateKey, JSON.stringify(newState));
    }

    function getOwnState() {
        if (ownState.value) {
            return ownState.value;
        }

        try {
            const state = JSON.parse(localStorage.getItem(ownStateKey) as string);
            ownState.value = state;
            return state;
        } catch (e) {
           console.log(e);
        }
    }

    function clearOwnState() {
        ownState.value = null;
        localStorage.removeItem(ownStateKey);
    }

    return {
        setOwnState,
        getOwnState,
        clearOwnState
    }
}