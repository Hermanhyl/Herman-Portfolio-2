import profileImage from '../../../public/profileImage.jpg';

export default function Hero() {
  return (
    <section className="bg-[#EDF2F4] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-[#8D99AE] mb-6 leading-relaxed">
            I’m a front-end developer with a passion for clean UI/UX design. I recently completed a two-year Higher Professional Degree at Noroff School of Technology and Digital Media, and I also hold a Bachelor’s in Animation and Digital Art.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#EF233C] text-white text-base font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-[#d81c30] transition"
          >
            Contact Me
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-64 h-64 mx-auto md:mx-0 object-cover rounded-full border-4 border-[#2B2D42] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
