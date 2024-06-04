type ResumeCardProps = {
  title: string;
  icon: JSX.Element;
  children: React.ReactNode;
};

function ResumeBlock({ title, icon, children }: ResumeCardProps) {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-x-2">
        <div className="text-6xl text-[#f95054]">{icon}</div>
        <h4 className="text-5xl font-medium dark:text-white">{title}</h4>
      </div>

      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}

export default ResumeBlock;
