import { useMemo, useRef, useState } from "react";
import "./window.css";

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
        if (win.isMaximized) {
            return {
                left: 0,
                top: 0,
                width: "100%",
                height: "calc(100% - var(--taskbar-h))",
                zIndex: win.z,
            };
        }
        return {
            left: win.x,
            top: win.y,
            width: win.w,
            height: win.h,
            zIndex: win.z,
        };
    }, [win]);

    function onPointerDownTitle(e) {
        // если клик по кнопкам управления — НЕ начинаем drag
        if (e.target.closest?.(".controls")) return;

        // только ЛКМ
        if (e.button !== 0) return;

        onFocus?.();
        if (win.isMaximized) return;

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

        // простое ограничение в пределах экрана (без учета snap)
        const maxX = window.innerWidth - 120;
        const maxY = window.innerHeight - 120 - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--taskbar-h") || "56", 10);

        const nextX = Math.max(0, Math.min(maxX, drag.originX + dx));
        const nextY = Math.max(0, Math.min(maxY, drag.originY + dy));

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
                        onClick={(e) => { e.stopPropagation(); onMinimize?.(); }}
                        aria-label="Minimize"
                    >
                        —
                    </button>

                    <button
                        className="btn"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); onMaximize?.(); }}
                        aria-label="Maximize"
                    >
                        ▢
                    </button>

                    <button
                        className="btn danger"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); onClose?.(); }}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
}