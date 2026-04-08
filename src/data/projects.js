import estimatorDesktopMain from "../assets/projects/estimator/estimator-desktop-main.png";
import estimatorDesktopResult from "../assets/projects/estimator/estimator-desktop-result.png";
import estimatorTablet from "../assets/projects/estimator/estimator-tablet.png";
import estimatorMobile from "../assets/projects/estimator/estimator-mobile.png";

import museumDesktopMap from "../assets/projects/museum/museum-desktop-map.png";
import museumObjectCard from "../assets/projects/museum/museum-desktop-object.png";
import museumMobileCard from "../assets/projects/museum/museum-tablet.png";
import museumNature from "../assets/projects/museum/museum-mobile.png";

import inspiredDesktopHome from "../assets/projects/inspired/desktop.png";
import inspiredDesktopCatalog from "../assets/projects/inspired/desktop-tab.png";
import inspiredDesktopProduct from "../assets/projects/inspired/desktop-zak.png";
import inspiredMobileCheckout from "../assets/projects/inspired/mobile.png";
import inspiredTabletCheckout from "../assets/projects/inspired/tablet.png";

import messengerChat from "../assets/projects/messenger/messengerChat.png";
import messengerLogin from "../assets/projects/messenger/messengerLogin.png";
import messengerMenu from "../assets/projects/messenger/messengerMenu.png";

import studioMain from "../assets/projects/external/studioMain.png";
import studioServices from "../assets/projects/external/studioServices.png";
import studioProjects from "../assets/projects/external/studioProjects.png";
import studioForm from "../assets/projects/external/studioForm.png";

export const projects = [
    {
        id: "estimator",
        title: "Сметчик",

        shortDescription:
            "Interactive calculator for estimating website development cost and delivery time. Supports screen-based calculation, responsiveness options, quality settings, and feature complexity. Built with React and optimized for fast client-side interaction.",

        description:
            "A client-side calculator for estimating website development cost and timeline based on project scope. The tool allows configuring screens, responsiveness, design quality, animations, and functional complexity, producing an instant estimation of project budget and development time.",

        features: [
            "Screen-based website project estimation",
            "Configurable responsiveness and UI complexity",
            "Instant cost and timeline calculation",
            "Client-side state management with React",
            "Fast interactive UI without backend dependency"
        ],

        stack: ["React", "Vite", "JavaScript", "LocalStorage"],

        preview: estimatorDesktopMain,

        screenshots: [
            estimatorDesktopMain,
            estimatorDesktopResult,
            estimatorTablet,
            estimatorMobile
        ],

        demoUrl: "https://vkazakdon.ru/calculator/",
        githubUrl: "https://github.com/KaZaKDon/frontend-cost-estimator",

        actionType: "window",
        actionKey: "estimator"
    },

    {
        id: "museum",
        title: "Шолоховский край",

        shortDescription:
            "Interactive tourist map of the Sholokhov region with categorized locations, object cards, and route building. Designed for convenient exploration of museums, monuments, nature spots, and historical places across desktop and mobile devices.",

        description:
            "An interactive tourist map designed to help users explore museums, monuments, nature spots, and historical places in the Sholokhov region. The project focuses on convenient navigation and clear presentation of regional cultural locations.",

        features: [
            "Interactive map interface built with Leaflet",
            "Location cards with structured information",
            "Category-based navigation of tourist places",
            "Responsive layout for desktop and mobile devices",
            "Geographic content presentation for tourism products"
        ],

        stack: ["JavaScript", "Leaflet", "Responsive UI"],

        preview: museumDesktopMap,

        screenshots: [
            museumDesktopMap,
            museumObjectCard,
            museumMobileCard,
            museumNature
        ],

        demoUrl: "",
        githubUrl: "https://github.com/KaZaKDon/museum",

        actionType: "window",
        actionKey: "museum"
    },

    {
        id: "messenger",
        title: "Kazachiy Krug Messenger",

        shortDescription:
            "Real-time messaging platform with personal and group chats, phone-based authentication, and live message updates. Includes chat navigation, user profiles, and interactive communication powered by WebSockets.",

        description:
            "A real-time messaging platform designed for fast communication between users and groups. The project demonstrates live messaging, user interaction flows, and real-time updates powered by WebSockets.",

        features: [
            "Real-time messaging powered by WebSockets",
            "Personal and group chat communication",
            "Phone-based authentication flow",
            "Chat navigation and message state management",
            "Frontend–backend interaction using React and Node.js"
        ],

        stack: ["React", "Node.js", "Socket.io"],

        preview: messengerChat,

        screenshots: [
            messengerLogin,
            messengerMenu,
            messengerChat
        ],

        demoUrl: "",
        githubUrl: "https://github.com/KaZaKDon/messenger",

        actionType: "window",
        actionKey: "messenger"
    },

    {
        id: "inspired",
        title: "Inspired Store",

        shortDescription:
            "Responsive e-commerce storefront featuring product catalog, product detail pages, cart interaction, and checkout flow. Demonstrates key online store functionality including browsing, product selection, and order placement.",

        description:
            "An online store interface demonstrating core e-commerce flows: product browsing, detailed product pages, cart management, and checkout interaction. The project focuses on responsive layout and product presentation.",

        features: [
            "Product catalog with structured item presentation",
            "Product detail pages with size and color options",
            "Shopping cart interaction and checkout flow",
            "Responsive storefront layout for all devices",
            "Vanilla JavaScript UI architecture without frameworks"
        ],

        stack: ["HTML", "CSS", "JavaScript"],

        preview: inspiredDesktopHome,

        screenshots: [
            inspiredDesktopHome,
            inspiredDesktopCatalog,
            inspiredDesktopProduct,
            inspiredMobileCheckout,
            inspiredTabletCheckout
        ],

        demoUrl: "",
        githubUrl: "https://github.com/KaZaKDon/Inspired",

        actionType: "window",
        actionKey: "inspired"
    },
    {
    id: "studio",
    title: "VKazakDon Studio",

    shortDescription:
        "Development studio website presenting services, portfolio and client interaction.",

    description:
        "A studio website designed to present development services, showcase projects, and provide a clear communication channel with clients. The project focuses on clean UI, structured content, and business-oriented presentation.",

    features: [
        "Service presentation and positioning",
        "Project portfolio showcase",
        "Contact and client interaction flow",
        "Responsive layout",
        "Modern landing page structure"
    ],

    stack: ["React", "Vite", "CSS"],

    preview: studioMain, // картинка
    screenshots: [
        studioMain,
        studioServices,
        studioProjects,
        studioForm
    ],

    demoUrl: "https://vkazakdon.ru", // или куда ты его поставишь
    githubUrl: "",

    actionType: "window",
    actionKey: "studio"
}
];
