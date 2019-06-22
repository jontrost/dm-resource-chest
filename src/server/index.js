var express = require("express");
var app = express();

app.get("/magic-items", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(
        {
            "posts": [
                {
                    "title": "Orb of Darkness",
                    "description": "A smooth black orb that does not reflect any light whatsoever.",
                    "type": "Wondrous Item, Uncommon",
                    "details": "Any light within 25 feet of the orb is sucked into the orb and destroyed, thus rendering the area around the orb in complete darkness. No light will function within this range and all vision (including darkvision) is rendered useless.",
                    "url": "orb-of-darkness",
                    "shareImage": "https://i.lensdump.com/i/WYcRkz.png"  
                },
        
                {
                    "title": "Beast Clay",
                    "description": "A smooth lump of clay that radiates a gentle heat when held.",
                    "type": "Wondrous Item, Uncommon",
                    "details": "After being sculpted into a beast of Challenge Rating 1 or lower, the clay will transform into the beast. The clay will grow or shrink to the size of the beast that has been sculpted. The sculptor shares consciousness with the beast and can control the beast’s actions, but the beast is unable make any attacks. After 5 minutes the beast will return to its clay form.",
                    "url": "beast-clay",
                    "shareImage": "https://i.lensdump.com/i/WYbCA3.png"
                },
        
                {
                    "title": "Gambler’s Coin",
                    "description": "A shiny golden coin with the face of a Kenku on one side and an ordinary crow on the other side.",
                    "type": "Wondrous Item, Common",
                    "details": "Whenever the coin is flipped or thrown into the air, it will always land face up. Even if it is dropped face down right above a surface, it will still magically flip to land face up.",
                    "url": "gamblers-coin",
                    "shareImage": "https://i.lensdump.com/i/WYbJV0.png"
                },
        
                {
                    "title": "Staff of Planar Suction",
                    "description": "A brass staff adorned with a smooth onyx stone on top.",
                    "type": "Staff, Uncommon",
                    "details": "After slamming the staff on the ground, any creatures within 50 feet of the user must succeed on a DC 13 strength saving throw to avoid being sucked 10 feet towards the staff. Each turn in combat, the wielder of the staff may use their action to continue to slam the staff and force the creatures caught in its radius to make another saving throw to avoid being sucked closer to the staff.",
                    "url": "staff-of-planar-suction",
                    "shareImage": "https://i.lensdump.com/i/WYbdEA.png"
                },
        
                {
                    "title": "Tankard of Transformation",
                    "description": "A magical copper tankard that is prized by drunkards.",
                    "type": "Wondrous Item, Common",
                    "details": "Any liquid poured into the tankard is instantly transformed into a delicious ale.",
                    "url": "tankard-of-transformation",
                    "shareImage": "https://i.lensdump.com/i/WYbqOM.png"
                },
        
                {
                    "title": "Manacles of Love",
                    "description": "A set of magical manacles created by a lonely mage to help him find love.",
                    "type": "Wondrous Item, Uncommon",
                    "details": "After shackling two creatures together with the manacles they will become madly in love. Each shackled creature must succeed on a DC 15 Charisma saving throw to resist the effect. If one creature succeeds on the saving throw and the other fails, the creature who succeeded will not feel any attraction towards the creature who failed. The creature who failed will still feel a burning attraction towards the creature who succeeded. The effect ends until the manacles are removed.",
                    "url": "manacles-of-love",
                    "shareImage": "https://i.lensdump.com/i/WYbBcQ.png"
                },
        
                {
                    "title": "Scroll of Chronomancy",
                    "description": "A scroll that constantly exudes a blue glow and a faint humming noise.",
                    "type": "Scroll, Very Rare",
                    "details": "After reading the inscription on the scroll, the scroll glows with a bright blue light and disintegrates into thin air. All creatures within 50 feet of the user become instantly frozen in time, but non-living objects are left unaffected by the scroll. The effect lasts for 30 seconds.",
                    "url": "scroll-of-chronomancy",
                    "shareImage": "https://i.lensdump.com/i/WYwfMx.png"
                },
                
                {
                    "title": "Sticky Armor",
                    "description": "A grotesque breastplate that is covered in a permanent sticky slime.",
                    "type": "Armor (breastplate), Rare",
                    "details": "Any attacks made against you with melee weapons have a chance to disarm the attacker. The attacker must make a DC 10 strength saving throw after each melee attack to avoid their weapon becoming stuck to your armor. A successful DC 14 athletics check can remove the weapon from your armor on the attacker’s next turn. If the attacker makes a melee attack without a weapon and fails the saving throw, they become stuck to the armor and become restrained.",
                    "url": "sticky-armor",
                    "shareImage": "https://i.lensdump.com/i/WYwcC1.png"
                }
            ]
        }
    )
});

app.get("/npcs", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(
        {
            "posts": [
                {
                    "name": "Gust",
                    "quote": "\"If you want to get your hands on something that you probably shouldn’t, Gust will find a way to make sure you get it, no matter how difficult it is.\"",
                    "quoteAuthor": "- One of Gust's frequent employers",
                    "description": "Gust is a young male kenku smuggler with pitch black feathers. He wears a loose-fitting darkly-colored cloak that shrouds most of his face. He is difficult to find during the day since that’s when he is usually sleeping or planning how to smuggle his next item to its prospective buyer. At night, he can be found lurking around cities and darting between dark corridors. He is exceptionally nimble and crafty from spending nearly his entire life smuggling illegal goods into the hands of those who have the gold to pay for them. Despite his criminal appearance, he has compassion for the poor and tries to help them whenever possible.",
                    "stats": [9, 16, 9, 12, 14, 11],
                    "url": "gust",
                    "age": "young",
                    "sex": "male",
                    "race": "Kenku",
                    "profession": "Smuggler"
                },
                
                {
                    "name": "Isolde",
                    "quote": "\"When I need someone to disappear, I always call Isolde. I don’t know how she does it, and quite frankly I don’t want to know. I just know that when I hire her, the deed is as good as done.\"",
                    "quoteAuthor": "- One of Isolde's many employers",
                    "description": "Isolde is an old female half-elf assassin with neatly-cropped gray hair. She wears well-fitted clothing that is colored with various shades of brown and black. She looks strangely fit for someone as old as she is, and that’s because she is secretly a skilled assassin. She pretends to be a frail old woman to avoid suspicion, but she is actually a very capable killer. Her hand-to-hand combat skills are astoundingly swift and precise. If watched closely, she can occasionally be seen using thieves’ cant during her conversations.",
                    "stats": [10, 16, 9, 12, 13, 12],
                    "url": "isolde",
                    "age": "old",
                    "sex": "female",
                    "race": "Half-Elf",
                    "profession": "Assassin"
                },
        
                {
                    "name": "Atugak",
                    "quote": "\"The sword I bought from him is the finest blade I’ve ever laid my hands on. It’s light, perfectly balanced, and there’s not a single imperfection to be found.\"",
                    "quoteAuthor": "- One of Atugak's many satisfied customers",
                    "description": "Atugak is a middle-aged male half-orc blacksmith who has a rough, bald head. He is missing his left eye and has a large scar covering the spot where his eye used to be. He speaks loudly in a deep, scratchy voice. He is kind to anyone who respects his craft and shows appreciation for his creations, but he quickly becomes resentful towards anyone who talks down on his craft. His creations are all high quality and beautifully crafted down to the smallest details. He enjoys telling others about his clan and about his now deceased father who taught him everything he knows about smithing.",
                    "stats": [14, 10, 12, 11, 10, 12],
                    "url": "atugak",
                    "age": "middle-aged",
                    "sex": "male",
                    "race": "Half-Orc",
                    "profession": "Blacksmith"
                },
        
                {
                    "name": "Elegnos",
                    "quote": "\"I’ve never met anyone as insufferable as him. Every condescending word he spoke was dripping with sarcasm.\"",
                    "quoteAuthor": "- Elegnos's former lover",
                    "description": "Elegnos is a young male elf explorer with long blonde hair tucked beneath his hat. He wears a flamboyant hat and neat, pressed clothes without a single wrinkle or imperfection. He tells elaborate tales about his past expeditions, and he usually glorifies himself when he does. He is arrogant and thinks that everyone else lives such boring lives compared to his adventure and excitement filled life. In reality, he has never actually gone on any sort of expedition or adventure. He lives a pampered life as the only son of a high-elf noble.",
                    "stats": [10, 11, 10, 12, 10, 4],
                    "url": "elegnos",
                    "age": "young",
                    "sex": "male",
                    "race": "High Elf",
                    "profession": "Explorer"
                },
        
                {
                    "name": "Lanashi",
                    "quote": "\"I find myself visiting her more and more frequently. She provides me with peace of mind knowing that my future is taken care of.\"",
                    "quoteAuthor": "- One of Lanashi's frequent clients",
                    "description": "Lanashi is a young female human psychic with long black hair. She has an extraordinarily beautiful face and dark red eyes that are mostly covered by the crimson colored hood she wears. She is very charming and knows how to con almost anyone to perform favors for her or hand over their hard-earned money. After telling someone their future, she often deceives them into believing that she can change their future for a sizable fee. She is evil at heart, but she cleverly disguises her evil intentions as genuine concern for the well-being of others.",
                    "stats": [10, 11, 9, 14, 11, 18],
                    "url": "lanashi",
                    "age": "young",
                    "sex": "female",
                    "race": "Human",
                    "profession": "Psychic"
                },
        
                {
                    "name": "Dibu",
                    "quote": "\"I would be quite proud of myself if I could live a life even half as exciting as Dibu’s.\"",
                    "quoteAuthor": "- Dibu's grandson",
                    "description": "Dibu is an old male tortle storyteller. He has a battered shell marked with dozens of cracks and chips from a lifetime of adventuring. He walks with the aid of a beautifully handcrafted cane that also doubles as a formidable weapon if the need arises. He loves reliving his past adventures by sharing them with anyone who will listen, especially aspiring adventurers. Although he is too old to be adventuring now, he is full of wisdom and sage advice from his years of experience. He has an exceptionally kind heart and tries his best to make people smile through his tales.",
                    "stats": [14, 9, 12, 11, 17, 12],
                    "url": "dibu",
                    "age": "old",
                    "sex": "male",
                    "race": "Tortle",
                    "profession": "Storyteller"
                },
        
                {
                    "name": "Yugreg",
                    "quote": "\"I don’t even keep track of the drinks he orders anymore, I just charge him a hefty fee at the end of each week and he happily pays it each time.\"",
                    "quoteAuthor": "- Yugreg's favorite tavern owner",
                    "description": "Yugreg is a middle-aged male dwarf drunkard with messy brown hair. He has a massive gut and a large nose that covers most of his chubby face. He can almost always be found at a tavern ordering a drink or unconscious on the ground outside of one. He can talk for hours about his favorite ales, meads, and wines with anyone who takes a seat next to him at the bar. He frowns upon those who refuse to drink with him, but he heartily welcomes anyone who wishes to join him in his revelry.",
                    "stats": [12, 9, 14, 10, 9, 13],
                    "url": "yugreg",
                    "age": "middle-aged",
                    "sex": "male",
                    "race": "Mountain Dwarf",
                    "profession": "Drunkard"
                },
        
                {
                    "name": "Orpi",
                    "quote": "\"She plays the lute with such grace and such beauty, but the moment she opens her mouth to sing I’m forced to cover my ears.\"",
                    "quoteAuthor": "- One of Orpi's former bandmates",
                    "description": "Orpi is a young female gnome bard with long red hair and eyes as blue as the ocean. She carries a lute adorned with beautiful designs with her at all times. She plays the lute beautifully, but it is almost impossible to hear the sound it makes because she has a truly horrendous singing voice that masks the sound of the instrument. She is friendly to everyone and loves to chat about any topic, especially music.",
                    "stats": [9, 11, 9, 10, 12, 14],
                    "url": "orpi",
                    "age": "young",
                    "sex": "female",
                    "race": "Gnome",
                    "profession": "Bard"
                },
                
                {
                    "name": "Bagra",
                    "quote": "\"I made the mistake once of trying to duel her in the arena, and I lost my arm for it. That’s a mistake I’ll never make again.\"",
                    "quoteAuthor": "- A gladiator who once challenged Bagra in combat",
                    "description": "Bagra is a young half-orc female gladiator with a closely-shaved head. She has tattoos covering her muscular body and piercings covering her face. She carries two intricately carved battleaxes on her back, and she certainly knows how to wield them. She speaks with confidence and does not take kindly to insults from anyone. Some people consider her to be rude and arrogant, but those who know her well would describe her as having a kind heart hidden beneath her menacing looks.",
                    "stats": [15, 13, 14, 10, 11, 8],
                    "url": "bagra",
                    "age": "young",
                    "sex": "female",
                    "race": "Half-Orc",
                    "profession": "Gladiator"
                },
                
                {
                    "name": "Quintus",
                    "quote": "\"I considered taking my own life to escape his never-ending story, but after a mere three hours he finished telling me the tale of some scholar I still can’t even remember the name of.\"",
                    "quoteAuthor": "- An apprentice who studied beneath Quintus",
                    "description": "Quintus is an old male human historian with gray hair that runs down his face. His back is hunched and he is unable to stand up straight. He wears a single monocle on his right eye, and his left eye appears to be blind. He speaks slowly and deliberately, often pausing to consider his words. He is courteous to everyone he meets and loves droning on about history. He is quite dull and uninteresting to talk to, but he is knowledgeable and wise.",
                    "stats": [9, 7, 9, 18, 17, 10],
                    "url": "quintus",
                    "age": "old",
                    "sex": "male",
                    "race": "Human",
                    "profession": "Historian"
                },
                
                {
                    "name": "Heartsmasher",
                    "quote": "\"Something ain’t quite right with that boy. He has a kind heart, but he must be missing some connections up in that tiny brain of his.\"",
                    "quoteAuthor": "Heartsmasher's father",
                    "description": "Heartsmasher is a young male goliath thief with a bald, shiny head. He is extremely tall, even for a goliath. He talks very slowly and often has to pause to think while he is speaking. His movements appear uncoordinated and he is quite clumsy. Despite his hulking frame, he tries to pickpocket and steal from nobles without any luck. He is terrible at being quiet and always draws notice from the people around him. He is so remarkably unintelligent that most people simply tell him to move along when he is caught attempting to steal from them.",
                    "stats": [17, 6, 14, 4, 5, 10],
                    "url": "heartsmasher",
                    "age": "young",
                    "sex": "male",
                    "race": "Goliath",
                    "profession": "Thief"
                },
                
                {
                    "name": "Ruul",
                    "quote": "\"Don’t stop and talk to him unless you plan on spending the rest of your day hearing about his magical mushrooms.\"",
                    "quoteAuthor": "- A poor soul who spent his entire day listening to Ruul",
                    "description": "Ruul is a middle-aged male halfling nomad with long brown hair that covers most of his eyes. He wears a humorously oversized cloak that he often trips over while walking, and he has a noticeable odor if you get close to him. He is very energetic and talks so quickly that it’s hard to understand everything he says. He is friendly to everyone and does not seem to be deterred by anyone’s negativity. He eagerly attempts to sell magical mushrooms to anyone who will listen to him, but he has no idea what effect the mushrooms have.",
                    "stats": [11, 10, 11, 8, 9, 13],
                    "url": "ruul",
                    "age": "middle-aged",
                    "sex": "male",
                    "race": "Halfling",
                    "profession": "Nomad"
                }
            ]
        }
    );
});

app.get("/plot-hooks", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(
        {
            "posts": [
                {
                    "title": "Trapped With the Unknown",
                    "content": "The party stumbles upon an abandoned necromancer’s lair. If they choose to enter, they encounter a variety of gruesome sights such as mangled, decomposing corpses strewn about the place. When they try to leave, they realize that the entrance was under the effect of some sort of magic, and now is unable to open even with extreme force. Suddenly, strange noises can be heard echoing from somewhere else in the lair.",
                    "url": "trapped-with-the-unknown",
                    "tags": ["Combat", "Exploration", "Horror", "Mystery"]
                },
                
                {
                    "title": "Double Trouble",
                    "content": "The party is tasked with slaying a powerful beast that has made its lair inside a local cave, but when they get there they discover that there are actually two of them.",
                    "url": "double-trouble",
                    "tags": ["Combat"]
                },
        
                {
                    "title": "Giant Trouble",
                    "content": "An angry hill giant claims the party stole his special rock and he demands that they return it immediately. The real thief is another hill giant who thought the rock looked neat and took it for himself.",
                    "url": "giant-trouble",
                    "tags": ["Combat", "Social"]
                },
        
                {
                    "title": "Drunken Warning",
                    "content": "An unconscious drunkard who is passed out in a bush begins whispering strange omens to the party as they walk past. Upon further inspection it appears that he is simply talking in his sleep, but the next day his omens begin to come true.",
                    "url": "drunken-warning",
                    "tags": ["Humor", "Mystery"]
                },
        
                {
                    "title": "The Corrupted Tree",
                    "content": "A massive ancient tree that houses thousands of elves is beginning to slowly decay after a hooded figure was spotted pouring a magical substance on the roots a few nights ago. The elves have been unable to figure out how to save the tree and are calling on the help of anyone who can assist.",
                    "url": "the-corrupted-tree",
                    "tags": ["Mystery", "Social"]
                },
        
                {
                    "title": "Divine Heat",
                    "content": "An angry deity has been causing the sun to grow hotter and hotter each day and people are beginning to die from the heat.",
                    "url": "divine-heat",
                    "tags": ["Social"]
                },
        
                {
                    "title": "Dark Captivity",
                    "content": "A woman approaches the party and frantically pleads for help. She says that she managed to escape from the captivity of a necromancer who is practicing his magic on live victims, but there are more people to be saved.",
                    "url": "dark-captivity",
                    "tags": ["Exploration", "Horror"]
                },
        
                {
                    "title": "The Mischievous Bug",
                    "content": "One of the royal guards falls dead in front of the party and they see a tiny mechanical bug crawl out of his mouth afterwards. They watch the bug quickly scurry to the hand of a hooded figure who gives them a nod before taking off.",
                    "url": "the-mischievous-bug",
                    "tags": ["Mystery"]
                },
        
                {
                    "title": "Untold Treasure",
                    "content": "A strange old man approaches the party and hands them a treasure map that shows the location of a nearby treasure. Immediately after handing over the treasure map he fades into the wind without muttering a word.",
                    "url": "untold-treasure",
                    "tags": ["Exploration", "Mystery"]
                },
        
                {
                    "title": "Whispers from the Well",
                    "content": "Shortly after a new well was dug near a town, many of the townspeople began hearing whispers coming from it. Those who can hear the whispers say that they invite them to jump into the well.",
                    "url": "whispers-from-the-well",
                    "tags": ["Horror", "Mystery"]
                },
        
                {
                    "title": "Smithing Sabotage",
                    "content": "Someone has released a hoard of rust monsters into a large city and the monsters are destroying all of the tools and weapons crafted by the blacksmiths.",
                    "url": "smithing-sabotage",
                    "tags": ["Combat", "Social"]
                },
        
                {
                    "title": "The Cursed Text",
                    "content": "The party discovers an ancient book that lists the names of thousands of people and how they died. The next time they open it they see an entry written for each of them.",
                    "url": "the-cursed-text",
                    "tags": ["Mystery"]
                },
        
                {
                    "title": "Rogue Contraption",
                    "content": "A tinkerer runs into town frantically yelling about a contraption gone wrong. Shortly afterwards a massive golem reaches the town and begins destroying everything.",
                    "url": "rogue-contraption",
                    "tags": ["Combat"]
                },
        
                {
                    "title": "A Secret Ingredient",
                    "content": "A local brewery hosts a drinking competition to see who can drink two tankards of their ale the fastest. Shortly after the competition, everyone who drank the ale begins to fall unconscious on the ground.",
                    "url": "a-secret-ingredient",
                    "tags": ["Mystery", "Social"]
                },
        
                {
                    "title": "The Stallion Message",
                    "content": "A horse runs into town with a dead man tied to its back. The man is covered in blood and appears to have a sealed note tucked into his mouth.",
                    "url": "the-stallion-message",
                    "tags": ["Horror", "Mystery"]
                },
        
                {
                    "title": "Test Subject",
                    "content": "A local alchemist is offering gold to anyone who will allow him to test his new potion on them",
                    "url": "test-subject",
                    "tags": ["Social"]
                },
        
                {
                    "title": "Coin Before Family",
                    "content": "A shady travelling merchant approaches the party and offers to sell them one of her children for a ridiculously low price.",
                    "url": "coin-before-family",
                    "tags": ["Social"]
                },
        
                {
                    "title": "Glorious Grapes",
                    "content": "A wealthy noble wants a special wine to be made for his wedding, but it requires rare grapes that only grow deep in the center of a distant jungle.",
                    "url": "glorious-grapes",
                    "tags": ["Exploration"]
                },
        
                {
                    "title": "Mystery in the Mines",
                    "content": "The party discovers a mining camp with recently deceased miners on the ground and a foul smell emerging from the mine entrance. A strange sound can also be heard coming from the mine.",
                    "url": "mystery-in-the-mines",
                    "tags": ["Exploration", "Horror", "Mystery"]
                }
            ]
        }
    )
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});