import inspiredMain from "../assets/projects/inspired/desktop.webp";
import inspiredCatalog from "../assets/projects/inspired/desktop-tab.webp";
import inspiredProduct from "../assets/projects/inspired/desktop-zak.webp";
import inspiredMobile from "../assets/projects/inspired/mobile.webp";
import inspiredTablet from "../assets/projects/inspired/tablet.webp";

import museumMain from "../assets/projects/museum/museum-main.webp";
import museumMap from "../assets/projects/museum/museum-map.webp";
import museumPlace from "../assets/projects/museum/museum-place.webp";
import museumMobile from "../assets/projects/museum/museum-mobile.webp";

import messengerMain from "../assets/projects/messenger/messenger-main.webp";
import messengerChat from "../assets/projects/messenger/messenger-chat.webp";
import messengerProfile from "../assets/projects/messenger/messenger-profile.webp";

import estimatorMain from "../assets/projects/estimator/estimator-main.webp";
import estimatorForm from "../assets/projects/estimator/estimator-form.webp";
import estimatorResult from "../assets/projects/estimator/estimator-result.webp";
import estimatorMobile from "../assets/projects/estimator/estimator-mobile.webp";

import hotelMain from "../assets/projects/hotel/hotel-main.webp";
import hotelRooms from "../assets/projects/hotel/hotel-rooms.webp";
import hotelBooking from "../assets/projects/hotel/hotel-booking.webp";
import hotelMobile from "../assets/projects/hotel/hotel-mobile.webp";

import studioMain from "../assets/projects/external/studioMain.webp";
import studioServices from "../assets/projects/external/studioServices.webp";
import studioProjects from "../assets/projects/external/studioProjects.webp";
import studioForm from "../assets/projects/external/studioForm.webp";

import fishingMain from "../assets/projects/fishing/fishing-main.webp";
import fishingMap from "../assets/projects/fishing/fishing-map.webp";
import fishingGameplay from "../assets/projects/fishing/fishing-gameplay.webp";
import fishingInventory from "../assets/projects/fishing/fishing-inventory.webp";

import nativeplacesMain from "../assets/projects/nativeplaces/nativeplacesMain.webp";
import nativeplacesServices from "../assets/projects/nativeplaces/nativeplacesServices.webp";
import nativeplacesMap from "../assets/projects/nativeplaces/nativeplacesMap.webp";
import nativeplacesForm from "../assets/projects/nativeplaces/nativeplacesForm.webp";

import gostudyMain from "../assets/projects/gostudy/gostudy-main.webp";
import gostudyStudent from "../assets/projects/gostudy/gostudy-student.webp";
import gostudyTeacher from "../assets/projects/gostudy/gostudy-teacher.webp";
import gostudyMobile from "../assets/projects/gostudy/gostudy-mobile.webp";

export const projects = [{
        id: "inspired",
        title: "Inspired Store",

        shortDescription: "Интернет-магазин с современным интерфейсом, каталогом товаров и адаптивным дизайном.",

        description: "Проект интернет-магазина с акцентом на современный UI/UX, удобную навигацию и адаптивность. Реализованы страницы каталога, карточек товаров, фильтрация и структура, подходящая для масштабирования под реальные ecommerce-проекты.",

        features: [
            "Каталог товаров и фильтрация",
            "Адаптивный интерфейс",
            "Карточки товаров",
            "Современный UI/UX",
            "Готовая структура для ecommerce"
        ],

        stack: ["React", "Vite", "JavaScript", "CSS"],

        preview: inspiredMain,

        screenshots: [
            inspiredMain,
            inspiredCatalog,
            inspiredProduct,
            inspiredMobile,
            inspiredTablet
        ],

        demoUrl: "",
        githubUrl: "https://github.com/KaZaKDon/Inspired",

        actionType: "window",
        actionKey: "inspired"
    },

    {
        id: "museum",
        title: "Шолоховский край",

        shortDescription: "Интерактивная туристическая карта с историческими и природными объектами Шолоховского района.",

        description: "Интерактивный туристический проект, объединяющий карту достопримечательностей, исторических мест, музеев, памятников и природных объектов. Проект разработан с упором на адаптивность, удобство навигации и визуальную подачу информации.",

        features: [
            "Интерактивная карта на Leaflet",
            "Категории и фильтрация объектов",
            "Информационные панели и модальные окна",
            "Полная адаптация под мобильные устройства",
            "Туристическая навигация и поиск"
        ],

        stack: ["JavaScript", "Leaflet", "HTML", "CSS"],

        preview: museumMain,

        screenshots: [
            museumMain,
            museumMap,
            museumPlace,
            museumMobile
        ],

        demoUrl: "https://krai.vkazakdon.ru",
        githubUrl: "https://github.com/KaZaKDon/museum",

        actionType: "window",
        actionKey: "museum"
    },

    {
        id: "messenger",
        title: "Realtime Messenger",

        shortDescription: "Интерфейс мессенджера с современным дизайном и системой общения в реальном времени.",

        description: "Проект интерфейса современного мессенджера с акцентом на UX, структуру чатов и адаптивный дизайн. Включает экран переписок, профиль пользователя и мобильную адаптацию.",

        features: [
            "Интерфейс чатов",
            "Современный UI мессенджера",
            "Адаптивный дизайн",
            "Профиль пользователя",
            "Структура для realtime-приложений"
        ],

        stack: ["React", "JavaScript", "CSS"],

        preview: messengerMain,

        screenshots: [
            messengerMain,
            messengerChat,
            messengerProfile,
        ],

        demoUrl: "",
        githubUrl: "https://github.com/KaZaKDon/messenger",

        actionType: "window",
        actionKey: "messenger"
    },

    {
        id: "estimator",
        title: "Project Calculator",

        shortDescription: "Калькулятор оценки стоимости и сроков разработки проектов.",

        description: "Интерактивный калькулятор для предварительной оценки стоимости и сроков разработки веб-проектов. Реализована система выбора услуг, расчётов и адаптивный интерфейс.",

        features: [
            "Расчёт стоимости проекта",
            "Выбор услуг и функционала",
            "Интерактивные формы",
            "Адаптивный интерфейс",
            "UI для коммерческих проектов"
        ],

        stack: ["React", "JavaScript", "CSS"],

        preview: estimatorMain,

        screenshots: [
            estimatorMain,
            estimatorForm,
            estimatorResult,
            estimatorMobile
        ],

        demoUrl: "https://vkazakdon.ru/calculator/",
        githubUrl: "https://github.com/KaZaKDon/frontend-cost-estimator",

        actionType: "window",
        actionKey: "estimator"
    },

    {
        id: "hotel",
        title: "Hotel Booking Platform",

        shortDescription: "Сайт гостиницы с системой бронирования, каталогом номеров и адаптивным интерфейсом.",

        description: "Современный гостиничный сайт с акцентом на презентацию номеров, онлайн-бронирование и удобство пользователей. Реализованы адаптивные страницы, формы бронирования, карточки номеров и административный интерфейс для управления заявками.",

        features: [
            "Каталог гостиничных номеров",
            "Интерактивная форма бронирования",
            "Полная адаптация под мобильные устройства",
            "Административная панель",
            "Современный интерфейс для гостиничного бизнеса"
        ],

        stack: ["React", "Vite", "JavaScript", "CSS"],

        preview: hotelMain,

        screenshots: [
            hotelMain,
            hotelRooms,
            hotelBooking,
            hotelMobile
        ],

        demoUrl: "https://hotel.vkazakdon.ru",
        githubUrl: "",

        actionType: "window",
        actionKey: "hotel"
    },

    {
        id: "fishing",
        title: "Don Fishing",

        shortDescription: "Атмосферная игра про рыбалку с механикой заброса, натяжением лески и системой ловли рыбы.",

        description: "Игровой проект, посвящённый рыбалке на Дону. Игрок может путешествовать между локациями, ловить рыбу с использованием механики натяжения и подсечки, улучшать снасти и исследовать атмосферные природные места.",

        features: [
            "Механика заброса и вываживания",
            "Система натяжения лески",
            "Интерактивная карта локаций",
            "Система улучшения снастей",
            "Адаптивный игровой интерфейс"
        ],

        stack: ["React", "JavaScript", "Game UI", "CSS"],

        preview: fishingMain,

        screenshots: [
            fishingMain,
            fishingMap,
            fishingGameplay,
            fishingInventory
        ],

        demoUrl: "",
        githubUrl: "",

        actionType: "window",
        actionKey: "fishing"
    },
    {
        id: "studio",
        title: "VKazakDon Studio",

        shortDescription: "Development studio website presenting services, portfolio and client interaction.",

        description: "A studio website designed to present development services, showcase projects, and provide a clear communication channel with clients. The project focuses on clean UI, structured content, and business-oriented presentation.",

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
    },
    {
        id: "nativeplaces",
        title: "Native places",

        shortDescription: "Interactive platform for discovering local attractions, recreation areas, tourism routes, accommodation, fishing spots, and real estate on a single map.",

        description: "Native Places is a location-based platform that combines tourism, recreation, local history, accommodation listings, and real estate discovery into a single interactive experience. Users can explore points of interest, create personal routes, save favorite locations, manage travel notes, and communicate through a built-in account system. The project focuses on intuitive navigation, rich map interactions, and a scalable architecture prepared for future backend integration, user accounts, moderation tools, and community-driven content.",

        features: [
            "Interactive map with categorized locations",
            "Personal account with favorites and saved places",
            "Route creation and travel planning",
            "Local attractions and tourism discovery",
            "Accommodation and real estate exploration",
            "Messaging and support system",
            "Responsive design for desktop and mobile devices",
            "Scalable architecture prepared for backend integration"
        ],

        stack: ["React", "Vite", "CSS", "Leaflet", "PHP", ],

        preview: nativeplacesMain, // картинка
        screenshots: [
            nativeplacesMain,
            nativeplacesServices,
            nativeplacesMap,
            nativeplacesForm
        ],

        demoUrl: "native-places.ru", // или куда ты его поставишь
        githubUrl: "",

        actionType: "window",
        actionKey: "nativeplaces"
    },
    {
        id: "gostudy",

        title: "GoStudy",

        shortDescription: "Онлайн-платформа для репетиторов и учеников с личными кабинетами, расписанием, домашними заданиями и виртуальным классом.",

        description: "GoStudy — образовательная платформа, объединяющая преподавателей и учеников. Проект включает регистрацию, личные кабинеты, управление расписанием, домашними заданиями, учебными материалами, системой сообщений и виртуальным классом для проведения занятий.",

        features: [
            "Личный кабинет ученика",
            "Личный кабинет преподавателя",
            "Расписание занятий",
            "Домашние задания",
            "Учебные материалы",
            "Сообщения и уведомления",
            "Виртуальный класс",
            "Адаптивный интерфейс"
        ],

        stack: [
            "React",
            "Vite",
            "JavaScript",
            "CSS"
        ],

        preview: gostudyMain,

        screenshots: [
            gostudyMain,
            gostudyStudent,
            gostudyTeacher,
            gostudyMobile
        ],

        demoUrl: "https://vkazakdon.ru/gostudy/",
        githubUrl: "",

        actionType: "window",
        actionKey: "gostudy"
    }
];