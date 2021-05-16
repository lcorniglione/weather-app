interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return <div className="h-full grid grid-cols-3 gap-2">{children}</div>;
}

export default Layout;
