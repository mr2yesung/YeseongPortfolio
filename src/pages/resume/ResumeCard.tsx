type ResumeCardProps = {
  title: string;
  organization: string;
  date: string;
  className?: string;
  children?: React.ReactNode;
};

function ResumeCard({
  title,
  organization,
  date,
  className = "bg-transparent",
  children = null,
}: ResumeCardProps) {
  return (
    <div
      className={`flex flex-col gap-y-3 rounded-lg px-5 py-4 dark:border-2 dark:border-[#212425] ${className}`}
    >
      <div className="flex flex-col gap-y-1">
        <h2 className="text-2xl font-semibold dark:text-white">{title}</h2>
        <div className="flex items-center justify-between gap-x-2">
          <h3 className="text-xl dark:text-white">{organization}</h3>
          <p className="text-tiny text-gray-lite dark:text-[#b7b7b7]">{date}</p>
        </div>
      </div>

      {children}
    </div>
  );
}

export default ResumeCard;
