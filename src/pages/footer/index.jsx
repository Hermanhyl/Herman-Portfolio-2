function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm tracking-widest">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400">Herman Hylland</span>. All rights reserved.
        </p>
        <p className="text-sm tracking-wider">
          Follow on{" "}
          <a
            href="https://www.instagram.com/hermanhyl98/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Hermanhyl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;

