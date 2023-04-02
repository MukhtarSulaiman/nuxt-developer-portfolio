export type Network = {
    id: number,
    icon: string,
    link: string,
}

type Image = {
    url: string,
    alt?: string,
    link?: string
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

export type SchoolLevel = {
    id: number,
    institution: string,
    degree: string
}

export interface Input {
    id: number;
    for: string;
    label: string;
    type: string;
    placeholder: string;
}