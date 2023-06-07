import { useRoute } from 'vue-router';

export const useWatchRoute = (routeName: string): void => {
    const route = useRoute();

    watch(() => route.name, (newValue, oldValue): void => {
        if(newValue !== routeName && oldValue === routeName) {
            location.reload();
        } 
    });
}