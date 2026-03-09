import "./project-window.css";
import { projects } from "../../../data/projects";

export default function ProjectsWindow({
    onOpenEstimator,
    onOpenMessenger,
    onOpenMuseum,
    onOpenInspired,
}) {
    const handleOpenProject = (project) => {
        if (project.actionType !== "window") return;

        if (project.actionKey === "estimator" && onOpenEstimator) {
            onOpenEstimator();
            return;
        }

        if (project.actionKey === "messenger" && onOpenMessenger) {
            onOpenMessenger();
            return;
        }

        if (project.actionKey === "museum" && onOpenMuseum) {
            onOpenMuseum();
            return;
        }

        if (project.actionKey === "inspired" && onOpenInspired) {
            onOpenInspired();
        }
    };

    return (
        <div className="projects-window">
            <div className="pw-projects-title">Проекты</div>
            <div className="pw-projects-sub">
                Основные проекты портфолио
            </div>

            <div className="projects-list">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        {project.preview ? (
                            <img
                                src={project.preview}
                                className="project-preview"
                                alt={project.title}
                            />
                        ) : (
                            <div className="project-preview project-preview--empty">
                                Нет preview
                            </div>
                        )}

                        <div className="project-card-head">
                            <div className="project-card-title">
                                {project.title}
                            </div>

                            <div className="project-card-tags">
                                {project.stack?.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-card-text">
                            {project.shortDescription}
                        </div>

                        <div className="project-card-actions">
                            <button
                                className="project-btn primary"
                                onClick={() => handleOpenProject(project)}
                                type="button"
                            >
                                Открыть
                            </button>

                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-btn"
                                >
                                    <span className="btn-icon">
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                                        </svg>
                                    </span>
                                    Demo
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-btn"
                                >
                                    <span className="btn-icon">
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 .5A12 12 0 000 12.7a12.2 12.2 0 008.2 11.6c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.7-.3-5.6-1.4-5.6-6.1 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.3 0 0 1.1-.4 3.6 1.3a12.5 12.5 0 016.6 0c2.5-1.7 3.6-1.3 3.6-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2.1 1.3 3.5 0 4.7-2.9 5.7-5.6 6.1.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12.2 12.2 0 0024 12.7 12 12 0 0012 .5z" />
                                        </svg>
                                    </span>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}