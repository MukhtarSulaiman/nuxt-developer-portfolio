<script setup lang="ts">

    onMounted(() => {
        const cursor1 = document.querySelector<HTMLElement | any>('.cursor1');
        const cursor2 = document.querySelector<HTMLElement | any>('.cursor2');
        const cursors = document.querySelectorAll<HTMLElement>('.cursor');
        const elements = document.querySelectorAll<HTMLElement>(
            `
            .portfolio-headings>div>h3,
            .skills-container__content,
            .nav-item-mode-switch,
            .nav-item-lang,
            .form-group,
            a, button, p, li`
        );

        elements.forEach((element:  HTMLElement) :void => {
            element.addEventListener('mouseover',  () => {
                if (element.matches('p')) {
                    cursor1.classList.add('expand-cursor');
                } else {
                    cursors.forEach(cursor => {
                        cursor.classList.add('remove-cursor');
                    });
                }
            });
        });

        elements.forEach((element: HTMLElement) :void => {
            element.addEventListener('mouseleave',  () => {
                cursors.forEach(cursor => {
                    if (element.matches('p')) {
                        cursor1.classList.remove('expand-cursor');
                    } else {
                        cursor.classList.remove('remove-cursor');
                    }
                });
            });
        });

        document.addEventListener('mousemove', (e) => {
            cursor1.style.cssText = cursor2.style.cssText = `${
                'left:' + e.clientX + 'px; top: ' + e.clientY + 'px;'
            }`;
        });

    });
</script>

<template>
    <div class="cursor cursor1"></div>
    <div :class="['cursor cursor2', { 'light-mode': $colorMode.preference === 'light'}]"></div>
</template>


<style lang="scss" scoped>

    .cursor1, .cursor2 {
        display: none;
    }

    @media only screen and (min-width: 650px) {
        .cursor {
            display: block;
            position: fixed;
            border-radius: 50%;
            z-index: 10;
            transition: 0.21s;
            pointer-events: none;
            transform: translate(-50%, -50%);
        }

        .cursor1 {
            width: 50px;
            height: 50px;
            border: 1px solid $color-brand-primary;
        }

        .cursor2 {
            width: 7px;
            height: 7px;
            background-color: var(--color-text-icon);
        }

        .cursor2.light-mode {
            background-color: var(--color-page-background);
        }

        .expand-cursor {
            width: 100px;
            height: 100px;
        }

        .remove-cursor {
            width: 0;
            height: 0;
        }
    }
</style>