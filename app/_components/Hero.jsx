import React from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
function Hero() {
  return (
    <div>
      <div className="hidden lg:block">
        <Image
          src="/profile1.png"
          width={450}
          height={400}
          className="h-[450px]  object-cover rounded-full absolute right-44 mt-20"
        />
        <Image
          src="/profile5.jpg"
          width={250}
          height={100}
          className="h-[250px] object-cover rounded-full absolute bottom-20 right-96 mr-20"
        />
        <Image
          src="/profile2.png"
          width={200}
          height={100}
          className="h-[200px] object-cover rounded-full absolute bottom-50 mt-10 right-10"
        />
        <Image
          src="/profile3.png"
          width={150}
          height={100}
          className="h-[150px] object-cover rounded-full absolute right-16 bottom-36"
        />
      </div>{" "}
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                Take
              </span>{" "}
              Your First
            </h1>{" "}
            Step For{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Mentoring
              </span>{" "}
              others
            </h2>
          </main>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Mentry provide you a platform with 0% commission to connect with
            community and mentor others.
          </p>
          <hr></hr>{" "}
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              variant="secondary"
              className="w-full border border-white md:w-1/3"
            >
              <FaGoogle className=" mr-2" />
              Sign Up with Google
            </Button>
            <Button
              variant="secondary"
              className="w-full border border-white md:w-1/3"
            >
              <FaFacebook className=" mr-2" />
              Sign Up with Facebook
            </Button>
          </div>
        </div>

        {/* Hero cards sections */}

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </div>
  );
}

export default Hero;
