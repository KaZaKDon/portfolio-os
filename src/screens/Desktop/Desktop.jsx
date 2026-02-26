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

import "./desktop.css";

function WelcomeContent({ onOpenProjects, onOpenResume, onOpenContact }) {
    return (
        <div className="welcome">
            <div className="w-top">
                <div className="w-title">Welcome</div>
                <div className="w-role">Дмитрий Внуков — Fullstack JavaScript Developer</div>
                <div className="w-sub">React + Node.js • Real-time apps • Remote</div>
                <div className="w-badge">🟢 Available for Remote Work</div>
            </div>

            <div className="w-actions">
                <button className="primary" onClick={onOpenProjects}>Projects</button>
                <button onClick={onOpenResume}>Resume</button>
                <button onClick={onOpenContact}>Contact</button>
            </div>

            <div className="w-footer">
                Best start: <b>Projects</b>. If you need contacts — open <b>Contact</b>.
            </div>
        </div>
    );
}

function ProjectContent({ projectId }) {
    // временная заглушка — потом подключим projects registry
    return (
        <div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{projectId === "chat" ? "Chat App" : "Task Manager"}</div>
            <div style={{ opacity: 0.85, marginBottom: 12 }}>
                {projectId === "chat" ? "Realtime chat with groups & media" : "Full-featured task management tool"}
            </div>
            <div className="links">
                <a className="linkbtn" href="#" onClick={(e) => e.preventDefault()}>Live Demo</a>
                <a className="linkbtn" href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
                <a className="linkbtn" href="#" onClick={(e) => e.preventDefault()}>Code</a>
            </div>
            <div style={{ marginTop: 12, fontSize: 13, opacity: 0.75 }}>
                (Сюда потом подставим скриншот, стек, bullet-поинты)
            </div>
        </div>
    );
}

export default function Desktop() {
    const [state, dispatch] = useReducer(desktopReducer, null, initialDesktopState);

    const windows = useMemo(() => {
        return Object.values(state.windowsById)
            .filter(w => w.isOpen)
            .sort((a, b) => a.z - b.z);
    }, [state.windowsById]);

    const visibleWindows = windows.filter(w => !w.isMinimized);

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

    function openResume() {
        openWindow({
            type: WINDOW_TYPES.RESUME,
            title: "Resume",
            icon: "resume",
            x: 280, y: 160,
            w: 520, h: 420,
            singletonKey: "RESUME",
        });
    }

    function openContact() {
        openWindow({
            type: WINDOW_TYPES.CONTACT,
            title: "Contact",
            icon: "contact",
            x: 320, y: 190,
            w: 420, h: 320,
            singletonKey: "CONTACT",
        });
    }

    // закрывать меню по клику на рабочем столе
    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") dispatch({ type: DesktopActions.CLOSE_ALL_MENUS });
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div className="desktop" onMouseDown={() => dispatch({ type: DesktopActions.CLOSE_ALL_MENUS })}>
            <div className="wallpaper" />
            <DesktopIcons
                onOpen={(id) => {
                    if (id === "projects") {
                        const firstProject = windows.find(w => w.type === WINDOW_TYPES.PROJECT);
                        if (firstProject) handleSelectWindow(firstProject.id);
                    }

                    if (id === "about") {
                        openWindow({
                            type: WINDOW_TYPES.PROFILE,
                            title: "About Dmitry",
                            x: 260,
                            y: 140,
                            w: 560,
                            h: 420,
                            singletonKey: "PROFILE",
                        });
                    }

                    if (id === "resume") openResume();
                    if (id === "contact") openContact();
                }}
            />

            <StartMenu
                open={state.startMenuOpen}
                onClose={() => dispatch({ type: DesktopActions.SET_START_MENU, open: false })}
                onAction={(key) => {
                    if (key === "RESUME") openResume();
                    if (key === "CONTACT") openContact();
                    if (key === "PROJECTS") {
                        // можно открыть окно "Projects Explorer" — пока фокусим чат
                        const firstProject = windows.find(w => w.type === WINDOW_TYPES.PROJECT);
                        if (firstProject) handleSelectWindow(firstProject.id);
                    }
                    if (key === "OVERVIEW") {
                        openWindow({
                            type: WINDOW_TYPES.PROFILE,
                            title: "About Dmitry",
                            icon: "profile",
                            x: 260, y: 140,
                            w: 560, h: 420,
                            singletonKey: "PROFILE",
                            payload: { tab: "overview" },
                        });
                    }
                    if (key === "SKILLS") {
                        openWindow({
                            type: WINDOW_TYPES.PROFILE,
                            title: "About Dmitry",
                            icon: "profile",
                            x: 260, y: 140,
                            w: 560, h: 420,
                            singletonKey: "PROFILE",
                            payload: { tab: "skills" },
                        });
                    }
                    if (key === "STACK") {
                        openWindow({
                            type: WINDOW_TYPES.PROFILE,
                            title: "About Dmitry",
                            icon: "profile",
                            x: 260, y: 140,
                            w: 560, h: 420,
                            singletonKey: "PROFILE",
                            payload: { tab: "stack" },
                        });
                    }
                    if (key === "EXPERIENCE") {
                        openWindow({
                            type: WINDOW_TYPES.PROFILE,
                            title: "Profile",
                            icon: "profile",
                            x: 260, y: 140,
                            w: 560, h: 420,
                            singletonKey: "PROFILE",
                            payload: { tab: "experience" },
                        });
                    }
                    if (key === "CLASSIC") {
                        // когда подключишь router — сделаем navigate("/classic")
                        alert("Classic view: подключим через router (/classic).");
                    }
                }}
            />

            {visibleWindows.map((win) => {
                const isActive = state.activeId === win.id;

                let content = null;
                if (win.type === WINDOW_TYPES.WELCOME) {
                    content = (
                        <WelcomeContent
                            onOpenProjects={() => {
                                const firstProject = windows.find(w => w.type === WINDOW_TYPES.PROJECT);
                                if (firstProject) handleSelectWindow(firstProject.id);
                            }}
                            onOpenResume={openResume}
                            onOpenContact={openContact}
                        />
                    );
                } else if (win.type === WINDOW_TYPES.PROJECT) {
                    content = <ProjectContent projectId={win.payload?.projectId} />;
                } else if (win.type === WINDOW_TYPES.RESUME) {
                    content = <ResumeWindow />;
                } else if (win.type === WINDOW_TYPES.CONTACT) {
                    content = <ContactWindow />;
                } else if (win.type === WINDOW_TYPES.PROFILE) {
                    content = <ProfileWindow initialTab={win.payload?.tab ?? "overview"} />;
                }

                return (
                    <Window
                        key={win.id}
                        win={win}
                        isActive={isActive}
                        onFocus={() => dispatch({ type: DesktopActions.FOCUS_WINDOW, id: win.id })}
                        onClose={() => dispatch({ type: DesktopActions.CLOSE_WINDOW, id: win.id })}
                        onMinimize={() => dispatch({ type: DesktopActions.TOGGLE_MINIMIZE, id: win.id })}
                        onMaximize={() => dispatch({ type: DesktopActions.TOGGLE_MAXIMIZE, id: win.id })}
                        onMove={(x, y) => dispatch({ type: DesktopActions.MOVE_WINDOW, id: win.id, x, y })}
                    >
                        {content}
                    </Window>
                );
            })}

            <Taskbar
                windows={windows}
                activeId={state.activeId}
                startMenuOpen={state.startMenuOpen}
                onToggleStart={() => dispatch({ type: DesktopActions.SET_START_MENU, open: !state.startMenuOpen })}
                onSelectWindow={handleSelectWindow}
            />
        </div>
    );
}