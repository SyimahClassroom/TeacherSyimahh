// Grammar Buddy Burger Madness & Tense Showdown Data
window.GRAMMAR_BUDDY_BURGER_LEVELS = {
  "1": {
    "title": "Level 1: Present Habit Ticket",
    "subtitle": "Check daily routines, time clues like 'every day', and he/she/it verb endings.",
    "tickets": [
      { "id": "L1-1", "sentence": "He walk to school with his brother every day.", "targetVerb": "walk", "isCorrect": false, "expectedForm": "walks", "explanation": "The subject is 'he' and 'every day' shows a habit, so 'walk' needs '-s' to become 'walks'." },
      { "id": "L1-2", "sentence": "She walks to school every day.", "targetVerb": "walks", "isCorrect": true, "expectedForm": "walks", "explanation": "'Walks' matches the singular subject 'she' for a daily routine." },
      { "id": "L1-3", "sentence": "We eats lunch in the canteen every day.", "targetVerb": "eats", "isCorrect": false, "expectedForm": "eat", "explanation": "With the subject 'we' in the Simple Present, use the base verb 'eat' without '-s'." },
      { "id": "L1-4", "sentence": "Aina watches cartoons every Sunday.", "targetVerb": "watches", "isCorrect": true, "expectedForm": "watches", "explanation": "Aina is one person ('she'), and 'watches' correctly adds '-es' for a Sunday habit." },
      { "id": "L1-5", "sentence": "My sister studys English every night.", "targetVerb": "studys", "isCorrect": false, "expectedForm": "studies", "explanation": "For 'my sister' ('she'), 'study' changes 'y' before a consonant to '-ies' ('studies')." },
      { "id": "L1-6", "sentence": "They play football on the school field every evening.", "targetVerb": "play", "isCorrect": true, "expectedForm": "play", "explanation": "'They' takes the base form 'play' for a regular afternoon habit." }
    ]
  },
  "2": {
    "title": "Level 2: Past Tense Grill",
    "subtitle": "Check past time clues and regular or irregular Simple Past verbs.",
    "tickets": [
      { "id": "L2-1", "sentence": "They go to the library yesterday.", "targetVerb": "go", "isCorrect": false, "expectedForm": "went", "explanation": "'Yesterday' marks a finished past action, and the irregular past form of 'go' is 'went'." },
      { "id": "L2-2", "sentence": "Ali ate a banana yesterday.", "targetVerb": "ate", "isCorrect": true, "expectedForm": "ate", "explanation": "'Ate' is the correct irregular past tense of 'eat' with 'yesterday'." },
      { "id": "L2-3", "sentence": "The bus stoped near our school yesterday.", "targetVerb": "stoped", "isCorrect": false, "expectedForm": "stopped", "explanation": "'Stop' doubles the final consonant 'p' before '-ed' to become 'stopped'." },
      { "id": "L2-4", "sentence": "We brought food to the picnic last Saturday.", "targetVerb": "brought", "isCorrect": true, "expectedForm": "brought", "explanation": "'Brought' is the right irregular past form of 'bring' for 'last Saturday'." },
      { "id": "L2-5", "sentence": "She writed a letter to her friend last night.", "targetVerb": "writed", "isCorrect": false, "expectedForm": "wrote", "explanation": "'Write' is an irregular verb whose past tense is 'wrote' for 'last night'." },
      { "id": "L2-6", "sentence": "We visited our grandmother in the village last week.", "targetVerb": "visited", "isCorrect": true, "expectedForm": "visited", "explanation": "'Visited' is the proper regular past-tense form for 'last week'." }
    ]
  },
  "3": {
    "title": "Level 3: Combo Tense Challenge",
    "subtitle": "Compare Simple Present and Simple Past with varied subjects and time clues.",
    "tickets": [
      { "id": "L3-1", "sentence": "I go to school yesterday.", "targetVerb": "go", "isCorrect": false, "expectedForm": "went", "explanation": "Because the time clue is 'yesterday', the verb must be past tense 'went', not present 'go'." },
      { "id": "L3-2", "sentence": "I water the flowers in the garden every afternoon.", "targetVerb": "water", "isCorrect": true, "expectedForm": "water", "explanation": "'Every afternoon' signals a present routine, and 'I' uses the base verb 'water'." },
      { "id": "L3-3", "sentence": "The birds flyed over our school yesterday.", "targetVerb": "flyed", "isCorrect": false, "expectedForm": "flew", "explanation": "'Fly' has the irregular past form 'flew', not 'flyed'." },
      { "id": "L3-4", "sentence": "Our teacher carries a bag to school every day.", "targetVerb": "carries", "isCorrect": true, "expectedForm": "carries", "explanation": "'Our teacher' is singular ('he/she'), so 'carries' matches the daily routine." },
      { "id": "L3-5", "sentence": "She walk to the shop yesterday.", "targetVerb": "walk", "isCorrect": false, "expectedForm": "walked", "explanation": "'Yesterday' means the action is in the past, so 'walk' should be 'walked'." },
      { "id": "L3-6", "sentence": "We swam across the cool pool together.", "targetVerb": "swam", "isCorrect": true, "expectedForm": "swam", "explanation": "'Swam' is the correct irregular Simple Past form of 'swim'." }
    ]
  },
  "4": {
    "title": "Level 4: Speed Run Kitchen",
    "subtitle": "Mixed tense orders! Choose Timed (15s per ticket) or Untimed mode.",
    "tickets": [
      { "id": "L4-1", "sentence": "My friends plays football after school every day.", "targetVerb": "plays", "isCorrect": false, "expectedForm": "play", "explanation": "'My friends' means 'they', so use 'play' without '-s' for a daily habit." },
      { "id": "L4-2", "sentence": "I saw a rainbow yesterday.", "targetVerb": "saw", "isCorrect": true, "expectedForm": "saw", "explanation": "'Saw' is the right past form of 'see' for 'yesterday'." },
      { "id": "L4-3", "sentence": "He losed his pencil yesterday.", "targetVerb": "losed", "isCorrect": false, "expectedForm": "lost", "explanation": "The irregular past form of 'lose' is 'lost'." },
      { "id": "L4-4", "sentence": "She speaks English clearly during class presentations.", "targetVerb": "speaks", "isCorrect": true, "expectedForm": "speaks", "explanation": "'She' pairs with 'speaks' in the Simple Present." },
      { "id": "L4-5", "sentence": "We planed our class party yesterday.", "targetVerb": "planed", "isCorrect": false, "expectedForm": "planned", "explanation": "'Plan' is a short CVC verb, so it doubles 'n' to become 'planned' in the past." },
      { "id": "L4-6", "sentence": "They were happy after the match yesterday.", "targetVerb": "were", "isCorrect": true, "expectedForm": "were", "explanation": "'They' takes 'were' in the Simple Past." }
    ]
  },
  "5": {
    "title": "Level 5: Grand Master Banquet",
    "subtitle": "Final banquet check with varied subjects, negatives, and past/present clues.",
    "tickets": [
      { "id": "L5-1", "sentence": "He does not play badminton on Mondays.", "targetVerb": "does not play", "isCorrect": true, "expectedForm": "does not play", "explanation": "'He' uses 'does not' plus the base verb 'play' for a regular Monday routine." },
      { "id": "L5-2", "sentence": "I did not went to school yesterday.", "targetVerb": "did not went", "isCorrect": false, "expectedForm": "did not go", "explanation": "After 'did not', always use the base verb 'go', not 'went'." },
      { "id": "L5-3", "sentence": "My brother has a blue bicycle.", "targetVerb": "has", "isCorrect": true, "expectedForm": "has", "explanation": "'My brother' ('he') uses 'has' in the Simple Present." },
      { "id": "L5-4", "sentence": "They does not walk to school every day.", "targetVerb": "does not", "isCorrect": false, "expectedForm": "do not", "explanation": "'They' goes with 'do not' in the Simple Present, not 'does not'." },
      { "id": "L5-5", "sentence": "We did not eat breakfast yesterday.", "targetVerb": "did not eat", "isCorrect": true, "expectedForm": "did not eat", "explanation": "'Did not eat' correctly pairs past auxiliary 'did not' with base verb 'eat'." },
      { "id": "L5-6", "sentence": "She are my best friend.", "targetVerb": "are", "isCorrect": false, "expectedForm": "is", "explanation": "Singular subject 'she' takes 'is' in the Simple Present, not 'are'." }
    ]
  }
};

// 28 Questions across 4 levels for Tense Showdown
window.GRAMMAR_BUDDY_SHOWDOWN_BANK = [
  // Level 1: Habits & Yesterday (7 questions)
  { "id": "TS-01", "level": 1, "sentence": "We often watch scary movies during family night.", "targetVerb": "watch", "tense": "present", "reason": "'Watch' is Simple Present and 'often' shows a regular activity." },
  { "id": "TS-02", "level": 1, "sentence": "I went to school yesterday morning.", "targetVerb": "went", "tense": "past", "reason": "'Went' is Simple Past and 'yesterday morning' tells us it happened earlier." },
  { "id": "TS-03", "level": 1, "sentence": "I brush my teeth before going to bed every night.", "targetVerb": "brush", "tense": "present", "reason": "'Brush' is Simple Present and 'every night' shows a daily habit." },
  { "id": "TS-04", "level": 1, "sentence": "Ali ate a sweet mango after lunch yesterday.", "targetVerb": "ate", "tense": "past", "reason": "'Ate' is Simple Past and 'yesterday' marks finished past time." },
  { "id": "TS-05", "level": 1, "sentence": "They play badminton in the hall on Fridays.", "targetVerb": "play", "tense": "present", "reason": "'Play' is Simple Present for a regular Friday game." },
  { "id": "TS-06", "level": 1, "sentence": "We left the house at seven o'clock this morning.", "targetVerb": "left", "tense": "past", "reason": "'Left' is Simple Past for a completed action this morning." },
  { "id": "TS-07", "level": 1, "sentence": "I water the flowers in the garden every afternoon.", "targetVerb": "water", "tense": "present", "reason": "'Water' is Simple Present and 'every afternoon' shows a routine." },

  // Level 2: -s/-es/-ies vs -ed (7 questions)
  { "id": "TS-08", "level": 2, "sentence": "Aina walks to school with her friend every morning.", "targetVerb": "walks", "tense": "present", "reason": "'Walks' adds '-s' for singular Aina in the Simple Present." },
  { "id": "TS-09", "level": 2, "sentence": "We visited our grandmother in the village last week.", "targetVerb": "visited", "tense": "past", "reason": "'Visited' ends in '-ed' and 'last week' shows past time." },
  { "id": "TS-10", "level": 2, "sentence": "She studies English in her bedroom every night.", "targetVerb": "studies", "tense": "present", "reason": "'Studies' uses '-ies' for 'she' in a regular night routine." },
  { "id": "TS-11", "level": 2, "sentence": "The bus stopped near our school yesterday morning.", "targetVerb": "stopped", "tense": "past", "reason": "'Stopped' is Simple Past with '-ed' for an action yesterday." },
  { "id": "TS-12", "level": 2, "sentence": "He washes his hands before lunch in the kitchen.", "targetVerb": "washes", "tense": "present", "reason": "'Washes' adds '-es' after '-sh' for 'he' in the Simple Present." },
  { "id": "TS-13", "level": 2, "sentence": "She tidied her bedroom before going to bed.", "targetVerb": "tidied", "tense": "past", "reason": "'Tidied' is Simple Past ('-ied') for a finished action." },
  { "id": "TS-14", "level": 2, "sentence": "The teacher explains grammar rules clearly in class.", "targetVerb": "explains", "tense": "present", "reason": "'Explains' is Simple Present for a regular classroom action." },

  // Level 3: Irregular Past Verbs (7 questions)
  { "id": "TS-15", "level": 3, "sentence": "The birds flew high over the school playground this morning.", "targetVerb": "flew", "tense": "past", "reason": "'Flew' is the irregular Simple Past form of 'fly'." },
  { "id": "TS-16", "level": 3, "sentence": "We swam in the clear sea near the island yesterday.", "targetVerb": "swam", "tense": "past", "reason": "'Swam' is the irregular Simple Past form of 'swim'." },
  { "id": "TS-17", "level": 3, "sentence": "She wrote a neat note in her notebook last night.", "targetVerb": "wrote", "tense": "past", "reason": "'Wrote' is the irregular Simple Past form of 'write'." },
  { "id": "TS-18", "level": 3, "sentence": "Mother bought fresh fish and vegetables at the market.", "targetVerb": "bought", "tense": "past", "reason": "'Bought' is the irregular Simple Past form of 'buy'." },
  { "id": "TS-19", "level": 3, "sentence": "We brought fruit and bread for our picnic yesterday.", "targetVerb": "brought", "tense": "past", "reason": "'Brought' is the irregular Simple Past form of 'bring'." },
  { "id": "TS-20", "level": 3, "sentence": "I saw a colourful butterfly near the flower bed yesterday.", "targetVerb": "saw", "tense": "past", "reason": "'Saw' is the irregular Simple Past form of 'see'." },
  { "id": "TS-21", "level": 3, "sentence": "The teacher gave each pupil a star sticker yesterday.", "targetVerb": "gave", "tense": "past", "reason": "'Gave' is the irregular Simple Past form of 'give'." },

  // Level 4: Master Mixed Showdown (7 questions)
  { "id": "TS-22", "level": 4, "sentence": "My father drinks coffee in the kitchen every day.", "targetVerb": "drinks", "tense": "present", "reason": "'Drinks' is Simple Present and 'every day' shows a daily habit." },
  { "id": "TS-23", "level": 4, "sentence": "They were happy after winning the classroom game yesterday.", "targetVerb": "were", "tense": "past", "reason": "'Were' is the Simple Past form of 'be' for 'they' yesterday." },
  { "id": "TS-24", "level": 4, "sentence": "I did not go to school yesterday.", "targetVerb": "did not go", "tense": "past", "reason": "'Did not go' is Simple Past negative with 'yesterday'." },
  { "id": "TS-25", "level": 4, "sentence": "He does not play badminton on Mondays.", "targetVerb": "does not play", "tense": "present", "reason": "'Does not play' is Simple Present negative for a Monday habit." },
  { "id": "TS-26", "level": 4, "sentence": "We made a paper kite last weekend.", "targetVerb": "made", "tense": "past", "reason": "'Made' is the irregular Simple Past form of 'make' with 'last weekend'." },
  { "id": "TS-27", "level": 4, "sentence": "She speaks English clearly during class presentations.", "targetVerb": "speaks", "tense": "present", "reason": "'Speaks' is Simple Present with '-s' for 'she'." },
  { "id": "TS-28", "level": 4, "sentence": "I read a storybook in the library every week.", "targetVerb": "read", "tense": "present", "reason": "'Read' is Simple Present here because 'every week' shows a regular habit." }
];