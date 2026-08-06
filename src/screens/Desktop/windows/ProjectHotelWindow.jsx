import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectHotelWindow() {
    const project = projects.find((item) => item.id === "hotel");

    return <ProjectGallery project={project} />;
}