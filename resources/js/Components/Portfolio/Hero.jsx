export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 dark:from-black/70 dark:to-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 fade-in">
                {/* Avatar */}
                <div className="mb-6">
                    <img
                        src="https://ui-avatars.com/api/?name=Your+Name&size=150&background=3b82f6&color=fff"
                        alt="Avatar"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white shadow-2xl"
                    />
                </div>

                {/* Name & Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Your Name
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    Full Stack Developer | UI/UX Enthusiast
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white text-gray-800 hover:bg-gray-100 rounded-lg font-semibold transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
