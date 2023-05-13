export const useSetMetaData = (title: string, description: string) => {
    const { locale, t } = useI18n();

    const setMetaData = () => {
        useHead({
            title: t(title, { pipe: '|' }),
            meta: [
                { name: 'description', content: t(description, { pipe: '|' }) },
            ],
        })
    }

    watch(() => locale.value, () => setMetaData())
}