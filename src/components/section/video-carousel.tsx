import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1],
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1],
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0],
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0],
  );

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive",
  );
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  const videoContainerRef = useRef<any>(null);
  const { scrollYProgress:scrollYProgress2 } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.9, 0], [1, 1, 0]);


  return (
    <motion.div
      animate={carouselVariant}
      className="bg-background pb-16"
    >
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{
                opacity: postersOpacity,
                x: posterTranslateXLeft,
              }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              {/* <img
                className="h-full w-full object-cover"
                src={banner3}
                alt={movies[1].name}
              /> */}
              <motion.div
                style={{ opacity }}
                className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
              >
                <img
                  className="sticky top-0 h-screen w-full object-cover"
                  src="/img/banner3.png"
                />
              </motion.div>
              <div className="absolute left-1/2 top-1/2 z-10 w-[100%] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="border-400-red flex h-full flex-col items-start justify-end"
                  // variants={{
                  //   hidden: { opacity: 0 },
                  //   visible: { opacity: 1 },
                  // }}
                  whileInView="visible"
                  exit="hidden"
                  animate="hidden"
                  viewport={{ amount: 0.98 }}
                  style={{
                    scale: scale2,
                    textAlign: "center",
                  }}
                >
                  <p className="mb-10 text-4xl font-bold text-[#F27D02] md:text-5xl">
                  ¡Impulsa tu carrera musical hoy! Descubre cómo los RadarCoins te lleva al éxito
                  </p>
                </motion.div>
                {/* <FadeIn>
                <div className="flex w-[692px] flex-col gap-3 border">
                  <h1 className="font-bold">Conecta con productores</h1>
                  <p className="text-2xl font-light">
                    Envía tus canciones directamente a productores de tu
                    elección, aumentando tus posibilidades de ser descubierto.
                  </p>
                </div>
              </FadeIn> */}
              </div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="relative left-[var(--carousel-offset,0px)] flex animate-carousel-move gap-3">
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[40vw] shrink-0 md:w-[23vw]"
            key={`${movie.name}-${index}`}
          >
            <img
              className="h-full w-full rounded-xl object-cover"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 
