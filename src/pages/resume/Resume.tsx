import PageFadeIn from "../../components/animation/PageFadeIn";
import ExperienceIcon from "../../components/icons/ExperienceIcon";
import EducationIcon from "../../components/icons/EducationIcon";
import ResumeBlock from "./ResumeBlock";
import ResumeCard from "./ResumeCard";

function Resume() {
  const experiences = [
    {
      title: "Chief Technical Officer",
      organization: "Team BioSignus",
      date: "Sep 2022 - Jun 2023",
      colorClassName: "bg-[#FCF4FF]",
      content:
        "Directed the development of a respiratory pattern monitoring patch for Neonatal Intensive Care Unit (NICU) patients, encompassing both hardware and software components.",
    },
    {
      title: "Machine Learning Research Assistant",
      organization: "Yonsei University",
      date: "Jun 2022 - Sep 2022",
      colorClassName: "bg-[#FEFAF0]",
      content:
        " Integrated feature selection for diagnosing patent ductus arteriosus (PDA) in low birth weight infants by applying machine learning techniques with numpy, pandas, and scikit-learn modules in Python.",
    },
  ];

  return (
    <PageFadeIn>
      <div className="container sm:px-5 md:px-10 lg:px-14">
        <div className="px-4 py-12 md:px-0">
          <h2 className="after-effect after:left-44">Resume</h2>

          <div className="mt-[30px] flex flex-col gap-6">
            <ResumeBlock title="Experience" icon={<ExperienceIcon />}>
              {experiences.map((experience) => (
                <ResumeCard
                  key={experience.title}
                  title={experience.title}
                  organization={experience.organization}
                  date={experience.date}
                  className={`dark:bg-transparent ${experience.colorClassName}`}
                >
                  <p className="leading-7 text-gray-lite dark:text-color-910">
                    {experience.content}
                  </p>
                </ResumeCard>
              ))}
            </ResumeBlock>

            <ResumeBlock title="Education" icon={<EducationIcon />}>
              <ResumeCard
                title="Bachelor of Science in Biomedical Engineering"
                organization="University of California, Irvine"
                date="Sep 2019 - Aug 2023"
                className="bg-[#FFF4F4] dark:bg-transparent"
              />
            </ResumeBlock>
          </div>
        </div>
      </div>
    </PageFadeIn>
  );
}

export default Resume;
