const ServicesList = [
  {
    Title: "WEB DESIGN",
    Numb: 1,
    desc: [
      "Custom Website Design",
      "Figma & UI/UX Design",
      "Responsive Web Development",
      "Landing Page Design",
    ],
  },
  {
    Title: "DIGITAL MARKETING",
    Numb: 2,
    desc: [
      "Google Ads",
      "Original SEO",
      "Customized Meta Ads",
      "Social Media Posts Ads",
    ],
  },
  {
    Title: "CUSTOM WEBSITE",
    Numb: 3,
    desc: [
      "Customize Web App",
      "Website in Next.js",
      "Easy to use CMS",
      "Custom Graphics & 3D Elements",
    ],
  },
  {
    Title: "WEBSITE MAINTAINENCE",
    Numb: 4,
    desc: [
       "Regular Security Updates",
  "Performance Monitoring",
  "Backup & Recovery Solutions",
  "Bug Fixes",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="flex flex-col  md:my-20  my-5 overflow-hidden">
      <h2 className="font-extrabold md:text-8xl text-4xl text-[#0C0C0C] p-10  text-end mb-20">
        OUR SERVICES
      </h2>
      <div>
        {ServicesList.map((list) => (
          <div
            key={list.Numb}
            className="relative group transition border-1 border-gray-200 p-5 md:p-1 text-center md:flex justify-between items-center bg-[#ffffff] text-[#0c0c0c]
                    hover:bg-[#0c0c0c] hover:text-[#fafafa] 
                    transition duration-100 ease-in-out"
          >
            <p className="text-4xl  md:text-5xl lg:text-7xl font-extrabold text-start px-5">{list.Title}</p>
            <div className="flex flex-wrap space-x-2 space-y-2 md:max-w-xl md:p-10 p-3 m-5 w-fit">
              {list.desc.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-[#EAFF00] border border-[#0c0c0c]
                  text-[#0C0C0C] font-medium w-fit h-fit text-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
