import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import { services } from "../data/services";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards services={services} />
    </>
  );
}
