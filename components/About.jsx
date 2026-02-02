export default function About() {
    const data = [
        // {
        //     name: 'Education',
        //     icon1: '/assets/edu-icon.png',
        //     icon2: '/assets/edu-icon-dark.png',
        //     description: 'B.Tech in Computer Science',
        // },
        // {
        //     name: 'Projects',
        //     icon1: '/assets/project-icon.png',
        //     icon2: '/assets/project-icon-dark.png',
        //     description: 'Built more than 5 projects',
        // },
    ];
    return (
        <div id="about" className="w-full py-5 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="w-full max-w-6xl mx-auto my-14">
                <div>
                    <p className="mb-10 max-w-3xl mx-auto font-Ovo text-center">
                        I’m a self-taught Full Stack Developer with 1.5 years of hands-on experience, 
                        specializing in the MERN stack, and building practical web applications using JavaScript, TypeScript, React, Node.js, and MongoDB. 
                        I enjoy working end-to-end from clean, responsive user interfaces to reliable backend logic 
                        and focus on writing clear, maintainable code while continuously improving through real-world projects.
                    </p>

                    {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto justify-items-center">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul> */}

                </div>
            </div>
        </div>
    )
}