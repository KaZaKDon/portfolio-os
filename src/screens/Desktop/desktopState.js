import {
    uid
} from "../../shared/utils/uid";

export const WINDOW_TYPES = {
    WELCOME: "WELCOME",
    PROFILE: "PROFILE",
    RESUME: "RESUME",
    CONTACT: "CONTACT",
    PROJECTS: "PROJECTS",
    PROJECT_ESTIMATOR: "PROJECT_ESTIMATOR",
    PROJECT_MESSENGER: "PROJECT_MESSENGER",
    PROJECT_MUSEUM: "PROJECT_MUSEUM",
};

export function createWindow({
    type,
    title,
    icon,
    x,
    y,
    w,
    h,
    payload,
    singletonKey
}) {
    return {
        id: uid("win_"),
        type,
        title,
        icon: icon ?? null,

        // geometry
        x: x ?? 120,
        y: y ?? 100,
        w: w ?? 520,
        h: h ?? 360,

        // state
        payload: payload ?? {},
        singletonKey: singletonKey ?? null,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        z: 1,

        // for "restore" after maximize
        restoreRect: null,
    }
}

export function initialDesktopState() {
    // Стартуем только с Welcome (как ты просил)
    const welcome = createWindow({
        type: WINDOW_TYPES.WELCOME,
        title: "Welcome",
        icon: "welcome",
        x: 220,
        y: 110,
        w: 520,
        h: 360,
        singletonKey: "WELCOME",
    });

    const windows = [welcome];

    // z indices
    let zCounter = 1;
    for (const win of windows) {
        win.z = ++zCounter;
    }

    return {
        windowsById: Object.fromEntries(windows.map((w) => [w.id, w])),
        order: windows.map((w) => w.id),
        activeId: welcome.id,
        startMenuOpen: false,
        zCounter,
    };
}