import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectGoStudyWindow() {
    const project = projects.find(
        (item) => item.id === "gostudy"
    );

    return <ProjectGallery project={project} />;
}