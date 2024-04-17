import { Button } from "./components/button";
import { Container } from "./components/container";
import { Header } from "./components/header";
import HeroSeccion from "./components/section/HeroSeccion";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";
import { VideoCarousel } from "./components/section/video-carousel";
import "./styles.css";

function App() {
  return ( 
    <>
      {/* <Header /> */}
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
          <HeroSeccion title=' ¿Por qué esperar? Desbloquea el potencial de tu música con' SubTitle='RadarCoins'/>
        </div>
        <VideoCarousel />
        <HeroSeccion title='¡Descubre el poder de los RadarCoins! Tu inversión musical optimizada'/>
      </main>
    </>
  );
}

export default App;
