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
    <section className="flex flex-col md:h-[100vh] md:my-20  my-5 overflow-hidden">
      <h2 className="font-extrabold md:text-[90px] text-[40px] text-[#0C0C0C] p-10 pb-30 text-end">
        OUR SERVICES
      </h2>
      <div>
        {ServicesList.map((list) => (
          <div
            key={list.Numb}
            className="relative group transition border-[0.1px] border-gray-200 p-5 md:p-1 text-center md:flex justify-between items-center bg-[#ffffff] text-[#0c0c0c] 
                    hover:bg-[#0c0c0c] hover:text-[#fafafa] 
                    transition duration-100 ease-in-out"
          >
            <p className="text-[40px]  md:text-[120px] font-extrabold">{list.Title}</p>
            <div className="flex flex-wrap space-x-2 space-y-2 md:max-w-xl md:opacity-0 group-hover:opacity-100 bg-[#EAFF00] border-1 border-[#0C0C0C] transition-opacity duration-500  md:p-10 p-5">
              {list.desc.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-[#0C0C0C] shadow-sm text-[#FAFAFA] font-medium w-fit h-fit"
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
