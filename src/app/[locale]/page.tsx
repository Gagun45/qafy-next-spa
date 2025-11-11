import Contacts from "@/components/Main/Contacts/Contacts";
import Hero from "@/components/Main/Hero/Hero";
import Services from "@/components/Main/Services/Services";
import Testimonials from "@/components/Main/Testimonials/Testimonials";
import WhyUs from "@/components/Main/WhyUs/WhyUs";

const MainPage = () => {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contacts />
    </main>
  );
};
export default MainPage;
