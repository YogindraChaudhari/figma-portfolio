const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">
        Yogindra's Figma Portfolio
      </h1>
      <ul className="flex space-x-4 text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
