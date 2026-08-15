export type QuizQuestion = readonly [question: string, answers: readonly string[], correct: number, explanation: string];

export interface QuizGameDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  questions: readonly QuizQuestion[];
}

const q = (question: string, answers: string[], correct: number, explanation: string): QuizQuestion =>
  [question, answers, correct, explanation] as const;

export const quizGames: QuizGameDefinition[] = [
  {
    slug: "guess-the-bible-character",
    shortTitle: "Guess the Character",
    title: "Guess the Bible Character",
    description: "Identify people from Scripture through clues drawn from their stories.",
    questions: [
      q("I built an ark before the flood. Who am I?", ["Noah", "Abraham", "Lot"], 0, "God instructed Noah to build the ark in Genesis 6."),
      q("I defeated a giant with a sling and a stone. Who am I?", ["Saul", "David", "Samson"], 1, "David defeated Goliath while trusting in God, as told in 1 Samuel 17."),
      q("God called me from a burning bush. Who am I?", ["Moses", "Elijah", "Joshua"], 0, "Moses received God's call at the burning bush in Exodus 3."),
      q("I interpreted dreams in Egypt and became a ruler. Who am I?", ["Joseph", "Daniel", "Jacob"], 0, "Joseph interpreted Pharaoh's dreams and was placed over Egypt."),
      q("I became queen and risked my life for my people. Who am I?", ["Ruth", "Deborah", "Esther"], 2, "Esther approached the king to plead for her people."),
      q("I spent a night in a lions' den. Who am I?", ["Daniel", "Jeremiah", "Jonah"], 0, "Daniel was protected in the lions' den in Daniel 6."),
      q("I denied knowing Jesus three times. Who am I?", ["Peter", "Thomas", "Judas"], 0, "Peter denied Jesus three times before the rooster crowed."),
      q("I climbed a tree to see Jesus. Who am I?", ["Nicodemus", "Zacchaeus", "Bartimaeus"], 1, "Zacchaeus climbed a sycamore tree in Luke 19."),
    ],
  },
  {
    slug: "bible-true-or-false",
    shortTitle: "True or False",
    title: "Bible True or False",
    description: "Test familiar claims and discover what the biblical text actually says.",
    questions: [
      q("Noah took exactly two of every kind of animal into the ark.", ["True", "False"], 1, "Genesis 7 distinguishes between clean animals, taken by sevens, and others taken by pairs."),
      q("David was Israel's first king.", ["True", "False"], 1, "Saul was Israel's first king; David succeeded him."),
      q("Jesus was born in Bethlehem.", ["True", "False"], 0, "Matthew 2 and Luke 2 identify Bethlehem as Jesus' birthplace."),
      q("The book of Psalms contains 150 psalms.", ["True", "False"], 0, "The canonical book of Psalms is arranged in 150 psalms."),
      q("Paul was one of the original twelve disciples.", ["True", "False"], 1, "Paul became an apostle after Jesus' resurrection; he was not one of the Twelve."),
      q("Ruth was an Israelite by birth.", ["True", "False"], 1, "Ruth was a Moabite who joined Naomi and the people of Israel."),
      q("The fruit of the Spirit is listed in Galatians 5.", ["True", "False"], 0, "Galatians 5:22–23 lists the fruit of the Spirit."),
      q("Jonah traveled willingly to Nineveh the first time God called him.", ["True", "False"], 1, "Jonah initially fled in the opposite direction."),
    ],
  },
  {
    slug: "which-book-of-the-bible",
    shortTitle: "Name the Book",
    title: "Which Book of the Bible Is It?",
    description: "Connect well-known events and passages with the books in which they appear.",
    questions: [
      q("In which book is the creation account found?", ["Genesis", "Exodus", "Psalms"], 0, "The Bible opens with the creation account in Genesis 1–2."),
      q("Where do we read about the fruit of the Spirit?", ["Romans", "Galatians", "Hebrews"], 1, "The fruit of the Spirit appears in Galatians 5:22–23."),
      q("Which book tells the story of the walls of Jericho falling?", ["Joshua", "Judges", "Numbers"], 0, "The fall of Jericho is narrated in Joshua 6."),
      q("Where is the account of Pentecost recorded?", ["John", "Acts", "Romans"], 1, "Acts 2 records the coming of the Spirit at Pentecost."),
      q("Which book contains the vision of the valley of dry bones?", ["Isaiah", "Jeremiah", "Ezekiel"], 2, "The vision is found in Ezekiel 37."),
      q("Where is the armor of God described?", ["Ephesians", "Philippians", "Colossians"], 0, "Paul describes the armor of God in Ephesians 6."),
      q("Which Gospel includes the parable of the Good Samaritan?", ["Matthew", "Luke", "John"], 1, "The parable appears in Luke 10."),
      q("Which book tells the story of Esther?", ["Esther", "Ezra", "Nehemiah"], 0, "The book bearing Esther's name tells her story."),
    ],
  },
  {
    slug: "jesus-quiz",
    shortTitle: "Jesus Quiz",
    title: "How Much Do You Know About Jesus?",
    description: "Review key moments, teachings, and encounters from the four Gospels.",
    questions: [
      q("Where did Jesus grow up?", ["Bethlehem", "Nazareth", "Jerusalem"], 1, "Jesus grew up in Nazareth and was known as Jesus of Nazareth."),
      q("Who baptized Jesus?", ["Peter", "John the Baptist", "James"], 1, "John baptized Jesus in the Jordan River."),
      q("How many apostles did Jesus appoint?", ["Seven", "Twelve", "Seventy"], 1, "Jesus appointed twelve apostles."),
      q("What did Jesus calm while crossing the lake?", ["A storm", "A crowd", "A fire"], 0, "The Gospels recount Jesus calming a violent storm."),
      q("Who did Jesus call out of a tomb?", ["Lazarus", "Jairus", "Stephen"], 0, "Jesus raised Lazarus in John 11."),
      q("Which prayer begins with 'Our Father'?", ["Jesus' prayer in Gethsemane", "The Lord's Prayer", "Mary's song"], 1, "Jesus taught the Lord's Prayer to his disciples."),
      q("Where was Jesus crucified?", ["Golgotha", "Bethany", "Capernaum"], 0, "The Gospels name the place Golgotha, meaning Place of a Skull."),
      q("Who first announced Jesus' resurrection to the disciples in John's Gospel?", ["Mary Magdalene", "Peter", "Thomas"], 0, "Mary Magdalene told the disciples that she had seen the Lord."),
    ],
  },
  {
    slug: "moses-quiz",
    shortTitle: "Moses Quiz",
    title: "How Much Do You Know About Moses?",
    description: "Follow Moses from the Nile to Sinai and the edge of the promised land.",
    questions: [
      q("Why was the infant Moses placed in a basket?", ["To cross the Nile", "To protect him from Pharaoh's decree", "To hide food"], 1, "Moses' mother acted to protect him from Pharaoh's order in Exodus 2."),
      q("Who found Moses in the basket?", ["Pharaoh's daughter", "Miriam", "Zipporah"], 0, "Pharaoh's daughter found and adopted Moses."),
      q("What sign first drew Moses toward God's call?", ["A pillar of cloud", "A burning bush", "A divided sea"], 1, "Moses approached a bush that burned without being consumed."),
      q("Who spoke alongside Moses before Pharaoh?", ["Aaron", "Joshua", "Caleb"], 0, "Aaron served as Moses' spokesman."),
      q("What sea did Israel cross after leaving Egypt?", ["The Dead Sea", "The Sea of Galilee", "The Red Sea"], 2, "Exodus describes Israel passing through the sea on dry ground."),
      q("Where did Moses receive the covenant commandments?", ["Mount Carmel", "Mount Sinai", "Mount Zion"], 1, "Moses received the commandments at Mount Sinai."),
      q("What food appeared on the ground in the wilderness?", ["Manna", "Figs", "Barley"], 0, "God provided manna for Israel in the wilderness."),
      q("Who succeeded Moses as Israel's leader?", ["Aaron", "Joshua", "Samuel"], 1, "Joshua was commissioned to lead Israel after Moses."),
    ],
  },
  {
    slug: "old-testament-quiz",
    shortTitle: "Old Testament",
    title: "Old Testament Quiz",
    description: "Test your knowledge of Israel's story, wisdom, prophets, and covenant hope.",
    questions: [
      q("Which judge defeated the Midianites with three hundred men?", ["Gideon", "Samson", "Jephthah"], 0, "Judges 7 recounts Gideon's victory with three hundred men."),
      q("Who confronted David after his sin involving Bathsheba?", ["Samuel", "Nathan", "Elijah"], 1, "The prophet Nathan confronted David in 2 Samuel 12."),
      q("Which king asked God for wisdom?", ["Saul", "Solomon", "Hezekiah"], 1, "Solomon asked for discernment to govern the people."),
      q("Who challenged the prophets of Baal on Mount Carmel?", ["Elisha", "Isaiah", "Elijah"], 2, "Elijah's confrontation is recorded in 1 Kings 18."),
      q("Which prophet was swallowed by a great fish?", ["Jonah", "Amos", "Hosea"], 0, "Jonah 1 describes a great fish appointed by God."),
      q("Who interpreted the writing on the wall for Belshazzar?", ["Ezra", "Daniel", "Nehemiah"], 1, "Daniel interpreted the message in Daniel 5."),
      q("Which book follows Proverbs in the usual English ordering?", ["Ecclesiastes", "Job", "Isaiah"], 0, "Ecclesiastes follows Proverbs in the standard English Protestant ordering."),
      q("Who rebuilt Jerusalem's walls after the exile?", ["Zerubbabel", "Nehemiah", "Mordecai"], 1, "Nehemiah led the rebuilding of Jerusalem's walls."),
    ],
  },
  {
    slug: "new-testament-quiz",
    shortTitle: "New Testament",
    title: "New Testament Quiz",
    description: "Explore the Gospels, Acts, the letters, and the church's earliest witness.",
    questions: [
      q("Who wrote Acts as the second part of a two-volume work?", ["Luke", "Paul", "Peter"], 0, "Luke and Acts address the same recipient and form a two-volume narrative."),
      q("On which road did Saul encounter the risen Jesus?", ["Jericho", "Damascus", "Emmaus"], 1, "Acts 9 places Saul's encounter on the road to Damascus."),
      q("Who was the first Christian martyr named in Acts?", ["Stephen", "James", "Barnabas"], 0, "Stephen was killed after his speech in Acts 7."),
      q("Which couple explained the way of God more accurately to Apollos?", ["Ananias and Sapphira", "Priscilla and Aquila", "Mary and Joseph"], 1, "Priscilla and Aquila instructed Apollos in Acts 18."),
      q("Which letter contains the chapter commonly called the love chapter?", ["Romans", "1 Corinthians", "Ephesians"], 1, "1 Corinthians 13 describes the character and necessity of love."),
      q("Who received the vision recorded in Revelation?", ["John", "Peter", "Paul"], 0, "Revelation identifies its human recipient and writer as John."),
      q("In which city were Jesus' followers first called Christians?", ["Jerusalem", "Rome", "Antioch"], 2, "Acts 11:26 says the disciples were first called Christians in Antioch."),
      q("Which short letter concerns the reception of Onesimus?", ["Philemon", "Titus", "Jude"], 0, "Paul appeals to Philemon concerning Onesimus."),
    ],
  },
];

export const gameBySlug = new Map(quizGames.map((game) => [game.slug, game]));
