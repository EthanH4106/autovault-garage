import "./DragRacing.css";

const DragRacing = () => {
    return (
        <section id="drag-racing">
            <h2>Drag Racing</h2>
            <p>Watch this drag racing compilation!</p>

            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/kPstWl2sa-s" title="Drag Racing Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default DragRacing;