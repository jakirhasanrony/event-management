import { Link } from "react-router-dom";

const Review = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">

            <div className="my-8 max-w-6xl p-6 rounded-lg shadow-lg border-8 mx-auto">
                <h2 className="text-3xl rounded-lg mt-2 py-5  md:text-4xl lg:text-6xl font-bold text-center shadow-lg ">Customer Satisfaction</h2>

                <div className="mt-7 ">
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
                        <div className="chat-bubble text-white chat-bubble-secondary">That is wonderful to hear!
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary"> Keep it up dear</div>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <Link to="/reviewMore"><button className="btn bg-purple-600 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">See More Reviews</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;