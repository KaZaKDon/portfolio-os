import "./project-window.css";
import { projects } from "../../../data/projects";

export default function ProjectsWindow({
    onOpenEstimator,
    onOpenMessenger,
    onOpenMuseum,
    onOpenInspired,
    onOpenStudio, // 👈 добавили
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
            return;
        }

        if (project.actionKey === "studio" && onOpenStudio) {
            onOpenStudio();
            return;
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