export default function Projects() {
    const projects = [
        {
            name: 'UrbanDot',
            icon: '/assets/images/urbandot.jpeg',
            description: 'E-commerce Platform',
            link: '',
        },
        {
            name: 'Mentora',
            icon: '/assets/images/mentora.jpeg',
            description: 'Mental Health Consulting Platform',
            link: '',
        },
        {
            name: 'ServiceLink',
            icon: '/assets/images/servicelink.jpeg',
            description: 'Local Service Provider Platform',
            link: '',
        },
    ];
    return (
        <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Projects</h2>
            {/* <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Explore a collection of projects that showcase my projects, approach, and experience in building real-world web applications.</p> */}

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {projects.map((project) => (
                    <div key={project.name} className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden">
                        <img src={project.icon} alt={project.name} className="w-full h-full object-cover" />
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between h-20 md:h-24 duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{project.name}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="/assets/icons/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="/assets/icons/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="/assets/icons/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}