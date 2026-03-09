import "./startmenu.css";

export default function StartMenu({ open, onClose, onAction }) {
    if (!open) return null;

    return (
        <div className="startmenu" onMouseDown={(e) => e.stopPropagation()}>
            <div className="menu-header">Profile</div>

            <button className="item" onClick={() => { onAction("OVERVIEW"); onClose(); }}>
                👋 Overview
            </button>
            <button className="item" onClick={() => { onAction("SKILLS"); onClose(); }}>
                🧠 Skills
            </button>
            <button className="item" onClick={() => { onAction("STACK"); onClose(); }}>
                🛠️ Tech Stack
            </button>
            <button className="item" onClick={() => { onAction("PROJECTS"); onClose(); }}>
                💼 Experience & Projects
            </button>

            <div className="sep" />

            <button className="item" onClick={() => { onAction("RESUME"); onClose(); }}>
                📄 Resume
            </button>
            <button className="item" onClick={() => { onAction("CONTACT"); onClose(); }}>
                📬 Contact
            </button>

            <div className="sep" />
        </div>
    );
}