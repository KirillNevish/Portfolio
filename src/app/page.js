import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import 'animate.css';



export default function Home() {
  return (
    <div className="container marketing mt-5 mb-5" bis_skin_checked="1">
      <h1 className="featurette-heading fw-normal lh-1">DONETSK.<span className="text-body-secondary">empire.com</span></h1>
      <hr className="featurette-divider mb-5" />
      {/* //Three columns of text below the carousel */}
      <div className="row shadow-lg p-3 mb-5 rounded  animate__animated animate__backInDown" bis_skin_checked="1">
        <div className="col-lg-4" bis_skin_checked="1">
          <img src="/leader.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <h2 className="fw-normal">Penis Dushilin (Emperor)</h2>
          <p>Penis Dushilin, ever kind and gracious to his residents, a leader beloved by all. His heart overflow with gratitude for his people, and his rule was marked by benevolence and wisdom. A master of diplomacy, he forged alliances with numerous countries, emerging victorious in all endeavors. His noble spirit and unwavering kindness made him a cherished figure in the annals of Donetsk.</p>
          <p><Link className="btn btn-secondary" href="/penisdushilin">More »</Link></p>
        </div>
        <div className="col-lg-4" bis_skin_checked="1">
          <img src="/berserkdnr.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <h2 className="fw-normal">Guts (Commander)</h2>
          <p>Guts, the Black Swordsman, is a paragon of relentless determination and fierce independence. Hardened by a life of ceaseless strife, he embodies unyielding resilience and raw tenacity. Despite his stoic and often grim exterior, a fierce loyalty and a deep sense of justice burn within him. In the throes of the Flies-Donetsk War, when Penis Dushilin faced dire peril, Guts pledged his formidable strength to the great leader's cause. His indomitable spirit and relentless pursuit of victory turned the tide of battle, rendering him a legend in his own time.</p>
          <p><Link className="btn btn-secondary" href="/guts">More »</Link></p>
        </div>
        <div className="col-lg-4" bis_skin_checked="1">
          <img src="/patron.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <h2 className="fw-normal">Patron (Demolitionist)</h2>
          <p>Dog Patron, a creature of immense pride and boundless courage, lives with little regard for his own life. Ever self-assured and valiant, he stands fearless against any threat. His one indulgence, a fondness for candies, adds a touch of whimsy to his otherwise noble and daring nature. <span className="text-body-black">(Died in 1938)</span></p>
          <p><Link className="btn btn-secondary" href="/patron">More »</Link></p>
        </div>
      </div>


      {/* <!-- START THE FEATURETTES --> */}

      <hr className="featurette-divider" />

      <div className="row featurette bg-secondary bg-opacity-10  rounded-4 shadow-lg p-3 mb-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
        <div className="col-md-7 mt-2" bis_skin_checked="1">
          <h2 className="featurette-heading fw-normal lh-1">War against Luhansk.<span className="text-body-secondary">Obvious victory.</span></h2>
          <p className="lead text-body-emphasis">In the Year of Our Lord, a great war arose between the mighty Empire of Donetsk and the beleaguered country of Luhansk. This conflict, known in the annals as the War of Ruins, raged for four years and two nights, a time of immense strife and devastation.

            The people of Luhansk, valiant yet ill-equipped, faced the might of Donetsk's advanced armaments. The warriors of Luhansk bore only spears, their technology primitive compared to the formidable laserguns wielded by the Donetsk troops. The disparity in arms weighed heavily upon the Luhansk troopers, who fought bravely but were incessantly worn down by the relentless onslaught.

            For four long years, the land of Luhansk was transformed into a landscape of desolation. Villages were razed, cities crumbled, and hope seemed a distant memory. The once-prosperous country was reduced to ruins, its people weakened and weary. The nights offered no respite, as the two additional nights of relentless conflict drained the last vestiges of their strength.

            Despite the overwhelming power of Donetsk, the war was not easily won. The Luhansk warriors fought with a desperation born of survival, their spirit unbroken even as their numbers dwindled. The battles were fierce, and the toll on both sides was heavy. Yet, the superior technology and unyielding resolve of Donetsk's forces gradually turned the tide.

            In the end, the victory of Donetsk was all but assured. The Empire's banners flew high over the conquered land, a testament to their indomitable might. However, the conflict left scars that would not easily heal. Hidden within the ruins, scattered remnants of the Luhansk people continued to resist. These pockets of defiance, though small, were a constant reminder that the spirit of Luhansk had not been entirely extinguished.

            Thus, the War of Ruins came to a close, marking a new era for the Empire of Donetsk. Their triumph, though resounding, was shadowed by the lingering presence of Luhansk’s hidden survivors. The tale of this great war would be told for generations, a somber reminder of the cost of victory and the resilience of the human spirit.</p>
        </div>
        <div className="col-md-5 mt-2 rounded-4" bis_skin_checked="1">
          {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
          <img src="/luhansk-donetsk.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-4" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette bg-secondary bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
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

      <div className="row featurette bg-secondary bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
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
      </div>

      <hr className="featurette-divider" />

      {/* <!-- /END THE FEATURETTES --> */}

    </div>
  )
}
