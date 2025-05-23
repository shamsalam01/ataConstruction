import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "Projects | ATA CONSTRUCTIONS PVT LTD",
  description:
    "Explore our completed and ongoing construction projects across residential, commercial, and industrial sectors.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
