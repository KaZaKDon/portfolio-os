import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectFishingWindow() {
    const project = projects.find((item) => item.id === "fishing");

    return <ProjectGallery project={project} />;
}