import "./project-window.css";

export default function ProjectsWindow({
    onOpenEstimator,
    onOpenMessenger,
    onOpenMuseum,
}) {
    return (
        <div className="projects-window">
            <div className="pw-projects-title">Проекты</div>
            <div className="pw-projects-sub">
                Основные проекты портфолио
            </div>

            <div className="projects-list">
                <div className="project-card">
                    <div className="project-card-head">
                        <div className="project-card-title">Мессенджер</div>
                        <div className="project-card-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Socket.io</span>
                            <span>Realtime</span>
                        </div>
                    </div>

                    <div className="project-card-text">
                        Fullstack-приложение для обмена сообщениями в реальном времени:
                        личные и групповые чаты, авторизация, медиа и живые обновления.
                    </div>

                    <div className="project-card-actions">
                        <button onClick={onOpenMessenger}>Открыть</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-head">
                        <div className="project-card-title">Сметчик</div>
                        <div className="project-card-tags">
                            <span>React</span>
                            <span>Vite</span>
                            <span>JavaScript</span>
                            <span>LocalStorage</span>
                        </div>
                    </div>

                    <div className="project-card-text">
                        Интерактивный калькулятор стоимости и сроков разработки сайта
                        с учётом экранов, адаптивности и дополнительных параметров.
                    </div>

                    <div className="project-card-actions">
                        <button onClick={onOpenEstimator}>Открыть</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-head">
                        <div className="project-card-title">Музей</div>
                        <div className="project-card-tags">
                            <span>React</span>
                            <span>UI</span>
                            <span>Responsive</span>
                            <span>Content</span>
                        </div>
                    </div>

                    <div className="project-card-text">
                        Информационный проект с маршрутами, контентными разделами
                        и адаптивным интерфейсом для просмотра на разных устройствах.
                    </div>

                    <div className="project-card-actions">
                        <button onClick={onOpenMuseum}>Открыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
}