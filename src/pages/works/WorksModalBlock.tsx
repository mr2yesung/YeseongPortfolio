type WorksModalBlockProps = {
  children: React.ReactNode;
};

function WorksModalBlock({ children }: WorksModalBlockProps) {
  return (
    <p className="flex items-center text-[15px] dark:text-white sm:text-lg">
      {children}
    </p>
  );
}

export default WorksModalBlock;
