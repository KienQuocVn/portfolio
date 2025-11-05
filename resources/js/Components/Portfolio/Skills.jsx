export default function Skills() {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'Laravel', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'PHP', level: 82 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'MySQL', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 85 },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-section">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Skills
                </h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-700 dark:text-gray-200">
                                    {skill.name}
                                </span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}