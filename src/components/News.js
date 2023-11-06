import React from "react";
import { Tabs, Tab, AppBar } from '@material-ui/core'
export default function News() {
    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {
        console.warn(val)
        setValue(val)
    }
    return (
        // <div className="text-white">
        //     <div className="container my-24 mx-auto md:px-6">
        //         <section className="mb-8 lg:mb-10">
        //             <h1 className="mb-4 text-3xl font-bold">
        //             First Images of Angelina Jolie as Maria Callas Unveiled as Pablo Larrain’s ‘Maria’ Begins Shoot
        //             </h1>

        //             <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke-width="2"
        //                     stroke="currentColor"
        //                     className="mr-2 h-5 w-5"
        //                 >
        //                     <path
        //                         stroke-linecap="round"
        //                         stroke-linejoin="round"
        //                         d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        //                     />
        //                     <path
        //                         stroke-linecap="round"
        //                         stroke-linejoin="round"
        //                         d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        //                     />
        //                 </svg>
        //                 Hot news
        //             </p>

        //             <p className="mb-6">
        //                 Step into the realm of motion pictures as we embark on an exhilarating expedition through the captivating tapestry of cinema. Here, we celebrate the artistic brilliance, the storytelling magic, and the awe-inspiring allure that films infuse into our lives. Join us as we traverse the diverse landscapes of genres, iconic character portrayals, groundbreaking technological marvels, and indelible moments that have sculpted the ever-evolving canvas of the silver screen. From the heart-wrenching dramas to the pulse-pounding thrillers, from the mind-bending documentaries to the fantastical journeys beyond imagination, let's immerse ourselves in the mesmerizing world of the movies.
        //             </p>

        //             <p className="mb-6">
        //                 <strong>Shazam!</strong>
        //             </p>

        //             <p className="mb-6">
        //             Prepare to embark on a mesmerizing cinematic odyssey, where we'll delve into the enchanting world of motion pictures. Here, we honor the boundless artistry, the enchanting storytelling, and the captivating mystique that films bring to our lives. Come with us as we navigate through a diverse landscape of genres, legendary character portrayals, cutting-edge technological innovations, and unforgettable moments that have left an indelible mark on the ever-shifting canvas of the silver screen. From the soul-stirring dramas to the heart-pounding thrillers, from the thought-provoking documentaries to the whimsical adventures that defy imagination, let's lose ourselves in the enchanting universe of cinema.
        //             </p>

                    

        //             <p className="mb-6">
        //             While the allure of visual splendor may be undeniable, it's the captivating force of storytelling that truly captivates us. Movies possess the extraordinary ability to whisk us away to diverse epochs, cultures, and vantage points, offering a glimpse into realms far removed from our own. Whether it's an intimate character-driven narrative that tugs at our heartstrings, a nail-biting suspenseful thriller that keeps us teetering on the edge of our seats, or a heartwarming account that resonates deep within our souls, films have the remarkable capacity to conjure a vast spectrum of emotions and etch an enduring mark on our lives.
        //             </p>

        //             <img
        //                 src="./images/gia.jpg"
        //                 className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
        //                 alt=""
        //             />

        //             <p>
        //             The spellbinding world of cinema owes its existence to the extraordinary talents of actors and actresses. From the timeless luminaries of yesteryears to the promising talents gracing our screens today, these remarkable individuals possess the unique gift of completely inhabiting their characters, ensnaring our senses with their portrayal of multifaceted roles and their remarkable capacity to elicit authentic emotions. Their performances are indelibly etched in our recollections, causing us to chuckle, shed tears, and exuberantly cheer in unison with them.
        //             </p>
        //             <p className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
        //                 <strong>Note:</strong> This movie web is designed by Duy Huynh for
        //                 his lab grade in FER201m. Building with React and Tailwind,
        //                 MaterialUI and Materialize. Most of the project uses Typescript
        //                 (90%).
        //             </p>
        //         </section>
        //     </div>
        // </div>
        <div>
            <AppBar position='static'>
                <Tabs value={value} onChange={handleTabs}>
                    <Tab label="News 1" />
                    <Tab label="News 2" />
                    <Tab label="News 3" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <h2>First Images of Angelina Jolie as Maria Callas Unveiled as Pablo Larrain’s ‘Maria’ Begins Shoot</h2>
                <img className="img-news" src="https://th.bing.com/th/id/R.f73b1e98cf1be5e4678f74094582f8e9?rik=z3Pp9LDmKGrCiA&pid=ImgRaw&r=0" alt="" />
                <h6 className="details-news">
                    <p>
                        The first two images of Angelina Jolie as famed diva Maria Callas in Pablo Larrain‘s upcoming biopic Maria have been revealed.

                        Based on true accounts, the film will tell the tumultuous, beautiful and tragic story of the life of the world’s greatest opera singers, relived and re-imagined during her final days in 1970s Paris. With the independent production having signed to a SAG-AFTRA interim agreement, the shoot is now set to start, and will take place over eight weeks in Paris, Greece, Budapest and Milan.

                        Alongside Jolie, the cast also includes Pierfrancesco Favino (Adagio, The Hummingbird), Alba Rohrwacher (La Chimera, Hungry Hearts), Haluk Bilginer (Winter Sleep), Kodi Smit-McPhee (The Power of the Dog, Elvis) and Valeria Golino (Portrait of a Lady on Fire, Caos Calmo).
                    </p>
                    <p>
                        The first two images of Angelina Jolie as famed diva Maria Callas in Pablo Larrain‘s upcoming biopic Maria have been revealed.

                        Based on true accounts, the film will tell the tumultuous, beautiful and tragic story of the life of the world’s greatest opera singers, relived and re-imagined during her final days in 1970s Paris. With the independent production having signed to a SAG-AFTRA interim agreement, the shoot is now set to start, and will take place over eight weeks in Paris, Greece, Budapest and Milan.

                        Alongside Jolie, the cast also includes Pierfrancesco Favino (Adagio, The Hummingbird), Alba Rohrwacher (La Chimera, Hungry Hearts), Haluk Bilginer (Winter Sleep), Kodi Smit-McPhee (The Power of the Dog, Elvis) and Valeria Golino (Portrait of a Lady on Fire, Caos Calmo).</p>
                </h6>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <h2>Underrated Angelina Jolie action flop storms onto Netflix top 10 movie list</h2>
                <img className="img-news" src="https://cdn.mos.cms.futurecdn.net/A3MwmNmjG3LAzXbvdkNZ6g-650-80.jpg.webp" alt="" />
                <h6 className="details-news">
                    <p>Plenty of movies went under the radar when Covid-19 caused movie theaters to be shuttered, but one such picture starring Angelina Jolie is now seeing its day in the spotlight.

                        This film is Those Who Wish Me Dead, which was released in 2021 — it didn't do well upon release, but after being added to Netflix UK's catalog on Wednesday, September 27, it's received interest from a whole new batch of fans. At the time of writing a week later, it's on the service's local most-streamed movies list, and has been for several days.

                        Those Who Wish Me Dead stars Jolie as a Montana-based smokejumper (someone who fights forest wildfires). When she finds a lost child when out on a patrol, she inadvertently finds herself head-to-head with some hitmen hunting him, who'll go to any lengths to get the boy.</p>
                    <p>
                        The movie is the most recent one directed by Taylor Sheridan, who's better known for his screenwriting (Hell or High Water, Sicario, Without Remorse) and the many hit TV shows he's created (Yellowstone and its various spin-offs, Mayor of Kingstown, Tulsa King, Special Ops: Lioness). Sheridan also directed the acclaimed Wind River, with TWWMD his third directed movie.

                        Critics didn't love Those Who Wish Me Dead when it came out, and it sits at 62% on Rotten Tomatoes right now. Audiences were even less keen; even though it has 86% audience score on the same website, the movie ended up being a total bomb.

                        While an exact budget for the movie is hard to find, it has the sad label of being the fourth-worst 'wide opening' (over 3,000 movie theaters in the US) of all time, according to Box Office Mojo. Two of the movies above it: Reminiscence and Copshop, actually came out afterward, meaning TWWMD was the second-worst ever for several months. That's not exactly a great accolade.</p>
                </h6>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <h2>Angelina Jolie's 'Maleficent 2' Moves Up Release Date to Fall 2019</h2>
                <img className="img-news" src="https://th.bing.com/th/id/R.0c11eae51b90ca749eeabe531d928807?rik=EnkCGIbNDNA6dQ&pid=ImgRaw&r=0" alt="" />
                <h6 className="details-news">
                    <p>Angelina Jolie is ready to cast a spell on you again seven months early.
                    </p>
                    <p>
                        Disney has moved up the release date of "Maleficent 2," the sequel centering on Jolie's villainess, to October 18. It was previously scheduled for May 2020.

                        Subtitled "Mistress of Evil," the movie picks up a few years after the events of the first film and continues to explore the complex relationship between the notorious fairy and the soon-to-be Queen (Elle Fanning). They form new alliances and face new adversaries in their struggle to protect the moors and the magical creatures that reside within.

                        Original cast members Sam Riley, Imelda Staunton, Juno Temple, and Lesley Manville, all return and are joined by newcomers Michelle Pfeiffer and Chiwetel Ejiofor.

                        "Maleficent" was a somewhat surprising hit for Disney in 2014. It was Jolie's biggest opening weekend and went on to earn $758.5 million worldwide.
                    </p>
                </h6>
            </TabPanel>
        </div>
        
    )
}

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && (
                    <p>{children}</p>
                )
            }
        </div>
    )
}