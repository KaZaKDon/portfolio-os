// src/screens/Desktop/components/DesktopIcons.jsx
import { useEffect, useState } from "react";
import "./desktop-icons.css";

// Иконки (положи SVG сюда: src/assets/icons/)
import folder from "../../../assets/icons/folder.svg";
import user from "../../../assets/icons/user.svg";
import resume from "../../../assets/icons/resume.svg";
import mail from "../../../assets/icons/mail.svg";

// Минимальный набор (можешь убрать лишнее)
const ICONS = [
    { id: "projects", label: "Projects", icon: folder },
    { id: "about", label: "About", icon: user },
    { id: "resume", label: "Resume", icon: resume },
    { id: "contact", label: "Contact", icon: mail }, // опционально
];

export default function DesktopIcons({ onOpen }) {
    const [selectedId, setSelectedId] = useState(null);

    // Esc снимает выделение
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setSelectedId(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div
            className="desktop-icons"
            onMouseDown={(e) => {
                // клик по пустому месту — снять выделение
                if (e.target === e.currentTarget) setSelectedId(null);
            }}
        >
            {ICONS.map((icon) => (
                <div
                    key={icon.id}
                    className={`desktop-icon ${selectedId === icon.id ? "selected" : ""}`}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        setSelectedId(icon.id);
                    }}
                    onDoubleClick={(e) => {
                        e.stopPropagation();
                        onOpen?.(icon.id);
                    }}
                >
                    <div className="icon-image">
                        <img src={icon.icon} alt="" draggable={false} />
                    </div>
                    <div className="icon-label">{icon.label}</div>
                </div>
            ))}
        </div>
    );
}