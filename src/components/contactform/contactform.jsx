"use client";
import { useState } from "react";
{/* Repeat the names twice to create seamless loop 
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    services: [],
    description: "",
  });

  const servicesList = [
    "Web Design",
    "SEO",
    "Google Ads",
    "Web Maintenance",
    "Web Hosting",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service) => {
    setFormData((prev) => {
      if (prev.services.includes(service)) {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== service),
        };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here you’d usually send the form data to an API endpoint
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white/80 shadow-4xl rounded-2xl space-y-3 "
    >

      {/* Name 
      <div >
        <label className="block text-lg font-semibold text-[#0c0c0c]">Name *</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#EAFF00]"
        />
      </div>

      {/* Phone 
      <div>
        <label className="block text-lg font-semibold text-[#0c0c0c]">Phone *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#EAFF00]"
        />
      </div>

      {/* Company Name (Optional) 
      <div>
        <label className="block text-lg font-semibold text-[#0c0c0c]">
          Company Name (optional)
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#EAFF00]"
        />
      </div>

      {/* Services 
      <div>
        <label className="block text-lg font-semibold text-[#0c0c0c]">
          What services do you need? *
        </label>
        <div className="flex flex-wrap gap-2 mt-2 ">
          {servicesList.map((service) => (
            <button
              type="button"
              key={service}
              onClick={() => toggleService(service)}
              className={`px-4 py-2 rounded-md border ${
                formData.services.includes(service)
                  ? "bg-[#EAFF00] text-[#0C0C0C]"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Description 
      <div>
        <label className="block text-lg font-semibold text-[#0c0c0c]">
          Project Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#EAFF00]"
          rows="4"
        ></textarea>
      </div>

      {/* Submit 
      <button
        type="submit"
        className="w-full py-3 bg-[#0c0c0c] text-white font-semibold rounded-lg hover:bg-[#EAFF00] hover:text-[#0c0c0c] transition border"
      >
        Submit
      </button>
    </form>
  );
}*/}


export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
    services: [],
  });

  const services = [
    "Web Design",
    "Custom Website",
    "SEO",
    "Google Ads",
    "Web Maintenance",
    "Web Hosting",
  ];


  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#FAFAFA] rounded-2xl shadow-xl">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <input
          type="text"
          placeholder="Full name"
          required
          className="p-4 rounded-lg bg-[#EAFF00] border placeholder-gray-700"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-4 rounded-lg bg-[#EAFF00] border placeholder-gray-700"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company"
          required
          className="p-4 rounded-lg bg-[#EAFF00] border placeholder-gray-700"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <textarea
        placeholder="Tell me your goals"
        required
        className="w-full mt-4 p-4 rounded-lg bg-[#EAFF00] border placeholder-gray-700"
        rows="4"
        value={formData.details}
        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
      />

      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Services */}
        <div>
          <p className="font-semibold text-lg text-gray-900 mb-2">What services do you need? *</p>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`px-3 py-1 rounded-lg border ${
                  formData.services.includes(service)
                    ? "bg-[#EAFF00] text-gray-700"
                    : "bg-gray-100 text-black"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

      </div>

      <button className="mt-6 px-6 py-3 rounded-full bg-[#0c0c0c] text-white font-semibold shadow hover:bg-gray-700 transition">
        Submit
      </button>
    </div>
  );
}
