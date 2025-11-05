import { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { useTheme } from '../Hooks/useTheme';
import Header from '../Components/Portfolio/Header';
import Hero from '../Components/Portfolio/Hero';
import About from '../Components/Portfolio/About';
import Skills from '../Components/Portfolio/Skills';
import Projects from '../Components/Portfolio/Projects';
import Contact from '../Components/Portfolio/Contact';

export default function Portfolio() {
    const { theme, toggleTheme } = useTheme();

    // Scroll fade-in effect
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.scroll-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head title="My Portfolio" />
            
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                
                {/* Footer */}
                <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
                    <div className="container mx-auto px-6 text-center">
                        <p>&copy; 2025 Your Name. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}