import ProjectGallery from "../components/ProjectGallery";
import { projects } from "../../../data/projects";

export default function ProjectEstimatorWindow() {
    const project = projects.find((item) => item.id === "estimator");

    return <ProjectGallery project={project} />;
}