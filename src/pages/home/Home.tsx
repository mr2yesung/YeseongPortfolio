import { Line } from "rc-progress";
import MainCard from "../../components/blocks/MainCard";
import HomeIntro from "./HomeIntro";
import HomeSection from "./HomeSection";
import HomeSkillsLayout from "./HomeSkillsLayout";
import { useDarkMode } from "../../hooks/DarkModeContext";
import PageFadeIn from "../../components/animation/PageFadeIn";

function Home() {
  const { isDarkMode } = useDarkMode();

  const services = [
    {
      title: "Web Development",
      content:
        "I stay updated on industry trends and best practices to deliver modern solutions.",
      iconPath: "/src/assets/images/icons/web.png",
      backgroundClass: "bg-[#FCF4FF]",
    },
    {
      title: "Team Collaboration",
      content:
        "I value teamwork and collaboration, and I actively contribute to a positive and productive team environment.",
      iconPath: "/src/assets/images/icons/team.png",
      backgroundClass: "bg-[#FEFAF0]",
    },
    {
      title: "Passionate Learning",
      content:
        "I am passionate about leveraging my skills in Front End development to create engaging user experiences.",
      iconPath: "/src/assets/images/icons/learning.png",
      backgroundClass: "bg-[#FCF4FF]",
    },
    {
      title: "Game Development",
      content:
        "I pursue game development as a hobby, with a particular focus on Unity.",
      iconPath: "/src/assets/images/icons/game.png",
      backgroundClass: "bg-[#FFF4F4]",
    },
  ];

  const skills = [
    { title: "JavaScript/TypeScript", value: 95, color: "#ff6464" },
    { title: "React", value: 90, color: "#dda10c" },
    { title: "Teamwork", value: 85, color: "#9272d4" },
    { title: "Version Control", value: 90, color: "#5185d4" },
    { title: "UI/UX Design", value: 40, color: "#ca56f2" },
  ];

  const knowledges = [
    "HTML",
    "CSS",
    "Javascript ES6",
    "Typescript",
    "React",
    "Git",
    "GitHub",
    "Unity",
    "C#",
    "Godot",
    "C++",
  ];

  return (
    <PageFadeIn>
      <HomeSection className="pt-12 md:py-12">
        <h2 className="after-effect hidden after:left-52 lg:block">About Me</h2>
        <div className="hidden grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid">
          <div className="col-span-12 space-y-2.5">
            <HomeIntro />
          </div>
        </div>

        <div className="lg:hidden">
          <MainCard />

          <div className="mb-12 md:pt-[30px]">
            <h2 className="after-effect mb-5 after:left-52">About Me</h2>
            <div className="space-y-2.5">
              <HomeIntro />
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection className="pb-12">
        <h3 className="pb-5 text-[35px] font-medium dark:text-white">
          What I do&#63;
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex gap-4 rounded-xl border-[#212425] p-6 dark:border-2 dark:bg-transparent ${service.backgroundClass}`}
            >
              <img
                className="block h-10 w-10 object-contain"
                src={service.iconPath}
                alt={service.title}
              />

              <div className="space-y-2 break-words">
                <h3 className="text-xl font-semibold dark:text-white">
                  {service.title}
                </h3>
                <p className="leading-8 text-gray-lite dark:text-[#a6a6a6]">
                  {service.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection className="bg-color-810 dark:bg-[#0d0d0d]">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:px-6">
          <HomeSkillsLayout title="My Skills">
            {skills.map((skill) => (
              <div key={skill.title} className="mb-7">
                <div className="flex justify-between py-1">
                  <span className="text-base font-semibold text-gray-lite dark:text-[#a6a6a6]">
                    {skill.title}
                  </span>
                  <span className="pr-5 text-base font-semibold text-gray-lite dark:text-[#a6a6a6]">
                    {skill.value}&#37;
                  </span>
                </div>

                <Line
                  percent={skill.value}
                  strokeWidth={1}
                  trailWidth={1}
                  trailColor={`${isDarkMode ? "#1c1c1c" : "#edf2f2"}`}
                  strokeColor={skill.color}
                />
              </div>
            ))}
          </HomeSkillsLayout>

          <HomeSkillsLayout title="Knowledges">
            <div className="flex flex-wrap gap-x-2.5 gap-y-5">
              {knowledges.map((knowledge) => (
                <p
                  key={knowledge}
                  className="cursor-default rounded-lg bg-[#edf2f2] px-5 py-2 text-gray-lite dark:bg-[#1c1c1c] dark:text-[#a6a6a6]"
                >
                  {knowledge}
                </p>
              ))}
            </div>
          </HomeSkillsLayout>
        </div>
      </HomeSection>
    </PageFadeIn>
  );
}

export default Home;
