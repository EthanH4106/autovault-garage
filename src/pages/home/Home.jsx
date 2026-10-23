import Hero from "../../components/hero/Hero.jsx"
import DragRacing from "../../components/dragRacing/DragRacing.jsx";
import AboutPreview from "../../components/aboutPreview/AboutPreview.jsx";

const Home = () => {
    return (
        <main>
            <Hero />
            <DragRacing />
            <AboutPreview />
        </main>
    );
};

export default Home;