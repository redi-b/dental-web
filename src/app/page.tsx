import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import Connect from "@sections/Connect";
import Header from "@sections/Header";
import Info from "@sections/Info";
import ServicesOverview from "@sections/ServicesOverview";
import Team from "@sections/Team";
import Test from "@sections/Test";
import Testimonial from "@sections/Testimonial";

export default function Home() {
  return (
    <>
      <NavBar home />
      <Header />
      <Info />
      <Team />
      <ServicesOverview />
      <Testimonial />
      <Test />
      <Connect />
      <Footer />
    </>
  );
}
