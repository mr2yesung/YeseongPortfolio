type HomeSkillsLayoutProps = {
  title: string;
  children: React.ReactNode;
};

function HomeSkillsLayout({ title, children }: HomeSkillsLayoutProps) {
  return (
    <div className="col-span-1">
      <h4 className="mb-6 text-5xl font-medium dark:text-white">{title}</h4>

      {children}
    </div>
  );
}

export default HomeSkillsLayout;
