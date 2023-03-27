export const useIntersectionObserver = (selectors: NodeListOf<HTMLElement>, threshold: number) => {

    const isIntersecting = ref(false);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                isIntersecting.value = true;
            } 
            else if(entry.isIntersecting === false) {
                entry.target.classList.remove('show');
                isIntersecting.value = false;
            }
        }); 
    }, {root: null, threshold: threshold});
    
    selectors.forEach(selector => observer.observe(selector));

    return { isIntersecting };
};
