import React, { useState, useEffect, useRef } from 'react';

const Timeline = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [lineProgress, setLineProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false); // New state to track if animation has occurred
    const timelineRef = useRef(null); // Ref to observe the timeline section

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
            year: "Tahun 2005",
            description: "Lorem ipsum dolor sit amet consectetur. Integer eu sollicitudin neque sem fermentum consectetur eget leo orci. Risus luctus id bibendum tortor habitant et turpis sit. Sit et cras morbi a diam accumsan eget. Scelerisque interdum in ut sed morbi varius eros. Id id diam nascetur egestas enim ultricies in viverra id. Sem facilisis risus non pulvulin viverra id. Sem facilisis risus non pulvinar sit. Sit quam dolor sed amet facilisi dui montes massa erat. Urna justo gravida ipsum donec gravida suspendisse luctus. Sed faucibus vestibulum nisl consectetur aliquet sed lacus ut ut."
        },
        {
            id: 4,
            year: "Tahun 2010",
            description: "Lorem ipsum dolor sit amet consectetur. Integer eu sollicitudin neque sem fermentum consectetur eget leo orci. Risus luctus id bibendum tortor habitant et turpis sit. Sit et cras morbi a diam accumsan eget. Scelerisque interdum in ut sed morbi varius eros. Id id diam nascetur egestas enim ultricies in viverra id. Sem facilisis risus non pulvinar sit. Sit quam dolor sed amet facilisi dui montes massa erat. Urna justo gravida ipsum donec gravida suspendisse luctus. Sed faucibus vestibulum nisl consectetur aliquet sed lacus ut ut."
        }
    ];

    const gridColumnCount = timelineData.length;
    const timelineGridStyle = {
        gridTemplateColumns: `200px repeat(${gridColumnCount}, 500px) 200px`,
        gridTemplateRows: "auto auto auto",
    };

    // Use useEffect to set up the Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If the timeline section is intersecting and hasn't animated yet
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true); // Mark as animated

                        // Animate timeline line
                        const lineTimer = setTimeout(() => {
                            setLineProgress(100);
                        }, 300);

                        // Animate items one by one
                        timelineData.forEach((item, index) => {
                            setTimeout(() => {
                                setVisibleItems(prev => new Set([...prev, item.id]));
                            }, 800 + (index * 400)); // Stagger animation by 400ms each
                        });

                        return () => clearTimeout(lineTimer);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => {
            if (timelineRef.current) {
                observer.unobserve(timelineRef.current);
            }
        };
    }, [hasAnimated, timelineData]); // Depend on hasAnimated and timelineData

    return (
        <div className="overflow-x-auto w-full pb-10" ref={timelineRef}> {/* Attach ref here */}
            <div
                style={timelineGridStyle}
                className="grid min-w-[1200px] relative pt-5 gap-x-10"
            >
                {/* Timeline Line */}
                <div
                    className="h-2 bg-blue-400 z-0 rounded-full self-center ml-[12%] transition-all duration-1000 ease-out"
                    style={{
                        gridColumn: `2 / ${gridColumnCount + 2}`,
                        gridRow: "1",
                        width: `${lineProgress}%`
                    }}
                />

                {/* Timeline Items */}
                {timelineData.map((item, index) => {
                    const isVisible = visibleItems.has(item.id);
                    const animationDelay = `${index * 0.1}s`;

                    return (
                        <React.Fragment key={item.id}>
                            {/* Circle with number */}
                            <div
                                className={`w-16 h-16 z-10 text-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl border-12 border-blue-200 transition-all duration-700 ease-out transform hover:scale-110 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
                                    }`}
                                style={{
                                    gridColumn: String(index + 2),
                                    gridRow: "1",
                                    justifySelf: "center",
                                    transitionDelay: animationDelay
                                }}
                            >
                                {item.id}
                            </div>

                            {/* Year badge */}
                            <div
                                className={`mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg text-center text-2xl transition-all duration-100 ease-out transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                                    }`}
                                style={{
                                    gridColumn: String(index + 2),
                                    gridRow: "2",
                                    justifySelf: "center",
                                    transitionDelay: `${0.2 + index * 0.1}s`
                                }}
                            >
                                {item.year}
                            </div>

                            {/* Description card */}
                            <div
                                className={`bg-white mt-4 p-4 pb-20 rounded-xl shadow-md border border-gray-100 transition-all duration-700 ease-out transform hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                                    }`}
                                style={{
                                    gridColumn: String(index + 2),
                                    gridRow: "3",
                                    justifySelf: "center",
                                    transitionDelay: `${0.4 + index * 0.1}s`
                                }}
                            >
                                <p className="text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;