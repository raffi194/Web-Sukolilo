import React from 'react';
import '../.././App.css';

const Timeline = () => {
    // Timeline data array
    const timelineData = [
        {
            id: 1,
            year: "Tahun 1995",
            description: "Lorem ipsum dolor sit amet consectetur. Integer eu sollicitudin neque sem fermentum consectetur eget leo orci. Risus luctus id bibendum tortor habitant et turpis sit. Sit et cras morbi a diam accumsan eget. Scelerisque interdum in ut sed morbi varius eros. Id id diam nascetur egestas enim ultricies in viverra id. Sem facilisis risus non pulvinar sit. Sit quam dolor sed amet facilisi dui montes massa erat. Urna justo gravida ipsum donec gravida suspendisse luctus. Sed faucibus vestibulum nisl consectetur aliquet sed lacus ut ut."
        },
        {
            id: 2,
            year: "Tahun 2000",
            description: "Lorem ipsum dolor sit amet consectetur. Integer eu sollicitudin neque sem fermentum consectetur eget leo orci. Risus luctus id bibendum tortor habitant et turpis sit. Sit et cras morbi a diam accumsan eget. Scelerisque interdum in ut sed ut ut."
        },

        {
            id: 3,
            year: "Tahun 2000",
            description: "Lorem ipsum dolor sit amet consectetur. Integer eu sollicitudin neque sem fermentum consectetur eget leo orci. Risus luctus id bibendum tortor habitant et turpis sit. Sit et cras morbi a diam accumsan eget. Scelerisque interdum in ut sed morbi varius eros. Id id diam nascetur egestas enim ultricies in viverra id. Sem facilisis risus non pulvinar sit. Sit quam dolor sed amet facilisi dui montes massa erat. Urna justo gravida ipsum donec gravida suspendisse luctus. Sed faucibus vestibulum nisl consectetur aliquet sed lacus ut ut."
        },

        {
            id: 4,
            year: "Tahun 2000",
            description: "Lorem ipsum dolor sit amet consectetur. Integer eu sollicitudin neque sem fermentum consectetur eget leo orci. Risus luctus id bibendum tortor habitant et turpis sit. Sit et cras morbi a diam accumsan eget. Scelerisque interdum in ut sed morbi varius eros. Id id diam nascetur egestas enim ultricies in viverra id. Sem facilisis risus non pulvinar sit. Sit quam dolor sed amet facilisi dui montes massa erat. Urna justo gravida ipsum donec gravida suspendisse luctus. Sed faucibus vestibulum nisl consectetur aliquet sed lacus ut ut."
        },
        // Add more timeline items as needed
    ];

    return (
        <div class="overflow-x-auto w-full pb-10">
            <div
                style={{
                    gridTemplateColumns: "200px repeat(4, 400px) 200px",
                    gridTemplateRows: "auto auto auto",
                }}
                className="grid min-w-[1200px] relative pt-5 gap-x-10"
            >
                {/* Garis Timeline */}
                <div
                    className="h-2 bg-blue-400 z-0 rounded-full self-center ml-[10%]"
                    style={{ gridColumn: "2 / 6", gridRow: "1" }}
                ></div>
                {/* Map through timeline items */}
                {timelineData.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="heading-4-bold w-16 h-16 z-10 text-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl border-12"
                            style={{ gridColumn: String(item.id + 1), gridRow: "1", justifySelf: "center", borderColor: "var(--clr-primary-2)" }}>
                            {item.id}
                        </div>
                        <div className="heading-4-bold mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-0.1 rounded-xl font-semibold shadow-lg"
                            style={{ gridColumn: String(item.id + 1), gridRow: "2", justifySelf: "center" }}>
                            {item.year}
                        </div>
                        <div className="desc bg-white mt-4 p-4 pb-20 rounded-xl"
                            style={{ gridColumn: String(item.id + 1), gridRow: "3", justifySelf: "center" }}>
                            {item.description}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Timeline;