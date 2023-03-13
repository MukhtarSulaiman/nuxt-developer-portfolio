export type Network = {
    id: number,
    icon: string,
    link: string,
};

type Image = {
    url: string,
    alt?: string,
}

export type Project = {
    id: string | number,
    title: string,
    type: string,
    briefDescription: string,
    mainDescription: string,
    year: string,
    previewImageUrl: string,
    mainImage: Image,
    links: {demo?: string, sourceCode?: string}
    technology: Image[],
}