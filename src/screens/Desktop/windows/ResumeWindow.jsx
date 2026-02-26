import { useState } from "react";
import "./resume-window.css";

export default function ResumeWindow() {
    const [copied, setCopied] = useState(false);

    const plain = [
        "Дмитрий Внуков — Junior / Junior+ Fullstack JavaScript Developer (React + Node.js)",
        "🟢 Available for Remote Work",
        "",
        "Stack: React, Vite, JavaScript, Node.js, Express, REST, Socket.io, Git, PostgreSQL/SQLite (basic)",
        "",
        "Key project: Realtime Web Messenger",
        "- auth",
        "- private & group chats",
        "- media messages",
        "- realtime updates",
        "",
        "Contacts:",
        "Email: strannik19742@mail.ru",
        "Telegram: https://t.me/KazakDmitriy",
        "GitHub: https://github.com/KaZaKDon",
    ].join("\n");

    async function copy() {
        try {
            await navigator.clipboard.writeText(plain);
            setCopied(true);
            setTimeout(() => setCopied(false), 900);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="rw">
            <div className="rw-top">
                <div>
                    <div className="rw-name">Дмитрий Внуков</div>
                    <div className="rw-role">
                        Junior / Junior+ Fullstack JavaScript Developer (React + Node.js)
                    </div>
                    <div className="rw-status">🟢 Available for Remote Work</div>
                </div>

                <div className="rw-actions">
                    <a className="rw-btn primary" href="/resume.pdf" download>
                        Download PDF
                    </a>
                    <button className="rw-btn" onClick={copy}>
                        {copied ? "Copied ✓" : "Copy text"}
                    </button>
                </div>
            </div>

            <div className="rw-grid">
                <div className="rw-card">
                    <div className="rw-title">Summary</div>
                    <div className="rw-text">
                        Fullstack developer focused on building real web applications:
                        UI, backend logic and real-time features. Main stack — React + Node.js.
                    </div>
                </div>

                <div className="rw-card">
                    <div className="rw-title">Tech</div>
                    <ul className="rw-list">
                        <li><b>Frontend:</b> React, Vite, JS, HTML, CSS</li>
                        <li><b>Backend:</b> Node.js, Express, REST, Socket.io</li>
                        <li><b>Data:</b> PostgreSQL / SQLite (basic)</li>
                        <li><b>Tools:</b> Git, npm, debugging</li>
                    </ul>
                </div>

                <div className="rw-card rw-span">
                    <div className="rw-title">Key project</div>
                    <div className="rw-project">
                        <div className="rw-project-name">Realtime Web Messenger</div>
                        <ul className="rw-list">
                            <li>auth</li>
                            <li>private & group chats</li>
                            <li>media messages</li>
                            <li>realtime updates</li>
                        </ul>
                        <div className="rw-links">
                            <a href="https://github.com/KaZaKDon" target="_blank" rel="noreferrer" className="rw-linkbtn">
                                GitHub
                            </a>
                            <span className="rw-hint">(Demo добавим позже)</span>
                        </div>
                    </div>
                </div>

                <div className="rw-card">
                    <div className="rw-title">Contacts</div>

                    <div className="rw-text">
                        Email:{" "}
                        <a href="mailto:strannik19742@mail.ru">
                            strannik19742@mail.ru
                        </a>
                        <br />

                        Telegram:{" "}
                        <a
                            href="https://t.me/KazakDmitriy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            t.me/KazakDmitriy
                        </a>
                        <br />

                        GitHub:{" "}
                        <a
                            href="https://github.com/KaZaKDon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/KaZaKDon
                        </a>
                    </div>
                </div>
            </div>

            <div className="rw-raw">
                <div className="rw-title">Plain text (for HR)</div>
                <textarea className="rw-textarea" value={plain} readOnly />
            </div>
        </div>
    );
}