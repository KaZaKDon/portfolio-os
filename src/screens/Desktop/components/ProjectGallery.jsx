import { useEffect, useState } from "react";
import "./project-gallery.css";

export default function ProjectGallery({ project }) {
    const screenshots = project?.screenshots ?? [];
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const hasScreenshots = screenshots.length > 0;
    const activeShot = hasScreenshots ? screenshots[activeIndex] : null;

    useEffect(() => {
        if (!isFullscreen) return;

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setIsFullscreen(false);
            }

            if (!hasScreenshots) return;

            if (e.key === "ArrowLeft") {
                setActiveIndex((prev) =>
                    prev === 0 ? screenshots.length - 1 : prev - 1
                );
            }

            if (e.key === "ArrowRight") {
                setActiveIndex((prev) =>
                    prev === screenshots.length - 1 ? 0 : prev + 1
                );
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFullscreen, hasScreenshots, screenshots.length]);

    function goPrev() {
        if (!hasScreenshots) return;

        setActiveIndex((prev) =>
            prev === 0 ? screenshots.length - 1 : prev - 1
        );
    }

    function goNext() {
        if (!hasScreenshots) return;

        setActiveIndex((prev) =>
            prev === screenshots.length - 1 ? 0 : prev + 1
        );
    }

    function handleTouchStart(e) {
        setTouchStartX(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEndX(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (!touchStartX || !touchEndX) return;

        const distance = touchStartX - touchEndX;

        const swipeThreshold = 50;

        if (distance > swipeThreshold) {
            goNext(); // свайп влево
        }

        if (distance < -swipeThreshold) {
            goPrev(); // свайп вправо
        }

        setTouchStartX(null);
        setTouchEndX(null);
    }

    function openFullscreen() {
        if (!activeShot) return;
        setIsFullscreen(true);
    }

    function closeFullscreen() {
        setIsFullscreen(false);
    }

    if (!project) {
        return (
            <div className="project-viewer">
                <div className="project-viewer__empty">
                    Проект не найден
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="project-viewer">
                <div className="project-viewer__top">
                    <h2 className="project-viewer__title">{project.title}</h2>

                    <p className="project-viewer__description">
                        {project.shortDescription}
                    </p>
                    {project.features && (
                        <div className="project-features">
                            <div className="project-features-title">Key features</div>

                            <ul className="project-features-list">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="project-viewer__tags">
                        {project.stack?.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>

                    {(project.demoUrl || project.githubUrl) && (
                        <div className="gallery-actions">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="gallery-btn gallery-btn--primary"
                                >
                                    Demo
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="gallery-btn"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="project-viewer__media">
                    {hasScreenshots ? (
                        <>
                            <div className="project-viewer__main"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}>
                                {screenshots.length > 1 && (
                                    <button
                                        className="gallery-nav gallery-nav--left"
                                        onClick={goPrev}
                                        type="button"
                                        aria-label="Предыдущий скриншот"
                                    >
                                        ←
                                    </button>
                                )}

                                <button
                                    type="button"
                                    className="project-viewer__image-button"
                                    onClick={openFullscreen}
                                    aria-label="Открыть изображение на весь экран"
                                >
                                    <img
                                        src={activeShot}
                                        alt={`${project.title} screenshot ${activeIndex + 1}`}
                                        className="project-viewer__image"
                                    />
                                </button>

                                {screenshots.length > 1 && (
                                    <button
                                        className="gallery-nav gallery-nav--right"
                                        onClick={goNext}
                                        type="button"
                                        aria-label="Следующий скриншот"
                                    >
                                        →
                                    </button>
                                )}
                            </div>

                            {screenshots.length > 1 && (
                                <div className="project-viewer__thumbs">
                                    {screenshots.map((shot, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={
                                                index === activeIndex
                                                    ? "project-viewer__thumb is-active"
                                                    : "project-viewer__thumb"
                                            }
                                            onClick={() => setActiveIndex(index)}
                                            aria-label={`Открыть скриншот ${index + 1}`}
                                        >
                                            <img
                                                src={shot}
                                                alt={`${project.title} preview ${index + 1}`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="project-viewer__empty">
                            Скриншоты пока не добавлены
                        </div>
                    )}
                </div>
            </div>

            {isFullscreen && activeShot && (
                <div
                    className="fullscreen-overlay"
                    onClick={closeFullscreen}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Полноэкранный просмотр изображения"
                >
                    <div
                        className="fullscreen-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="fullscreen-close"
                            onClick={closeFullscreen}
                            aria-label="Закрыть полноэкранный просмотр"
                        >
                            ×
                        </button>

                        {screenshots.length > 1 && (
                            <button
                                type="button"
                                className="fullscreen-nav fullscreen-nav--left"
                                onClick={goPrev}
                                aria-label="Предыдущий скриншот"
                            >
                                ←
                            </button>
                        )}

                        <img
                            src={activeShot}
                            alt={`${project.title} fullscreen screenshot ${activeIndex + 1}`}
                            className="fullscreen-image"
                        />

                        {screenshots.length > 1 && (
                            <button
                                type="button"
                                className="fullscreen-nav fullscreen-nav--right"
                                onClick={goNext}
                                aria-label="Следующий скриншот"
                            >
                                →
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}