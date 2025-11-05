import React from "react";
import { Link } from "react-router-dom";

const reviews = [
    {
        name: "Sita Shrestha",
        comment: "Loved the Sunrise Hill trail! Easy and scenic.",
        rating: 5,
    },
    {
        name: "Ram Thapa",
        comment: "Forest Trek was challenging but totally worth it.",
        rating: 4,
    },
    {
        name: "Mina Koirala",
        comment: "River View Trail had amazing views. Highly recommend!",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="relative h-[153vh] w-full  text-white">
            {/* About Section */}
            <div className="absolute w-full h-[110vh] bg-green-500 px-5 md:px-10 py-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                    About <span className="text-black">Trekking</span>
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-justify text-white/90">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum
                    nesciunt consequuntur nulla repellat quos incidunt explicabo inventore
                    nisi totam dolorem natus recusandae accusamus labore repellendus.
                    Consequuntur necessitatibus fugiat quo. Nostrum nisi atque numquam
                    inventore id, necessitatibus earum soluta accusamus quis nemo maiores
                    qui voluptatem voluptates omnis, illo rem sequi tempora est pariatur,
                    tenetur impedit. Tempore nihil accusamus id architecto? Quidem ut
                    minus voluptas a nostrum aliquid blanditiis animi, consequuntur
                    exercitationem maxime nemo eum nesciunt repudiandae veritatis sed
                    ipsam similique tempore in delectus cupiditate dolorum placeat,
                    consequatur molestiae molestias. Autem. Dolore tempore maxime, quo
                    incidunt accusantium aperiam, cupiditate repudiandae odit amet iure
                    asperiores explicabo assumenda? Voluptates, animi maxime obcaecati
                    quidem modi fugiat assumenda rem aliquid consectetur labore dolorem.
                    Fugit, sequi! Deleniti saepe, quam cum debitis, iure, laudantium quis
                    ratione molestiae culpa porro nobis inventore aspernatur ducimus odit.
                    Commodi magni assumenda alias asperiores libero fuga ipsa error ad
                    quo. Perferendis, beatae? Voluptatum id nihil commodi nobis, magnam et
                    molestiae voluptatem neque nemo, mollitia ad. Aliquid, doloribus
                    fugiat accusantium ab voluptas error incidunt placeat voluptatem
                    officia quas consectetur, molestias animi. Voluptates, amet. Ipsum rem
                    unde repellat adipisci aspernatur rerum asperiores in, possimus
                    consectetur numquam architecto impedit distinctio iure mollitia nobis
                    ratione, corrupti illum sequi sit velit. Provident ipsam suscipit
                    pariatur quisquam repellat? Deleniti soluta obcaecati, cupiditate
                    corporis iure error sequi dignissimos eos amet excepturi rem
                    blanditiis, voluptas nulla consequuntur, impedit exercitationem
                    voluptatem? Nam, dolor! Dolorem. Soluta mollitia corrupti eos velit
                    asper minus impedit pariatur ullam maiores earum, voluptatibus
                    asperiores ipsa aliquid minima illo culpa dolorum hic sequi neque
                    numquam? A magnam odio eaque. Doloremque, accusantium? Suscipit, natus
                    in adipisci, rerum nam at corporis dicta neque id eveniet numquam ex
                    ab, molestiae doloremque ullam voluptatem nihil iste inventore.
                    Obcaecati praesentium dolores provident non minus esse excepturi.
                </p>
            </div>

            {/* Reviews Section */}
            <div className="absolute bottom-0 text-gray-800 py-16 px-5 md:px-10 shadow-inner">
                <div className="container mx-auto">
                    <h2 className="font-bold mb-8 md:text-4xl text-3xl text-center md:text-left text-white">
                        User <span className="text-black">Reviews</span>
                    </h2>

                    <div className="h-[40vh] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition h-auto flex flex-col justify-between"
                            >
                                <p className="text-gray-700 mb-4 text-sm md:text-base">
                                    "{review.comment}"
                                </p>
                                <div>
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-yellow-500 text-lg">
                                        {"★".repeat(review.rating)}{" "}
                                        {"☆".repeat(5 - review.rating)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative group border rounded-sm h-10 w-60 mx-auto md:mx-0 mt-8 text-center border-green-500 bg-green-600 overflow-hidden">
                        <span className="absolute h-full w-full bg-green-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-transform duration-300 origin-center"></span>
                        <Link
                            to="trials-info"
                            className="absolute z-20 inset-0 flex items-center justify-center text-white font-medium"
                        >
                            See More and Leave One
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
