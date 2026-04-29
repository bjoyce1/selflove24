import portraitHeartWithin from "@/assets/portraits/the-heart-within.jpg";
import portraitMirrorOfTruth from "@/assets/portraits/the-mirror-of-truth.jpg";
import portraitFindingHerVoice from "@/assets/portraits/finding-her-voice.jpg";
import portraitEmbracingAuthenticity from "@/assets/portraits/embracing-authenticity.jpg";
import portraitBreakingTheChains from "@/assets/portraits/breaking-the-chains.jpg";
import portraitWarriorOfTheStreets from "@/assets/portraits/warrior-of-the-streets.jpg";
import portraitStrengthInTheStruggle from "@/assets/portraits/strength-in-the-struggle.jpg";
import portraitRiseFromTheAshes from "@/assets/portraits/rise-from-the-ashes.jpg";
import portraitEyesOfHope from "@/assets/portraits/eyes-of-hope.jpg";
import portraitWhispersOfSelfLove from "@/assets/portraits/whispers-of-self-love.jpg";
import portraitBlueprintsOfTheHeart from "@/assets/portraits/blueprints-of-the-heart.jpg";
import portraitVisionOfLove from "@/assets/portraits/vision-of-love.jpg";

export type StoryFormat =
  | "standard"
  | "letter"
  | "second-person"
  | "timestamps"
  | "blueprint"
  | "inventory"
  | "manifesto";

export interface StoryProfile {
  age: number;
  locale: string;
  role: string;
}

export interface TimestampBlock {
  time: string;
  text: string;
}

export interface BlueprintSection {
  header: string;
  body: string[];
}

export interface FormatData {
  // letter
  letterPreamble?: string;
  letterSignoff?: string;
  // inventory
  inventoryTook?: string[];
  inventoryLeft?: string[];
  // timestamps
  timestamps?: TimestampBlock[];
  // blueprint
  blueprintSections?: BlueprintSection[];
  // manifesto closing stanza
  manifestoClosing?: string[];
}

export interface Story {
  slug: string;
  name: string;
  title: string;
  tease: string;
  excerpt: string;
  body: string[];
  portraitUrl: string;
  accentColor: string; // hex
  format: StoryFormat;
  profile: StoryProfile;
  formatData?: FormatData;
}

export const stories: Story[] = [
  {
    slug: "the-heart-within",
    name: "Amara",
    title: "The Heart Within",
    tease: "She built her whole life on being needed and now nobody needs her — and she don't know what that makes her.",
    excerpt:
      "The house is too quiet now.\n\nAmara LeBlanc is fifty-two years old and she just retired from teaching third grade after twenty-eight years at Ross Elementary.",
    portraitUrl: portraitHeartWithin,
    accentColor: "#D4A5A5",
    format: "standard",
    profile: { age: 52, locale: "Sunnyside, Houston", role: "Retired teacher · Widow" },
    body: [
      "The house is too quiet now.",
      "Amara LeBlanc is fifty-two years old and she just retired from teaching third grade after twenty-eight years at Ross Elementary. Her last day was a Friday in May. They gave her a sheet cake from H-E-B with red roses on it that tasted like nothing. The principal said some words. A little girl named Genesis cried. Amara hugged Genesis and told her she'd be alright, baby, the next teacher gon' love you just like Ms. LeBlanc did. And then she drove home and sat in the driveway for an hour because she didn't know what to do next.",
      "That was three months ago.",
      "Her two boys, Andre and Jamal, are grown. Andre's in Atlanta with a wife and a baby. Jamal's at Prairie View finishing his master's. Her husband Reggie passed in 2019, four years ago this November, and the bed has felt like a parking lot ever since. Her mama's in a home in Beaumont. Her sister calls but talks more than listens.",
      "Used to be Amara was the one everybody needed. Twenty-eight years of seven-year-olds needing her. Two sons needing her. A husband needing her. A mama needing her. A sister needing somebody to talk at. A church choir needing somebody to organize the robes. She built her whole life on being needed and now nobody needs her and she don't know what that makes her.",
      "It's a Tuesday in August when she finds the box.",
      "Top of the closet, way in the back, behind the photo albums and Reggie's cologne she still can't throw away. A shoebox she hadn't opened in maybe forty years. Inside: a stack of papers in her own handwriting from when she was twelve, thirteen, fourteen. Poems. Stories. A notebook full of her dreams when she was a little girl from Sunnyside who wanted to be a writer.",
      "She sits on the floor of her bedroom and she reads them. Some of them are bad. Most of them are bad. But there's one — a poem she wrote when she was thirteen, called Heart Like a House — that stops her breath.",
      "The poem is about a girl whose heart is a house with all the doors propped open, and everybody comes in and takes what they need, and the girl never closes a single door, and at the end of the poem the house is empty and the girl is on the porch wondering when she stopped living inside it.",
      "She wrote that at thirteen.",
      "She lived that for thirty-nine more years.",
      "Amara sits on the floor and she don't cry. She does something quieter. She gets up. She goes to the kitchen. She makes herself a real breakfast — eggs, grits, bacon, the works. Not the rushed coffee she's been drinking for a quarter century. She sits at the table and eats slow.",
      "After breakfast, she goes to the closet and she takes out a notebook she'd bought herself the week she retired and never opened. She opens it. She writes the date. And she writes:",
      "The doors are mine. I get to choose who comes in.",
      "Then she writes a poem. It ain't good. She know it ain't good. But it's hers. The first thing she's made just for herself in forty years.",
      "She buys a candle that smells like figs because she likes it, not because Reggie liked it. She signs up for a writing workshop at the Houston Public Library on Tuesdays. She doesn't answer the phone every time it rings. She tells her sister she'll call her back tomorrow, and she don't.",
      "Slowly — and slow is the only way it could happen — Amara starts moving back into the house of her own heart. Dusting the rooms. Opening the windows she'd kept shut to make space for everybody else's air. Lighting candles. Playing music she likes. Cooking food she likes. Wearing colors Reggie never liked because Reggie ain't here and even when he was, those were her colors, not his.",
      "The heart within ain't a metaphor for Amara. It's an address. It's the place she'd been giving directions to for years without ever moving in herself.",
      "She's home now. Or she's getting there.",
      "She turns sixty-five in thirteen years. She figures that's enough time to learn to live in her own house. She figures it's enough time to write a real poem, too.",
      "She gives herself both.",
    ],
  },
  {
    slug: "the-mirror-of-truth",
    name: "Nia",
    title: "The Mirror of Truth",
    tease: "She has been calling boredom love. She has been calling provision intimacy. She has been calling silence peace.",
    excerpt:
      "The light in the bathroom is unforgiving. That's the first true thing.",
    portraitUrl: portraitMirrorOfTruth,
    accentColor: "#D4A5A5",
    format: "standard",
    profile: { age: 38, locale: "The Heights, Houston", role: "Mother of two · Wife" },
    body: [
      "The light in the bathroom is unforgiving. That's the first true thing.",
      "Nia leans into the mirror. She's holding a tube of MAC Ruby Woo in her right hand and her phone in her left. The phone says it's 6:47 p.m. They're due at the Roths' anniversary dinner at 7:30. It's a twenty-minute drive in good traffic and there is no good traffic in River Oaks on a Saturday. Marcus is downstairs already, on his phone, wearing the navy suit she picked out for him, smelling like the cologne she bought him for Christmas. He's a good man. He's handsome. He's making partner next year. He has never raised his hand to her or his voice. They have a five-year-old named Kennedy and a three-year-old named Chase. The dog's name is Biscuit. The brownstone is in the Heights. The mortgage is paid. The Instagram has 12,400 followers.",
      "She is thirty-eight years old and she has not been happy in nine years.",
      "She didn't know that until just now. Standing in this bathroom. Holding this lipstick. Looking at herself in this mirror.",
      "She watches her own face. The face she's been arranging for nine years. The smile she's been practicing. The way her eyes go soft in photos so nobody can see the tired underneath. She watches herself try to put on the lipstick and her hand is shaking so the line goes wrong on the right side. She wipes it off. Tries again. Wrong again. She puts down the lipstick.",
      "Here's what the mirror is telling her: Your husband is a stranger. Your children are happy because you are excellent at performing happiness. Your friends do not know you. Your mother does not know you. You do not know you. The woman in this mirror is a costume you have been wearing so long it has fused to your skin, and if you don't take it off soon, you will die in it, and they will bury you in it, and Kennedy and Chase will inherit the lie that this is what a woman looks like when she is fine.",
      "The mirror is unkind. The mirror is honest. The mirror is the only thing in this house that has not been lying to her.",
      "She thinks: I have been calling boredom love. I have been calling provision intimacy. I have been calling silence peace.",
      "She thinks: Marcus has not asked me a real question in four years.",
      "She thinks: I do not know what I want for dinner. I do not know what kind of music I would play if I were alone in this house. I do not know what my real laugh sounds like.",
      "She thinks: Kennedy looked at me yesterday and said Mommy why are you sad and I told her I'm not sad baby and she said okay and walked away and I knew she didn't believe me and I knew she had learned, in five years, to nod and walk away when grown women lie about being sad.",
      "That one is the one that breaks her.",
      "She sits down on the bathroom floor in her dress. Her knees are at her chin. She is crying without making sound, the way she learned to cry in graduate school when the bathroom stalls had thin walls. Her makeup is gone now. Her cheeks are wet. Her chest is heaving but quiet. She is forty minutes from the Roths' anniversary dinner and she is not going.",
      "Marcus calls up the stairs. Babe, you ready? She doesn't answer. She breathes.",
      "She doesn't know yet what she's going to do. She doesn't know if she's going to leave him. She doesn't know if she's going to ask him to go to therapy. She doesn't know if she's going to ask him to know her, finally, after nine years. She doesn't know if he's capable. She doesn't know if she still wants him to be.",
      "What she knows — for the first time in nine years, what she knows in her bones, what the mirror has just handed her like a verdict — is that she has been lying. To herself, mostly. The kind of lie that wears a wedding ring and bakes for the bake sale and tells everyone the marriage is great and never says the word lonely even in her own head.",
      "The mirror don't lie. That's what the mirror is for.",
      "Marcus calls up the stairs again. She wipes her face with the back of her hand. She stands up. She looks at the mirror one more time — the real face, no makeup, eyes red, mascara streaks, the face nobody at the Roths' dinner is going to see — and she says, out loud, to herself:",
      "I see you. I'm not going to leave you again.",
      "She's not talking about Marcus.",
      "She walks downstairs. She tells him she's not going. She tells him she needs to talk. She tells him she's been pretending and she can't anymore. She doesn't know what comes next. Neither does he.",
      "But the mirror is satisfied. The truth is in the room now. Whatever happens after — happens to the real woman. Not the costume.",
    ],
  },
  {
    slug: "finding-her-voice",
    name: "Lila",
    title: "Finding Her Voice",
    tease: "Baby, your voice ain't lost. You just been loaning it out for free.",
    excerpt: "I used to be loud. That's what my grandmama said when she saw me at Thanksgiving.",
    portraitUrl: portraitFindingHerVoice,
    accentColor: "#C9A961",
    format: "standard",
    profile: { age: 31, locale: "Downtown Houston", role: "Consultant · Granddaughter" },
    body: [
      "I used to be loud.",
      "That's what my grandmama said when she saw me at Thanksgiving. Didn't hug me first. Didn't say hey baby or come give me sugar. She looked at me from across the kitchen, holding a wooden spoon, and she said, Lila. You used to be loud. Where you at?",
      "I didn't have an answer. Because I didn't know.",
      "I'm thirty-one. I work at a firm downtown — the kind with glass walls and abstract art and a cold brew tap nobody asks who's paying for. I've been there four years. I'm good at my job. I'm so good at my job that nobody notices me doing it. I'm so good at my job that when Brittany got promoted last March — Brittany who I trained, Brittany who couldn't open a pivot table without sliding into my DMs — nobody thought to wonder why she got the title and I got the thank you so much for being such a team player.",
      "I didn't say nothing. I smiled. I said congrats girl in the Slack thread with a confetti emoji. I went to the bathroom on the seventh floor, the one nobody uses, and I sat in the stall and I felt my throat close up like a fist around something it wouldn't let me say.",
      "Here's what I know about voice: you don't lose it all at once. You lose it the way a candle goes out in a room nobody's watching.",
      "It started small. Somebody calling me Lie-la instead of Lee-la and me letting it slide because correcting people felt like making a scene. Then it was laughing at jokes that weren't funny. Then it was no I don't mind staying late. Then it was no it's fine when it wasn't fine. Then it was I don't really have a strong opinion on that in a meeting where I had the only opinion that mattered. Then one day I called my mama and she said, Baby, you sound funny. You catching something? I said no. But I was. I was catching the disease where you swallow yourself for so long you forget the taste of your own mouth.",
      "My grandmama don't play that.",
      "She made me come into the kitchen. Sat me down at the table where I used to do my homework when I was seven. Put a plate of greens in front of me and said, Eat. Then talk. And don't whisper. I'm old, not deaf.",
      "So I ate. And I talked. I told her about Brittany. About the meetings. About how I practice what I'ma say in the shower and then say something different in the room. About how I sang in the car last Tuesday and didn't recognize the sound coming out my own throat. About how I don't even know if I like the music I listen to or if I just like what won't make nobody at work raise they eyebrow.",
      "She listened the whole time. Didn't interrupt. When I finished she wiped her hands on her apron and she said one thing.",
      "She said: Baby, your voice ain't lost. You just been loaning it out for free.",
      "I think about that sentence every day now.",
      "I went back to work after the holiday. I didn't quit. I didn't make a scene. I didn't post nothing on LinkedIn. What I did was small. Tuesday morning meeting, my boss mispronounced my name and I said, It's Lee-la, actually. Two e's. He said oh sorry and moved on, and the world didn't end. The sky didn't crack. Brittany didn't fire me. I just heard my own voice say my own name correct and it was like somebody handed me back something I didn't know I'd put down.",
      "Then it was bigger things. I don't agree with that approach, here's why. I want to be considered for the senior role. I'd like that in writing, please. No, I can't take that on this week. Yes, I deserve it.",
      "Each one a small unmuting. Each one a candle relit.",
      "I been singing in the car again. Real singing. Off-key, full-chest, windows-up-because-it's-still-mine kind of singing. Last week I went to karaoke with my cousins and I did Killing Me Softly and I closed my eyes on the bridge and when I opened them my cousin Reesie was crying. She said, I forgot you sang. I said, Me too.",
      "My grandmama died in April. She was eighty-nine. At her funeral I stood up and I spoke and I didn't read off a paper. I told the church about the kitchen, the greens, the sentence. I told them my voice had been on loan and she called the loan due. I told them she gave me back to myself. And then — because I knew she'd want it — I sang.",
      "I'm still finding it. The voice. Some days it's loud and sure. Some days it's a whisper I gotta coax out. But it's mine now. I know the difference between speaking and being spoken through. I know the difference between agreeable and absent. I know my name, two e's, and I know the sound of it in my own mouth.",
      "I used to be loud. I'm getting back there.",
    ],
  },
  {
    slug: "embracing-authenticity",
    name: "Zuri",
    title: "Embracing Authenticity",
    tease: "Authenticity, it turns out, is not a thing you achieve. It's a door you walk through.",
    excerpt: "Her grandmother's house in Missouri City smells like curry chicken and roti.",
    portraitUrl: portraitEmbracingAuthenticity,
    accentColor: "#D4A5A5",
    format: "standard",
    profile: { age: 29, locale: "Midtown Houston · Missouri City", role: "Granddaughter · In love" },
    body: [
      "Her grandmother's house in Missouri City smells like curry chicken and roti and the specific kind of pine cleaner her grandmother has used since Zuri was a baby. It is Sunday. It is her grandmother's seventy-fifth birthday. Forty-three people are coming. Zuri has brought a peach cobbler, a bottle of rum, and a woman named Dani.",
      "Nobody knows Dani is her girlfriend.",
      "Everybody knows Dani is her best friend, which has been the cover story for two years. Oh that's just my friend Dani, we live together to save on rent, no I'm not seeing nobody right now Auntie, no Auntie I'm not getting any younger I know.",
      "Zuri is twenty-nine years old. Dani is thirty-one. They have been together for two years and four months. They have a one-bedroom in Midtown and a cat named Plantain. Dani makes Zuri laugh harder than anyone has ever made Zuri laugh. Dani knows the way Zuri likes her tea and the way Zuri's voice goes when she's lying and the way Zuri cries at commercials. Dani is her person. Dani is the love of her life.",
      "And Zuri's grandmother is a Pentecostal woman from St. Catherine, Jamaica, who has prayed every night of Zuri's life that she find a good husband.",
      "That's the math.",
      "Today, Zuri is going to do the thing.",
      "She doesn't know what to call it. Coming out feels too clinical. Telling them feels too small. What it actually is, is this: she is going to stop ducking. She is going to walk into her grandmother's living room, holding the hand of the woman she loves, and she is going to say so, in front of the curry chicken and the cousins and the aunties and the framed photo of the Last Supper above the TV.",
      "She has been practicing in the mirror for a month.",
      "The kitchen first. Her aunties are in there, all four of them, in matching aprons, arguing about whether to put okra in the callaloo. Zuri walks in with Dani.",
      "Auntie Pearl. Auntie Norma. Auntie Faye. Auntie May. They turn. This is Dani. Dani is my partner. We been together two years. I love her. She's coming home to meet everybody today as my partner. Not my friend. My partner.",
      "She had practiced different words. Girlfriend sounded like high school. Lover sounded like a Toni Braxton song. Partner was the word that fit in her mouth.",
      "Auntie Pearl's wooden spoon stops moving. Auntie Norma puts down her cup. Auntie Faye looks at Auntie May. Auntie May, who is the oldest and the meanest, looks at Zuri for a long moment.",
      "Then Auntie May says, Zuri, baby, why your hand shaking? Zuri looks down. Her hand, in Dani's hand, is shaking. Because I'm scared, Zuri says. Because I love her. Because I love y'all. Because I been hiding for two years and I don't want to hide today.",
      "Auntie May nods once. Then she says: Well. Pearl. Get the girl some water. She's about to go talk to Mama.",
      "Zuri walks Dani through the house. Through the dining room where her cousins are setting the table. (Hey y'all. This is Dani. My partner. Cousin Reesie says finally and Zuri laughs and almost cries.) Through the den where her uncles are watching the Texans game. (Uncle Vernon. This is Dani. Uncle Vernon says she root for the Cowboys? Zuri says no sir. Uncle Vernon says aight then.) Through the hallway lined with photos of Zuri at every age.",
      "To the back room where her grandmother sits in her chair with a Bible on her lap, the way she does every Sunday afternoon.",
      "Zuri stops in the doorway. This is the room she's been afraid of for ten years.",
      "Her grandmother looks up. Sees Zuri. Sees Dani. Sees their hands. Zuri doesn't speak first. She can't. Her throat has closed.",
      "Her grandmother closes the Bible. Sets it on the side table. Holds out her hand. Come here, baby. Both of you.",
      "They go. They sit on the bed across from her chair. Her grandmother looks at Dani for a long time. Then she looks at Zuri. And she says, in the accent Zuri has loved her whole life:",
      "You think I didn't know? You think I been on this earth seventy-five years and I don't know my own grandbaby? Zuri. Listen to me. I have prayed for you every night since you was a baby. You know what I prayed?",
      "Zuri shakes her head. I prayed: Lord, let her find somebody who love her like she deserve. I never put a name on it. I never put a body on it. I just said love. And the Lord answered.",
      "She looks at Dani. You good to her? Yes ma'am, Dani says. You stay good to her, her grandmother says, and we don't have no problem.",
      "Zuri puts her face in her hands. She is twenty-nine years old and she is sobbing in her grandmother's back room and her grandmother is patting her knee and Dani is crying too and somewhere in the kitchen Auntie Pearl is laughing about something and the whole house smells like curry chicken and forty-three people are about to find out that Zuri is in love.",
      "The fear she'd carried for ten years was not lighter than she thought. It was heavier than she thought. But she is putting it down now.",
      "She didn't know, until this moment, how much of her energy she'd been spending on hiding. She didn't know how loud her real laugh was. She didn't know that her grandmother had been waiting for her — not for some hypothetical husband, but for Zuri, the actual Zuri, the one who'd been here all along.",
      "Authenticity, it turns out, is not a thing you achieve. It's a door you walk through.",
      "And on the other side, the people who love you — the ones who really love you — were already setting a place for you at the table. You just had to come home.",
    ],
  },
  {
    slug: "breaking-the-chains",
    name: "Amina",
    title: "Breaking the Chains",
    tease: "Chains are heavy. Even when you carry them yourself. Especially then.",
    excerpt: "She packed at 4 a.m. while he slept.",
    portraitUrl: portraitBreakingTheChains,
    accentColor: "#C9A961",
    format: "inventory",
    profile: { age: 34, locale: "Houston → Lake Charles", role: "Mother · Free for 93 days" },
    body: [
      "She packed at 4 a.m. while he slept.",
      "She left the chain on the front door unlatched on the way out so it wouldn't click.",
      "She drove south. She drove past the city limits and she didn't look back at the rearview because she didn't trust what would happen if she did. Her son slept the whole way to her sister's house in Lake Charles. He's three. He won't remember most of it. That is the only mercy she has been granted.",
      "When her sister opened the door at 7 a.m., Amina did not collapse. She did not cry. She handed the diaper bag to her sister, walked into the spare bedroom, sat on the edge of the bed, and stared at the wall for forty minutes. Her sister did not ask anything. Her sister made coffee. Her sister fed her son scrambled eggs. Her sister made phone calls. Her sister got her a lawyer. Her sister got her a restraining order. Her sister got her a job at the school where she worked.",
      "Three weeks later, Amina took her son to a park for the first time as a free woman. She watched him climb the slide and she watched him laugh and she watched him not flinch when an adult walked up behind him and she realized, sitting on that bench, that he hadn't laughed like that in months.",
      "She had been telling herself she was staying for him. She had been the one keeping him in the cage with her.",
      "That night she wrote in a notebook her sister had given her. She wrote one line: Chains are heavy. Even when you carry them yourself. Especially then.",
      "She is still afraid of him. She probably always will be. The restraining order is taped to her refrigerator. She checks the locks twice a night. She keeps the porch light on. Some sounds still make her flinch — a door slamming, a male voice raised in the next aisle of the grocery store, the specific cadence of footsteps coming up stairs.",
      "But her son sleeps through the night now. And so does she.",
      "That is what breaking chains looks like, she has learned. Not the dramatic moment of snapping. Just the quiet accumulation of unflinched mornings. Just the stack of nights you slept the whole way through. Just the slow, daily, unspectacular reclaiming of your own body, your own breath, your own front door — the one you can lock from the inside, against anybody, including the person you used to think you couldn't live without.",
      "She is thirty-four years old. She has been free for ninety-three days. She is counting.",
    ],
    formatData: {
      inventoryTook: [
        "The diaper bag",
        "Her son",
        "Her son's stuffed elephant",
        "Her son's inhaler",
        "Bluey, the blue blanket",
        "Phone, charger, ID",
        "Fourteen months of cash, hidden in a tampon box",
        "Her grandmother's gold cross",
        "A photo of her mother",
        "A photo of her sister",
        "The keys to her father's Honda Civic",
      ],
      inventoryLeft: [
        "Her wedding ring on the kitchen counter",
        "Her engagement ring on the kitchen counter",
        "A three-line note: I tried. I can't do this anymore. Don't look for us.",
        "The bruise on her left ribcage from Tuesday",
        "The other one on her thigh from a month ago",
        "The one inside her jaw that nobody can see",
        "Five years of I'm sorry babys",
        "Five years of I'll change",
        "Five years of you make me do this",
        "The version of herself who thought surviving was the same as living",
      ],
    },
  },
  {
    slug: "warrior-of-the-streets",
    name: "Kesha",
    title: "Warrior of the Streets",
    tease: "The war ends because, one day, you decide you ain't gotta fight yourself anymore.",
    excerpt: "Kesha is twenty-six and she ain't cried since she was eleven.",
    portraitUrl: portraitWarriorOfTheStreets,
    accentColor: "#4A1F1F",
    format: "standard",
    profile: { age: 26, locale: "Fifth Ward, Houston", role: "Mother of two · Third shift" },
    body: [
      "Kesha is twenty-six and she ain't cried since she was eleven.",
      "She knows the exact day. November something. Her uncle laid out on the porch on Lyons. Police tape, her mama screaming, and a neighbor lady saying not in front of the baby like Kesha wasn't already grown by then. Grown is what the Fifth Ward makes you whether you ready or not. After that day, the tears just stopped coming. Like a faucet she didn't know she could turn off, except now she can't find the handle.",
      "Now Kesha got two boys. Marquise and KJ. Eight and four. She got a job at the warehouse off 610, third shift, because third shift pays a dollar more an hour and that dollar is groceries. She got a Glock in her glove box that she don't talk about. She got a mama who calls every Sunday and a father she ain't seen since the second grade. She got a body that knows how to take a punch without flinching, knows how to walk past trouble without looking, knows how to be small and dangerous at the same time.",
      "What she don't got is sleep.",
      "The thing about being a warrior is the war don't end when you come home. The war just moves. Comes inside with you. Sits on the edge of the bed at 4 a.m. when the boys are finally quiet and the only sound is the box fan and the dog two doors down. The war whispers: you forgot to pay the light bill. KJ's coughing again. Marquise needs new shoes. That man called. That bill came. That cousin texted. Don't sleep. Don't slip. Don't soft.",
      "Don't soft. That was the rule.",
      "It's a Tuesday in July when it breaks her.",
      "She's sitting in her car in the H-E-B parking lot on Cullen, engine off, AC off, sweating through her work shirt because she ain't ready to walk in yet. She got eighty-three dollars and a list her mama made for the cookout Saturday. Ribs, foil pans, lemons, ice. Easy. She can do this. She's done this.",
      "Then her phone buzzes. It's Marquise. He sent her a picture from the school art show — him standing next to a drawing he made. He drew his family. Three stick figures: him, KJ, and her. He drew himself smiling. He drew KJ smiling. He drew her with a straight line for a mouth. Not a frown. Just a line. Like his mama don't smile. Like his mama is a soldier, not a person.",
      "That's when it comes. Not loud. Just slow. Just water leaking out the corners of her eyes while she sits in the H-E-B parking lot looking at a stick figure with no smile. She don't wipe it. She lets it run.",
      "She's been a warrior so long she forgot warriors can also be tired. Warriors can also be loved. Warriors can also be eight-year-old girls who lost their uncle on a Tuesday and never got to say it hurt.",
      "She don't paint a mural. She don't write a poem. She don't tell nobody.",
      "What she does is this: she drives home. She lets Marquise show her the drawing in person. She kneels down so she's eye-to-eye with him and she says, Baby, mama got a smile. Mama just been forgetting to use it. You wanna help me practice? And he laughs, and KJ comes running from the back, and she pulls them both into her chest and she breathes for what feels like the first time since 2009.",
      "That night, after the boys are asleep, she takes the Glock out the glove box and locks it in the safe in the closet. Not gone. Just put away. There's a difference.",
      "She lies down. The box fan hums. The dog barks twice and stops. For the first time in years, Kesha sleeps the whole night through.",
      "That's the warrior's secret. The war don't end because you win. The war ends because, one day, you decide you ain't gotta fight yourself anymore.",
    ],
  },
  {
    slug: "strength-in-the-struggle",
    name: "Maya",
    title: "Strength in the Struggle",
    tease: "Strength is not the absence of struggle. Strength is the continuation of struggle.",
    excerpt: "Her body wakes her up before the alarm because her hips hurt. They always hurt now.",
    portraitUrl: portraitStrengthInTheStruggle,
    accentColor: "#D4A5A5",
    format: "timestamps",
    profile: { age: 41, locale: "Houston", role: "Third-grade teacher · Living with lupus" },
    body: [
      "What she has learned, in eight years, is this: strength is not the absence of struggle. Strength is the continuation of struggle. Strength is the third grader she taught to read despite a 6-out-of-10 day. Strength is the soup eaten slow. Strength is the nap without guilt. Strength is the notebook where she has written, eight hundred and seventeen times now, got through.",
      "The struggle is not going to end. The doctors have been honest about that. There is no cure. There is only management. There is only the long, daily, unglamorous practice of getting through.",
      "She used to think she was waiting to be well so her real life could start. She knows now: this is her real life.",
      "The strength is not on the other side of the struggle. The strength is what she is building, hour by hour, inside it.",
      "She turns off the light. The heating pad hums. Tomorrow's pills are already lined up on the kitchen counter. Tomorrow's third graders are already on their way. She closes her eyes. She got through. That's the prayer. That's the victory. That's the whole thing.",
    ],
    formatData: {
      timestamps: [
        { time: "05:47", text: "Her body wakes her up before the alarm because her hips hurt. They always hurt now. Lupus, she has learned, is not a disease that announces itself with drama. It announces itself with hips that hurt at 5:47 a.m. and a fatigue that no amount of coffee touches and a face that swells some days for no reason and a list of medications that takes up half a kitchen drawer." },
        { time: "06:15", text: "Pills. Plaquenil. Methotrexate on Sundays. The blood pressure one. The vitamin D one because her immune system is eating her own collagen for breakfast. She lines them up on the counter in the order her endocrinologist taught her. Swallows them with the protein shake she does not enjoy." },
        { time: "06:42", text: "Shower. She has learned to sit on the little plastic stool because standing for fifteen minutes is sometimes too much, and she would rather sit and have the energy to teach her third graders than stand and crash by 11 a.m." },
        { time: "07:30", text: "The drive to Wesley Elementary. The radio is off. She uses the drive to inventory her body. Hands: stiff but functional. Knees: medium. Brain fog: mild. Energy: 6 out of 10. We can work with 6." },
        { time: "08:15", text: "Twenty-two third graders pour into her classroom and not one of them knows that their teacher is in pain. This is not because she is hiding it. This is because she has decided, every morning for eight years, that her pain is not their inheritance. They get the version of Ms. Maya who can show up. The other version stays in the car." },
        { time: "11:30", text: "Lunch in the teachers' lounge. She eats slow. She does not gossip. She has learned that gossip costs energy she cannot afford." },
        { time: "13:14", text: "A flare hits during silent reading. The fatigue comes first — a wall of it, sudden, like somebody pulled the plug on her battery. Her face starts to feel hot. Her joints start to hum with that low buzz that means trouble, trouble, trouble. She drinks water. She eats a granola bar. She does the breathing her therapist taught her. She makes it to 3:00 p.m. by sheer will." },
        { time: "15:30", text: "She sits in her car in the school parking lot for twenty minutes before she can drive home. Crying a little. Not a lot. The kind of crying that is just water leaking out because the body has run out of ways to say this is hard." },
        { time: "16:45", text: "Home. She takes off her shoes. She gets in bed. She does not feel guilty for getting in bed at 4:45 p.m. on a Tuesday because she has spent eight years unlearning the guilt." },
        { time: "18:30", text: "She wakes from the nap. She is not better. But she is steadier. She heats up the soup her mother made and dropped off Sunday. She eats it slow. She watches a show that doesn't ask anything of her." },
        { time: "20:00", text: "Her son calls — he's nineteen, at TSU, doing fine. They talk about nothing for twenty minutes. He doesn't ask how she's feeling because he knows she'll lie. He tells her about a girl in his philosophy class. She listens. She laughs. The laughter doesn't cost her anything. It is the cheapest fuel she has." },
        { time: "21:15", text: "Pills again. Tea. The heating pad on her hips. Her notebook in her lap. She has been keeping a notebook since the diagnosis. Tonight, she writes: Got through. That's enough. That's always going to be enough." },
        { time: "22:00", text: "Bed. The pain is still there. It will be there tomorrow. It will be there the next day. There is no version of her future that does not contain it." },
      ],
    },
  },
  {
    slug: "rise-from-the-ashes",
    name: "Tasha",
    title: "Rise from the Ashes",
    tease: "The phoenix is not the same bird. The phoenix is a new bird made out of the heat of what burned.",
    excerpt: "The water came up to the picture frames.",
    portraitUrl: portraitRiseFromTheAshes,
    accentColor: "#4A1F1F",
    format: "standard",
    profile: { age: 47, locale: "Kashmere Gardens, Houston", role: "Cookbook author · Survivor" },
    body: [
      "The water came up to the picture frames.",
      "Tasha Marie Williams stood in her living room in late August, in waders her brother-in-law had brought her, and she watched the brown water lap against the bottom edge of a photograph of her mother taken in 1973. The mother in the photograph was younger than Tasha was now. The mother in the photograph did not know her daughter was about to lose everything.",
      "The hurricane had a man's name. Tasha will not say it. She will never say it again. The names should not belong to the storms, she said one night, drunk on her sister's porch six months later. The names should belong to the things you lose.",
      "What the storm took: Her house in Kashmere Gardens that her grandmother had bought in 1962 for nine thousand dollars. The deed in her grandmother's hand. Her wedding album from 1998 (the marriage ended in 2011 but the photos still mattered). Her grandmother's quilts. Her father's record collection — five hundred and forty-three vinyls, including a Johnnie Taylor pressing she'd never finished cataloging. Every photograph of her son before age twelve. Her degree from Texas Southern. Her car. Her clothes. The cookbook she'd been writing for nine years, the one she kept saying she'd back up to the cloud and never did.",
      "What the storm did not take: Her son. Her sister. Her own life. Her mother's wedding ring, which she'd been wearing on her right hand. A photograph of her grandmother that she happened to have in her purse. The recipe for her grandmother's gumbo, which she'd written down on a napkin and which somehow, miraculously, had been in the same purse.",
      "You'd think the list of what survived would feel small. It didn't.",
      "For two months Tasha lived in her sister's spare room and did not cry. She filled out forms. She fought with FEMA. She fought with the insurance company. She fought with the contractor. She fought with the bank. She did not have time to grieve the photographs of her son because she was too busy fighting to make sure he had a place to come home to from college at Christmas.",
      "The crying came later. In April. Eight months after the storm. She was at H-E-B buying tomatoes and a Sade song came on the speakers — No Ordinary Love — and her grandmother had loved Sade, had played her on the record player Tasha lost, and Tasha stood in the produce aisle holding three tomatoes and she sobbed for forty-five minutes.",
      "A woman she did not know put a hand on her shoulder and did not say anything and just stood there with her until she was done.",
      "That was the day Tasha started rebuilding. Not the house. The house was being rebuilt by other hands. Tasha started rebuilding the woman who lived in the house.",
      "Here's the thing about losing everything: it tells you what you actually had.",
      "What Tasha actually had, it turned out, was not the photographs. The photographs had only ever been pictures of the having. What she had was: her son, who FaceTimed her every Sunday from college and told her she was his hero. Her sister, who had given up the spare room without a question. Her body, which had carried her out of her own house through chest-deep water at three in the morning. Her hands, which still remembered her grandmother's gumbo. Her brain, which still remembered the cookbook even if the file was gone. Her name. Her laugh. Her stubbornness. Her capacity to start again.",
      "She started the cookbook over from scratch. She typed it on her sister's laptop. She remembered more of it than she'd expected. The parts she didn't remember, she made up new — and the new parts were sometimes better.",
      "She moved into the rebuilt house in November of the following year. It did not feel like the old house. It felt like a different house with the same address. She put up new photographs — the ones she'd been able to gather from family members, scanned and reprinted. She bought a new record player. She started a new vinyl collection, slow, a few records a month, and the first one she bought was the Sade album from H-E-B.",
      "What rose from the ashes was not the same woman. That's the part nobody tells you. People say rise from the ashes like the phoenix is the same bird. The phoenix is not the same bird. The phoenix is a new bird made out of the heat of what burned.",
      "Tasha is forty-seven. She is a different woman than she was at thirty-eight. She is harder in some places and softer in others. She does not own much, by choice. She does not photograph everything, by choice. She has learned that what cannot be saved cannot be saved, and what survives is what was always going to survive — the people, the recipes, the songs, the self.",
      "The cookbook is finished now. She self-published it last spring. She dedicated it to her grandmother, to her son, to her sister, and to the woman in the produce aisle whose name she never learned.",
      "The dedication reads: For everyone who has lost the house and stayed alive. For everyone who has stood in the kitchen of the new place and tried to remember the grandmother's gumbo. The recipe is on page seventy-four. It tastes different now. It is still good.",
    ],
  },
  {
    slug: "eyes-of-hope",
    name: "Aisha",
    title: "Eyes of Hope",
    tease: "It was not hope for me. It was hope through me.",
    excerpt: "A letter she will write but not send.",
    portraitUrl: portraitEyesOfHope,
    accentColor: "#C9A961",
    format: "letter",
    profile: { age: 23, locale: "Houston · Baylor College of Medicine", role: "First-year medical student" },
    body: [
      "It's the night before. I'm twenty-three years old and tomorrow morning at 8 a.m. I walk into the Baylor College of Medicine for my first day. My white coat is hanging on the back of my door. I've been looking at it for an hour. I'm writing this letter to you because I can't sleep and because there is no one else who would understand what tomorrow means.",
      "You died eleven years ago. I was twelve. You were sixty-seven. You came to America from Lagos in 1982 with a suitcase and four hundred dollars and a daughter — my mother — who was nine. You worked as a nursing aide at Methodist Hospital for thirty years, and at night you read every medical book you could get your hands on, even though you would never be allowed to call yourself a nurse, much less a doctor. The Nigerian credential didn't transfer. The American system didn't believe you. They put you in scrubs and told you to change bedpans, and you did, for thirty years, and you never complained where I could hear, and you raised my mother who raised me, and somewhere in the quiet space between your shifts you decided that what was foreclosed for you would be open for me.",
      "I was the one. You used to say that. You'd hold my face in your hands when I was seven, eight, nine, and you'd say, in the accent I loved, Aisha. You will be the doctor. I see it in your eyes. The eyes of hope. I did not understand, then, that you were not predicting. You were assigning. You were handing me a job.",
      "I am writing this letter to tell you I accepted the job. I am writing this letter to tell you I am also terrified.",
      "Howard was hard. I will not lie to you. Organic chemistry almost broke me sophomore year. There was a night in February of 2022 when I sat on the floor of my dorm room and I called my mother and I told her I wanted to quit. My mother is a kind woman, your daughter, and she did not yell at me. She said: Aisha. Go to bed. Tomorrow you will study. You are not allowed to quit. Your grandmother did not cross an ocean for you to quit at orgo. And then she hung up. And I went to bed. And the next morning I studied. And I got a B in orgo. And I kept going.",
      "I kept going every time it got hard. The MCAT — I took it twice. The first time I scored a 506, which was good, but not good enough. I studied for ten more months. I scored a 517. I cried in the bathroom of the testing center for forty minutes and a stranger asked if I was okay and I said, I just got into medical school. She hugged me. She did not know me. She hugged me anyway. I think you sent her.",
      "The interviews were the hardest part. The white men in suits asking me why I wanted to be a doctor. I learned to tell the answer they wanted to hear, the polished one about service and curiosity and impact. The real answer is: because you wanted to be one and they wouldn't let you. The real answer is: because the hospital where you changed bedpans for thirty years is the hospital across the street from where I will train tomorrow. The real answer is: because my mother cried when I got the acceptance email and her crying was thirty years of your crying coming out of a different body.",
      "Tomorrow I will put on the white coat.",
      "I do not know if I will be a good doctor. I do not know what kind of medicine I will practice yet. I do not know if I will be the one who cures something or the one who holds someone's hand while they die or the one who delivers babies in the small hours. I will probably be all three at different points. That is what medicine is, you used to tell me. The whole spectrum. From the first breath to the last.",
      "What I know is this: I am not walking in there alone. I am walking in there with you, and with my mother, and with every Nigerian woman who ever held a textbook by candlelight, and with every Black girl who was told her dreams were too big, and with that stranger in the testing center bathroom who hugged me when I cried.",
      "I am the eyes of hope, Grandma. Not because hope is mine alone. But because hope was given to me by people who could not carry it any further, and now it is my job to carry it, and to hand it to the patient who needs it, and to whoever comes after me, and someday — if I am lucky enough — to a granddaughter of my own.",
      "I see it now. What you saw in my eyes when I was seven. It was not hope for me. It was hope through me.",
      "That is the whole reason for hope, isn't it? It does not stop where you stop. It just changes hands.",
      "I will close this letter now. The white coat is still hanging on the back of my door. Tomorrow I will put it on. I will introduce myself by your name — my middle name is Adaeze, I have always told them to use it on my badge — and I will walk into the hospital where you changed bedpans, and I will become the thing you were not allowed to become.",
      "I will make you proud. I am already proud. Goodnight, Grandma. Your eyes are open in mine.",
    ],
    formatData: {
      letterPreamble: "Grandma,",
      letterSignoff: "— Aisha Adaeze Okafor, Class of 2030",
    },
  },
  {
    slug: "whispers-of-self-love",
    name: "Risa",
    title: "Whispers of Self-Love",
    tease: "The big version is a billboard. The real version is a whisper.",
    excerpt: "You start small. Not because small is all you can do — but because small is what self-love actually is.",
    portraitUrl: portraitWhispersOfSelfLove,
    accentColor: "#D4A5A5",
    format: "second-person",
    profile: { age: 33, locale: "A small apartment, anywhere", role: "A daily devotion" },
    body: [
      "You start small.",
      "Not because small is all you can do — though some days that's true — but because small is what self-love actually is. The big version is a billboard. The real version is a whisper.",
      "You start with the bed. You make it. You don't have to. Nobody is coming over. You make it anyway. You smooth the comforter. You arrange the pillows. You say nothing while you do it. The bed becomes a small kept promise. I am taking care of where I sleep. That is all. That is enough.",
      "You drink water before you drink coffee. The first thing your body gets is the thing it actually needs. The coffee can wait fifteen minutes. The body has been waiting for years.",
      "You eat breakfast standing at the kitchen window. Toast and jam. Or eggs. Or the leftover rice with an egg cracked on top. You eat slow. You watch the light. The light is doing nothing dramatic. The light is just there. You are just there. This is the whole practice.",
      "You put on lotion. All the way down to your feet. You do not skip your feet. The feet have carried you for thirty-three years. The feet deserve lotion.",
      "You text your sister back. She texted you eight days ago. You put it off because answering felt like climbing. You answer now. Two sentences. Hi sis. Thinking of you. Will call this weekend. The reply comes in twenty seconds: Love you. You feel a small heat in your chest. You did not know that small heat was still possible.",
      "You go for a walk. Not for exercise. Not to lose weight. You go because the apartment is too small for the version of you that is trying to come back. You walk three blocks. You notice a tree. You notice the light moving on the brick of a building. You notice that your shoulders have dropped half an inch. You did not even know they had been up.",
      "You light a candle when you come home. Not for any reason. Because the candle smells like cedar and you bought it last March and you have been saving it for some special day that has not come. You stop saving things for the special day. You decide today is the special day. You light the candle.",
      "You take a bath in the middle of the afternoon. On a Tuesday. You do not feel guilty.",
      "You read a poem. Not a long one. Lucille Clifton. Won't you celebrate with me. You read it twice. You cry a small amount. The crying is not sadness. The crying is recognition. Come celebrate with me that everyday something has tried to kill me and has failed. You let the line settle in your chest.",
      "You write three sentences in a notebook. Not a journal. Just three sentences. Today I drank water before coffee. Today I noticed the light on the building. Today I am still here.",
      "You eat dinner sitting down at the table, not on the couch, not over the sink. You set a place. Just for you. You use the cloth napkin. You do not save the cloth napkin for company. You are company.",
      "You take off your bra. You put on the soft pants. You put your phone in the other room. You watch one episode of the show you like. You don't doomscroll. You don't check email. You let the day end gently.",
      "You wash your face. Slow. You touch your own face like it belongs to someone you love. Because it does.",
      "You moisturize. You do the whole routine, the one your friend taught you, the toner and the serum and the cream. You used to skip steps. You don't skip steps anymore. The steps are not vanity. The steps are tenderness, applied to your own face, by your own hands, on a Tuesday.",
      "You go to bed at a reasonable hour. You do not look at your phone in the dark. You lie down and you place one hand on your chest and you feel your heart beating and you say, in your head, the smallest sentence: I am here. I am taking care of you.",
      "You are talking to yourself. You are also talking to the seven-year-old you used to be, who needed somebody to do this and never got it, and you are giving her, finally, the small daily devotion she was always supposed to receive.",
      "You sleep. In the morning you start over.",
      "You do not announce any of this. You do not post about it. You do not call it a self-care routine. You do not name it at all. You just do it. Small. Quiet. Daily.",
      "The whisper is the practice. The whisper is the love. Some seasons of life — most of them, maybe — the whisper is all that's available. That is enough. That has always been enough.",
      "You are here. You are taking care of you. The rest — the bigger version, the loud version, the billboard — will come if it comes. Or it won't. The whisper, either way, is yours.",
    ],
  },
  {
    slug: "blueprints-of-the-heart",
    name: "Lexa",
    title: "Blueprints of the Heart",
    tease: "Buildings are never finished. There is always something to maintain, something to upgrade.",
    excerpt: "She was a structural engineer for fourteen years before her marriage failed.",
    portraitUrl: portraitBlueprintsOfTheHeart,
    accentColor: "#C9A961",
    format: "blueprint",
    profile: { age: 36, locale: "Acres Homes, Houston", role: "Structural engineer · Architect of her own life" },
    body: [
      "She was a structural engineer for fourteen years before her marriage failed. She is still a structural engineer. The marriage failed anyway. There is, she has come to understand, no profession that protects you from this.",
      "Her name is Lexa Hayes. She is thirty-six. She bought a small house on her own in Acres Homes in October. The marriage ended in March of the year prior. The house has eleven hundred square feet. It is exactly the size she needs.",
      "She approaches her own healing the way she approaches a building. Specs. Materials. Timeline. Code compliance. She is, she has been told, intense. She is, she has come to accept, herself.",
      "The blueprints are in a folder in her desk. They are not finished. Buildings are never finished. There is always something to maintain, something to upgrade, something to improve. But the structure holds. The structure is sound. The structure is hers.",
      "That is what blueprints are for. Not for predicting the building. For making sure the building can stand. She built one. She is standing inside it. She is home.",
    ],
    formatData: {
      blueprintSections: [
        {
          header: "STRUCTURAL OBJECTIVES",
          body: [
            "Build a life that holds her weight without her husband in it.",
            "Build it from the foundation up. Do not skip steps.",
            "Use only materials that are hers. Borrowed materials must be returned by the end of construction.",
          ],
        },
        {
          header: "FOUNDATION — Year One",
          body: [
            "The foundation is therapy. Weekly. She did not believe in therapy until her therapist asked her, in their third session, why she always answered the question what do you want with what her husband had wanted. She did not have an answer. She has been finding the answer for fourteen months.",
            "The foundation is also: coffee with her sister every Sunday. The Bible study she'd quit when she got married because her husband thought it was too much. The running club she'd quit when she got married because her husband wanted her home in the mornings. The friend group from undergrad that she'd let drift because her husband did not like them.",
            "She has been pouring concrete back into all of these places. The foundation is wider now than it has ever been.",
          ],
        },
        {
          header: "LOAD-BEARING WALLS — Year Two",
          body: [
            "Wall One: Her work. She is good at it. She has not let the divorce affect her billable hours. She has, in fact, gotten a promotion. Work is a wall. Work is also not the whole house. She is learning the difference.",
            "Wall Two: Her body. She runs three mornings a week. She lifts twice. She eats food that is actually food. She drinks water. Not as performance. As maintenance. The body is the building she lives in. She is no longer letting it fall into disrepair.",
            "Wall Three: Her solitude. She used to be afraid of it. She used to fill it with podcasts, with phone calls, with men. She does not fill it anymore. She sits in it. She has come to like it. Solitude is a wall now. It holds her up.",
          ],
        },
        {
          header: "ELECTRICAL — Year Two, ongoing",
          body: [
            "Boundaries. She is wiring her life with them, slowly, carefully, code-compliant.",
            "She does not call her ex-husband. She does not respond to his late-night texts. She does not engage with his family beyond holiday cards. She does not date until she has finished the foundation and the walls.",
            "She tells her mother no when she needs to. She tells her boss no when she needs to. She has discovered that the word no is a circuit breaker. Used correctly, it prevents fires.",
          ],
        },
        {
          header: "PLUMBING — Year Three",
          body: [
            "The plumbing is the part of the house that nobody sees but everybody depends on. The plumbing is her capacity to feel things and let them move through her without flooding the house.",
            "She cries when she needs to. She does not perform okay-ness. When she is sad, she is sad. When she is angry, she is angry. When she is happy — and she is, more and more — she lets herself be happy without bracing for the ceiling to fall in.",
            "This is harder than it sounds. The previous house had bad plumbing. She is replacing every pipe.",
          ],
        },
        {
          header: "WINDOWS — Year Three",
          body: [
            "She has decided to let people see her again.",
            "She joins a book club. She goes on a date. The date is fine. The next date is also fine. She does not need them to be more than fine. She is no longer trying to lock down a man like a contractor on a deadline. She is letting people walk through the open house at their own pace, and she is letting herself decide who gets to stay.",
          ],
        },
        {
          header: "ROOF — Year Four",
          body: [
            "The roof is the thing that protects everything else. The roof, for her, is a clear sense of what her life is for. Not what her partner needs. Not what her children need. What her life is for.",
            "She has decided her life is for: making things that hold up. Buildings, friendships, herself. She has decided her life is for: paying attention. To her body, to her people, to the city she has lived in her whole life. She has decided her life is for: learning, slowly, what it feels like to be loved without losing herself in the loving.",
            "That is the roof. It is small. It is steep enough to shed water. It does not leak.",
          ],
        },
        {
          header: "OCCUPANCY",
          body: [
            "She moved into the new structure quietly. There was no ceremony. There never is, for buildings that get it right.",
            "One night, around the four-year mark, she was sitting on her own couch in her own house in Acres Homes, drinking tea, and she realized she had not thought about her ex-husband in eleven days. Not as an absence. Not as a presence. He had simply not occurred to her. The building she had built no longer had a room for him. He had been, she understood, a tenant. He had moved out. She had renovated.",
            "She is the only resident now. She is also the architect. She is also the contractor. She is also the inspector who walks the property every quarter and checks the foundation, the walls, the wiring, the plumbing, the windows, the roof.",
          ],
        },
      ],
    },
  },
  {
    slug: "vision-of-love",
    name: "Siah",
    title: "Vision of Love",
    tease: "I am holding it for the same reason a lighthouse holds its light.",
    excerpt: "This is the love I am waiting for. I have written it down so I do not forget when the loneliness gets loud.",
    portraitUrl: portraitVisionOfLove,
    accentColor: "#D4A5A5",
    format: "manifesto",
    profile: { age: 28, locale: "Houston", role: "Writer · Holding the standard" },
    body: [
      "This is the love I am waiting for. I have written it down so I do not forget when the loneliness gets loud.",
      "The love I am waiting for will not require me to make myself small. I have practiced making myself small. I am thirty pounds heavier than I was at twenty-two and I have learned to take up the room my body actually occupies. I have learned that my laugh is loud and that this is not a defect. I have learned that I am smart in ways that make some men uncomfortable. I have learned that I will not apologize for any of these things ever again.",
      "The love I am waiting for will know my name. Not my name as in Siah. My name as in the longer version of who I am. The version that gets up at five-thirty to write before work. The version that calls my mother every Sunday because my mother is a hard woman and I am her only easy thing. The version that listens to gospel and trap in the same playlist and does not think this is a contradiction. The version that prays. The version that curses. The version that has been alone for eleven years now, and is not bitter, and is not desperate, and is also not lying about being fine.",
      "The love I am waiting for will see all of that and will not flinch.",
      "The love I am waiting for will be kind. This is the only non-negotiable. He can be tall or not, dark or not, employed in any field, devout or skeptical, talkative or quiet, born here or somewhere else. He must be kind. Not nice — nice is performed. Kind is the way he treats the waiter when he thinks I am not watching. Kind is the way he speaks to his mother on the phone. Kind is whether he knows the names of the people who clean his office building.",
      "I have learned, in twenty-eight years of paying attention, that kindness is not a feeling. Kindness is a discipline. The love I am waiting for will be a man who has been practicing.",
      "The love I am waiting for will let me love him back. I have watched too many of my friends pour into men who could not receive. The men who deflect. The men who minimize. The men who turn every offering into a transaction. The love I am waiting for will let me bring him soup when he is sick. Will let me say I am proud of you and not laugh it off. Will let me cry on his chest and will not need to fix it. Will receive me. Reception is a skill. The love I am waiting for will have the skill.",
      "The love I am waiting for will be moving in the same direction I am. He does not have to be at the same place. He has to be facing the same way. He has to want to grow. He has to want me to grow. He has to understand that I am going to keep becoming, every year, a slightly different woman — and that he is going to keep becoming a slightly different man — and that the work of being together is the daily, patient, generous work of meeting each other again, over and over, in the new versions.",
      "The love I am waiting for will not be a destination. It will be a direction.",
      "The love I am waiting for will let me go to bed angry sometimes and will not punish me for it in the morning. Will know that I am not perfect. Will love the parts of me that are difficult. Will tell me, gently, when I am in the wrong, and will let me tell him the same.",
      "The love I am waiting for will laugh at my jokes. The good ones and the bad ones. He will think I am the funniest woman he knows. I will think the same of him. We will be each other's first audience.",
      "The love I am waiting for will have his own life. I do not want to be somebody's whole world. I want to be somebody's home, and I want him to be mine. I want partnership, not possession. I want a man who is whole when I am not in the room, because then his choosing me is a choice, not a need.",
      "The love I am waiting for will say I love you and mean it. Will say I'm sorry and mean it. Will say I was wrong and mean it. Will say thank you for the small things. Will say I see you on the days I do not feel seen.",
      "The love I am waiting for may not arrive when I expect. This is the part that is hard. I am twenty-eight. My friends are getting married. My mother has stopped asking but is asking with her eyes.",
      "I would rather wait for what I have written here than settle for something less, because I have watched too many women settle for something less and I have seen what less does to a woman over time.",
      "If the love I am waiting for never comes, I will have lived the life I wanted. If it does come — and I believe it will — I will know him by the kindness. By the way he says my name. By the way he receives me.",
      "I am not lowering the standard. I am holding it.",
    ],
    formatData: {
      manifestoClosing: [
        "I am holding it for the same reason a lighthouse holds its light.",
        "So that the right ship will know where to come.",
        "So that I will know him when he arrives.",
        "So that I will not, in the dark, mistake some other vessel for the one that is mine.",
        "This is the vision. I am keeping it. It is keeping me, too.",
      ],
    },
  },
];

export const getStoryBySlug = (slug: string) => stories.find((s) => s.slug === slug);
export const getNextStory = (slug: string) => {
  const i = stories.findIndex((s) => s.slug === slug);
  if (i === -1) return null;
  return stories[(i + 1) % stories.length];
};
