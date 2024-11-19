import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, projectId }) => (
  <div className="bg-gradient-to-b from-blue-50 to-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <Link
          to={`/project/${projectId}`}
          className="text-white font-semibold bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
      <div className="mt-4">
        <Link
          to={`/project/${projectId}`}
          className="text-blue-500 font-medium hover:underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
