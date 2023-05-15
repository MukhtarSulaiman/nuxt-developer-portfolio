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
const wordpress = 'https://wordpress.com/';
const elementor = 'https://elementor.com/';
const astra = 'https://wpastra.com/';
const hostinger = 'https://www.hostinger.com/';

const mpHouseLocation = 'https://www.figma.com/file/3KG2MkqGBkEhPP2sr901fJ/MP-House-Location?node-id=0%3A1&t=coUHFA0jBYSxwroR-1';
const zoolDeveloper = 'https://www.figma.com/file/5Ndy1AFfl9WDCWYOsNxFDE/MyPortfolio?node-id=1634%3A988&t=rKI5xE0uNlbuiphP-0';
// const kidekchan = 'https://www.figma.com/file/Nicp78MoNcT6FuofKglkEy/kidekchan?node-id=0%3A1&t=28jmmSPwn1ZwtrRb-1';

export  default [
        {
        id: 1,
        title: 'réservia',
        type: 'portfolio.project1.type',
        briefDescription: 'portfolio.project1.brief_description',
        mainDescription: "portfolio.project1.main_description",
        year: '07/2021',
        isToShowMockup: false,
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
        title: 'ohmyfood',
        type: 'portfolio.project2.type',
        briefDescription: 'portfolio.project2.brief_description',
        mainDescription: 'portfolio.project2.main_description',
        year: '08/2021',
        isToShowMockup: false,
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
        title: 'la chouette agence',
        type: 'portfolio.project3.type',
        briefDescription: 'portfolio.project3.brief_description',
        mainDescription: 'portfolio.project3.main_description',
        year: '09/2021',
        isToShowMockup: false,
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
        title: 'orinoco',
        type: 'portfolio.project4.type',
        briefDescription: 'portfolio.project4.brief_description',
        mainDescription: 'portfolio.project4.main_description',
        year: '10/2021',
        isToShowMockup: false,
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
        title: 'hot takes',
        type: 'portfolio.project5.type',
        briefDescription: 'portfolio.project5.brief_description',
        mainDescription: 'portfolio.project5.main_description',
        year: '11/2021',
        isToShowMockup: false,
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
        title: 'groupomania',
        type: 'portfolio.project6.type',
        briefDescription: 'portfolio.project6.brief_description',
        mainDescription: 'portfolio.project6.main_description',
        year: '01/2022',
        isToShowMockup: false,
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
        title: 'task tracker',
        type: 'portfolio.project7.type',
        briefDescription: 'portfolio.project7.brief_description',
        mainDescription: 'portfolio.project7.main_description',
        year: '09/2022',
        isToShowMockup: false,
        previewImageUrl: 'note.jpg',
        mainImage: { url: "tasktracker.png", alt: 'portfolio.project7.alt_main_image' },
        links: {
            demo: '',
            sourceCode: 'https://github.com/MukhtarSulaiman/task-tracker-react.git'
        },
        technology: [
            { url: "reactjs.png", link: react },
            { url: "figma.png", link: figma },
            { url: "github.png", link: github },
        ]
    },
    {
        id: 8,
        title: 'the jungle house',
        type: 'portfolio.project8.type',
        briefDescription: 'portfolio.project8.brief_description',
        mainDescription: 'portfolio.project8.main_description',
        year: '10/2022',
        isToShowMockup: false,
        previewImageUrl: 'flower.jpg',
        mainImage: { url: "thejunglehouse.png", alt: 'portfolio.project8.alt_main_image' },
        links: {
            demo: 'https://mukhtarsulaiman.github.io/the-jungle-house/',
            sourceCode: 'https://github.com/MukhtarSulaiman/the-jungle-house.git'
        },
        technology: [
            { url: "reactjs.png", link: react },
            { url: "figma.png", link: figma },
            { url: "github.png", link: github },
        ]
    },
    {
        id: 9,
        title: 'weather app',
        type: 'portfolio.project9.type',
        briefDescription: 'portfolio.project9.brief_description',
        mainDescription: 'portfolio.project9.main_description',
        year: '10/2022',
        isToShowMockup: false,
        previewImageUrl: 'weather.jpg',
        mainImage: { url: "weatherapp.png", alt: 'portfolio.project9.alt_main_image' },
        links: {
            demo: 'https://zool-weather-app.onrender.com/',
            sourceCode: 'https://github.com/MukhtarSulaiman/weather-app.git'
        },
        technology: [
            { url: "reactjs.png", link: react },
            { url: "tailwind.png", link: tailwind },
            { url: "render.png", link: render },
        ]
    },
    {
        id: 10,
        title: 'tenzies game',
        type: 'portfolio.project10.type',
        briefDescription: 'portfolio.project10.brief_description',
        mainDescription: 'portfolio.project10.main_description',
        year: '11/2022',
        isToShowMockup: false,
        previewImageUrl: 'dice.jpg',
        mainImage: { url: "tenzies.png", alt: 'portfolio.project10.alt_main_image' },
        links: {
            demo: 'https://mukhtarsulaiman.github.io/tenzies-game/',
            sourceCode: 'https://github.com/MukhtarSulaiman/tenzies-game.git'
        },
        technology: [
            { url: "reactjs.png", link: react },
            { url: "figma.png", link: figma },
            { url: "github.png", link: github },
        ]
    },
    {
        id: 11,
        title: 'mp house location',
        type: 'portfolio.project11.type',
        briefDescription: 'portfolio.project11.brief_description',
        mainDescription: 'portfolio.project11.main_description',
        year: '03/2023',
        isToShowMockup: true,
        previewImageUrl: 'realestate.jpg',
        mainImage: { url: "houselocation.png", alt: 'portfolio.project11.alt_main_image' },
        links: {
            demo: 'https://mphouselocation.com/',
            sourceCode: mpHouseLocation
        },
        technology: [
            { url: "wordpress.png", link: wordpress },
            { url: "elementor.png", link: elementor },
            { url: "astra.png", link: astra },
            { url: "figma.png", link: figma },
            { url: "hostinger.png", link: hostinger },
        ]
    },
    {
        id: 12,
        title: 'zool developer',
        type: 'portfolio.project12.type',
        briefDescription: 'portfolio.project12.brief_description',
        mainDescription: 'portfolio.project12.main_description',
        year: '04/2023',
        isToShowMockup: true,
        previewImageUrl: 'portfolio.jpg',
        mainImage: { url: "zooldeveloper.png", alt: 'portfolio.project12.alt_main_image' },
        links: {
            demo: zoolDeveloper,
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