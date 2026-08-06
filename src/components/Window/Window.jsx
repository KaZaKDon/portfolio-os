import { useMemo, useRef, useState } from "react";
import "./window.css";

const MOBILE_WINDOW_BREAKPOINT = 750;
const WINDOW_SIDE_GAP = 8;

export default function Window({
    win,
    isActive,
    onFocus,
    onClose,
    onMinimize,
    onMaximize,
    onMove,
    children,
}) {
    const ref = useRef(null);
    const [drag, setDrag] = useState(null);

    const style = useMemo(() => {
        return {
            "--win-x": `${win.x}px`,
            "--win-y": `${win.y}px`,
            "--win-w": `${win.w}px`,
            "--win-h": `${win.h}px`,
            zIndex: win.z,
        };
    }, [win]);

    function onPointerDownTitle(e) {
        if (e.target.closest?.(".controls")) return;
        if (e.button !== 0) return;

        onFocus?.();

        if (win.isMaximized || window.innerWidth <= MOBILE_WINDOW_BREAKPOINT) return;

        const el = ref.current;
        if (!el) return;

        el.setPointerCapture?.(e.pointerId);

        setDrag({
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            originX: win.x,
            originY: win.y,
        });
    }

    function onPointerMove(e) {
        if (!drag || drag.pointerId !== e.pointerId) return;

        const dx = e.clientX - drag.startX;
        const dy = e.clientY - drag.startY;

        const taskbarHeight = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--taskbar-h") || "56",
            10
        );

        const maxX = window.innerWidth - Math.min(win.w, window.innerWidth - WINDOW_SIDE_GAP * 2) - WINDOW_SIDE_GAP;
        const maxY = window.innerHeight - taskbarHeight - Math.min(win.h, window.innerHeight - taskbarHeight - WINDOW_SIDE_GAP * 2) - WINDOW_SIDE_GAP;

        const nextX = Math.max(WINDOW_SIDE_GAP, Math.min(maxX, drag.originX + dx));
        const nextY = Math.max(WINDOW_SIDE_GAP, Math.min(maxY, drag.originY + dy));

        onMove?.(nextX, nextY);
    }

    function onPointerUp(e) {
        if (!drag || drag.pointerId !== e.pointerId) return;
        setDrag(null);
    }

    if (!win.isOpen || win.isMinimized) return null;

    return (
        <div
            ref={ref}
            className={`os-window ${isActive ? "active" : ""}`}
            style={style}
            onMouseDown={onFocus}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
        >
            <div className="titlebar" onPointerDown={onPointerDownTitle}>
                <div className="title">{win.title}</div>

                <div className="controls">
                    <button
                        className="btn"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                            e.stopPropagation();
                            onMinimize?.();
                        }}
                        aria-label="Minimize"
                    >
                        —
                    </button>

                    <button
                        className="btn"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                            e.stopPropagation();
                            onMaximize?.();
                        }}
                        aria-label="Maximize"
                    >
                        ▢
                    </button>

                    <button
                        className="btn danger"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose?.();
                        }}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>
            </div>

            <div className="content">{children}</div>
        </div>
    );
}