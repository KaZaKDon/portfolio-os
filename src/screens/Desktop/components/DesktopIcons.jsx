import { useEffect, useState } from "react";
import "./desktop-icons.css";

import folder from "../../../assets/icons/folder.svg";
import user from "../../../assets/icons/user.svg";
import resume from "../../../assets/icons/resume.svg";
import mail from "../../../assets/icons/mail.svg";
import estimator from "../../../assets/icons/estimator.svg";

const ICONS = [
    { id: "projects", label: "Projects", icon: folder },
    { id: "estimator", label: "Cost Estimator", icon: estimator },
    { id: "about", label: "About", icon: user },
    { id: "resume", label: "Resume", icon: resume },
    { id: "contact", label: "Contact", icon: mail },
];

export default function DesktopIcons({ onOpen }) {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") {
                setSelectedId(null);
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div
            className="desktop-icons"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    setSelectedId(null);
                }
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