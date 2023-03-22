export function useIntersectionEntry () {

    const selectors = ref([]);
    const isAnimateProgress = ref(false);

    const interOptions = (rootParent: any, thresholdParent: number): object => {
        return {
            root: rootParent,
            threshold: thresholdParent,
        };
    };

    const interCallback = (entries: any[]): void => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
            else if(entry.isIntersecting === false) {
                entry.target.classList.remove('show');
            }
        }); 
    };

    const observer = new IntersectionObserver(interCallback, interOptions);


    return { selectors, isAnimateProgress, interOptions, interCallback, observer };

};
