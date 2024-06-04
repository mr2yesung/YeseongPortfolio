import { useState } from "react";
import PageFadeIn from "../../components/animation/PageFadeIn";
import ReactModal from "react-modal";
import ModalCloseIcon from "../../components/icons/ModalCloseIcon";
import ProjectIcon from "../../components/icons/ProjectIcon";
import LinkIcon from "../../components/icons/LinkIcon";
import CodeIcon from "../../components/icons/CodeIcon";
import WorksModalBlock from "./WorksModalBlock";

ReactModal.setAppElement("#root");

function Works() {
  const [modal, setModal] = useState<number>(-1);

  const works = [
    {
      title: "Beats",
      image: "/src/assets/images/screenshots/beats.png",
      skills: "React, TypeScript, Tailwind CSS",
      bgClassName: "bg-[#FCF4FF]",
      projectType: "Web Application",
      githubLink: "https://github.com/mr2yesung/Beats",
      githubLinkDisplay: "github.com/mr2yesung",
      previewLink: "https://beats-yeseong.vercel.app/",
      previewLinkDisplay: "beats-yeseong.vercel",
      explanation:
        "This project is a single-page application (SPA) named Beats, designed for selling keyboards. It leverages React Router to implement the SPA architecture, providing seamless navigation. React Query from TanStack is utilized to simplify data fetching and state management. Context API is employed to manage states for the entire application, including authorization and cart functionalities. As a full-stack application, it connects to a Supabase backend to manage data. Additionally, the project uses shadcn/ui for rapid scalability and an aesthetically pleasing design. To enhance performance, I also implemented lazy loading for the components.",
    },
    {
      title: "GameNation",
      image: "/src/assets/images/screenshots/game-nation.png",
      skills: "React, TypeScript, Tailwind CSS",
      bgClassName: "bg-[#FEFAF0]",
      projectType: "Web Application",
      githubLink: "https://github.com/mr2yesung/GameNation",
      githubLinkDisplay: "github.com/mr2yesung",
      previewLink: "https://game-nation.vercel.app/",
      previewLinkDisplay: "game-nation.vercel",
      explanation:
        "This project is a landing page for the game studio GameNation. It includes several features such as smooth scrolling to different page sections with scroll animations on each section, loading low-resolution image initially to enhance user experience, and a contact form that allows users to send emails directly from the site. The project incorporates a modern UI/UX design for an engaging and user-friendly experience.",
    },
  ];

  const isModalOpen = modal >= 0 && modal < works.length;

  function handleModal(index: number) {
    setModal(index);
  }

  function closeModal() {
    setModal(-1);
  }

  return (
    <PageFadeIn>
      <div className="container px-4 pb-12 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="pb-8 pt-12">
          <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {works.map((work, i) => (
            <div
              key={work.title}
              className={`rounded-lg p-6 dark:border-[2px] dark:border-[#212425] dark:bg-transparent ${work.bgClassName}`}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-auto w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                  onClick={() => handleModal(i)}
                />
              </div>

              <h2
                className="mt-4 cursor-pointer text-xl font-medium transition duration-300 hover:text-[#fa5252] dark:text-white dark:hover:text-[#fa5252]"
                onClick={() => handleModal(i)}
              >
                {work.title}
              </h2>
              <span className="mt-1 block text-[14px] font-normal text-gray-lite dark:text-[#a6a6a6]">
                {work.skills}
              </span>
            </div>
          ))}
        </div>

        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="my-8 flex items-center rounded-2xl p-4 outline-none md:p-8"
        >
          <div className="absolute left-1/2 top-1/2 mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] transform items-center rounded-xl bg-white p-4 shadow-lg dark:bg-[#323232] md:w-10/12 md:p-8 lg:w-[850px]">
            {isModalOpen && (
              <div className="no-scrollbar max-h-[80vh] w-full overflow-y-scroll">
                <div
                  className="absolute -top-12 right-2 z-50 transform cursor-pointer text-7xl text-white transition duration-300 ease-in-out hover:rotate-45 md:-right-10 md:-top-6"
                  onClick={closeModal}
                >
                  <ModalCloseIcon />
                </div>
                <h2 className="text-center text-4xl font-bold text-[#ef4060]">
                  {works[modal].title}
                </h2>

                <div className="my-6 grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <WorksModalBlock>
                    <ProjectIcon />
                    Project :&nbsp;
                    <span className="font-medium">
                      {works[modal].projectType}
                    </span>
                  </WorksModalBlock>

                  <WorksModalBlock>
                    <LinkIcon />
                    Code :&nbsp;
                    <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                      <a
                        href={works[modal].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {works[modal].githubLinkDisplay}
                      </a>
                    </span>
                  </WorksModalBlock>

                  <WorksModalBlock>
                    <CodeIcon />
                    Skills :&nbsp;
                    <span className="font-medium">{works[modal].skills}</span>
                  </WorksModalBlock>

                  <WorksModalBlock>
                    <LinkIcon />
                    Preview :&nbsp;
                    <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                      <a
                        href={works[modal].previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {works[modal].previewLinkDisplay}
                      </a>
                    </span>
                  </WorksModalBlock>
                </div>

                <p className="text-2line text-base font-normal dark:text-white">
                  {works[modal].explanation}
                </p>

                <img
                  src={works[modal].image}
                  alt={works[modal].title}
                  className="mt-6 h-auto w-full rounded-xl object-cover md:h-[450px]"
                />
              </div>
            )}
          </div>
        </ReactModal>
      </div>
    </PageFadeIn>
  );
}

export default Works;
