import Image from "next/image"
import heroGD from "/public/img/hero_galsendev.png";

const Hero = () => {

  return (
    <section>
        <div
            className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="lg:py-32">
                    <h2 className="text-3xl font-bold sm:text-4xl">// Diarama</h2>

                    <p className="mt-4 text-gray-600">
                    Galsen DEV est une communauté qui regroupe les développeurs sénégalais
                    dans le but de mettre en place un écosystème favorable à la création
                    et au partage entre développeurs et de vulgariser la programmation
                    partout au Sénégal.
                    </p>
                </div>

                <div
                    className="relative overflow-hidden lg:order-last lg:h-full"
                >
                    <Image
                        src={heroGD}
                        width="400"
                        height="400"
                        alt="Landing Illustration"
                        loading="eager"
                        placeholder="blur"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

  )
}

export default Hero
