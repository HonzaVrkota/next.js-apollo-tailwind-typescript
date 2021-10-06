import Image from "next/image";
import React from "react";
const Maintenance = () => {
  return (
    <section className="h-screen w-screen">
      <div className="w-full h-full flex justify-center flex-col">
        <div className="w-5/12 mx-auto">
          <Image
            alt="Background image"
            src="/illustrations/undraw_under_construction_46pa.png"
            objectFit="contain"
            width="500px"
            height="200px"
            layout="responsive"
            className="text-center"
            quality={80}
            priority={true}
          />
        </div>
        <h1 className="text-center text-8xl">Právě na tom pracujeme!</h1>
      </div>
    </section>
  );
};

export default Maintenance;
