import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectMuseumWindow() {
    const project = projects.find((item) => item.id === "museum");

    return <ProjectGallery project={project} />;
}