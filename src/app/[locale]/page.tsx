import Contacts from "@/components/Main/Contacts/Contacts";
import Home from "@/components/Main/Home/Home";
import Services from "@/components/Main/Services/Services";
import Testimonials from "@/components/Main/Testimonials/Testimonials";
import WhyUs from "@/components/Main/WhyUs/WhyUs";

const MainPage = () => {
  return (
    <main className="w-full">
      <Home />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contacts />
    </main>
  );
};
export default MainPage;
