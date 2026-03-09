import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectInspiredWindow() {
    const project = projects.find((item) => item.id === "inspired");

    return <ProjectGallery project={project} />;
}