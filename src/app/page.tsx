import Carousel from "@/components/carousel/carousel";
import Hero from "@/components/hero/hero";
import Services from "@/components/services";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
      </main>
        <Services/>
        {/* {Services.map(serv =>
          (
            <Services key={serv} />
          )
        )} */}
      
      <Carousel />



      <footer className="">
      </footer>
    </div>
  );
}
