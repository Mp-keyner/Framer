import { Button } from "../button";
import { Container } from "../container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../fade-in";

const HeroSeccion = ({title, SubTitle}:any) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.9, 0], [1, 1, 0]);

  return (
    <div className="relative h-[185vh] bg-[#000] text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/img/banner2.png"
        />
        <Container className="relative z-10 h-[--hero-height] pb-7">
          <motion.div
            className="border-400-red flex h-full flex-col items-start justify-end"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            whileInView="visible"
            exit="hidden"
            animate="hidden"
            viewport={{ amount: 0.98 }}
          >
            <h1 className="mb-10 text-4xl font-bold md:text-5xl">
                {title}
                <p className="mb-10 text-4xl font-bold md:text-5xl text-[orange]">{SubTitle}</p>
            </h1>
          </motion.div>
        </Container>
      </motion.div>
    </div>
  );
};

export default HeroSeccion;
