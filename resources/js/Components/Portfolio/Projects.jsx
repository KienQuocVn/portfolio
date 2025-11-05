export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description:
                'A full-featured online shopping platform with cart, payment integration, and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
            link: '#',
            tags: ['React', 'Laravel', 'MySQL'],
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'Collaborative task management tool with real-time updates and team features.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            link: '#',
            tags: ['Vue.js', 'Node.js', 'MongoDB'],
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description:
                'Modern portfolio website with dark mode, animations, and responsive design.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
            link: '#',
            tags: ['React', 'Tailwind', 'Inertia'],
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-white dark:bg-gray-900 scroll-section"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* ✅ Sửa lỗi: thêm thẻ <a> */}
                                <a
                                    href={project.link}
                                    className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
