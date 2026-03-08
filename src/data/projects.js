import estimatorDesktopMain from "../assets/projects/estimator/estimator-desktop-main.png";
import estimatorDesktopResult from "../assets/projects/estimator/estimator-desktop-result.png";
import estimatorTablet from "../assets/projects/estimator/estimator-tablet.png";
import estimatorMobile from "../assets/projects/estimator/estimator-mobile.png";

import museumDesktopMap from "../assets/projects/museum/museum-desktop-map.png";
import museumDesktopObject from "../assets/projects/museum/museum-desktop-object.png";
import museumTablet from "../assets/projects/museum/museum-tablet.png";
import museumMobile from "../assets/projects/museum/museum-mobile.png";

export const projects = [
    {
        id: "estimator",
        title: "Сметчик",
        shortDescription:
            "Interactive website development cost and timeline calculator taking into account screen sizes, responsiveness, and additional parameters.",
        stack: ["React", "Vite", "JavaScript", "LocalStorage"],
        preview: estimatorDesktopMain,
        screenshots: [
            estimatorDesktopMain,
            estimatorDesktopResult,
            estimatorTablet,
            estimatorMobile,
        ],
        demoUrl: "https://vkazakdon.ru/calculator/",
        githubUrl: "https://github.com/KaZaKDon/frontend-cost-estimator",
        actionType: "window",
        actionKey: "estimator",
    },

    {
        id: "museum",
        title: "Музей",
        shortDescription:
            "An information project with routes, content sections, and a responsive interface for viewing on different devices.",
        stack: ["JavaScript", "Leaflet", "Responsive UI"],
        preview: museumDesktopMap,
        screenshots: [
            museumDesktopMap,
            museumDesktopObject,
            museumTablet,
            museumMobile,
        ],
        demoUrl: "https://github.com/KaZaKDon/museum",
        githubUrl: "https://github.com/KaZaKDon/museum",
        actionType: "window",
        actionKey: "museum",
    },

    {
        id: "messenger",
        title: "Мессенджер",
        shortDescription:
            "A full-stack real-time messaging app: personal and group chats, authentication, media, and live updates.",
        stack: ["React", "Node.js", "Socket.io"],
        preview: "",
        screenshots: [],
        demoUrl: "https://github.com/KaZaKDon/messenger",
        githubUrl: "https://github.com/KaZaKDon/messenger",
        actionType: "window",
        actionKey: "messenger",
    },
];