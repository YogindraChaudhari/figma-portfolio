import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import watchitImage from "../assets/watchit-plus-thumbnail.png";
import musicPlayerImage from "../assets/music-player-thumbnail.png";
import busReservationImage from "../assets/bus-reservation-thumbnail.png";

const projects = {
  "watchit-plus": {
    title: "WatchIT+",
    description:
      "A movie streaming platform design with a user-friendly interface and modern aesthetics.",
    figmaLink:
      "https://www.figma.com/proto/aolJOG89XUqe4Rf602hvAZ?node-id=0-1&t=LWD5ZV5oAvcMZJsu-6",
    image: watchitImage,
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
    image: musicPlayerImage,
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
    image: busReservationImage,
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
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 max-w-lg mx-auto md:mx-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Details Section */}
          <div className="mt-8 md:mt-0 md:ml-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
            <p className="text-gray-600 mt-4">{project.description}</p>
            <ul className="list-disc pl-5 mt-6 text-gray-700">
              {project.details.map((detail, index) => (
                <li key={index} className="mt-2">
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600"
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
