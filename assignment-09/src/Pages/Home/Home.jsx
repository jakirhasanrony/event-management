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
            {/* <div className="my-8 max-w-6xl p-6 rounded-lg shadow-lg border-8 mx-auto">
                <h2 className="text-4xl shadow-lg text-center py-4 mb-6 font-bold">Customer Satisfaction</h2>
             
                <div className="mt-4">
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary">Hi there! I just wanted to reach out and give some feedback on your events management system for educational and training events. I recently used it to arrange a seminar, and I must say, I had a fantastic experience!</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble text-white chat-bubble-secondary">Thank you! What did you like most?</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary"> Absolutely! First of all, the user interface was incredibly intuitive. It made setting up the event and managing registrations a breeze. I appreciated how user-friendly it was.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary"> Moreover, The user-friendly interface, responsive customer support, and customization options were excellent.</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble text-white chat-bubble-secondary">That's wonderful to hear! 
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary"> Keep it up dear</div>
                    </div>

                </div>
            </div> */}

        </div>
    );
};

export default Home;