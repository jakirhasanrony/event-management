import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>

            <Banner></Banner>
            <div className='max-w-6xl mx-auto p-4 '>
                <h2 className="text-3xl md:text-5xl py-4 text-center font-bold">Our services</h2>

                <Marquee speed={150} >
                    <h2 className="text-xl md:text-4xl lg:text-5xl text-gray-500 my-10 text-center font-bold mr-8">
                        Join us for an inspiring journey of learning and growth at our upcoming educational and training events.</h2>

                </Marquee>
            </div>

            <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-6">
                {
                    cards.map(card => <Services
                        key={card.id}
                        card={card}
                    > </Services>)
                }
            </div>

        </div>
    );
};

export default Home;