"use client";

import { useTranslations } from "next-intl";

const team = [
  {
    name: "Dr. Marie Dubois",
    position: "Chief Executive Officer",
    bio: "Leading scientist with 20+ years in interface science research and business development.",
    expertise: ["Strategic Leadership", "Interface Science", "Business Development"],
  },
  {
    name: "Prof. Jean-Pierre Martin",
    position: "Chief Technology Officer",
    bio: "Renowned expert in surface tension measurement with over 100 published research papers.",
    expertise: ["Surface Science", "Instrumentation", "R&D Management"],
  },
  {
    name: "Dr. Sarah Chen",
    position: "Head of Applications",
    bio: "Applications specialist helping customers achieve breakthrough results across various industries.",
    expertise: ["Applications Support", "Customer Success", "Technical Training"],
  },
  {
    name: "Michael Schmidt",
    position: "Global Sales Director",
    bio: "International business leader with extensive experience in scientific instrument markets.",
    expertise: ["Sales Strategy", "Market Development", "Partnership Management"],
  },
];

export default function AboutTeam() {
  const t = useTranslations();

  const teamGradients = [
    "from-teal-600 to-emerald-500",
    "from-emerald-600 to-cyan-500",
    "from-cyan-600 to-teal-500",
    "from-teal-600 to-cyan-500",
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-teal-600/10 to-emerald-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            {t("about.team.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.team.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("about.team.description")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => {
            const gradient = teamGradients[index % teamGradients.length];

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-teal-600/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-md group-hover:blur-lg transition-all" />
                    <div
                      className={`relative w-full h-full rounded-full bg-linear-to-br ${gradient} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p
                    className={`text-sm font-medium bg-linear-to-r ${gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {member.position}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
