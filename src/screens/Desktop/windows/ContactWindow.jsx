import { useState } from "react";
import "./contact-window.css";

function CopyRow({ label, value, href }) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 900);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="cw-row">
            <div className="cw-left">
                <div className="cw-label">{label}</div>
                <div className="cw-value">
                    {href ? (
                        <a className="cw-link" href={href} target="_blank" rel="noreferrer">
                            {value}
                        </a>
                    ) : (
                        value
                    )}
                </div>
            </div>

            <button className="cw-btn" onClick={copy}>
                {copied ? "Copied ✓" : "Copy"}
            </button>
        </div>
    );
}

export default function ContactWindow() {
    const email = "strannik19742@mail.ru";
    const tg = "https://t.me/KazakDmitriy";
    const gh = "https://github.com/KaZaKDon";

    return (
        <div className="cw">
            <div className="cw-head">
                <div className="cw-title">Contact</div>
                <div className="cw-sub">🟢 Available for Remote Work</div>
            </div>

            <div className="cw-card">
                <CopyRow label="Email" value={email} href={`mailto:${email}`} />
                <CopyRow label="Telegram" value={tg} href={tg} />
                <CopyRow label="GitHub" value={gh} href={gh} />
            </div>

            <div className="cw-mini">
                Preferred channel: <b>Telegram</b>. I usually reply fast.
            </div>
        </div>
    );
}