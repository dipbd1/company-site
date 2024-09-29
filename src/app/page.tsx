import Hero from "@/components/hero/hero";
import Services from "@/components/services";
import data from "@/config/site-data.en";




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



      <footer className="">
      </footer>
    </div>
  );
}
