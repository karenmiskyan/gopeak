import { TFunction } from "next-i18next";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import Meta from "../Meta";

interface LayoutProps {
  t: TFunction;
  children: React.ReactNode;
  pageClass?: string;
  headerBorder?: boolean;
}

const Layout = ({ children, t, pageClass,headerBorder }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Header t={t} border={headerBorder} />
      <Container className={`position-relative min-h-screen ${pageClass || ''}`}>
        {children}
      </Container>
      <Footer t={t} />
    </>
  );
};

export default Layout;
