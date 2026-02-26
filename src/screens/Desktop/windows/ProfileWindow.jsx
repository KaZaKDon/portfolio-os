import { useMemo, useState } from "react";
import "./profile-window.css";

const TABS = [
    { id: "system", label: "System" },
    { id: "tech", label: "Tech" },
    { id: "activity", label: "Activity" },
    { id: "goals", label: "Goals" },
    { id: "experience", label: "Experience & Projects" },
];

export default function ProfileWindow({ initialTab = "system" }) {
    const [tab, setTab] = useState(() => {
        return TABS.some(t => t.id === initialTab) ? initialTab : TABS[0].id;
    });

    const content = useMemo(() => {
        switch (tab) {
            case "system":
                return (
                    <div className="pw">
                        <div className="pw-head">
                            <div className="pw-avatar">👨‍💻</div>
                            <div className="pw-user">
                                <div className="pw-name">Dmitry Vnukov</div>
                                <div className="pw-role">Fullstack JavaScript Developer (React + Node.js)</div>
                                <div className="pw-status">🟢 Available for Remote Work</div>
                            </div>
                        </div>

                        <div className="pw-grid">
                            <div className="pw-card">
                                <div className="pw-title">User Information</div>
                                <div className="pw-kv">
                                    <div><span>Location</span><b>Remote</b></div>
                                    <div><span>Level</span><b>Junior / Junior+</b></div>
                                    <div><span>Focus</span><b>Product features</b></div>
                                    <div><span>Language</span><b>RU, basic EN</b></div>
                                </div>
                            </div>

                            <div className="pw-card">
                                <div className="pw-title">Highlights</div>
                                <ul className="pw-ul">
                                    <li>UI architecture, reusable components</li>
                                    <li>REST + realtime concepts</li>
                                    <li>UX states (loading/empty/error)</li>
                                    <li>Debugging & fixes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            case "tech":
                return (
                    <div className="pw-grid">
                        <div className="pw-card">
                            <div className="pw-title">Frontend</div>
                            <div className="pw-kv">
                                <div><span>Stack</span><b>React, Vite, JS</b></div>
                                <div><span>UI</span><b>CSS, responsive</b></div>
                                <div><span>Approach</span><b>Component-based</b></div>
                            </div>
                        </div>

                        <div className="pw-card">
                            <div className="pw-title">Backend</div>
                            <div className="pw-kv">
                                <div><span>Node</span><b>Express</b></div>
                                <div><span>API</span><b>REST</b></div>
                                <div><span>Realtime</span><b>Socket.io</b></div>
                            </div>
                        </div>

                        <div className="pw-card pw-span">
                            <div className="pw-title">Data & Tooling</div>
                            <div className="pw-kv">
                                <div><span>DB</span><b>PostgreSQL / SQLite (basic)</b></div>
                                <div><span>Tools</span><b>Git, npm, ESLint</b></div>
                                <div><span>Habits</span><b>Logs, reproducible fixes</b></div>
                            </div>
                        </div>
                    </div>
                );

            case "activity":
                return (
                    <div className="pw-grid">
                        <div className="pw-card pw-span">
                            <div className="pw-title">Current Activity</div>
                            <div className="pw-text">
                                Developing a realtime web messenger: auth, private & group chats, media messages,
                                notifications and live updates.
                            </div>
                        </div>

                        <div className="pw-card">
                            <div className="pw-title">What I ship</div>
                            <ul className="pw-ul">
                                <li>Working flows end-to-end</li>
                                <li>Error handling</li>
                                <li>Clean structure</li>
                            </ul>
                        </div>

                        <div className="pw-card">
                            <div className="pw-title">Interests</div>
                            <ul className="pw-ul">
                                <li>Realtime UX</li>
                                <li>Chat systems</li>
                                <li>Product UI</li>
                            </ul>
                        </div>
                    </div>
                );

            case "goals":
                return (
                    <div className="pw-grid">
                        <div className="pw-card pw-span">
                            <div className="pw-title">Objectives</div>
                            <div className="pw-text">
                                Seeking a remote Fullstack/Frontend role in a team where I can contribute to real
                                products and grow through code review and production tasks.
                            </div>
                        </div>

                        <div className="pw-card">
                            <div className="pw-title">Preferred</div>
                            <ul className="pw-ul">
                                <li>Remote</li>
                                <li>Full-time</li>
                                <li>Long-term</li>
                            </ul>
                        </div>

                        <div className="pw-card">
                            <div className="pw-title">Status</div>
                            <div className="pw-text"><b>🟢 Available for Remote Work</b></div>
                        </div>
                    </div>
                );

            case "experience":
                return (
                    <div className="pw-block">
                        <div className="pw-title">Experience & Projects</div>

                        <div className="pw-subtitle">Main project</div>
                        <div className="pw-text">
                            Realtime Web Messenger (React + Node.js + Socket.io)
                        </div>

                        <ul className="pw-list">
                            <li>Auth by phone code (flow + validation)</li>
                            <li>Private & group chats</li>
                            <li>Media messages (images), planned: audio</li>
                            <li>Realtime updates (WebSockets)</li>
                        </ul>

                        <div className="pw-text" style={{ marginTop: 10, opacity: 0.75 }}>
                            Projects details will be shown in the Projects window.
                        </div>
                    </div>
                );

            default:
                return null;
        }
    }, [tab]);

    return (
        <div className="profile-window">
            <div className="pw-tabs">
                {TABS.map((t) => (
                    <button
                        key={t.id}
                        className={`pw-tab ${tab === t.id ? "active" : ""}`}
                        onClick={() => setTab(t.id)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="pw-content">{content}</div>
        </div>
    );
}