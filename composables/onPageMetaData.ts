export const useSetMetaData = (title: string, description: string): void => {
    const { locale, t } = useI18n();

    const setMetaData = (): void => {
        useHead({
            title: t(title, { pipe: '|' }),
            meta: [
                { name: 'description', content: t(description, { pipe: '|' }) },
            ],
        })
    }

    watch(() => locale.value, () => setMetaData(), {immediate: true });
}