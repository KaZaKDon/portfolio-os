import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectNativeplacesWindow() {
    const project = projects.find((item) => item.id === "nativeplaces");

    return <ProjectGallery project={project} />;
}