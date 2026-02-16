import { Analytics } from "@vercel/analytics/react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx";
import WorkExperience from "./sections/Experience.jsx";

const App = () => {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <div className="max-w-7xl mx-auto">
                <About />
                <Projects />
                <WorkExperience />
                <Contact />
                <Footer />
            </div>
            <Analytics />
        </main>
    )
}
export default App
