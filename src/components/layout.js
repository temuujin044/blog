import { Header, Fooder } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Fooder />
    </>
  );
};
