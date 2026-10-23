import Hero from "../../components/hero/Hero.jsx"
import FeaturedCars from "../../components/featuredCars/FeaturedCars.jsx";
import DragRacing from "../../components/dragRacing/DragRacing.jsx";
import AboutPreview from "../../components/aboutPreview/AboutPreview.jsx";

const Home = () => {
    return (
        <main>
            <Hero />
            <FeaturedCars />
            <DragRacing />
            <AboutPreview />
        </main>
    );
};

export default Home;