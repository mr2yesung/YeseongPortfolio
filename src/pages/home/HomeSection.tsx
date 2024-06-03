type HomeSectionProps = {
  className?: string;
  children: React.ReactNode;
};

function HomeSection({ className = "", children }: HomeSectionProps) {
  return (
    <div className={`px-2 sm:px-5 md:px-10 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

export default HomeSection;
