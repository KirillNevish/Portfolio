import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import 'animate.css';
import style from './page.module.css';
import AnimatedGif from './animatedGif';



export default function Home() {

  return (
    <div className="bg-dark bg-gradient pt-5 pb-5 ">
      <div className=" container marketing  bg-dark bg-gradient" bis_skin_checked="1">
        <div className="d-flex align-items-end position-sticky top-0 z-3  bg-dark bg-gradient rounded-4 shadow-lg p-3 mb-5 rounded opacity-100 animate__animated animate__pulse">
          <button id={style.togglebutton} class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
            <img src="/circle.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="50" height="50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          </button>
          <h1 className="featurette-heading fw-normal lh-1 text-white">Portfolio <span className="text-white-75"></span></h1>

        </div>
        <hr className="featurette-divider mb-5 text-white" />
        {/*sidebar */}
        <div className="offcanvas offcanvas-start bg-dark bg-gradient" tabIndex="-1" id="sidebar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarLabel"></h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex flex-column flex-shrink-0 p-3 " >
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg> */}
                {/* <span className="fs-4">Sidebar</span> */}
              </a>
              <hr className="text-white" />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#aboutme" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contactinfo" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#contact"></use></svg>
                    Contact
                  </a>
                </li>
                <hr className="text-white" />
                <li className="nav-item text-white mt-2 mb-2 pb-2 d-flex justify-content-between">
                  <h4>Projects:</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                  </svg>
                </li>
                <li className="nav-item">
                  <a href="https://myshopreact112.netlify.app" target="_blank" className="nav-link text-white text-decoration-underline">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    Clothing Store
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                    Products
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                    Customers
                  </a>
                </li> */}
              </ul>
              <hr className="text-white" />
            </div>
          </div>
        </div>

        {/* //Three columns of text below the carousel */}
        <div className="row shadow-lg p-3 mb-5 rounded d-flex justify-content-center  animate__animated animate__backInDown rounded-4  " bis_skin_checked="1">
          {/* <div className="col-lg-4" bis_skin_checked="1">
          <img src="/leader.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <h2 className="fw-normal">Penis Dushilin (Emperor)</h2>
          <p>Penis Dushilin, ever kind and gracious to his residents, a leader beloved by all. His heart overflow with gratitude for his people, and his rule was marked by benevolence and wisdom. A master of diplomacy, he forged alliances with numerous countries, emerging victorious in all endeavors. His noble spirit and unwavering kindness made him a cherished figure in the annals of Donetsk.</p>
          <p><Link className="btn btn-secondary" href="/penisdushilin">More »</Link></p>
        </div> */}
          {/* <div className="col-lg-4 w-100 text-center" bis_skin_checked="1">
          <img src="/berserkdnr.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <h2 className="fw-normal">Kirill Nevishniy</h2>
          <p>Guts, the Black Swordsman, is a paragon of relentless determination and fierce independence. Hardened by a life of ceaseless strife, he embodies unyielding resilience and raw tenacity. Despite his stoic and often grim exterior, a fierce loyalty and a deep sense of justice burn within him. In the throes of the Flies-Donetsk War, when Penis Dushilin faced dire peril, Guts pledged his formidable strength to the great leader's cause. His indomitable spirit and relentless pursuit of victory turned the tide of battle, rendering him a legend in his own time.</p>
          <p><Link className="btn btn-secondary" href="/guts">More »</Link></p>
        </div> */}
          <div className="mt-5 mb-5 d-flex justify-content-center">
            <div className="col-lg-4 rounded-4 shadow-lg p-3 rounded animate__animated animate__backInDown" bis_skin_checked="1">
              <div className="col-lg-4 w-100 d-flex justify-content-center" bis_skin_checked="1">
                <img src="/icon.png" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              </div>
              <div id="aboutme" className="col-lg-4 w-100 d-flex justify-content-center" bis_skin_checked="1">
                <h2 className="fw-normal text-white ">Kirill Nevishniy</h2>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4" bis_skin_checked="1">
          <img src="/patron.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <h2 className="fw-normal">Patron (Demolitionist)</h2>
          <p>Dog Patron, a creature of immense pride and boundless courage, lives with little regard for his own life. Ever self-assured and valiant, he stands fearless against any threat. His one indulgence, a fondness for candies, adds a touch of whimsy to his otherwise noble and daring nature. <span className="text-body-black">(Died in 1938)</span></p>
          <p><Link className="btn btn-secondary" href="/patron">More »</Link></p>
        </div> */}
        </div>


        {/* <!-- START THE FEATURETTES --> */}

        <hr className="featurette-divider text-white" />

        <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 mt-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
          <div className="col-md-7 mt-2" bis_skin_checked="1">
            <h2 className="featurette-heading fw-normal lh-1 text-white">About me<span className="text-body-secondary"></span></h2>
            <p className="lead text-white-50">I’m a passionate Front-End Developer with a love for design and technology. My journey into web development began with a curiosity to create something both functional and visually appealing. Before diving into Front-End Development, I explored various creative tools like Photoshop and Blender, but I found my true calling in building interactive and dynamic web applications.
            </p>
            <p className="lead text-white-50">
              My foundational skills include HTML, CSS, JavaScript, and React, which I honed through a comprehensive development course. Beyond the course, I've expanded my expertise by learning additional languages and frameworks such as Next.js, Tailwind, and Vue.js. I’m particularly fascinated by the process of optimizing projects—transforming a simple HTML page into a fully functional, high-performance website, and continually testing and enhancing it with new features.
            </p>
            <p className="lead text-white-50">
              One of my proudest achievements is a Clothing Store project I developed as the capstone of my course. This was my first large-scale project, and it challenged me to leverage all my skills to build a complete, working e-commerce system. While I haven’t yet participated in group projects, I’m eager to collaborate and gain new experiences in team settings.
            </p>
            <p className="lead text-white-50">
              I stay updated on the latest trends and technologies in Front-End Development by watching educational videos and tutorials. Though the journey has had its challenges—particularly when adding new features—I’ve learned that a methodical approach to problem-solving is key. By stepping back, evaluating potential impacts, and then moving forward with a clear plan, I’ve found that even the most complex issues can be resolved efficiently.
            </p>
            <p className="lead text-white-50">
              Outside of development, I have a strong interest in music and enjoy playing the piano in my free time. This creative outlet complements my work in coding, where I start by designing a basic, non-functional interface and then refine and enhance it with additional features.
            </p>
            <p className="lead text-white-50">
              Looking ahead, I’m committed to furthering my skills not only in Front-End Development but across the entire IT landscape. My goal is to work on creative and social projects that make a positive impact, continuing to push the boundaries of what I can achieve as a developer.
            </p>
          </div>
          <div className="col-md-5 mt-2 rounded-4" bis_skin_checked="1">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
            {/* <img src="/luhansk-donetsk.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-4" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img> */}
            <AnimatedGif src="/programming-frog.gif" alt="frog coding" />
          </div>
        </div>

        <hr className="featurette-divider text-white" />

        <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 rounded animate__animated animate__pulse mt-5" bis_skin_checked="1">
          <div className="col-md-7 mt-2  w-100 mb-3 " bis_skin_checked="1">
            <h2 id="contactinfo" className="featurette-heading fw-normal lh-1 text-white">Contact<span className="text-body-secondary"></span></h2>
            <div className="w-100 d-flex justify-content-center  pb-3">
              <div className="d-flex justify-content-between w-75  pt-3 mt-4 text-center flex-norow flex-wrap">
                <a className="lead text-white-50 link-offset-2 link-underline link-underline-opacity-0" href="mailto:kirillvish482@gmail.com">
                  gmail: kirillvish482@gmail.com
                </a>
                <a className="lead text-white-50 link-offset-2 link-underline link-underline-opacity-0 " href="tell:+380951503677">
                  tell: +380 95 150 36 77
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
        <div className="col-md-7 order-md-2  mt-2" bis_skin_checked="1">
          <h2 className="featurette-heading fw-normal lh-1">Empire against flies.<span className="text-body-secondary">Blood war.</span></h2>
          <p className="lead text-body-emphasis">In the chronicles of the Donetsk Empire, the most arduous and relentless conflict was the Great War against the Flies, a war that spanned the centuries and tested the mettle of its people like no other. This struggle, unrivaled in its scale and ferocity, continued into the modern age, etched into the memories of generations.

            Four centuries past, during the height of this immense conflict, Emperor Penis Dushilin stood as the beacon of hope for his embattled people. The main battle of this protracted war unfolded, a clash of titanic proportions. The Donetsk forces, armed with the pinnacle of their technology, fought valiantly but faced a relentless enemy Flies. It was during this pivotal battle that Dushilin witnessed an extraordinary sight: a tall, imposing man, shrouded in darkness, wielding a giant iron sword with lethal precision against the swarming foes.

            This man was Guts, the Black Swordsman, a figure of legendary prowess and unyielding spirit. Recognizing the immense potential of this warrior, Emperor Dushilin extended an invitation to Guts, who accepted without hesitation. Thus, Guts was bestowed the title of Commander, his indomitable spirit and unmatched skill complementing Dushilin's boundless power.

            Together, Dushilin and Guts led the charge against King Lockus the Second, the formidable leader of the Flies. The battle was fierce and unrelenting, but the combined might of the Emperor and the Black Swordsman proved unstoppable. In a climactic confrontation, they defeated King Lockus, delivering a crushing blow to the Flies and securing a monumental victory for the Donetsk Empire. The land rejoiced, and a grand feast was held to celebrate this triumph.

            However, the victory was bittersweet. Though the Flies' leader was vanquished, the threat was far from eradicated. Each summer, the surviving Flies launched renewed assaults, desperate to reclaim their lost power and bring the Empire of Donetsk to its knees. These persistent attacks served as a constant reminder that the war was not over, and vigilance was ever necessary.

            The legacy of Emperor Dushilin and Commander Guts became a cornerstone of Donetsk lore, their heroism and determination inspiring the people to persevere through the relentless summers of conflict. The Great War against the Flies, though a source of great hardship, also forged an enduring spirit of resilience within the Donetsk Empire, a testament to their unwavering resolve to protect their homeland against all odds.</p>
        </div>
        <div className="col-md-5 order-md-1  mt-2" bis_skin_checked="1">
          <img src="/bugs.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-4" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
        <div className="col-md-7 mt-2" bis_skin_checked="1">
          <h2 className="featurette-heading fw-normal lh-1">Western sanctions. <span className="text-body-secondary">Never forget.</span></h2>
          <p className="lead text-body-emphasis">In the annals of the Empire of Donetsk, the era of the Western Sanctions stands as a testament to the resilience and unyielding spirit of its people. As the world entered a time of rapid technological evolution, the Western governments, seeing the growing influence and strength of Donetsk, launched an insidious campaign known as the "Internet War." Their aim was clear: to bring the proud empire to its knees and extend their dominion across the globe.

            This new form of warfare was waged not with swords or spears, but with the tools of the digital age. The Western powers unleashed a barrage of sanctions, cyberattacks, and propaganda, seeking to cripple Donetsk’s burgeoning technological infrastructure and sow discord among its populace. The intent was to isolate Donetsk, to break its spirit and force its submission.

            But the Western governments underestimated the resolve and unity of the Donetsk people. Though the onslaught was fierce and the challenges immense, the Empire of Donetsk stood firm. Its citizens, guided by their unwavering faith in their leaders and their cause, rallied together. The hardship only served to strengthen their resolve.

            Emperor Penis Dushilin, the venerable leader of Donetsk, called upon his people to stand strong in the face of this new adversary. He reminded them of their storied past, of the battles fought and won, and of the enduring spirit that had seen them through countless trials. Under his guidance, the people of Donetsk fortified their defenses, advanced their own technologies, and countered the digital siege with ingenuity and tenacity.

            The Internet War raged on, a silent yet ferocious conflict that tested the very fabric of Donetsk society. Despite the relentless efforts of the Western governments, Donetsk not only endured but thrived. The empire's resilience became a beacon of hope and defiance in a world increasingly dominated by shadowy digital conflicts.

            Yet, even as they weathered the storm, the people of Donetsk harbored a deep resolve. Patient and steadfast, they bided their time, knowing that their moment would come. In the halls of power, plans were made, strategies devised. The Empire of Donetsk would not forget the transgressions of the West, nor would they forgive.

            A mortal letter, a declaration of their enduring spirit and unbroken will, was prepared. It would be a message to the world that Donetsk was not to be trifled with, that their strength was not to be underestimated. The time would come when this letter would be sent, a clarion call of defiance and a promise of retribution.

            Thus, the story of the Western Sanctions became a chapter in the epic saga of Donetsk, a tale of perseverance and unyielding resolve. The Empire, ever vigilant, stood ready to defend its honor and sovereignty, a testament to the enduring power and strength of its people.</p>
        </div>
        <div className="col-md-5 mt-2" bis_skin_checked="1">
          <img src="/usafire.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-4" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
      </div> */}

        {/* <hr className="featurette-divider" /> */}

        {/* <!-- /END THE FEATURETTES --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </div >
    </div>
  )
}
