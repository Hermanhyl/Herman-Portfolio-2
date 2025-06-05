function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-xl w-full text-center backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Contact Me
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-6">
          Feel free to reach out! You can send me an email and I’ll get back to you as soon as possible.
        </p>
        <a
          href="mailto:hermanhyl@hotmail.com?subject=Contact from Portfolio&body=Hi there,"
          className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition"
        >
          Send Email
        </a>
      </div>
    </div>
  );
}

export default Contact;
