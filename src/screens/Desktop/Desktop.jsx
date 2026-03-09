import { useEffect, useMemo, useReducer } from "react";
import Window from "../../components/Window/Window";
import Taskbar from "../../components/Taskbar/Taskbar";
import StartMenu from "../../components/StartMenu/StartMenu";
import DesktopIcons from "./components/DesktopIcons";

import { initialDesktopState, WINDOW_TYPES } from "./desktopState";
import { desktopReducer, DesktopActions } from "./desktopReducer";

import ProfileWindow from "./windows/ProfileWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ContactWindow from "./windows/ContactWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ProjectEstimatorWindow from "./windows/ProjectEstimatorWindow";
import ProjectMessengerWindow from "./windows/ProjectMessengerWindow";
import ProjectMuseumWindow from "./windows/ProjectMuseumWindow";
import ProjectInspiredWindow from "./windows/ProjectInspiredWindow";

import "./desktop.css";

function WelcomeContent({ onOpenProjects, onOpenResume, onOpenContact }) {
    return (
        <div className="welcome">
            <div className="w-top">
                <div className="w-title">Добро пожаловать</div>
                <div className="w-role">Дмитрий Внуков — Fullstack JavaScript-разработчик</div>
                <div className="w-sub">React + Node.js • Приложения реального времени • Удалённая работа</div>
                <div className="w-badge">🟢 Доступен для удалённой работы</div>
            </div>

            <div className="w-actions">
                <button className="primary" onClick={onOpenProjects}>Проекты</button>
                <button onClick={onOpenResume}>Резюме</button>
                <button onClick={onOpenContact}>Контакт</button>
            </div>

            <div className="w-footer">
                Лучше всего начать с раздела «Проекты». Если вам нужны контакты — откройте раздел «Контакты».
            </div>
        </div>
    );
}

export default function Desktop() {
    const [state, dispatch] = useReducer(desktopReducer, null, initialDesktopState);

    const windows = useMemo(() => {
        return Object.values(state.windowsById)
            .filter((w) => w.isOpen)
            .sort((a, b) => a.z - b.z);
    }, [state.windowsById]);

    const visibleWindows = windows.filter((w) => !w.isMinimized);

    function openWindow(windowSpec) {
        dispatch({ type: DesktopActions.OPEN_WINDOW, windowSpec });
    }

    function handleSelectWindow(id) {
        const w = state.windowsById[id];
        if (!w) return;

        if (w.isMinimized) {
            dispatch({ type: DesktopActions.TOGGLE_MINIMIZE, id });
        }

        dispatch({ type: DesktopActions.FOCUS_WINDOW, id });
    }

    function openProjects() {
        openWindow({
            type: WINDOW_TYPES.PROJECTS,
            title: "Проекты",
            icon: "projects",
            x: 180,
            y: 90,
            w: 760,
            h: 560,
            singletonKey: "PROJECTS",
        });
    }

    function openEstimator() {
        openWindow({
            type: WINDOW_TYPES.PROJECT_ESTIMATOR,
            title: "Сметчик",
            icon: "project",
            x: 240,
            y: 120,
            w: 720,
            h: 520,
            singletonKey: "PROJECT_ESTIMATOR",
        });
    }

    function openMessenger() {
        openWindow({
            type: WINDOW_TYPES.PROJECT_MESSENGER,
            title: "Мессенджер",
            icon: "project",
            x: 240,
            y: 120,
            w: 720,
            h: 520,
            singletonKey: "PROJECT_MESSENGER",
        });
    }

    function openMuseum() {
        openWindow({
            type: WINDOW_TYPES.PROJECT_MUSEUM,
            title: "Музей",
            icon: "project",
            x: 240,
            y: 120,
            w: 720,
            h: 520,
            singletonKey: "PROJECT_MUSEUM",
        });
    }

    function openResume() {
        openWindow({
            type: WINDOW_TYPES.RESUME,
            title: "Резюме",
            icon: "resume",
            x: 280,
            y: 160,
            w: 720,
            h: 560,
            singletonKey: "RESUME",
        });
    }

    function openContact() {
        openWindow({
            type: WINDOW_TYPES.CONTACT,
            title: "Контакты",
            icon: "contact",
            x: 320,
            y: 190,
            w: 520,
            h: 340,
            singletonKey: "CONTACT",
        });
    }

    function openProfile(tab = "system") {
        openWindow({
            type: WINDOW_TYPES.PROFILE,
            title: "About Dmitry",
            icon: "profile",
            x: 260,
            y: 140,
            w: 640,
            h: 500,
            singletonKey: "PROFILE",
            payload: { tab },
        });
    }

    function openInspired() {
    openWindow({
        type: WINDOW_TYPES.PROJECT_INSPIRED,
        title: "Inspired Store",
        icon: "project",
        x: 240,
        y: 120,
        w: 720,
        h: 720,
        singletonKey: "PROJECT_INSPIRED",
    });
}

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") {
                dispatch({ type: DesktopActions.CLOSE_ALL_MENUS });
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div
            className="desktop"
            onMouseDown={() => dispatch({ type: DesktopActions.CLOSE_ALL_MENUS })}
        >
            <div className="wallpaper" />

            <DesktopIcons
                onOpen={(id) => {
                    if (id === "projects") openProjects();
                    if (id === "estimator") {
                        window.open("https://vkazakdon.ru/calculator/", "_blank", "noopener,noreferrer");
                    }
                    if (id === "about") openProfile("system");
                    if (id === "resume") openResume();
                    if (id === "contact") openContact();
                }}
            />

            <StartMenu
                open={state.startMenuOpen}
                onClose={() => dispatch({ type: DesktopActions.SET_START_MENU, open: false })}
                onAction={(key) => {
                    if (key === "OVERVIEW") openProfile("system");
                    if (key === "SKILLS") openProfile("activity");
                    if (key === "STACK") openProfile("tech");
                    if (key === "EXPERIENCE") openProfile("goals");
                    if (key === "RESUME") openResume();
                    if (key === "CONTACT") openContact();
                    if (key === "PROJECTS") openProjects();
                }}
            />

            {visibleWindows.map((win) => {
                const isActive = state.activeId === win.id;
                let content = null;

                if (win.type === WINDOW_TYPES.WELCOME) {
                    content = (
                        <WelcomeContent
                            onOpenProjects={openProjects}
                            onOpenResume={openResume}
                            onOpenContact={openContact}
                        />
                    );
                } else if (win.type === WINDOW_TYPES.PROFILE) {
                    content = <ProfileWindow initialTab={win.payload?.tab ?? "system"} />;
                } else if (win.type === WINDOW_TYPES.RESUME) {
                    content = <ResumeWindow />;
                } else if (win.type === WINDOW_TYPES.CONTACT) {
                    content = <ContactWindow />;
                } else if (win.type === WINDOW_TYPES.PROJECTS) {
                    content = (
                        <ProjectsWindow
                            onOpenEstimator={openEstimator}
                            onOpenMessenger={openMessenger}
                            onOpenMuseum={openMuseum}
                            onOpenInspired={openInspired}
                        />
                    );
                } else if (win.type === WINDOW_TYPES.PROJECT_ESTIMATOR) {
                    content = <ProjectEstimatorWindow />;
                } else if (win.type === WINDOW_TYPES.PROJECT_MESSENGER) {
                    content = <ProjectMessengerWindow />;
                } else if (win.type === WINDOW_TYPES.PROJECT_MUSEUM) {
                    content = <ProjectMuseumWindow />;
                } else if (win.type === WINDOW_TYPES.PROJECT_INSPIRED) {
    content = <ProjectInspiredWindow />;
}

                return (
                    <Window
                        key={win.id}
                        win={win}
                        isActive={isActive}
                        onFocus={() =>
                            dispatch({ type: DesktopActions.FOCUS_WINDOW, id: win.id })
                        }
                        onClose={() =>
                            dispatch({ type: DesktopActions.CLOSE_WINDOW, id: win.id })
                        }
                        onMinimize={() =>
                            dispatch({ type: DesktopActions.TOGGLE_MINIMIZE, id: win.id })
                        }
                        onMaximize={() =>
                            dispatch({ type: DesktopActions.TOGGLE_MAXIMIZE, id: win.id })
                        }
                        onMove={(x, y) =>
                            dispatch({ type: DesktopActions.MOVE_WINDOW, id: win.id, x, y })
                        }
                    >
                        {content}
                    </Window>
                );
            })}

            <Taskbar
                windows={windows}
                activeId={state.activeId}
                startMenuOpen={state.startMenuOpen}
                onToggleStart={() =>
                    dispatch({
                        type: DesktopActions.SET_START_MENU,
                        open: !state.startMenuOpen,
                    })
                }
                onSelectWindow={handleSelectWindow}
            />
        </div>
    );
}