import "@fontsource/sora"; 

import Nav from "../components/Nav";
import TopLeftImg from "./TopLeftImg";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
