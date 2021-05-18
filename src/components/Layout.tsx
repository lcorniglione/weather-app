import BackgroundImage from 'assets/background.jpg';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div
      className="h-full w-full grid grid-cols-3 bg-cover bg-center"
      style={{backgroundImage: `url(${BackgroundImage})`}}
    >
      {children}
    </div>
  );
}

export default Layout;
