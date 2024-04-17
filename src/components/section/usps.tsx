import { Container } from "../container";
import { FadeIn } from "../fade-in";

export const Usps = () => {
  return (
    <Container className="relative z-10 h-[220vh] max-w-[992px] space-y-12  py-36 text-white md:text-4xl">
      <FadeIn>
        <p className="mb-10 w-[1]  md:text-center text-4xl md:text-5xl font-bold">
          RadarCoins: Tu pasaporte al éxito musical
        </p>
      </FadeIn>
      <FadeIn>
        <div className="flex w-[692px] flex-col gap-3 ">
          <h1 className="font-bold text-4xl">Conecta con productores</h1>
          <p className="text-2xl font-light">
            Envía tus canciones directamente a productores de tu elección,
            aumentando tus posibilidades de ser descubierto.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex w-[692px] flex-col gap-3 ">
          <h1 className="font-bold text-4xl">Promoción en redes sociales</h1>
          <p className="text-2xl font-light">
            Comparte tus canciones en redes sociales y playlists de Spotify,
            alcanzando a una audiencia más amplia.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex w-[692px] flex-col gap-3 ">
          <h1 className="font-bold text-4xl">Textos editoriales y entrevistas</h1>
          <p className="text-2xl font-light">
            Destaca tu música con textos editoriales y entrevistas, aumentando
            tu visibilidad y credibilidad.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex w-[692px] flex-col gap-3 ">
          <h1 className="font-bold text-4xl">Fácil de usar</h1>
          <p className="text-2xl font-light">
            Compra RadarCoins con tarjetas de crédito/débito o PayPal, y
            comienza a promocionar tu música en minutos.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex w-[692px] flex-col gap-3 ">
          <h1 className="font-bold text-4xl">Precio accesible</h1>
          <p className="text-2xl font-light">
            Con precios que disminuyen con la compra de más unidades, RadarCoins
            es una inversión asequible para tu carrera musical.
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};
