import "./taskbar.css";

export default function Taskbar({
    windows,
    activeId,
    startMenuOpen,
    onToggleStart,
    onSelectWindow,
    rightStatus = "🟢 Available for Remote Work",
}) {
    return (
        <div className="taskbar">
            <button className={`start ${startMenuOpen ? "open" : ""}`} onClick={onToggleStart}>
                Profile
            </button>

            <div className="tabs">
                {windows
                    .filter(w => w.isOpen)
                    .map(w => {
                        const isActive = activeId === w.id && !w.isMinimized;
                        return (
                            <button
                                key={w.id}
                                className={`tab ${isActive ? "active" : ""} ${w.isMinimized ? "min" : ""}`}
                                onClick={() => onSelectWindow(w.id)}
                                title={w.title}
                            >
                                {w.title}
                            </button>
                        );
                    })}
            </div>

            <div className="right">
                <span className="status">{rightStatus}</span>
            </div>
        </div>
    );
}