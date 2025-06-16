function HeroSection() {
    return (
        <section className="px-6 py-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-16">
            {/* Text Content */}
            <div className="flex-1 z-10">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-700 via-sky-400 via-pink-500 to-green-400 text-transparent bg-clip-text">
                    Transform{" "}
                    <span className="text-transparent bg-clip-text">
                        Text into
                    </span>{" "}
                    Stunning Videos with AI
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Create professional videos in minutes with our advanced AI
                    technology. No editing skills required.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#"
                        className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-purple-700 to-sky-400 text-white  hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] transition duration-300"
                    >
                        Create Your First Video
                    </a>
                    <a
                        href="#"
                        className="px-6 py-3 rounded-full font-bold border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-[#0a0b1e] transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Video Container */}
            <div className="flex-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    {/* Replace 'your-video.mp4' with actual source */}
                    <video
                        src="your-video.mp4"
                        className="w-full h-auto block"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-3xl text-[#0a0b1e] hover:scale-110 transition-transform duration-300">
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
