interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className="bg-gray-50">{children}</div>;
};

export default Layout;
