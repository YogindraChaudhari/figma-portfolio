import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import watchitImage from '../assets/watchit-plus-thumbnail.png';
import musicPlayerImage from '../assets/music-player-thumbnail.png';
import busReservationImage from '../assets/bus-reservation-thumbnail.png';

const Home = () => {
  const projects = [
    {
      title: 'WatchIT+',
      description: 'A movie streaming platform design.',
      image: watchitImage,
      figmaLink:
        'https://www.figma.com/proto/aolJOG89XUqe4Rf602hvAZ?node-id=0-1&t=LWD5ZV5oAvcMZJsu-6',
      projectId: 'watchit-plus',
    },
    {
      title: 'Music Player',
      description: 'A sleek and modern music player UI.',
      image: musicPlayerImage,
      figmaLink:
        'https://www.figma.com/proto/wcl9KSU9H0zi3Wj9ALBtZ7?node-id=0-1&t=iWlMc6prNSrUOmgu-6',
      projectId: 'music-player',
    },
    {
      title: 'Bus Ticket Reservation System',
      description: 'An interactive design for bus ticket booking.',
      image: busReservationImage,
      figmaLink:
        'https://www.figma.com/proto/zVRhy1uJwPbbBPTeZVpiWE?node-id=0-1&t=BwNvxSCe1vCTkXMi-6',
      projectId: 'bus-reservation',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section id="projects" className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-wide">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Explore some of my creative and modern designs developed using
            Figma.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
