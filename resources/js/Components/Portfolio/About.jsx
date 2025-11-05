export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 scroll-section">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Hello! I'm a passionate full-stack developer with expertise in modern web technologies. 
                        I love creating beautiful, functional, and user-friendly applications.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        With several years of experience in web development, I specialize in React, Laravel, 
                        and building scalable applications. I'm always eager to learn new technologies and 
                        improve my skills.
                    </p>
                </div>
            </div>
        </section>
    );
}