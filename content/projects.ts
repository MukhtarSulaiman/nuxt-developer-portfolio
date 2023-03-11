import { Project } from '../types/index';

const projects: Project[] = [
        {
        id: 1,
        title: 'Réservia',
        type: 'portfolio.project1.type',
        briefDescription: 'portfolio.project1.brief_description',
        mainDescription: "portfolio.project1.main_description",
        year: '07/2021',
        previewImageUrl: 'hotel.jpg',
        mainImage: { url: "reservia.png", alt: 'portfolio.project1.alt_main_image'},
        technology: [
            { url: "html.png" },
            { url: "css.png" }
        ]
    },
    {
        id: 2,
        title: 'Ohmyfood',
        type: 'portfolio.project2.type',
        briefDescription: 'portfolio.project2.brief_description',
        mainDescription: 'portfolio.project2.main_description',
        year: '08/2021',
        previewImageUrl: 'restaurant.jpg',
        mainImage: { url: "ohmyfood.png", alt: 'portfolio.project2.alt_main_image',},
        technology: [
            { url: "html.png" },
            { url: "css.png" },
            { url: "sass.png" },
        ]
    },
    {
        id: 3,
        title: 'La Chouette agence',
        type: 'portfolio.project3.type',
        briefDescription: 'portfolio.project3.brief_description',
        mainDescription: 'portfolio.project3.main_description',
        year: '09/2021',
        previewImageUrl: 'seo.jpg',
        mainImage: { url: "la-chouette-agence.png", alt: 'portfolio.project3.alt_main_image'},
        technology: [
            { url: "html.png" },
            { url: "css.png" },
            { url: "bootstrap.png" },
            { url: "seo.png" },
        ]
    },
    {
        id: 4,
        title: 'Orinoco',
        type: 'portfolio.project4.type',
        briefDescription: 'portfolio.project4.brief_description',
        mainDescription: 'portfolio.project4.main_description',
        year: '10/2021',
        previewImageUrl: 'camera.jpg',
        mainImage: { url: "orinoco.png", alt: 'portfolio.project4.alt_main_image' },
        technology: [
            { url: "html.png" },
            { url: "css.png" },
            { url: "javascript.png" },
            { url: "bootstrap.png" },
        ]
    },
    {
        id: 5,
        title: 'Piiquante',
        type: 'portfolio.project5.type',
        briefDescription: 'portfolio.project5.brief_description',
        mainDescription: 'portfolio.project5.main_description',
        year: '11/2021',
        previewImageUrl: 'like.jpg',
        mainImage: { url: "piiquante.png", alt: 'portfolio.project5.alt_main_image' },
        technology: [
            { url: "nodejs.png" },
            { url: "express.png" },
            { url: "mysql.png" },
            { url: "postman.png" },
        ]
    },
    {
        id: 6,
        title: 'Groupomania',
        type: 'portfolio.project6.type',
        briefDescription: 'portfolio.project6.brief_description',
        mainDescription: 'portfolio.project6.main_description',
        year: '01/2022',
        previewImageUrl: 'media.jpg',
        mainImage: { url: "groupomania.png", alt: 'portfolio.project6.alt_main_image' },
        technology: [
            { url: "vuejs.png" },
            { url: "javascript.png" },
            { url: "nodejs.png" },
            { url: "mysql.png" },
            { url: "sass.png" },
            { url: "figma.png" },
        ]
    },
    {
        id: 7,
        title: 'Zool Developer',
        type: 'portfolio.project7.type',
        briefDescription: 'portfolio.project7.brief_description',
        mainDescription: 'portfolio.project7.main_description',
        year: '07/2022',
        previewImageUrl: 'portfolio.jpg',
        mainImage: { url: "zooldeveloper.png", alt: 'portfolio.project7.alt_main_image' },
        technology: [
            { url: "nuxtjs.png" },
            { url: "vuejs.png" },
            { url: "nodejs.png" },
            { url: "sass.png" },
            { url: "figma.png" },
        ]
    },
]

export default projects