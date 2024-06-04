type PageFadeInProps = {
  children: React.ReactNode;
};

function PageFadeIn({ children }: PageFadeInProps) {
  return <div className="animate-fade">{children}</div>;
}

export default PageFadeIn;
