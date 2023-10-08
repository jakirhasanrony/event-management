
const MoreReview = () => {
    return (
        <div>
           <div className="border-t-8 shadow-lg mb-4">

           </div>
           <h2 className="text-3xl rounded-lg mx-4 mt-8 pb-8  md:text-4xl lg:text-6xl font-bold text-center shadow-lg my-12">More Reviews</h2>
            <div className="border-8 shadow-lg p-8 max-w-5xl mx-auto">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/GkGjvLm/young-bearded-man-with-striped-shirt-1.jpg" />
                        </div>
                    </div>
                    <div className="chat-bubble chat-bubble-primary">I attended your educational training event last week, and it was absolutely fantastic! The content was incredibly informative and well-presented.</div>
                </div>
                <div className="chat chat-start ">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/GkGjvLm/young-bearded-man-with-striped-shirt-1.jpg" />
                        </div>
                    </div>
                    <div className="chat-bubble chat-bubble-primary">I just wanted to express my gratitude for organizing such a valuable educational training event. It exceeded my expectations in every way!</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/GkGjvLm/young-bearded-man-with-striped-shirt-1.jpg" />
                        </div>
                    </div>
                    <div className="chat-bubble chat-bubble-primary">I appreciate the variety of topics covered in your training events. It is a one-stop shop for enhancing my skills and knowledge.</div>
                </div>
            </div>


            {/* 2 number */}
            <div className="border-8 shadow-lg p-8 max-w-5xl mx-auto my-6">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/3dVGvjn/handsome-young-guy-with-glasses-posing.jpg" />
                        </div>
                    </div>
                    <div className="chat-header flex justify-center items-center gap-2">
                        <p className="font-semibold">Rachel Davis</p>
                        <time className="text-xs opacity-120">12:45</time>
                    </div>
                    <div className="chat-bubble chat-bubble-primary">Your training event provided me with practical insights and skills that I can apply immediately in my work. It was definitely worth attending!</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/dK4yPt0/photo-2023-10-06-19-23-32.jpg" />
                        </div>
                    </div>
                    <div className="chat-header flex justify-center items-center gap-2">
                        <p className="font-semibold">Admin</p>
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble chat-bubble-secondary">Thank you!</div>
                    <div className="chat-footer opacity-50">
                        Seen at 12:46
                    </div>
                </div>

            </div>

        </div>

    );
};

export default MoreReview;