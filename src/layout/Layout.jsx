import Header from "../components/Header/Header.jsx";

function Layout({ children }) {
  return (
    <div className="max-w-6xl m-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
