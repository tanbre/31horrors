 /***************************************
  ****** declare all variables here ******
  ***************************************/
  var media_mbl = window.matchMedia("(max-width: 420px)")

  var today = new Date();
  var today_local = today.toLocaleDateString();
  var date = /*today_local.substring(6,10)+'-'+today_local.substring(0,2)+'-'+*/'day_'+today_local.substring(3,5);
 /* document.getElementById("date_test").innerHTML = date;*/


  var year =                    "2020";


  var sun_day =                "&nbspSunday";
  var mon_day =                "&nbspMonday";
  var tue_day =                "&nbspTuesday";
  var wed_day =                "&nbspWednesday";
  var thu_day =                "&nbspThursday";
  var fri_day =                "&nbspFriday";
  var sat_day =                "&nbspSaturday";


  var sun_desc =                "Slasher";
  var mon_desc =                "Maniac";
  var tue_desc =                "Cult Classic";
  var wed_desc =                "Woebegone";
  var thu_desc =                "Bloodthirsty";
  var fri_desc =                "Creature Feature";
  var sat_desc =                "Supernatural";


  var film_00_title =           ""
  var film_01_title =           "Stake Land (2010)";
  var film_02_title =           "Alligator (1980)";
  var film_03_title =           "The Wailing (2016)";
  var film_04_title =           "The Hunt (2020)";
  var film_05_title =           "Joshua (2007)";
  var film_06_title =           "C.H.U.D. (1984)";
  var film_07_title =           "The Monster Squad (1987)";
  var film_08_title =           "Shadow of the Vampire (2000)";
  var film_09_title =           "The Mummy (1932)";
  var film_10_title =           "Virus (1999)";
  var film_11_title =           "Fantasy Island (2020)";
  var film_12_title =           "Goodnight Mommy (2015)";
  var film_13_title =           "Rocky Horror Picture Show (1975)";
  var film_14_title =           "The Witches of Eastwick (1987)";
  var film_15_title =           "Let the Right One In (2008)";
  var film_16_title =           "Hatchet (2006)";
  var film_17_title =           "Salem's Lot (1979)";
  var film_18_title =           "Escape Room (2019)";
  var film_19_title =           "We Need to Talk About Kevin (2011)";
  var film_20_title =           "Puppet Master (1989)";
  var film_21_title =           "Abbott and Costello Meet Frankenstein (1948)";
  var film_22_title =           "Dawn of the Dead (2004)";
  var film_23_title =           "Creep (2004)";
  var film_24_title =           "Hereditary (2018)";
  var film_25_title =           "Friday the 13th (2009)";
  var film_26_title =           "Silence of the Lambs (1991)";
  var film_27_title =           "The Pit and the Pendulum (1961)";
  var film_28_title =           "Haunted Mansion (2003)";
  var film_29_title =           "Hot Fuzz (2007)";
  var film_30_title =           "MST3K Werewolf (1998)";
  var film_31_title =           "The Grudge (2020)";


  var film_00_postr =           ""
  var film_01_postr =           "./Library/2020/Posters/film_01_postr.jpg"
  var film_02_postr =           "./Library/2020/Posters/film_02_postr.jpg"
  var film_03_postr =           "./Library/2020/Posters/film_03_postr.jpg"
  var film_04_postr =           "./Library/2020/Posters/film_04_postr.jpg"
  var film_05_postr =           "./Library/2020/Posters/film_05_postr.jpg"
  var film_06_postr =           "./Library/2020/Posters/film_06_postr.jpg"
  var film_07_postr =           "./Library/2020/Posters/film_07_postr.jpg"
  var film_08_postr =           "./Library/2020/Posters/film_08_postr.jpg"
  var film_09_postr =           "./Library/2020/Posters/film_09_postr.jpg"
  var film_10_postr =           "./Library/2020/Posters/film_10_postr.jpg"
  var film_11_postr =           "./Library/2020/Posters/film_11_postr.jpg"
  var film_12_postr =           "./Library/2020/Posters/film_12_postr.jpg"
  var film_13_postr =           "./Library/2020/Posters/film_13_postr.jpg"
  var film_14_postr =           "./Library/2020/Posters/film_14_postr.jpg"
  var film_15_postr =           "./Library/2020/Posters/film_15_postr.jpg"
  var film_16_postr =           "./Library/2020/Posters/film_16_postr.jpg"
  var film_17_postr =           "./Library/2020/Posters/film_17_postr.jpg"
  var film_18_postr =           "./Library/2020/Posters/film_18_postr.jpg"
  var film_19_postr =           "./Library/2020/Posters/film_19_postr.jpg"
  var film_20_postr =           "./Library/2020/Posters/film_20_postr.jpg"
  var film_21_postr =           "./Library/2020/Posters/film_21_postr.jpg"
  var film_22_postr =           "./Library/2020/Posters/film_22_postr.jpg"
  var film_23_postr =           "./Library/2020/Posters/film_23_postr.jpg"
  var film_24_postr =           "./Library/2020/Posters/film_24_postr.jpg"
  var film_25_postr =           "./Library/2020/Posters/film_25_postr.jpg"
  var film_26_postr =           "./Library/2020/Posters/film_26_postr.jpg"
  var film_27_postr =           "./Library/2020/Posters/film_27_postr.jpg"
  var film_28_postr =           "./Library/2020/Posters/film_28_postr.jpg"
  var film_29_postr =           "./Library/2020/Posters/film_29_postr.jpg"
  var film_30_postr =           "./Library/2020/Posters/film_30_postr.jpg"
  var film_31_postr =           "./Library/2020/Posters/film_31_postr.jpg"


  var film_00_synop =           ""
  var film_01_synop =           "In a world of vampires, an expert vampire hunter and his young protégé travel toward sanctuary.";
  var film_02_synop =           "A baby alligator is flushed down a Chicago toilet and survives by eating discarded laboratory rats injected with growth hormones. The small reptile grows gigantic, escapes the city sewers, and goes on a rampage.";
  var film_03_synop =           "Soon after a stranger arrives in a little village, a mysterious sickness starts spreading. A policeman, drawn into the incident, is forced to solve the mystery in order to save his daughter.";
  var film_04_synop =           "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.";
  var film_05_synop =           "The arrival of a newborn girl causes the gradual disintegration of the Cairn family; particularly for 9-year-old Joshua (Kogan), an eccentric boy whose proper upbringing and refined tastes both take a sinister turn.";
  var film_06_synop =           "A bizarre series of sudden disappearances on the streets of New York City seems to point toward something unsavory living in the sewers.";
  var film_07_synop =           "A young group of monster fanatics attempt to save their hometown from Count Dracula and his monsters.";
  var film_08_synop =           "The filming of Nosferatu (1922) is hampered by the fact that its star Max Schreck is taking the role of a vampire far more seriously than seems humanly possible.";
  var film_09_synop =           "An Egyptian mummy searches Cairo for the girl he thinks is his long-lost princess.";
  var film_10_synop =           "When the crew of an American tugboat boards an abandoned Russian research vessel, the alien life form aboard regards them as a virus which must be destroyed.";
  var film_11_synop =           "When the owner and operator of a luxurious island invites a collection of guests to live out their most elaborate fantasies in relative seclusion, chaos quickly descends.";
  var film_12_synop =           "Twin boys move to a new home with their mother after she has face changing cosmetic surgery, but under her bandages is someone the children don't recognize.";
  var film_13_synop =           "A newly-engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.";
  var film_14_synop =           "Three single women in a picturesque village have their wishes granted, at a cost, when a mysterious and flamboyant man arrives in their lives.";
  var film_15_synop =           "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.";
  var film_16_synop =           "When a group of tourists in a New Orleans haunted swamp tour find themselves stranded in the wilderness, their evening of fun and spooks turns into a horrific nightmare.";
  var film_17_synop =           "A novelist and a young horror fan attempt to save a small New England town which has been invaded by vampires.";
  var film_18_synop =           "Six strangers find themselves in a maze of deadly mystery rooms and must use their wits to survive.";
  var film_19_synop =           "Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.";
  var film_20_synop =           "Psychics find themselves plotted against by a former colleague, who committed suicide after discovering animated, murderous puppets.";
  var film_21_synop =           "The Wolf Man tries to warn a dimwitted porter that Dracula wants his brain for Frankenstein monster's body.";
  var film_22_synop =           "A nurse, a policeman, a young married couple, a salesman and other survivors of a worldwide plague that is producing aggressive, flesh-eating zombies, take refuge in a mega Midwestern shopping mall.";
  var film_23_synop =           "Trapped in a London subway station, a woman who's being pursued by a potential attacker heads into the unknown labyrinth of tunnels beneath the city's streets.";
  var film_24_synop =           "A grieving family is haunted by tragic and disturbing occurrences.";
  var film_25_synop =           "A group of young adults visit a boarded up campsite named Crystal Lake where they soon encounter the mysterious Jason Voorhees and his deadly intentions.";
  var film_26_synop =           "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.";
  var film_27_synop =           "In the sixteenth century, Francis Barnard travels to Spain to clarify the strange circumstances of his sister's death after she had married the son of a cruel pish Inquisitor.";
  var film_28_synop =           "A realtor and his wife and children are summoned to a mansion, which they soon discover is haunted, and while they attempt to escape, he learns an important lesson about the family he has neglected.";
  var film_29_synop =           "A skilled London police officer is transferred to a small town with a dark secret.";
  var film_30_synop =           "A Mystery Science Theater 3000 episode in which a guy turns people into werewolves for his own sick pleasure while Mike turns into a were-Crow.";
  var film_31_synop =           "A house is cursed by a vengeful ghost that dooms those who enter it with a violent death.";


  var film_00_watch =           ""
  var film_01_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime, or rent on Youtube";
  var film_02_watch =           "Available to stream for free on Youtube";
  var film_03_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime, or rent on Youtube";
  var film_04_watch =           "Available only to rent on Amazon or Youtube";
  var film_05_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime, or rent on Youtube";
  var film_06_watch =           "Available to stream for free on 123-movies.com or stream with a subscription on Amazon Prime";
  var film_07_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_08_watch =           "Available only to stream for free on 123-movies.com";
  var film_09_watch =           "Available only to rent on Amazon or Youtube";
  var film_10_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_11_watch =           "Available only to buy on Amazon or Youtube";
  var film_12_watch =           "Available only to stream on Hulu";
  var film_13_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_14_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_15_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Hulu, or rent on Youtube";
  var film_16_watch =           "Available to stream with a subscription on Amazon Prime or rent on Youtube";
  var film_17_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_18_watch =           "Available to stream for free on 123-movies.com or buy on Amazon or Youtube";
  var film_19_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime or Hulu, and available to rent Youtube";
  var film_20_watch =           "Available to stream with a subscription on HBO Max or rent on Amazon";
  var film_21_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_22_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_23_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime";
  var film_24_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime, or rent on Youtube";
  var film_25_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_26_watch =           "Available to stream for free on Youtube, stream with a subscription on Netflix, or rent on Amazon";
  var film_27_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime";
  var film_28_watch =           "Available to stream for free on 123-movies.com, stream with a subscription on Amazon Prime or Disney+, or rent on Youtube";
  var film_29_watch =           "Available to stream for free on 123-movies.com or rent on Amazon or Youtube";
  var film_30_watch =           "Available to stream for free on Youtube or rent on Amazon";
  var film_31_watch =           "Available only to buy on Amazon or Youtube";


  var drop_watch_header_text =  "Watch";
  var film_01_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_01_watchURL_01 =     "https://www.amazon.com/Stake-Land-Connor-Paolo/dp/B005FJ7DOM";
  var film_01_watchLnk_02 =     "Youtube (rent)";
  var film_01_watchURL_02 =     "https://www.youtube.com/watch?v=2SF9G_7xSpk";
  var film_01_watchLnk_03 =     "123 Movies (stream free)";
  var film_01_watchURL_03 =     "https://wv1.123-movies.com/movie/stake-land/";

  var film_02_watchLnk_01 =     "Youtube (free)";
  var film_02_watchURL_01 =     "https://www.youtube.com/watch?v=IjCu-UDC0jM";
  var film_02_watchLnk_02 =     "123 Movies (stream free)";
  var film_02_watchURL_02 =     "https://wv1.123-movies.com/movie/alligator/";
  var film_02_watchLnk_03 =     "";
  var film_02_watchURL_03 =     "";

  var film_03_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_03_watchURL_01 =     "https://www.amazon.com/Wailing-Kwak-Do-won/dp/B07BLJ5JSS";
  var film_03_watchLnk_02 =     "Youtube (rent)";
  var film_03_watchURL_02 =     "https://www.youtube.com/watch?v=Qx6ISE4t17Q";
  var film_03_watchLnk_03 =     "123 Movies (stream free)";
  var film_03_watchURL_03 =     "https://wv1.123-movies.com/movie/the-wailing/";

  var film_04_watchLnk_01 =     "Youtube (rent)";
  var film_04_watchURL_01 =     "https://www.youtube.com/watch?v=S_KW5MNz1tY";
  var film_04_watchLnk_02 =     "Amazon Prime (rent)";
  var film_04_watchURL_02 =     "https://www.amazon.com/Hunt-Ike-Barinholtz/dp/B085N6JJNW";
  var film_04_watchLnk_03 =     "";
  var film_04_watchURL_03 =     "";

  var film_05_watchLnk_01 =     "Youtube (rent)";
  var film_05_watchURL_01 =     "https://www.youtube.com/watch?v=f2dkkxUzgeQ";
  var film_05_watchLnk_02 =     "Amazon Prime (rent)";
  var film_05_watchURL_02 =     "https://www.amazon.com/Joshua-Sam-Rockwell/dp/B000ZHTIWE";
  var film_05_watchLnk_03 =     "123 Movies (stream free)";
  var film_05_watchURL_03 =     "https://wv1.123-movies.com/movie/joshua/";

  var film_06_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_06_watchURL_01 =     "https://www.amazon.com/C-H-U-D-Daniel-Stern/dp/B07X8Z3PPY";
  var film_06_watchLnk_02 =     "123 Movies (stream free)";
  var film_06_watchURL_02 =     "https://wv1.123-movies.com/movie/c-h-u-d/";
  var film_06_watchLnk_03 =     "";
  var film_06_watchURL_03 =     "";

  var film_07_watchLnk_01 =     "Youtube (rent)";
  var film_07_watchURL_01 =     "https://www.youtube.com/watch?v=H2HhEtmDfBw";
  var film_07_watchLnk_02 =     "Amazon Prime (rent)";
  var film_07_watchURL_02 =     "https://www.amazon.com/Monster-Squad-Andre-Gower/dp/B01LVTJ7JK";
  var film_07_watchLnk_03 =     "123 Movies (stream free)";
  var film_07_watchURL_03 =     "https://wv1.123-movies.com/movie/the-monster-squad/";

  var film_08_watchLnk_01 =     "123 Movies (stream free)";
  var film_08_watchURL_01 =     "https://wv1.123-movies.com/movie/shadow-of-the-vampire/";
  var film_08_watchLnk_02 =     "";
  var film_08_watchURL_02 =     "";
  var film_08_watchLnk_03 =     "";
  var film_08_watchURL_03 =     "";

  var film_09_watchLnk_01 =     "Amazon Prime (rent)";
  var film_09_watchURL_01 =     "https://www.amazon.com/Mummy-Boris-Karloff/dp/B002L5CN3E";
  var film_09_watchLnk_02 =     "Youtube (rent)";
  var film_09_watchURL_02 =     "https://www.youtube.com/watch?v=Li-ssziD5VM";
  var film_09_watchLnk_03 =     "";
  var film_09_watchURL_03 =     "";

  var film_10_watchLnk_01 =     "Amazon Prime (rent)";
  var film_10_watchURL_01 =     "https://www.amazon.com/Virus-John-Bruno/dp/B002MFV2TY";
  var film_10_watchLnk_02 =     "Youtube (rent)";
  var film_10_watchURL_02 =     "https://www.youtube.com/watch?v=ozg_AxOTjTA";
  var film_10_watchLnk_03 =     "123 Movies (stream free)";
  var film_10_watchURL_03 =     "https://wv1.123-movies.com/movie/virus/";

  var film_11_watchLnk_01 =     "Amazon Prime (buy)";
  var film_11_watchURL_01 =     "https://www.amazon.com/Blumhouses-Fantasy-Island-Maggie-Q/dp/B084NWLTBP";
  var film_11_watchLnk_02 =     "Youtube (buy)";
  var film_11_watchURL_02 =     "https://www.youtube.com/watch?v=NYwE_oafKpg";
  var film_11_watchLnk_03 =     "";
  var film_11_watchURL_03 =     "";

  var film_12_watchLnk_01 =     "Hulu (requires subscription)";
  var film_12_watchURL_01 =     "https://www.hulu.com/movie/goodnight-mommy-18c18ac0-10b1-4168-829e-2e6c356a5035";
  var film_12_watchLnk_02 =     "";
  var film_12_watchURL_02 =     "";
  var film_12_watchLnk_03 =     "";
  var film_12_watchURL_03 =     "";

  var film_13_watchLnk_01 =     "Youtube (rent)";
  var film_13_watchURL_01 =     "https://www.youtube.com/watch?v=FQVIQrlL8KM";
  var film_13_watchLnk_02 =     "Amazon Prime (rent)";
  var film_13_watchURL_02 =     "https://www.amazon.com/Rocky-Horror-Picture-Show/dp/B001HLZMUE";
  var film_13_watchLnk_03 =     "123 Movies (stream free)";
  var film_13_watchURL_03 =     "https://wv1.123-movies.com/movie/the-rocky-horror-picture-show/";

  var film_14_watchLnk_01 =     "Youtube (rent)";
  var film_14_watchURL_01 =     "https://www.youtube.com/watch?v=OCptaqisW70";
  var film_14_watchLnk_02 =     "Amazon Prime (rent)";
  var film_14_watchURL_02 =     "https://www.amazon.com/Witches-Eastwick-Jack-Nicholson/dp/B00474VCW0";
  var film_14_watchLnk_03 =     "123 Movies (stream free)";
  var film_14_watchURL_03 =     "https://wv1.123-movies.com/movie/the-witches-of-eastwick/";

  var film_15_watchLnk_01 =     "Hulu (requires subscription)";
  var film_15_watchURL_01 =     "https://www.hulu.com/movie/let-the-right-one-in-8d493c01-1d66-488b-a0b3-a0090bcf007a";
  var film_15_watchLnk_02 =     "Youtube (rent)";
  var film_15_watchURL_02 =     "https://www.youtube.com/watch?v=QQ0W-PyS4HU";
  var film_15_watchLnk_03 =     "123 Movies (stream free)";
  var film_15_watchURL_03 =     "https://wv1.123-movies.com/movie/let-the-right-one-in/watching.html";

  var film_16_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_16_watchURL_01 =     "https://www.amazon.com/Hatchet-Joel-David-Moore/dp/B07VPBCZM8";
  var film_16_watchLnk_02 =     "Youtube (rent)";
  var film_16_watchURL_02 =     "https://www.youtube.com/watch?v=HECIiwcFzOo";
  var film_16_watchLnk_03 =     "";
  var film_16_watchURL_03 =     "";

  var film_17_watchLnk_01 =     "Amazon Prime (rent)";
  var film_17_watchURL_01 =     "https://www.amazon.com/Salems-Lot-David-Soul/dp/B01LX8VB2T";
  var film_17_watchLnk_02 =     "Youtube (rent)";
  var film_17_watchURL_02 =     "https://www.youtube.com/watch?v=OwY_r4f2RuU";
  var film_17_watchLnk_03 =     "123 Movies (stream free)";
  var film_17_watchURL_03 =     "https://wv1.123-movies.com/movie/salem-s-lot/";

  var film_18_watchLnk_01 =     "Amazon Prime (buy)";
  var film_18_watchURL_01 =     "https://www.amazon.com/Escape-Room-Tyler-Labine/dp/B07MLJKR8F";
  var film_18_watchLnk_02 =     "Youtube (buy)";
  var film_18_watchURL_02 =     "https://www.youtube.com/watch?v=3Lp4KNdxsyc";
  var film_18_watchLnk_03 =     "123 Movies (stream free)";
  var film_18_watchURL_03 =     "https://wv1.123-movies.com/movie/escape-room-2/";

  var film_19_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_19_watchURL_01 =     "https://www.amazon.com/We-Need-talk-About-Kevin/dp/B009AYVNEY";
  var film_19_watchLnk_02 =     "Hulu (requires subscription)";
  var film_19_watchURL_02 =     "https://www.hulu.com/movie/we-need-to-talk-about-kevin-4c60e008-a735-42d3-8e6a-dbbd63c93a03";
  var film_19_watchLnk_03 =     "123 Movies (stream free)";
  var film_19_watchURL_03 =     "https://wv1.123-movies.com/movie/we-need-to-talk-about-kevin/";

  var film_20_watchLnk_01 =     "Amazon Prime (rent)";
  var film_20_watchURL_01 =     "https://www.amazon.com/Puppetmaster-Paul-Let-Mat/dp/B01I48KY50";
  var film_20_watchLnk_02 =     "HBO Max (requires subscription)";
  var film_20_watchURL_02 =     "https://www.hbo.com/movies/puppetmaster";
  var film_20_watchLnk_03 =     "";
  var film_20_watchURL_03 =     "";

  var film_21_watchLnk_01 =     "Amazon Prime (rent)";
  var film_21_watchURL_01 =     "https://www.amazon.com/Abbott-Costello-Meet-Frankenstein-Bud/dp/B0049B748M";
  var film_21_watchLnk_02 =     "Youtube (rent)";
  var film_21_watchURL_02 =     "https://www.youtube.com/watch?v=XUZR5y3d-hg";
  var film_21_watchLnk_03 =     "123 Movies (stream free)";
  var film_21_watchURL_03 =     "https://wv1.123-movies.com/movie/abbott-and-costello-meet-frankenstein/";

  var film_22_watchLnk_01 =     "Amazon Prime (rent)";
  var film_22_watchURL_01 =     "https://www.amazon.com/Dawn-Dead-Sarah-Polley/dp/B009CG1IAO";
  var film_22_watchLnk_02 =     "Youtube (rent)";
  var film_22_watchURL_02 =     "https://www.youtube.com/watch?v=jyB_Ypyj88I";
  var film_22_watchLnk_03 =     "123 Movies (stream free)";
  var film_22_watchURL_03 =     "https://wv1.123-movies.com/movie/dawn-of-the-dead-free101/";

  var film_23_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_23_watchURL_01 =     "https://www.amazon.com/Creep-Vas-Blackwood/dp/B07W73G7Z6";
  var film_23_watchLnk_02 =     "123 Movies (stream free)";
  var film_23_watchURL_02 =     "https://wv1.123-movies.com/movie/creep/";
  var film_23_watchLnk_03 =     "";
  var film_23_watchURL_03 =     "";

  var film_24_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_24_watchURL_01 =     "https://www.amazon.com/Hereditary-Toni-Collette/dp/B07DHYSBJ7";
  var film_24_watchLnk_02 =     "Youtube (rent)";
  var film_24_watchURL_02 =     "https://www.youtube.com/watch?v=WdWtof8lbbo";
  var film_24_watchLnk_03 =     "123 Movies (stream free)";
  var film_24_watchURL_03 =     "https://wv1.123-movies.com/movie/hereditary/";

  var film_25_watchLnk_01 =     "Amazon Prime (rent)";
  var film_25_watchURL_01 =     "https://www.amazon.com/Friday-13th-Jared-Padalecki/dp/B0091WQM0K";
  var film_25_watchLnk_02 =     "Youtube (rent)";
  var film_25_watchURL_02 =     "https://www.youtube.com/watch?v=lXU0SdLL910";
  var film_25_watchLnk_03 =     "123 Movies (stream free)";
  var film_25_watchURL_03 =     "https://wv1.123-movies.com/movie/friday-the-13th-1/";

  var film_26_watchLnk_01 =     "Amazon Prime (rent)";
  var film_26_watchURL_01 =     "https://www.amazon.com/Silence-Lambs-Jodie-Foster/dp/B002CMV1N4";
  var film_26_watchLnk_02 =     "Youtube (rent)";
  var film_26_watchURL_02 =     "https://www.youtube.com/watch?v=ayA38BR2OTE";
  var film_26_watchLnk_03 =     "123 Movies (stream free)";
  var film_26_watchURL_03 =     "https://wv1.123-movies.com/movie/the-silence-of-the-lambs/";

  var film_27_watchLnk_01 =     "Amazon Prime (requires subscription)";
  var film_27_watchURL_01 =     "https://www.amazon.com/Pit-Pendulum-Vincent-Price/dp/B081TJ1YS2";
  var film_27_watchLnk_02 =     "123 Movies (stream free)";
  var film_27_watchURL_02 =     "https://wv1.123-movies.com/movie/the-pit-and-the-pendulum/";
  var film_27_watchLnk_03 =     "";
  var film_27_watchURL_03 =     "";

  var film_28_watchLnk_01 =     "Amazon Prime (rent)";
  var film_28_watchURL_01 =     "https://www.amazon.com/Haunted-Mansion-Eddie-Murphy/dp/B0060CWAY6";
  var film_28_watchLnk_02 =     "Youtube (rent)";
  var film_28_watchURL_02 =     "https://www.youtube.com/watch?v=8cSXzM2vTd8";
  var film_28_watchLnk_03 =     "123 Movies (stream free)";
  var film_28_watchURL_03 =     "https://wv1.123-movies.com/movie/the-haunted-mansion/";

  var film_29_watchLnk_01 =     "Amazon Prime (rent)";
  var film_29_watchURL_01 =     "https://www.amazon.com/Hot-Fuzz-Simon-Pegg/dp/B009CG9YEQ";
  var film_29_watchLnk_02 =     "Youtube (rent)";
  var film_29_watchURL_02 =     "https://www.youtube.com/watch?v=IzhRR6mrH0s";
  var film_29_watchLnk_03 =     "123 Movies (stream free)";
  var film_29_watchURL_03 =     "https://wv1.123-movies.com/movie/hot-fuzz/";

  var film_30_watchLnk_01 =     "Amazon Prime (rent)";
  var film_30_watchURL_01 =     "https://www.amazon.com/Mystery-Science-Theater-3000-Werewolf/dp/B001R4175U";
  var film_30_watchLnk_02 =     "Youtube (free)";
  var film_30_watchURL_02 =     "https://www.youtube.com/watch?v=aNjki9uRZNE";
  var film_30_watchLnk_03 =     "";
  var film_30_watchURL_03 =     "";

  var film_31_watchLnk_01 =     "Amazon Prime (buy)";
  var film_31_watchURL_01 =     "https://www.amazon.com/Grudge-Demian-Bichir/dp/B0831185DS";
  var film_31_watchLnk_02 =     "Youtube (buy)";
  var film_31_watchURL_02 =     "https://www.youtube.com/watch?v=ePe6RJhRU2s";
  var film_31_watchLnk_03 =     "";
  var film_31_watchURL_03 =     "";

  /*

  var film_20_watchLnk_01 =     "";
  var film_20_watchURL_01 =     "";
  var film_20_watchLnk_02 =     "";
  var film_20_watchURL_02 =     "";
  var film_20_watchLnk_03 =     "";
  var film_20_watchURL_03 =     "";
  */


  var drop_about_header_text =  "About";
  var drop_about_a1 =           "IMDB";
  var drop_about_a2 =           "Wikipedia";
  var drop_about_a3 =           "Rotten Tomatoes";
  var film_01_aboutURL_01 =     "https://www.imdb.com/title/tt1464580/";
  var film_01_aboutURL_02 =     "https://en.wikipedia.org/wiki/Stake_Land";
  var film_01_aboutURL_03 =     "https://www.rottentomatoes.com/m/stake_land";

  var film_02_aboutURL_01 =     "https://www.imdb.com/title/tt0080354/";
  var film_02_aboutURL_02 =     "https://en.wikipedia.org/wiki/Alligator_(film)";
  var film_02_aboutURL_03 =     "https://www.rottentomatoes.com/m/alligator";

  var film_03_aboutURL_01 =     "https://www.imdb.com/title/tt5215952/";
  var film_03_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Wailing_(film)";
  var film_03_aboutURL_03 =     "https://www.rottentomatoes.com/m/the_wailing";

  var film_04_aboutURL_01 =     "https://www.imdb.com/title/tt8244784/";
  var film_04_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Hunt_(2020_film)";
  var film_04_aboutURL_03 =     "https://www.rottentomatoes.com/m/the_hunt_2020";

  var film_05_aboutURL_01 =     "https://www.imdb.com/title/tt0808331/";
  var film_05_aboutURL_02 =     "https://en.wikipedia.org/wiki/Joshua_(2007_film)";
  var film_05_aboutURL_03 =     "https://www.rottentomatoes.com/m/joshua";

  var film_06_aboutURL_01 =     "https://www.imdb.com/title/tt0087015/";
  var film_06_aboutURL_02 =     "https://en.wikipedia.org/wiki/C.H.U.D";
  var film_06_aboutURL_03 =     "https://www.rottentomatoes.com/m/chud";

  var film_07_aboutURL_01 =     "https://www.imdb.com/title/tt0093560/";
  var film_07_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Monster_Squad";
  var film_07_aboutURL_03 =     "https://www.rottentomatoes.com/m/monster_squad";

  var film_08_aboutURL_01 =     "https://www.imdb.com/title/tt0189998/";
  var film_08_aboutURL_02 =     "https://en.wikipedia.org/wiki/Shadow_of_the_Vampire";
  var film_08_aboutURL_03 =     "https://www.rottentomatoes.com/m/shadow_of_the_vampire";

  var film_09_aboutURL_01 =     "https://www.imdb.com/title/tt0023245/";
  var film_09_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Mummy_(1932_film)";
  var film_09_aboutURL_03 =     "https://www.rottentomatoes.com/m/1014370-mummy";

  var film_10_aboutURL_01 =     "https://www.imdb.com/title/tt0120458/";
  var film_10_aboutURL_02 =     "https://en.wikipedia.org/wiki/Virus_(1999_film)";
  var film_10_aboutURL_03 =     "https://www.rottentomatoes.com/m/1085867_virus";

  var film_11_aboutURL_01 =     "https://www.imdb.com/title/tt0983946/";
  var film_11_aboutURL_02 =     "https://en.wikipedia.org/wiki/Fantasy_Island_(film)";
  var film_11_aboutURL_03 =     "https://www.rottentomatoes.com/m/fantasy_island_2020";

  var film_12_aboutURL_01 =     "https://www.imdb.com/title/tt3086442/";
  var film_12_aboutURL_02 =     "https://en.wikipedia.org/wiki/Goodnight_Mommy";
  var film_12_aboutURL_03 =     "https://www.rottentomatoes.com/m/goodnight_mommy";

  var film_13_aboutURL_01 =     "https://www.imdb.com/title/tt0073629/";
  var film_13_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Rocky_Horror_Picture_Show";
  var film_13_aboutURL_03 =     "https://www.rottentomatoes.com/m/rocky_horror_picture_show";

  var film_14_aboutURL_01 =     "https://www.imdb.com/title/tt0094332/";
  var film_14_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Witches_of_Eastwick_(film)";
  var film_14_aboutURL_03 =     "https://www.rottentomatoes.com/m/witches_of_eastwick";

  var film_15_aboutURL_01 =     "https://www.imdb.com/title/tt1139797/";
  var film_15_aboutURL_02 =     "https://en.wikipedia.org/wiki/Let_the_Right_One_In_(film)";
  var film_15_aboutURL_03 =     "https://www.rottentomatoes.com/m/let_the_right_one_in";

  var film_16_aboutURL_01 =     "https://www.imdb.com/title/tt0422401/";
  var film_16_aboutURL_02 =     "https://en.wikipedia.org/wiki/Hatchet_(film)";
  var film_16_aboutURL_03 =     "https://www.rottentomatoes.com/m/hatchet";

  var film_17_aboutURL_01 =     "https://www.imdb.com/title/tt0079844/?ref_=ttls_li_tt";
  var film_17_aboutURL_02 =     "https://en.wikipedia.org/wiki/Salem%27s_Lot_(1979_miniseries)";
  var film_17_aboutURL_03 =     "https://www.rottentomatoes.com/m/salems_lot_the_movie";

  var film_18_aboutURL_01 =     "https://www.imdb.com/title/tt5886046/";
  var film_18_aboutURL_02 =     "https://en.wikipedia.org/wiki/Escape_Room_(film)";
  var film_18_aboutURL_03 =     "https://www.rottentomatoes.com/m/escape_room_2019";

  var film_19_aboutURL_01 =     "https://www.imdb.com/title/tt1242460/";
  var film_19_aboutURL_02 =     "https://en.wikipedia.org/wiki/We_Need_to_Talk_About_Kevin_(film)";
  var film_19_aboutURL_03 =     "https://www.rottentomatoes.com/m/we_need_to_talk_about_kevin";

  var film_20_aboutURL_01 =     "https://www.imdb.com/title/tt0098143/";
  var film_20_aboutURL_02 =     "https://en.wikipedia.org/wiki/Puppet_Master_(film)";
  var film_20_aboutURL_03 =     "https://www.rottentomatoes.com/m/puppet_master";

  var film_21_aboutURL_01 =     "https://www.imdb.com/title/tt0040068/";
  var film_21_aboutURL_02 =     "https://en.wikipedia.org/wiki/Abbott_and_Costello_Meet_Frankenstein";
  var film_21_aboutURL_03 =     "https://www.rottentomatoes.com/m/abbott_and_costello";

  var film_22_aboutURL_01 =     "https://www.imdb.com/title/tt0363547/";
  var film_22_aboutURL_02 =     "https://en.wikipedia.org/wiki/Dawn_of_the_Dead_(2004_film)";
  var film_22_aboutURL_03 =     "https://www.rottentomatoes.com/m/dawn_of_the_dead";

  var film_23_aboutURL_01 =     "https://www.imdb.com/title/tt0381966/";
  var film_23_aboutURL_02 =     "https://en.wikipedia.org/wiki/Creep_(2004_film)";
  var film_23_aboutURL_03 =     "https://www.rottentomatoes.com/m/1153339_creep";

  var film_24_aboutURL_01 =     "https://www.imdb.com/title/tt7784604/";
  var film_24_aboutURL_02 =     "https://en.wikipedia.org/wiki/Hereditary_(film)";
  var film_24_aboutURL_03 =     "https://www.rottentomatoes.com/m/hereditary";

  var film_25_aboutURL_01 =     "https://www.imdb.com/title/tt0758746/";
  var film_25_aboutURL_02 =     "https://en.wikipedia.org/wiki/Friday_the_13th_(2009_film)";
  var film_25_aboutURL_03 =     "https://www.rottentomatoes.com/m/friday_the_13th_prequel";

  var film_26_aboutURL_01 =     "https://www.imdb.com/title/tt0102926/";
  var film_26_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Silence_of_the_Lambs_(film)";
  var film_26_aboutURL_03 =     "https://www.rottentomatoes.com/m/silence_of_the_lambs";

  var film_27_aboutURL_01 =     "https://www.imdb.com/title/tt0055304/";
  var film_27_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Pit_and_the_Pendulum_(1961_film)";
  var film_27_aboutURL_03 =     "https://www.rottentomatoes.com/m/1016369-pit_and_the_pendulum";

  var film_28_aboutURL_01 =     "https://www.imdb.com/title/tt0338094/";
  var film_28_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Haunted_Mansion_(film)";
  var film_28_aboutURL_03 =     "https://www.rottentomatoes.com/m/haunted_mansion";

  var film_29_aboutURL_01 =     "https://www.imdb.com/title/tt0425112/";
  var film_29_aboutURL_02 =     "https://en.wikipedia.org/wiki/Hot_Fuzz";
  var film_29_aboutURL_03 =     "https://www.rottentomatoes.com/m/hot_fuzz";

  var film_30_aboutURL_01 =     "https://www.imdb.com/title/tt0655480/";
  var film_30_aboutURL_02 =     "https://en.wikipedia.org/wiki/Mystery_Science_Theater_3000";
  var film_30_aboutURL_03 =     "https://www.rottentomatoes.com/tv/mystery_science_theater_3000_1989";

  var film_31_aboutURL_01 =     "https://www.imdb.com/title/tt3612126/";
  var film_31_aboutURL_02 =     "https://en.wikipedia.org/wiki/The_Grudge_(2020_film)";
  var film_31_aboutURL_03 =     "https://www.rottentomatoes.com/m/the_grudge_2020";

  /*

  var film_20_aboutURL_01 =     "";
  var film_20_aboutURL_02 =     "";
  var film_20_aboutURL_03 =     "";
  */

  /***************************************
  **** assign variable to movies here ****
  ***************************************/
  document.getElementById("content_my_txt_year").innerHTML = year;


  document.getElementById("sun_desc").innerHTML = sun_desc;
  document.getElementById("mon_desc").innerHTML = mon_desc;
  document.getElementById("tue_desc").innerHTML = tue_desc;
  document.getElementById("wed_desc").innerHTML = wed_desc;
  document.getElementById("thu_desc").innerHTML = thu_desc;
  document.getElementById("fri_desc").innerHTML = fri_desc;
  document.getElementById("sat_desc").innerHTML = sat_desc;


  document.getElementById("cal_cellXr02c01_button").classList.add("hidden_element");
  document.getElementById("cal_cellXr02c02_button").classList.add("hidden_element");
  document.getElementById("cal_cellXr02c03_button").classList.add("hidden_element");
  document.getElementById("cal_cellXr02c04_button").classList.add("hidden_element");


  document.getElementById("cal_rowXr07").classList.add("hidden_element");


  document.getElementById("cal_cellXr02c01_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c02_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c03_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c04_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c05_button_div_dayMnth").innerHTML = '1';
  document.getElementById("cal_cellXr02c06_button_div_dayMnth").innerHTML = '2';
  document.getElementById("cal_cellXr02c07_button_div_dayMnth").innerHTML = '3';
  document.getElementById("cal_cellXr03c01_button_div_dayMnth").innerHTML = '4';
  document.getElementById("cal_cellXr03c02_button_div_dayMnth").innerHTML = '5';
  document.getElementById("cal_cellXr03c03_button_div_dayMnth").innerHTML = '6';
  document.getElementById("cal_cellXr03c04_button_div_dayMnth").innerHTML = '7';
  document.getElementById("cal_cellXr03c05_button_div_dayMnth").innerHTML = '8';
  document.getElementById("cal_cellXr03c06_button_div_dayMnth").innerHTML = '9';
  document.getElementById("cal_cellXr03c07_button_div_dayMnth").innerHTML = '10';
  document.getElementById("cal_cellXr04c01_button_div_dayMnth").innerHTML = '11';
  document.getElementById("cal_cellXr04c02_button_div_dayMnth").innerHTML = '12';
  document.getElementById("cal_cellXr04c03_button_div_dayMnth").innerHTML = '13';
  document.getElementById("cal_cellXr04c04_button_div_dayMnth").innerHTML = '14';
  document.getElementById("cal_cellXr04c05_button_div_dayMnth").innerHTML = '15';
  document.getElementById("cal_cellXr04c06_button_div_dayMnth").innerHTML = '16';
  document.getElementById("cal_cellXr04c07_button_div_dayMnth").innerHTML = '17';
  document.getElementById("cal_cellXr05c01_button_div_dayMnth").innerHTML = '18';
  document.getElementById("cal_cellXr05c02_button_div_dayMnth").innerHTML = '19';
  document.getElementById("cal_cellXr05c03_button_div_dayMnth").innerHTML = '20';
  document.getElementById("cal_cellXr05c04_button_div_dayMnth").innerHTML = '21';
  document.getElementById("cal_cellXr05c05_button_div_dayMnth").innerHTML = '22';
  document.getElementById("cal_cellXr05c06_button_div_dayMnth").innerHTML = '23';
  document.getElementById("cal_cellXr05c07_button_div_dayMnth").innerHTML = '24';
  document.getElementById("cal_cellXr06c01_button_div_dayMnth").innerHTML = '25';
  document.getElementById("cal_cellXr06c02_button_div_dayMnth").innerHTML = '26';
  document.getElementById("cal_cellXr06c03_button_div_dayMnth").innerHTML = '27';
  document.getElementById("cal_cellXr06c04_button_div_dayMnth").innerHTML = '28';
  document.getElementById("cal_cellXr06c05_button_div_dayMnth").innerHTML = '29';
  document.getElementById("cal_cellXr06c06_button_div_dayMnth").innerHTML = '30';
  document.getElementById("cal_cellXr06c07_button_div_dayMnth").innerHTML = '31';
  document.getElementById("cal_cellXr07c01_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c02_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c03_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c04_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c05_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c06_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c07_button_div_dayMnth").innerHTML = '0';


  document.getElementById("cal_cellXr02c01_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c02_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c03_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c04_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c05_button").classList.add("day_01");
  document.getElementById("cal_cellXr02c06_button").classList.add("day_02");
  document.getElementById("cal_cellXr02c07_button").classList.add("day_03");
  document.getElementById("cal_cellXr03c01_button").classList.add("day_04");
  document.getElementById("cal_cellXr03c02_button").classList.add("day_05");
  document.getElementById("cal_cellXr03c03_button").classList.add("day_06");
  document.getElementById("cal_cellXr03c04_button").classList.add("day_07");
  document.getElementById("cal_cellXr03c05_button").classList.add("day_08");
  document.getElementById("cal_cellXr03c06_button").classList.add("day_09");
  document.getElementById("cal_cellXr03c07_button").classList.add("day_10");
  document.getElementById("cal_cellXr04c01_button").classList.add("day_11");
  document.getElementById("cal_cellXr04c02_button").classList.add("day_12");
  document.getElementById("cal_cellXr04c03_button").classList.add("day_13");
  document.getElementById("cal_cellXr04c04_button").classList.add("day_14");
  document.getElementById("cal_cellXr04c05_button").classList.add("day_15");
  document.getElementById("cal_cellXr04c06_button").classList.add("day_16");
  document.getElementById("cal_cellXr04c07_button").classList.add("day_17");
  document.getElementById("cal_cellXr05c01_button").classList.add("day_18");
  document.getElementById("cal_cellXr05c02_button").classList.add("day_19");
  document.getElementById("cal_cellXr05c03_button").classList.add("day_20");
  document.getElementById("cal_cellXr05c04_button").classList.add("day_21");
  document.getElementById("cal_cellXr05c05_button").classList.add("day_22");
  document.getElementById("cal_cellXr05c06_button").classList.add("day_23");
  document.getElementById("cal_cellXr05c07_button").classList.add("day_24");
  document.getElementById("cal_cellXr06c01_button").classList.add("day_25");
  document.getElementById("cal_cellXr06c02_button").classList.add("day_26");
  document.getElementById("cal_cellXr06c03_button").classList.add("day_27");
  document.getElementById("cal_cellXr06c04_button").classList.add("day_28");
  document.getElementById("cal_cellXr06c05_button").classList.add("day_29");
  document.getElementById("cal_cellXr06c06_button").classList.add("day_30");
  document.getElementById("cal_cellXr06c07_button").classList.add("day_31");
  document.getElementById("cal_cellXr07c01_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c02_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c03_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c04_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c05_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c06_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c07_button").classList.add("day_00");


  document.getElementById("cal_cellXr02c01_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c02_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c03_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c04_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c05_button_div_title").innerHTML = film_01_title;
  document.getElementById("cal_cellXr02c06_button_div_title").innerHTML = film_02_title;
  document.getElementById("cal_cellXr02c07_button_div_title").innerHTML = film_03_title;
  document.getElementById("cal_cellXr03c01_button_div_title").innerHTML = film_04_title;
  document.getElementById("cal_cellXr03c02_button_div_title").innerHTML = film_05_title;
  document.getElementById("cal_cellXr03c03_button_div_title").innerHTML = film_06_title;
  document.getElementById("cal_cellXr03c04_button_div_title").innerHTML = film_07_title;
  document.getElementById("cal_cellXr03c05_button_div_title").innerHTML = film_08_title;
  document.getElementById("cal_cellXr03c06_button_div_title").innerHTML = film_09_title;
  document.getElementById("cal_cellXr03c07_button_div_title").innerHTML = film_10_title;
  document.getElementById("cal_cellXr04c01_button_div_title").innerHTML = film_11_title;
  document.getElementById("cal_cellXr04c02_button_div_title").innerHTML = film_12_title;
  document.getElementById("cal_cellXr04c03_button_div_title").innerHTML = film_13_title;
  document.getElementById("cal_cellXr04c04_button_div_title").innerHTML = film_14_title;
  document.getElementById("cal_cellXr04c05_button_div_title").innerHTML = film_15_title;
  document.getElementById("cal_cellXr04c06_button_div_title").innerHTML = film_16_title;
  document.getElementById("cal_cellXr04c07_button_div_title").innerHTML = film_17_title;
  document.getElementById("cal_cellXr05c01_button_div_title").innerHTML = film_18_title;
  document.getElementById("cal_cellXr05c02_button_div_title").innerHTML = film_19_title;
  document.getElementById("cal_cellXr05c03_button_div_title").innerHTML = film_20_title;
  document.getElementById("cal_cellXr05c04_button_div_title").innerHTML = film_21_title;
  document.getElementById("cal_cellXr05c05_button_div_title").innerHTML = film_22_title;
  document.getElementById("cal_cellXr05c06_button_div_title").innerHTML = film_23_title;
  document.getElementById("cal_cellXr05c07_button_div_title").innerHTML = film_24_title;
  document.getElementById("cal_cellXr06c01_button_div_title").innerHTML = film_25_title;
  document.getElementById("cal_cellXr06c02_button_div_title").innerHTML = film_26_title;
  document.getElementById("cal_cellXr06c03_button_div_title").innerHTML = film_27_title;
  document.getElementById("cal_cellXr06c04_button_div_title").innerHTML = film_28_title;
  document.getElementById("cal_cellXr06c05_button_div_title").innerHTML = film_29_title;
  document.getElementById("cal_cellXr06c06_button_div_title").innerHTML = film_30_title;
  document.getElementById("cal_cellXr06c07_button_div_title").innerHTML = film_31_title;
  document.getElementById("cal_cellXr07c01_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c02_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c03_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c04_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c05_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c06_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c07_button_div_title").innerHTML = film_00_title;


  document.getElementById("cal_dropXr02c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr02c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr02c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr02c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr02c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr02c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr02c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr03c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr03c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr03c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr03c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr03c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr03c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr03c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr04c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr04c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr04c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr04c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr04c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr04c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr04c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr05c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr05c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr05c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr05c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr05c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr05c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr05c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr06c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr06c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr06c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr06c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr06c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr06c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr06c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr07c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr07c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr07c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr07c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr07c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr07c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr07c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;


  document.getElementById("cal_dropXr02c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr02c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr02c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr02c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr02c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr02c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr02c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr03c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr03c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr03c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr03c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr03c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr03c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr03c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr04c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr04c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr04c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr04c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr04c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr04c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr04c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr05c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr05c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr05c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr05c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr05c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr05c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr05c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr06c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr06c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr06c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr06c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr06c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr06c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr06c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr07c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr07c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr07c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr07c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr07c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr07c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr07c07_divXmeta_NS_dayWeek").innerHTML = sat_day;


  document.getElementById("cal_dropXr02c01_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c02_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c03_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c04_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c05_divXmeta_title").innerHTML = film_01_title;
  document.getElementById("cal_dropXr02c06_divXmeta_title").innerHTML = film_02_title;
  document.getElementById("cal_dropXr02c07_divXmeta_title").innerHTML = film_03_title;
  document.getElementById("cal_dropXr03c01_divXmeta_title").innerHTML = film_04_title;
  document.getElementById("cal_dropXr03c02_divXmeta_title").innerHTML = film_05_title;
  document.getElementById("cal_dropXr03c03_divXmeta_title").innerHTML = film_06_title;
  document.getElementById("cal_dropXr03c04_divXmeta_title").innerHTML = film_07_title;
  document.getElementById("cal_dropXr03c05_divXmeta_title").innerHTML = film_08_title;
  document.getElementById("cal_dropXr03c06_divXmeta_title").innerHTML = film_09_title;
  document.getElementById("cal_dropXr03c07_divXmeta_title").innerHTML = film_10_title;
  document.getElementById("cal_dropXr04c01_divXmeta_title").innerHTML = film_11_title;
  document.getElementById("cal_dropXr04c02_divXmeta_title").innerHTML = film_12_title;
  document.getElementById("cal_dropXr04c03_divXmeta_title").innerHTML = film_13_title;
  document.getElementById("cal_dropXr04c04_divXmeta_title").innerHTML = film_14_title;
  document.getElementById("cal_dropXr04c05_divXmeta_title").innerHTML = film_15_title;
  document.getElementById("cal_dropXr04c06_divXmeta_title").innerHTML = film_16_title;
  document.getElementById("cal_dropXr04c07_divXmeta_title").innerHTML = film_17_title;
  document.getElementById("cal_dropXr05c01_divXmeta_title").innerHTML = film_18_title;
  document.getElementById("cal_dropXr05c02_divXmeta_title").innerHTML = film_19_title;
  document.getElementById("cal_dropXr05c03_divXmeta_title").innerHTML = film_20_title;
  document.getElementById("cal_dropXr05c04_divXmeta_title").innerHTML = film_21_title;
  document.getElementById("cal_dropXr05c05_divXmeta_title").innerHTML = film_22_title;
  document.getElementById("cal_dropXr05c06_divXmeta_title").innerHTML = film_23_title;
  document.getElementById("cal_dropXr05c07_divXmeta_title").innerHTML = film_24_title;
  document.getElementById("cal_dropXr06c01_divXmeta_title").innerHTML = film_25_title;
  document.getElementById("cal_dropXr06c02_divXmeta_title").innerHTML = film_26_title;
  document.getElementById("cal_dropXr06c03_divXmeta_title").innerHTML = film_27_title;
  document.getElementById("cal_dropXr06c04_divXmeta_title").innerHTML = film_28_title;
  document.getElementById("cal_dropXr06c05_divXmeta_title").innerHTML = film_29_title;
  document.getElementById("cal_dropXr06c06_divXmeta_title").innerHTML = film_30_title;
  document.getElementById("cal_dropXr06c07_divXmeta_title").innerHTML = film_31_title;
  document.getElementById("cal_dropXr07c01_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c02_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c03_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c04_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c05_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c06_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c07_divXmeta_title").innerHTML = film_00_title;


  document.getElementById("cal_dropXr02c01_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c02_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c03_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c04_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c05_divXpostr_img").src = film_01_postr;
  document.getElementById("cal_dropXr02c06_divXpostr_img").src = film_02_postr;
  document.getElementById("cal_dropXr02c07_divXpostr_img").src = film_03_postr;
  document.getElementById("cal_dropXr03c01_divXpostr_img").src = film_04_postr;
  document.getElementById("cal_dropXr03c02_divXpostr_img").src = film_05_postr;
  document.getElementById("cal_dropXr03c03_divXpostr_img").src = film_06_postr;
  document.getElementById("cal_dropXr03c04_divXpostr_img").src = film_07_postr;
  document.getElementById("cal_dropXr03c05_divXpostr_img").src = film_08_postr;
  document.getElementById("cal_dropXr03c06_divXpostr_img").src = film_09_postr;
  document.getElementById("cal_dropXr03c07_divXpostr_img").src = film_10_postr;
  document.getElementById("cal_dropXr04c01_divXpostr_img").src = film_11_postr;
  document.getElementById("cal_dropXr04c02_divXpostr_img").src = film_12_postr;
  document.getElementById("cal_dropXr04c03_divXpostr_img").src = film_13_postr;
  document.getElementById("cal_dropXr04c04_divXpostr_img").src = film_14_postr;
  document.getElementById("cal_dropXr04c05_divXpostr_img").src = film_15_postr;
  document.getElementById("cal_dropXr04c06_divXpostr_img").src = film_16_postr;
  document.getElementById("cal_dropXr04c07_divXpostr_img").src = film_17_postr;
  document.getElementById("cal_dropXr05c01_divXpostr_img").src = film_18_postr;
  document.getElementById("cal_dropXr05c02_divXpostr_img").src = film_19_postr;
  document.getElementById("cal_dropXr05c03_divXpostr_img").src = film_20_postr;
  document.getElementById("cal_dropXr05c04_divXpostr_img").src = film_21_postr;
  document.getElementById("cal_dropXr05c05_divXpostr_img").src = film_22_postr;
  document.getElementById("cal_dropXr05c06_divXpostr_img").src = film_23_postr;
  document.getElementById("cal_dropXr05c07_divXpostr_img").src = film_24_postr;
  document.getElementById("cal_dropXr06c01_divXpostr_img").src = film_25_postr;
  document.getElementById("cal_dropXr06c02_divXpostr_img").src = film_26_postr;
  document.getElementById("cal_dropXr06c03_divXpostr_img").src = film_27_postr;
  document.getElementById("cal_dropXr06c04_divXpostr_img").src = film_28_postr;
  document.getElementById("cal_dropXr06c05_divXpostr_img").src = film_29_postr;
  document.getElementById("cal_dropXr06c06_divXpostr_img").src = film_30_postr;
  document.getElementById("cal_dropXr06c07_divXpostr_img").src = film_31_postr;
  document.getElementById("cal_dropXr07c01_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c02_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c03_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c04_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c05_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c06_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c07_divXpostr_img").src = film_00_postr;


  document.getElementById("cal_dropXr02c01_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c02_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c03_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c04_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c05_divXsynop_txt").innerHTML = film_01_synop;
  document.getElementById("cal_dropXr02c06_divXsynop_txt").innerHTML = film_02_synop;
  document.getElementById("cal_dropXr02c07_divXsynop_txt").innerHTML = film_03_synop;
  document.getElementById("cal_dropXr03c01_divXsynop_txt").innerHTML = film_04_synop;
  document.getElementById("cal_dropXr03c02_divXsynop_txt").innerHTML = film_05_synop;
  document.getElementById("cal_dropXr03c03_divXsynop_txt").innerHTML = film_06_synop;
  document.getElementById("cal_dropXr03c04_divXsynop_txt").innerHTML = film_07_synop;
  document.getElementById("cal_dropXr03c05_divXsynop_txt").innerHTML = film_08_synop;
  document.getElementById("cal_dropXr03c06_divXsynop_txt").innerHTML = film_09_synop;
  document.getElementById("cal_dropXr03c07_divXsynop_txt").innerHTML = film_10_synop;
  document.getElementById("cal_dropXr04c01_divXsynop_txt").innerHTML = film_11_synop;
  document.getElementById("cal_dropXr04c02_divXsynop_txt").innerHTML = film_12_synop;
  document.getElementById("cal_dropXr04c03_divXsynop_txt").innerHTML = film_13_synop;
  document.getElementById("cal_dropXr04c04_divXsynop_txt").innerHTML = film_14_synop;
  document.getElementById("cal_dropXr04c05_divXsynop_txt").innerHTML = film_15_synop;
  document.getElementById("cal_dropXr04c06_divXsynop_txt").innerHTML = film_16_synop;
  document.getElementById("cal_dropXr04c07_divXsynop_txt").innerHTML = film_17_synop;
  document.getElementById("cal_dropXr05c01_divXsynop_txt").innerHTML = film_18_synop;
  document.getElementById("cal_dropXr05c02_divXsynop_txt").innerHTML = film_19_synop;
  document.getElementById("cal_dropXr05c03_divXsynop_txt").innerHTML = film_20_synop;
  document.getElementById("cal_dropXr05c04_divXsynop_txt").innerHTML = film_21_synop;
  document.getElementById("cal_dropXr05c05_divXsynop_txt").innerHTML = film_22_synop;
  document.getElementById("cal_dropXr05c06_divXsynop_txt").innerHTML = film_23_synop;
  document.getElementById("cal_dropXr05c07_divXsynop_txt").innerHTML = film_24_synop;
  document.getElementById("cal_dropXr06c01_divXsynop_txt").innerHTML = film_25_synop;
  document.getElementById("cal_dropXr06c02_divXsynop_txt").innerHTML = film_26_synop;
  document.getElementById("cal_dropXr06c03_divXsynop_txt").innerHTML = film_27_synop;
  document.getElementById("cal_dropXr06c04_divXsynop_txt").innerHTML = film_28_synop;
  document.getElementById("cal_dropXr06c05_divXsynop_txt").innerHTML = film_29_synop;
  document.getElementById("cal_dropXr06c06_divXsynop_txt").innerHTML = film_30_synop;
  document.getElementById("cal_dropXr06c07_divXsynop_txt").innerHTML = film_31_synop;
  document.getElementById("cal_dropXr07c01_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c02_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c03_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c04_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c05_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c06_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c07_divXsynop_txt").innerHTML = film_00_synop;


  document.getElementById("cal_dropXr02c05_watch_aX01").innerHTML =  film_01_watchLnk_01;
  document.getElementById("cal_dropXr02c05_watch_aX02").innerHTML =  film_01_watchLnk_02;
  document.getElementById("cal_dropXr02c05_watch_aX03").innerHTML =  film_01_watchLnk_03;
  var cal_dropXr02c05_watchURL_01 =                                  film_01_watchURL_01;
  var cal_dropXr02c05_watchURL_02 =                                  film_01_watchURL_02;
  var cal_dropXr02c05_watchURL_03 =                                  film_01_watchURL_03;
  document.getElementById("cal_dropXr02c06_watch_aX01").innerHTML =  film_02_watchLnk_01;
  document.getElementById("cal_dropXr02c06_watch_aX02").innerHTML =  film_02_watchLnk_02;
  document.getElementById("cal_dropXr02c06_watch_aX03").innerHTML =  film_02_watchLnk_03;
  var cal_dropXr02c06_watchURL_01 =                                  film_02_watchURL_01;
  var cal_dropXr02c06_watchURL_02 =                                  film_02_watchURL_02;
  var cal_dropXr02c06_watchURL_03 =                                  film_02_watchURL_03;
  document.getElementById("cal_dropXr02c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr02c07_watch_aX01").innerHTML =  film_03_watchLnk_01;
  document.getElementById("cal_dropXr02c07_watch_aX02").innerHTML =  film_03_watchLnk_02;
  document.getElementById("cal_dropXr02c07_watch_aX03").innerHTML =  film_03_watchLnk_03;
  var cal_dropXr02c07_watchURL_01 =                                  film_03_watchURL_01;
  var cal_dropXr02c07_watchURL_02 =                                  film_03_watchURL_02;
  var cal_dropXr02c07_watchURL_03 =                                  film_03_watchURL_03;
  document.getElementById("cal_dropXr03c01_watch_aX01").innerHTML =  film_04_watchLnk_01;
  document.getElementById("cal_dropXr03c01_watch_aX02").innerHTML =  film_04_watchLnk_02;
  document.getElementById("cal_dropXr03c01_watch_aX03").innerHTML =  film_04_watchLnk_03;
  var cal_dropXr03c01_watchURL_01 =                                  film_04_watchURL_01;
  var cal_dropXr03c01_watchURL_02 =                                  film_04_watchURL_02;
  var cal_dropXr03c01_watchURL_03 =                                  film_04_watchURL_03;
  document.getElementById("cal_dropXr03c01_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c02_watch_aX01").innerHTML =  film_05_watchLnk_01;
  document.getElementById("cal_dropXr03c02_watch_aX02").innerHTML =  film_05_watchLnk_02;
  document.getElementById("cal_dropXr03c02_watch_aX03").innerHTML =  film_05_watchLnk_03;
  var cal_dropXr03c02_watchURL_01 =                                  film_05_watchURL_01;
  var cal_dropXr03c02_watchURL_02 =                                  film_05_watchURL_02;
  var cal_dropXr03c02_watchURL_03 =                                  film_05_watchURL_03;
  document.getElementById("cal_dropXr03c03_watch_aX01").innerHTML =  film_06_watchLnk_01;
  document.getElementById("cal_dropXr03c03_watch_aX02").innerHTML =  film_06_watchLnk_02;
  document.getElementById("cal_dropXr03c03_watch_aX03").innerHTML =  film_06_watchLnk_03;
  var cal_dropXr03c03_watchURL_01 =                                  film_06_watchURL_01;
  var cal_dropXr03c03_watchURL_02 =                                  film_06_watchURL_02;
  var cal_dropXr03c03_watchURL_03 =                                  film_06_watchURL_03;
  document.getElementById("cal_dropXr03c03_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c04_watch_aX01").innerHTML =  film_07_watchLnk_01;
  document.getElementById("cal_dropXr03c04_watch_aX02").innerHTML =  film_07_watchLnk_02;
  document.getElementById("cal_dropXr03c04_watch_aX03").innerHTML =  film_07_watchLnk_03;
  var cal_dropXr03c04_watchURL_01 =                                  film_07_watchURL_01;
  var cal_dropXr03c04_watchURL_02 =                                  film_07_watchURL_02;
  var cal_dropXr03c04_watchURL_03 =                                  film_07_watchURL_03;
  document.getElementById("cal_dropXr03c05_watch_aX01").innerHTML =  film_08_watchLnk_01;
  document.getElementById("cal_dropXr03c05_watch_aX02").innerHTML =  film_08_watchLnk_02;
  document.getElementById("cal_dropXr03c05_watch_aX03").innerHTML =  film_08_watchLnk_03;
  var cal_dropXr03c05_watchURL_01 =                                  film_08_watchURL_01;
  var cal_dropXr03c05_watchURL_02 =                                  film_08_watchURL_02;
  var cal_dropXr03c05_watchURL_03 =                                  film_08_watchURL_03;
  document.getElementById("cal_dropXr03c05_watch_liX02").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c05_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c06_watch_aX01").innerHTML =  film_09_watchLnk_01;
  document.getElementById("cal_dropXr03c06_watch_aX02").innerHTML =  film_09_watchLnk_02;
  document.getElementById("cal_dropXr03c06_watch_aX03").innerHTML =  film_09_watchLnk_03;
  var cal_dropXr03c06_watchURL_01 =                                  film_09_watchURL_01;
  var cal_dropXr03c06_watchURL_02 =                                  film_09_watchURL_02;
  var cal_dropXr03c06_watchURL_03 =                                  film_09_watchURL_03;
  document.getElementById("cal_dropXr03c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c07_watch_aX01").innerHTML =  film_10_watchLnk_01;
  document.getElementById("cal_dropXr03c07_watch_aX02").innerHTML =  film_10_watchLnk_02;
  document.getElementById("cal_dropXr03c07_watch_aX03").innerHTML =  film_10_watchLnk_03;
  var cal_dropXr03c07_watchURL_01 =                                  film_10_watchURL_01;
  var cal_dropXr03c07_watchURL_02 =                                  film_10_watchURL_02;
  var cal_dropXr03c07_watchURL_03 =                                  film_10_watchURL_03;
  document.getElementById("cal_dropXr04c01_watch_aX01").innerHTML =  film_11_watchLnk_01;
  document.getElementById("cal_dropXr04c01_watch_aX02").innerHTML =  film_11_watchLnk_02;
  document.getElementById("cal_dropXr04c01_watch_aX03").innerHTML =  film_11_watchLnk_03;
  var cal_dropXr04c01_watchURL_01 =                                  film_11_watchURL_01;
  var cal_dropXr04c01_watchURL_02 =                                  film_11_watchURL_02;
  var cal_dropXr04c01_watchURL_03 =                                  film_11_watchURL_03;
  document.getElementById("cal_dropXr04c01_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c02_watch_aX01").innerHTML =  film_12_watchLnk_01;
  document.getElementById("cal_dropXr04c02_watch_aX02").innerHTML =  film_12_watchLnk_02;
  document.getElementById("cal_dropXr04c02_watch_aX03").innerHTML =  film_12_watchLnk_03;
  var cal_dropXr04c02_watchURL_01 =                                  film_12_watchURL_01;
  var cal_dropXr04c02_watchURL_02 =                                  film_12_watchURL_02;
  var cal_dropXr04c02_watchURL_03 =                                  film_12_watchURL_03;
  document.getElementById("cal_dropXr04c02_watch_liX02").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c02_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c03_watch_aX01").innerHTML =  film_13_watchLnk_01;
  document.getElementById("cal_dropXr04c03_watch_aX02").innerHTML =  film_13_watchLnk_02;
  document.getElementById("cal_dropXr04c03_watch_aX03").innerHTML =  film_13_watchLnk_03;
  var cal_dropXr04c03_watchURL_01 =                                  film_13_watchURL_01;
  var cal_dropXr04c03_watchURL_02 =                                  film_13_watchURL_02;
  var cal_dropXr04c03_watchURL_03 =                                  film_13_watchURL_03;
  document.getElementById("cal_dropXr04c04_watch_aX01").innerHTML =  film_14_watchLnk_01;
  document.getElementById("cal_dropXr04c04_watch_aX02").innerHTML =  film_14_watchLnk_02;
  document.getElementById("cal_dropXr04c04_watch_aX03").innerHTML =  film_14_watchLnk_03;
  var cal_dropXr04c04_watchURL_01 =                                  film_14_watchURL_01;
  var cal_dropXr04c04_watchURL_02 =                                  film_14_watchURL_02;
  var cal_dropXr04c04_watchURL_03 =                                  film_14_watchURL_03;
  document.getElementById("cal_dropXr04c05_watch_aX01").innerHTML =  film_15_watchLnk_01;
  document.getElementById("cal_dropXr04c05_watch_aX02").innerHTML =  film_15_watchLnk_02;
  document.getElementById("cal_dropXr04c05_watch_aX03").innerHTML =  film_15_watchLnk_03;
  var cal_dropXr04c05_watchURL_01 =                                  film_15_watchURL_01;
  var cal_dropXr04c05_watchURL_02 =                                  film_15_watchURL_02;
  var cal_dropXr04c05_watchURL_03 =                                  film_15_watchURL_03;
  document.getElementById("cal_dropXr04c06_watch_aX01").innerHTML =  film_16_watchLnk_01;
  document.getElementById("cal_dropXr04c06_watch_aX02").innerHTML =  film_16_watchLnk_02;
  document.getElementById("cal_dropXr04c06_watch_aX03").innerHTML =  film_16_watchLnk_03;
  var cal_dropXr04c06_watchURL_01 =                                  film_16_watchURL_01;
  var cal_dropXr04c06_watchURL_02 =                                  film_16_watchURL_02;
  var cal_dropXr04c06_watchURL_03 =                                  film_16_watchURL_03;
  document.getElementById("cal_dropXr04c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c07_watch_aX01").innerHTML =  film_17_watchLnk_01;
  document.getElementById("cal_dropXr04c07_watch_aX02").innerHTML =  film_17_watchLnk_02;
  document.getElementById("cal_dropXr04c07_watch_aX03").innerHTML =  film_17_watchLnk_03;
  var cal_dropXr04c07_watchURL_01 =                                  film_17_watchURL_01;
  var cal_dropXr04c07_watchURL_02 =                                  film_17_watchURL_02;
  var cal_dropXr04c07_watchURL_03 =                                  film_17_watchURL_03;
  document.getElementById("cal_dropXr05c01_watch_aX01").innerHTML =  film_18_watchLnk_01;
  document.getElementById("cal_dropXr05c01_watch_aX02").innerHTML =  film_18_watchLnk_02;
  document.getElementById("cal_dropXr05c01_watch_aX03").innerHTML =  film_18_watchLnk_03;
  var cal_dropXr05c01_watchURL_01 =                                  film_18_watchURL_01;
  var cal_dropXr05c01_watchURL_02 =                                  film_18_watchURL_02;
  var cal_dropXr05c01_watchURL_03 =                                  film_18_watchURL_03;
  document.getElementById("cal_dropXr05c02_watch_aX01").innerHTML =  film_19_watchLnk_01;
  document.getElementById("cal_dropXr05c02_watch_aX02").innerHTML =  film_19_watchLnk_02;
  document.getElementById("cal_dropXr05c02_watch_aX03").innerHTML =  film_19_watchLnk_03;
  var cal_dropXr05c02_watchURL_01 =                                  film_19_watchURL_01;
  var cal_dropXr05c02_watchURL_02 =                                  film_19_watchURL_02;
  var cal_dropXr05c02_watchURL_03 =                                  film_19_watchURL_03;
  document.getElementById("cal_dropXr05c03_watch_aX01").innerHTML =  film_20_watchLnk_01;
  document.getElementById("cal_dropXr05c03_watch_aX02").innerHTML =  film_20_watchLnk_02;
  document.getElementById("cal_dropXr05c03_watch_aX03").innerHTML =  film_20_watchLnk_03;
  var cal_dropXr05c03_watchURL_01 =                                  film_20_watchURL_01;
  var cal_dropXr05c03_watchURL_02 =                                  film_20_watchURL_02;
  var cal_dropXr05c03_watchURL_03 =                                  film_20_watchURL_03;
  document.getElementById("cal_dropXr05c03_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr05c04_watch_aX01").innerHTML =  film_21_watchLnk_01;
  document.getElementById("cal_dropXr05c04_watch_aX02").innerHTML =  film_21_watchLnk_02;
  document.getElementById("cal_dropXr05c04_watch_aX03").innerHTML =  film_21_watchLnk_03;
  var cal_dropXr05c04_watchURL_01 =                                  film_21_watchURL_01;
  var cal_dropXr05c04_watchURL_02 =                                  film_21_watchURL_02;
  var cal_dropXr05c04_watchURL_03 =                                  film_21_watchURL_03;
  document.getElementById("cal_dropXr05c05_watch_aX01").innerHTML =  film_22_watchLnk_01;
  document.getElementById("cal_dropXr05c05_watch_aX02").innerHTML =  film_22_watchLnk_02;
  document.getElementById("cal_dropXr05c05_watch_aX03").innerHTML =  film_22_watchLnk_03;
  var cal_dropXr05c05_watchURL_01 =                                  film_22_watchURL_01;
  var cal_dropXr05c05_watchURL_02 =                                  film_22_watchURL_02;
  var cal_dropXr05c05_watchURL_03 =                                  film_22_watchURL_03;
  document.getElementById("cal_dropXr05c06_watch_aX01").innerHTML =  film_23_watchLnk_01;
  document.getElementById("cal_dropXr05c06_watch_aX02").innerHTML =  film_23_watchLnk_02;
  document.getElementById("cal_dropXr05c06_watch_aX03").innerHTML =  film_23_watchLnk_03;
  var cal_dropXr05c06_watchURL_01 =                                  film_23_watchURL_01;
  var cal_dropXr05c06_watchURL_02 =                                  film_23_watchURL_02;
  var cal_dropXr05c06_watchURL_03 =                                  film_23_watchURL_03;
  document.getElementById("cal_dropXr05c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr05c07_watch_aX01").innerHTML =  film_24_watchLnk_01;
  document.getElementById("cal_dropXr05c07_watch_aX02").innerHTML =  film_24_watchLnk_02;
  document.getElementById("cal_dropXr05c07_watch_aX03").innerHTML =  film_24_watchLnk_03;
  var cal_dropXr05c07_watchURL_01 =                                  film_24_watchURL_01;
  var cal_dropXr05c07_watchURL_02 =                                  film_24_watchURL_02;
  var cal_dropXr05c07_watchURL_03 =                                  film_24_watchURL_03;
  document.getElementById("cal_dropXr06c01_watch_aX01").innerHTML =  film_25_watchLnk_01;
  document.getElementById("cal_dropXr06c01_watch_aX02").innerHTML =  film_25_watchLnk_02;
  document.getElementById("cal_dropXr06c01_watch_aX03").innerHTML =  film_25_watchLnk_03;
  var cal_dropXr06c01_watchURL_01 =                                  film_25_watchURL_01;
  var cal_dropXr06c01_watchURL_02 =                                  film_25_watchURL_02;
  var cal_dropXr06c01_watchURL_03 =                                  film_25_watchURL_03;
  document.getElementById("cal_dropXr06c02_watch_aX01").innerHTML =  film_26_watchLnk_01;
  document.getElementById("cal_dropXr06c02_watch_aX02").innerHTML =  film_26_watchLnk_02;
  document.getElementById("cal_dropXr06c02_watch_aX03").innerHTML =  film_26_watchLnk_03;
  var cal_dropXr06c02_watchURL_01 =                                  film_26_watchURL_01;
  var cal_dropXr06c02_watchURL_02 =                                  film_26_watchURL_02;
  var cal_dropXr06c02_watchURL_03 =                                  film_26_watchURL_03;
  document.getElementById("cal_dropXr06c03_watch_aX01").innerHTML =  film_27_watchLnk_01;
  document.getElementById("cal_dropXr06c03_watch_aX02").innerHTML =  film_27_watchLnk_02;
  document.getElementById("cal_dropXr06c03_watch_aX03").innerHTML =  film_27_watchLnk_03;
  var cal_dropXr06c03_watchURL_01 =                                  film_27_watchURL_01;
  var cal_dropXr06c03_watchURL_02 =                                  film_27_watchURL_02;
  var cal_dropXr06c03_watchURL_03 =                                  film_27_watchURL_03;
  document.getElementById("cal_dropXr06c03_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr06c04_watch_aX01").innerHTML =  film_28_watchLnk_01;
  document.getElementById("cal_dropXr06c04_watch_aX02").innerHTML =  film_28_watchLnk_02;
  document.getElementById("cal_dropXr06c04_watch_aX03").innerHTML =  film_28_watchLnk_03;
  var cal_dropXr06c04_watchURL_01 =                                  film_28_watchURL_01;
  var cal_dropXr06c04_watchURL_02 =                                  film_28_watchURL_02;
  var cal_dropXr06c04_watchURL_03 =                                  film_28_watchURL_03;
  document.getElementById("cal_dropXr06c05_watch_aX01").innerHTML =  film_29_watchLnk_01;
  document.getElementById("cal_dropXr06c05_watch_aX02").innerHTML =  film_29_watchLnk_02;
  document.getElementById("cal_dropXr06c05_watch_aX03").innerHTML =  film_29_watchLnk_03;
  var cal_dropXr06c05_watchURL_01 =                                  film_29_watchURL_01;
  var cal_dropXr06c05_watchURL_02 =                                  film_29_watchURL_02;
  var cal_dropXr06c05_watchURL_03 =                                  film_29_watchURL_03;
  document.getElementById("cal_dropXr06c06_watch_aX01").innerHTML =  film_30_watchLnk_01;
  document.getElementById("cal_dropXr06c06_watch_aX02").innerHTML =  film_30_watchLnk_02;
  document.getElementById("cal_dropXr06c06_watch_aX03").innerHTML =  film_30_watchLnk_03;
  var cal_dropXr06c06_watchURL_01 =                                  film_30_watchURL_01;
  var cal_dropXr06c06_watchURL_02 =                                  film_30_watchURL_02;
  var cal_dropXr06c06_watchURL_03 =                                  film_30_watchURL_03;
  document.getElementById("cal_dropXr06c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr06c07_watch_aX01").innerHTML =  film_31_watchLnk_01;
  document.getElementById("cal_dropXr06c07_watch_aX02").innerHTML =  film_31_watchLnk_02;
  document.getElementById("cal_dropXr06c07_watch_aX03").innerHTML =  film_31_watchLnk_03;
  var cal_dropXr06c07_watchURL_01 =                                  film_13_watchURL_01;
  var cal_dropXr06c07_watchURL_02 =                                  film_31_watchURL_02;
  var cal_dropXr06c07_watchURL_03 =                                  film_31_watchURL_03;
  document.getElementById("cal_dropXr06c07_watch_liX03").classList.add("hidden_element");


  var cal_dropXr02c05_aboutURL_01 =                                  film_01_aboutURL_01;
  var cal_dropXr02c05_aboutURL_02 =                                  film_01_aboutURL_02;
  var cal_dropXr02c05_aboutURL_03 =                                  film_01_aboutURL_03;
  var cal_dropXr02c06_aboutURL_01 =                                  film_02_aboutURL_01;
  var cal_dropXr02c06_aboutURL_02 =                                  film_02_aboutURL_02;
  var cal_dropXr02c06_aboutURL_03 =                                  film_02_aboutURL_03;
  var cal_dropXr02c07_aboutURL_01 =                                  film_03_aboutURL_01;
  var cal_dropXr02c07_aboutURL_02 =                                  film_03_aboutURL_02;
  var cal_dropXr02c07_aboutURL_03 =                                  film_03_aboutURL_03;
  var cal_dropXr03c01_aboutURL_01 =                                  film_04_aboutURL_01;
  var cal_dropXr03c01_aboutURL_02 =                                  film_04_aboutURL_02;
  var cal_dropXr03c01_aboutURL_03 =                                  film_04_aboutURL_03;
  var cal_dropXr03c02_aboutURL_01 =                                  film_05_aboutURL_01;
  var cal_dropXr03c02_aboutURL_02 =                                  film_05_aboutURL_02;
  var cal_dropXr03c02_aboutURL_03 =                                  film_05_aboutURL_03;
  var cal_dropXr03c03_aboutURL_01 =                                  film_06_aboutURL_01;
  var cal_dropXr03c03_aboutURL_02 =                                  film_06_aboutURL_02;
  var cal_dropXr03c03_aboutURL_03 =                                  film_06_aboutURL_03;
  var cal_dropXr03c04_aboutURL_01 =                                  film_07_aboutURL_01;
  var cal_dropXr03c04_aboutURL_02 =                                  film_07_aboutURL_02;
  var cal_dropXr03c04_aboutURL_03 =                                  film_07_aboutURL_03;
  var cal_dropXr03c05_aboutURL_01 =                                  film_08_aboutURL_01;
  var cal_dropXr03c05_aboutURL_02 =                                  film_08_aboutURL_02;
  var cal_dropXr03c05_aboutURL_03 =                                  film_08_aboutURL_03;
  var cal_dropXr03c06_aboutURL_01 =                                  film_09_aboutURL_01;
  var cal_dropXr03c06_aboutURL_02 =                                  film_09_aboutURL_02;
  var cal_dropXr03c06_aboutURL_03 =                                  film_09_aboutURL_03;
  var cal_dropXr03c07_aboutURL_01 =                                  film_10_aboutURL_01;
  var cal_dropXr03c07_aboutURL_02 =                                  film_10_aboutURL_02;
  var cal_dropXr03c07_aboutURL_03 =                                  film_10_aboutURL_03;
  var cal_dropXr04c01_aboutURL_01 =                                  film_11_aboutURL_01;
  var cal_dropXr04c01_aboutURL_02 =                                  film_11_aboutURL_02;
  var cal_dropXr04c01_aboutURL_03 =                                  film_11_aboutURL_03;
  var cal_dropXr04c02_aboutURL_01 =                                  film_12_aboutURL_01;
  var cal_dropXr04c02_aboutURL_02 =                                  film_12_aboutURL_02;
  var cal_dropXr04c02_aboutURL_03 =                                  film_12_aboutURL_03;
  var cal_dropXr04c03_aboutURL_01 =                                  film_13_aboutURL_01;
  var cal_dropXr04c03_aboutURL_02 =                                  film_13_aboutURL_02;
  var cal_dropXr04c03_aboutURL_03 =                                  film_13_aboutURL_03;
  var cal_dropXr04c04_aboutURL_01 =                                  film_14_aboutURL_01;
  var cal_dropXr04c04_aboutURL_02 =                                  film_14_aboutURL_02;
  var cal_dropXr04c04_aboutURL_03 =                                  film_14_aboutURL_03;
  var cal_dropXr04c05_aboutURL_01 =                                  film_15_aboutURL_01;
  var cal_dropXr04c05_aboutURL_02 =                                  film_15_aboutURL_02;
  var cal_dropXr04c05_aboutURL_03 =                                  film_15_aboutURL_03;
  var cal_dropXr04c06_aboutURL_01 =                                  film_16_aboutURL_01;
  var cal_dropXr04c06_aboutURL_02 =                                  film_16_aboutURL_02;
  var cal_dropXr04c06_aboutURL_03 =                                  film_16_aboutURL_03;
  var cal_dropXr04c07_aboutURL_01 =                                  film_17_aboutURL_01;
  var cal_dropXr04c07_aboutURL_02 =                                  film_17_aboutURL_02;
  var cal_dropXr04c07_aboutURL_03 =                                  film_17_aboutURL_03;
  var cal_dropXr05c01_aboutURL_01 =                                  film_18_aboutURL_01;
  var cal_dropXr05c01_aboutURL_02 =                                  film_18_aboutURL_02;
  var cal_dropXr05c01_aboutURL_03 =                                  film_18_aboutURL_03;
  var cal_dropXr05c02_aboutURL_01 =                                  film_19_aboutURL_01;
  var cal_dropXr05c02_aboutURL_02 =                                  film_19_aboutURL_02;
  var cal_dropXr05c02_aboutURL_03 =                                  film_19_aboutURL_03;
  var cal_dropXr05c03_aboutURL_01 =                                  film_20_aboutURL_01;
  var cal_dropXr05c03_aboutURL_02 =                                  film_20_aboutURL_02;
  var cal_dropXr05c03_aboutURL_03 =                                  film_20_aboutURL_03;
  var cal_dropXr05c04_aboutURL_01 =                                  film_21_aboutURL_01;
  var cal_dropXr05c04_aboutURL_02 =                                  film_21_aboutURL_02;
  var cal_dropXr05c04_aboutURL_03 =                                  film_21_aboutURL_03;
  var cal_dropXr05c05_aboutURL_01 =                                  film_22_aboutURL_01;
  var cal_dropXr05c05_aboutURL_02 =                                  film_22_aboutURL_02;
  var cal_dropXr05c05_aboutURL_03 =                                  film_22_aboutURL_03;
  var cal_dropXr05c06_aboutURL_01 =                                  film_23_aboutURL_01;
  var cal_dropXr05c06_aboutURL_01 =                                  film_23_aboutURL_01;
  var cal_dropXr05c06_aboutURL_02 =                                  film_23_aboutURL_02;
  var cal_dropXr05c07_aboutURL_03 =                                  film_24_aboutURL_03;
  var cal_dropXr05c07_aboutURL_02 =                                  film_24_aboutURL_02;
  var cal_dropXr05c07_aboutURL_03 =                                  film_24_aboutURL_03;
  var cal_dropXr06c01_aboutURL_01 =                                  film_25_aboutURL_01;
  var cal_dropXr06c01_aboutURL_02 =                                  film_25_aboutURL_02;
  var cal_dropXr06c01_aboutURL_03 =                                  film_25_aboutURL_03;
  var cal_dropXr06c02_aboutURL_01 =                                  film_26_aboutURL_01;
  var cal_dropXr06c02_aboutURL_02 =                                  film_26_aboutURL_02;
  var cal_dropXr06c02_aboutURL_03 =                                  film_26_aboutURL_03;
  var cal_dropXr06c03_aboutURL_01 =                                  film_27_aboutURL_01;
  var cal_dropXr06c03_aboutURL_02 =                                  film_27_aboutURL_02;
  var cal_dropXr06c03_aboutURL_03 =                                  film_27_aboutURL_03;
  var cal_dropXr06c04_aboutURL_01 =                                  film_28_aboutURL_01;
  var cal_dropXr06c04_aboutURL_02 =                                  film_28_aboutURL_02;
  var cal_dropXr06c04_aboutURL_03 =                                  film_28_aboutURL_03;
  var cal_dropXr06c05_aboutURL_01 =                                  film_29_aboutURL_01;
  var cal_dropXr06c05_aboutURL_02 =                                  film_29_aboutURL_02;
  var cal_dropXr06c05_aboutURL_03 =                                  film_29_aboutURL_03;
  var cal_dropXr06c06_aboutURL_01 =                                  film_30_aboutURL_01;
  var cal_dropXr06c06_aboutURL_01 =                                  film_30_aboutURL_01;
  var cal_dropXr06c06_aboutURL_02 =                                  film_30_aboutURL_02;
  var cal_dropXr06c07_aboutURL_03 =                                  film_31_aboutURL_03;
  var cal_dropXr06c07_aboutURL_02 =                                  film_31_aboutURL_02;
  var cal_dropXr06c07_aboutURL_03 =                                  film_31_aboutURL_03;

  /**************************************
  ********** functions go here **********
  **************************************/
  function set_text() {
    var all_watch_hdrs = document.querySelectorAll(".cal_drop_watch_hdr");
    var all_about_hdrs = document.querySelectorAll(".cal_drop_about_hdr");
    var all_a1s = document.querySelectorAll(".cal_drop_about_ls_itemX01");
    var all_a2s = document.querySelectorAll(".cal_drop_about_ls_itemX02");
    var all_a3s = document.querySelectorAll(".cal_drop_about_ls_itemX03");
    all_watch_hdrs.forEach(function(watch_hdr) {
      watch_hdr.innerHTML = drop_watch_header_text;
    });
    all_about_hdrs.forEach(function(about_hdr) {
      about_hdr.innerHTML = drop_about_header_text;
    });
    all_a1s.forEach(function(a1) {
      a1.innerHTML = drop_about_a1;
    });
    all_a2s.forEach(function(a2) {
      a2.innerHTML = drop_about_a2;
    });
    all_a3s.forEach(function(a3) {
      a3.innerHTML = drop_about_a3;
    });
  };

  function click__cal_button(button, drop) {
    var all_buttons = document.querySelectorAll(".cal_cell_button");
    var all_drops = document.querySelectorAll(".cal_drop");
    if (
      document.getElementById(drop).style.display === "none" ||
      document.getElementById(drop).style.display === ""
    ) {
      all_buttons.forEach(function(each_button) {
        each_button.style.backgroundColor = "inherit";
      });
      all_drops.forEach(function(each_drop) {
        each_drop.style.display = "none";
      });
      /*
      document.getElementById(button).style.backgroundColor = main_theme_clr_2_slct;
      */
      if (media_mbl.matches) { // If media query matches
        document.getElementById(button).style.backgroundColor = "rgb(12, 12, 12)";
      } else {
        document.getElementById(button).style.backgroundColor = "rgb(65, 40, 77)";
      }
      document.getElementById(drop).style.display = "grid";
    } else {
      document.getElementById(button).style.backgroundColor = "inherit";
      document.getElementById(drop).style.display = "none";
    }
  };

  function watch_link(url) {
    if (
      url.includes("123", 0)
    ) {
      var answer = confirm("123-movies.com is free, but it shows scammy pop-ups and ads. An ad blocker is recommended. Continue?")
      if (answer)
      window.open(url,"_blank");
    } else {
      window.open(url,"_blank");
    }
  };

  function about_link(url) {
    if (
      url.includes("123", 0)
    ) {
      var answer = confirm("123-movies.com is free, but it shows scammy pop-ups and ads. An ad blocker is recommended. Continue?")
      if (answer)
      window.open(url,"_blank");
    } else {
      window.open(url,"_blank");
    }
  };

  function click_day() {
    var all_buttons = document.querySelectorAll('.'+date);
    all_buttons.forEach(function(each_button) {
      each_button.click();
    });
  };

  function onload() {
    click_day();
    set_text();
  }

  window.onload = onload();
