import {
    createWindow
} from "./desktopState";

export const DesktopActions = {
    OPEN_WINDOW: "OPEN_WINDOW",
    CLOSE_WINDOW: "CLOSE_WINDOW",
    FOCUS_WINDOW: "FOCUS_WINDOW",
    MOVE_WINDOW: "MOVE_WINDOW",
    TOGGLE_MINIMIZE: "TOGGLE_MINIMIZE",
    TOGGLE_MAXIMIZE: "TOGGLE_MAXIMIZE",
    SET_START_MENU: "SET_START_MENU",
    CLOSE_ALL_MENUS: "CLOSE_ALL_MENUS",
};

function focus(state, id) {
    const w = state.windowsById[id];
    if (!w || !w.isOpen) return state;

    const zCounter = state.zCounter + 1;
    const windowsById = {
        ...state.windowsById,
        [id]: {
            ...w,
            z: zCounter
        },
    };

    return {
        ...state,
        windowsById,
        activeId: id,
        zCounter,
    };
}

export function desktopReducer(state, action) {
    switch (action.type) {
        case DesktopActions.OPEN_WINDOW: {
            const {
                windowSpec
            } = action;

            // singleton: если уже открыто окно с таким ключом — просто фокус/разворачиваем
            if (windowSpec?.singletonKey) {
                const existing = Object.values(state.windowsById).find(
                    (w) => w.isOpen && w.singletonKey === windowSpec.singletonKey
                );

                if (existing) {
                    let next = state;

                    // если свернуто — развернуть
                    if (existing.isMinimized) {
                        next = desktopReducer(next, {
                            type: DesktopActions.TOGGLE_MINIMIZE,
                            id: existing.id,
                        });
                    }

                    return focus(next, existing.id);
                }
            }

            const win = createWindow(windowSpec);

            const windowsById = {
                ...state.windowsById,
                [win.id]: win
            };
            const order = [...state.order, win.id];

            let nextState = {
                ...state,
                windowsById,
                order,
                startMenuOpen: false,
            };

            nextState = focus(nextState, win.id);
            return nextState;
        }

        case DesktopActions.CLOSE_WINDOW: {
            const {
                id
            } = action;
            const w = state.windowsById[id];
            if (!w) return state;

            const windowsById = {
                ...state.windowsById,
                [id]: {
                    ...w,
                    isOpen: false,
                    isMinimized: false
                },
            };

            const activeId = state.activeId === id ? null : state.activeId;
            return {
                ...state,
                windowsById,
                activeId
            };
        }

        case DesktopActions.FOCUS_WINDOW:
            return focus(state, action.id);

        case DesktopActions.MOVE_WINDOW: {
            const {
                id,
                x,
                y
            } = action;
            const w = state.windowsById[id];
            if (!w || w.isMaximized) return state;

            const windowsById = {
                ...state.windowsById,
                [id]: {
                    ...w,
                    x,
                    y
                },
            };
            return {
                ...state,
                windowsById
            };
        }

        case DesktopActions.TOGGLE_MINIMIZE: {
            const {
                id
            } = action;
            const w = state.windowsById[id];
            if (!w) return state;

            const isMinimized = !w.isMinimized;

            const windowsById = {
                ...state.windowsById,
                [id]: {
                    ...w,
                    isMinimized,
                    isMaximized: isMinimized ? w.isMaximized : w.isMaximized
                },
            };

            // если свернули активное — активного окна нет
            const activeId =
                state.activeId === id && isMinimized ? null : state.activeId;

            return {
                ...state,
                windowsById,
                activeId,
                startMenuOpen: false
            };
        }

        case DesktopActions.TOGGLE_MAXIMIZE: {
            const {
                id
            } = action;
            const w = state.windowsById[id];
            if (!w) return state;

            const isMaximizing = !w.isMaximized;

            const nextWindow = isMaximizing ?
                {
                    ...w,
                    isMaximized: true,
                    isMinimized: false,
                    // запоминаем геометрию чтобы вернуть назад
                    restoreRect: {
                        x: w.x,
                        y: w.y,
                        w: w.w,
                        h: w.h
                    },
                } :
                {
                    ...w,
                    isMaximized: false,
                    isMinimized: false,
                    ...(w.restoreRect ?
                        {
                            x: w.restoreRect.x,
                            y: w.restoreRect.y,
                            w: w.restoreRect.w,
                            h: w.restoreRect.h,
                        } :
                        {}),
                    restoreRect: null,
                };

            const windowsById = {
                ...state.windowsById,
                [id]: nextWindow
            };

            let next = {
                ...state,
                windowsById,
                startMenuOpen: false
            };
            next = focus(next, id);
            return next;
        }

        case DesktopActions.SET_START_MENU:
            return {
                ...state, startMenuOpen: action.open
            };

        case DesktopActions.CLOSE_ALL_MENUS:
            return {
                ...state, startMenuOpen: false
            };

        default:
            return state;
    }
}