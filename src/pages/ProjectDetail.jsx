import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = {
  "watchit-plus": {
    title: "WatchIT+",
    description:
      "A movie streaming platform design with a user-friendly interface and modern aesthetics.",
    figmaLink:
      "https://www.figma.com/proto/aolJOG89XUqe4Rf602hvAZ?node-id=0-1&t=LWD5ZV5oAvcMZJsu-6",
    image: "/assets/watchit-plus-thumbnail.png",
    details: [
      "Home screen with featured content.",
      "Detailed movie and series pages.",
      "Interactive watchlist and user profile features.",
    ],
  },
  "music-player": {
    title: "Music Player",
    description: "A sleek and modern music player UI design.",
    figmaLink:
      "https://www.figma.com/proto/wcl9KSU9H0zi3Wj9ALBtZ7?node-id=0-1&t=iWlMc6prNSrUOmgu-6",
    image: "/assets/music-player-thumbnail.png",
    details: [
      "Play, pause, and skip buttons with custom animations.",
      "Playlist management and now-playing UI.",
      "Dark mode theme with responsive design.",
    ],
  },
  "bus-reservation": {
    title: "Bus Ticket Reservation System",
    description: "An interactive design for booking bus tickets.",
    figmaLink:
      "https://www.figma.com/proto/zVRhy1uJwPbbBPTeZVpiWE?node-id=0-1&t=BwNvxSCe1vCTkXMi-6",
    image: "/assets/bus-reservation-thumbnail.png",
    details: [
      "Real-time seat selection interface.",
      "Booking confirmation and payment flow.",
      "User profile and booking history screens.",
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/" className="text-blue-500 mt-4 block">
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-gray-600 mt-4">{project.description}</p>
            <ul className="list-disc pl-5 mt-4">
              {project.details.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View on Figma
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
