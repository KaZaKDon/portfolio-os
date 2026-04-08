import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectStudioWindow() {
    const project = projects.find((p) => p.id === "studio");

    return <ProjectGallery project={project} />;
}