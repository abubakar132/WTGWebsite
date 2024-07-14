import React from "react";

const Careers = () => {
  // Define job listings data
  const jobListings = [
    {
      id: 1,
      title: "Leads Generation Expert",
      description:
        "Join our team as a Leads Generation Expert, where you'll harness your expertise in identifying, nurturing, and converting leads into loyal customers. ",
      applyLink: "#",
    },
    {
      id: 2,
      title: "Digital Marketing Expert",
      description:
        "Join our marketing team as a Digital Marketing Specialist. You will develop and manage digital marketing campaigns, optimize content for search engines, and analyze campaign performance.",
      applyLink: "#",
    },
  ];

  return (
    <div id="careers" className="bg-black container py-12">
      <h1 className="text-3xl font-semibold mb-6">Careers</h1>
      <div className="grid gap-6">
        {jobListings.map((job) => (
          <div key={job.id} className="neon-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{job.description}</p>
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-neonPink hover:text-white transition duration-300"
            >
              Expired
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
