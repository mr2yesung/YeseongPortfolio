type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <header className="lg:w-[410px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <div className="flex">{children}</div>
      </nav>
    </header>
  );
}

export default Header;
