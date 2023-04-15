import { Network, Project, SchoolLevel } from '../types/index';

const html = 'https://www.w3schools.com/html/';
const css = 'https://www.w3schools.com/css/';
const javassript = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
const typescript = 'https://www.typescriptlang.org/';
const vue = 'https://vuejs.org/';
const nuxt = 'https://nuxt.com/';
const react = 'https://reactjs.org/';
const sass = 'https://sass-lang.com/';
const figma = 'https://www.figma.com/';
const tailwind = 'https://tailwindcss.com/';
const boostrap = 'https://getbootstrap.com/';
const node = 'https://nodejs.org/en/';
const express = 'https://expressjs.com/';
const mysql = 'https://www.mysql.com/';
const mongodb = 'https://www.mongodb.com/';
const github = 'https://github.com/';
const postman = 'https://www.postman.com/';
const heroku = 'https://www.heroku.com/home';
const render = 'https://render.com/';
const netlify = 'https://www.netlify.com/';
const seo = 'https://en.wikipedia.org/wiki/Search_engine_optimization';


export const socialNetworks: Network[] = [
    { id: 1, icon: 'linkedin', link: 'https://linkedin.com/in/mukhtar-sulaiman' },
    { id: 2, icon: 'github', link: 'https://github.com/MukhtarSulaiman' },
    { id: 3, icon: 'youtube', link: 'https://www.youtube.com/channel/UCSvuJVJdF3NDsg9CjeM6I-Q' },
    { id: 4, icon: 'twitter', link: 'https://twitter.com/zooldeveloper' },
]

export const projects: Project[] = [
        {
        id: 1,
        title: 'Réservia',
        type: 'portfolio.project1.type',
        briefDescription: 'portfolio.project1.brief_description',
        mainDescription: "portfolio.project1.main_description",
        year: '07/2021',
        previewImageUrl: 'hotel.jpg',
        mainImage: { url: "reservia.png", alt: 'portfolio.project1.alt_main_image'},
        links: { 
            demo: 'https://mukhtarsulaiman.github.io/HotelBookingPage_2_28072021/', 
            sourceCode: 'https://github.com/MukhtarSulaiman/HotelBookingPage_2_28072021'
        },
        technology: [
            { url: "html.png", link: html, },
            { url: "css.png", link: css },
            { url: "github.png", link: github }
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
        mainImage: { url: "ohmyfood.png", alt: 'portfolio.project2.alt_main_image'},
        links: {
            demo: 'https://mukhtarsulaiman.github.io/Ohmyfood_3_04082021/',
            sourceCode: 'https://github.com/MukhtarSulaiman/Ohmyfood_3_04082021'
        },
        technology: [
            { url: "html.png", link: html, },
            { url: "css.png", link: css },
            { url: "sass.png", link: sass },
            { url: "github.png", link: github }
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
        links: {
            demo: 'https://mukhtarsulaiman.github.io/SEO_4_18082021/',
            sourceCode: 'https://github.com/MukhtarSulaiman/SEO_4_18082021'
        },
        technology: [
            { url: "html.png", link: html },
            { url: "css.png", link: css },
            { url: "bootstrap.png", link: boostrap },
            { url: "seo.png", link: seo },
            { url: "github.png", link: github }
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
        links: {
            demo: 'https://mukhtar-orinoco.netlify.app/',
            sourceCode: 'https://github.com/MukhtarSulaiman/orinoco_5_10092021'
        },
        technology: [
            { url: "html.png", link: html },
            { url: "css.png", link: css },
            { url: "javascript.png", link: javassript },
            { url: "bootstrap.png", link: boostrap },
            { url: "netlify.png", link: netlify },
            { url: "render.png", link: render },
        ]
    },
    {
        id: 5,
        title: 'Hot Takes',
        type: 'portfolio.project5.type',
        briefDescription: 'portfolio.project5.brief_description',
        mainDescription: 'portfolio.project5.main_description',
        year: '11/2021',
        previewImageUrl: 'like.jpg',
        mainImage: { url: "piiquante.png", alt: 'portfolio.project5.alt_main_image' },
        links: {
            demo: '',
            sourceCode: 'https://github.com/MukhtarSulaiman/piiquante_6_14102021'
        },
        technology: [
            { url: "nodejs.png", link: node },
            { url: "express.png", link: express },
            { url: "mongodb.png", link: mongodb },
            { url: "postman.png", link: postman },
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
        links: {
            demo: 'https://www.youtube.com/watch?v=_Uz19-A3c78',
            sourceCode: 'https://github.com/MukhtarSulaiman/Groupomania_10_112021'
        },
        technology: [
            { url: "vuejs.png", link: vue },
            { url: "javascript.png", link: javassript },
            { url: "nodejs.png", link: node },
            { url: "mysql.png", link: mysql },
            { url: "sass.png", link: sass },
            { url: "figma.png", link: figma },
        ]
    },
    {
        id: 7,
        title: 'Zool Developer',
        type: 'portfolio.project7.type',
        briefDescription: 'portfolio.project7.brief_description',
        mainDescription: 'portfolio.project7.main_description',
        year: '04/2023',
        previewImageUrl: 'portfolio.jpg',
        mainImage: { url: "zooldeveloper.png", alt: 'portfolio.project7.alt_main_image' },
        links: {
            demo: 'https://www.figma.com/file/5Ndy1AFfl9WDCWYOsNxFDE/MyPortfolio?node-id=1634%3A988&t=rKI5xE0uNlbuiphP-0',
            sourceCode: 'https://github.com/MukhtarSulaiman/zool-developer'
        },
        technology: [
            { url: "nuxtjs.png", link: nuxt },
            { url: "vuejs.png", link: vue },
            { url: "typescript.png", link: typescript },
            { url: "nodejs.png", link: node },
            { url: "sass.png", link: sass },
            { url: "figma.png", link: figma },
            { url: "heroku.png", link: heroku },
        ]
    },
]

export const schoolLevels: SchoolLevel[] = [
    { id: 1, institution: 'education.level1.institution', degree: 'education.level1.degree' },
    { id: 2, institution: 'education.level2.institution', degree: 'education.level2.degree' },
    { id: 3, institution: 'education.level3.institution', degree: 'education.level3.degree' },
    { id: 4, institution: 'education.level4.institution', degree: 'education.level4.degree' },
]