export const useScrollingSpy = (): void => {
    const sections = document.querySelectorAll<HTMLElement>('section');

    window.onscroll = (): void => {
        const scrollNum = document.documentElement.scrollTop || document.body.scrollTop;

        for (let section in sections) {
            if (sections.hasOwnProperty(section) && sections[section].offsetTop - 160 <= scrollNum) {
                const id = sections[section].id;

                const a = document.querySelector<HTMLElement | any>(`a[href*=${id}]`);
                const currentSection  = document.querySelector<HTMLElement | any>('nav>ul>li>.current-section');

                if(a != null) {
                    a.classList.add('current-section');   
                    if(currentSection != null)  currentSection.classList.remove('current-section');
                } else {
                    currentSection.classList.remove('current-section');
                    document.querySelector<HTMLElement | any>('nav>ul>li>a').classList.add('current-section');
                }
            }
        }
    };
};