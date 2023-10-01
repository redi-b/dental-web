import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import Header from "@sections/Header";
import Info from "@sections/Info";
import ServicesOverview from "@sections/ServicesOverview";
import Team from "@sections/Team";
import Testimonial from "@sections/Testimonial";

export default function Home() {
  return (
    <>
      <NavBar home />
      <Header />
      <Info />
      <Testimonial />
      <Team />
      <ServicesOverview />
      <Footer />
    </>
  );
}
