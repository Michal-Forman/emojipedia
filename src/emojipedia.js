const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
            "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
            "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
        id: 4,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."

    },
    {
        id: 5,
        emoji: "🌍",
        name: "Globe Showing Europe-Africa",
        meaning: "Representation of the Earth showing the continents of Europe and Africa. It symbolizes global unity, diversity, and interconnectedness."
    },
    {
        id: 6,
        emoji: "🐶",
        name: "Dog",
        meaning: "Depicting a friendly and loyal canine, often associated with pets, loyalty, and affection."
    },
    {
        id: 7,
        emoji: "🌞",
        name: "Sun",
        meaning: "Represents the sun, light, and warmth. It signifies happiness, energy, and a bright day."
    },
    {
        id: 8,
        emoji: "📚",
        name: "Books",
        meaning: "Symbolizes education, knowledge, and learning. Often used to represent studying, reading, or a library."
    },
    {
        id: 9,
        emoji: "⚽",
        name: "Soccer Ball",
        meaning: "Represents the sport of soccer. It signifies teamwork, competition, and the joy of playing sports."
    },
    {
        id: 10,
        emoji: "🌈",
        name: "Rainbow",
        meaning: "A natural phenomenon displaying a spectrum of colors in the sky. It symbolizes hope, diversity, and inclusivity."
    },
    {
        id: 11,
        emoji: "🎵",
        name: "Musical Note",
        meaning: "Represents music, melody, and sound. It can signify a song, singing, or a musical instrument."
    },
    {
        id: 12,
        emoji: "🍔",
        name: "Hamburger",
        meaning: "Depicts a classic hamburger, often associated with fast food and casual dining. It symbolizes indulgence and satisfaction."
    },
    {
        id: 13,
        emoji: "🌹",
        name: "Rose",
        meaning: "A beautiful flower often associated with love, romance, and beauty. It symbolizes affection and admiration."
    },
    {
        id: 14,
        emoji: "😴",
        name: "Sleeping Face",
        meaning: "Depicts a sleepy face with a closed eye and a gentle smile. It represents tiredness, sleepiness, or relaxation."
    },
    {
        id: 15,
        emoji: "🎈",
        name: "Balloon",
        meaning: "Symbolizes celebration, joy, and parties. It represents a festive atmosphere and is often associated with birthdays or special occasions."
    },
    {
        id: 16,
        emoji: "🌼",
        name: "Sunflower",
        meaning: "Depicts a bright yellow sunflower, often associated with summer and happiness. It symbolizes adoration and loyalty."
    },
    {
        id: 17,
        emoji: "🍦",
        name: "Ice Cream",
        meaning: "Represents a scoop or cone of ice cream. It signifies indulgence, sweetness, and enjoyment."
    },
    {
        id: 18,
        emoji: "🌟",
        name: "Star",
        meaning: "Symbolizes achievement, success, and brilliance. It represents something exceptional or outstanding."
    },
    {
        id: 19,
        emoji: "📷",
        name: "Camera",
        meaning: "Depicts a classic camera, often associated with photography and capturing moments. It symbolizes creativity and memories."
    },
    {
        id: 20,
        emoji: "🌈",
        name: "Rainbow",
        meaning: "A natural phenomenon displaying a spectrum of colors in the sky. It symbolizes hope, diversity, and inclusivity."
    },
    {
        id: 21,
        emoji: "🐱",
        name: "Cat Face",
        meaning: "Depicts a cat face with various expressions. It represents playfulness, curiosity, and affection."
    },
    {
        id: 22,
        emoji: "🌊",
        name: "Wave",
        meaning: "Symbolizes the ocean, water, and movement. It can represent tranquility, power, or the beach."
    },
    {
        id: 23,
        emoji: "🎮",
        name: "Video Game",
        meaning: "Represents a video game controller or console. It symbolizes entertainment, fun, and gaming."
    },
    {
        id: 24,
        emoji: "🍎",
        name: "Red Apple",
        meaning: "Depicts a shiny red apple, often associated with health, nutrition, and teachers. It symbolizes knowledge and vitality."
    },
    {
        id: 25,
        emoji: "🚀",
        name: "Rocket",
        meaning: "Represents a rocket ship blasting off into space. It symbolizes ambition, progress, and reaching new heights."
    },
    {
        id: 26,
        emoji: "🎓",
        name: "Graduation Cap",
        meaning: "Depicts a graduation cap, often associated with academic achievement and graduation ceremonies. It symbolizes education and accomplishment."
    },
    {
        id: 27,
        emoji: "🌙",
        name: "Crescent Moon",
        meaning: "Represents a crescent-shaped moon, often associated with nighttime, dreams, and magic. It symbolizes mystery and tranquility."
    },
    {
        id: 28,
        emoji: "🎁",
        name: "Wrapped Gift",
        meaning: "Depicts a wrapped gift box, often associated with celebrations and special occasions. It symbolizes surprise and generosity."
    },
    {
        id: 29,
        emoji: "📚",
        name: "Books",
        meaning: "Symbolizes education, knowledge, and learning. Often used to represent studying, reading, or a library."
    },
    {
        id: 30,
        emoji: "⚡",
        name: "High Voltage",
        meaning: "Represents a high voltage sign or lightning bolt. It symbolizes energy, power, and intensity."
    },
    {
        id: 31,
        emoji: "🐶",
        name: "Dog Face",
        meaning: "Depicts a dog face, often associated with loyalty, companionship, and cuteness. It represents love for dogs."
    },
    {
        id: 32,
        emoji: "🌸",
        name: "Cherry Blossom",
        meaning: "Symbolizes the beauty and transient nature of cherry blossoms. It represents renewal, spring, and the impermanence of life."
    },
    {
        id: 33,
        emoji: "🍕",
        name: "Pizza",
        meaning: "A popular Italian dish consisting of a round flatbread topped with ingredients like cheese, tomato sauce, and various toppings. It symbolizes comfort food and enjoyment."
    },
    {
        id: 34,
        emoji: "🌳",
        name: "Deciduous Tree",
        meaning: "Represents a leafy deciduous tree, often associated with nature, growth, and vitality. It symbolizes strength and endurance."
    },
    {
        id: 35,
        emoji: "🎂",
        name: "Birthday Cake",
        meaning: "Depicts a celebratory birthday cake with candles. It symbolizes birthdays, parties, and joyous occasions."
    },
    {
        id: 36,
        emoji: "🌞",
        name: "Sun with Face",
        meaning: "Depicts a smiling sun with a face, often associated with warmth, happiness, and sunny weather. It symbolizes positivity and optimism."
    },
    {
        id: 37,
        emoji: "🌞",
        name: "Sun with Face",
        meaning: "Depicts a smiling sun with a face, often associated with warmth, happiness, and sunny weather. It symbolizes positivity and optimism."
    },
    {
        id: 38,
        emoji: "🌺",
        name: "Hibiscus",
        meaning: "A vibrant flower often associated with tropical regions and beauty. It symbolizes delicate beauty and grace."
    },
    {
        id: 39,
        emoji: "🎶",
        name: "Musical Notes",
        meaning: "Represents multiple musical notes together. It symbolizes music, rhythm, and harmony."
    },
    {
        id: 40,
        emoji: "🍂",
        name: "Fallen Leaf",
        meaning: "Depicts a fallen leaf, often associated with autumn and the changing seasons. It symbolizes nature's cycle and transition."
    },
    {
        id: 41,
        emoji: "📝",
        name: "Memo",
        meaning: "Represents a memo or a piece of paper with writing. It symbolizes note-taking, reminders, or written communication."
    },
    {
        id: 42,
        emoji: "🌵",
        name: "Cactus",
        meaning: "Depicts a cactus plant, often associated with desert regions and resilience. It symbolizes endurance and adaptability."
    },
    {
        id: 43,
        emoji: "🍁",
        name: "Maple Leaf",
        meaning: "Symbolizes a maple leaf, often associated with autumn, Canada, and national pride. It represents beauty and change."
    },
    {
        id: 44,
        emoji: "🏆",
        name: "Trophy",
        meaning: "Represents a trophy, often associated with victory, achievement, and success. It symbolizes recognition and excellence."
    },
    {
        id: 45,
        emoji: "🌟",
        name: "Star",
        meaning: "Depicts a star shape, often associated with fame, brilliance, and achievement. It symbolizes aspiration and inspiration."
    },
    {
        id: 46,
        emoji: "🌊",
        name: "Ocean Wave",
        meaning: "Depicts a wave, often associated with the ocean, water, and movement. It symbolizes strength and the ebb and flow of life."
    },
    {
        id: 46,
        emoji: "🌊",
        name: "Ocean Wave",
        meaning: "Depicts a wave, often associated with the ocean, water, and movement. It symbolizes strength and the ebb and flow of life."
    },
    {
        id: 47,
        emoji: "🌮",
        name: "Taco",
        meaning: "Represents a traditional Mexican taco, often associated with Mexican cuisine and food. It symbolizes deliciousness and flavor."
    },
    {
        id: 48,
        emoji: "🌻",
        name: "Sunflower",
        meaning: "Depicts a bright yellow sunflower, often associated with summer and happiness. It symbolizes adoration and loyalty."
    },
    {
        id: 49,
        emoji: "📺",
        name: "Television",
        meaning: "Represents a television set, often associated with entertainment and media. It symbolizes watching TV shows, movies, or news."
    },
    {
        id: 50,
        emoji: "🌍",
        name: "Globe Showing Europe-Africa",
        meaning: "Depicts a globe, showing the continents of Europe and Africa. It symbolizes global awareness and international connections."
    },
    {
        id: 51,
        emoji: "🍩",
        name: "Donut",
        meaning: "Depicts a delicious donut with a hole in the center, often associated with desserts and indulgence. It symbolizes sweetness and treat."
    },
    {
        id: 52,
        emoji: "🎉",
        name: "Party Popper",
        meaning: "Represents a party popper, often associated with celebrations and joyous occasions. It symbolizes excitement and festivity."
    },
    {
        id: 53,
        emoji: "🐼",
        name: "Panda",
        meaning: "Depicts a cute panda, often associated with pandas' playful and gentle nature. It symbolizes cuteness and endangered species."
    },
    {
        id: 54,
        emoji: "🌴",
        name: "Palm Tree",
        meaning: "Symbolizes a tall palm tree, often associated with tropical regions and vacations. It represents relaxation and paradise."
    },
    {
        id: 55,
        emoji: "🍓",
        name: "Strawberry",
        meaning: "Depicts a juicy red strawberry, often associated with summer and sweetness. It symbolizes freshness and natural goodness."
    },
    {
        id: 56,
        emoji: "🚲",
        name: "Bicycle",
        meaning: "Represents a bicycle, often associated with transportation and exercise. It symbolizes freedom and eco-friendly travel."
    },
    {
        id: 57,
        emoji: "🌈",
        name: "Rainbow",
        meaning: "Depicts a colorful rainbow, often associated with hope, diversity, and LGBTQ+ pride. It symbolizes positivity and unity."
    },
    {
        id: 58,
        emoji: "🍦",
        name: "Ice Cream",
        meaning: "Depicts a delicious ice cream cone, often associated with desserts and summer treats. It symbolizes sweetness and indulgence."
    },
    {
        id: 59,
        emoji: "📷",
        name: "Camera",
        meaning: "Represents a camera, often associated with photography and capturing moments. It symbolizes creativity and documentation."
    },
    {
        id: 60,
        emoji: "🐝",
        name: "Bee",
        meaning: "Depicts a buzzing bee, often associated with pollination and nature. It symbolizes hard work, cooperation, and community."
    },
    {
        id: 61,
        emoji: "⏰",
        name: "Alarm Clock",
        meaning: "Represents an alarm clock, often associated with waking up and time management. It symbolizes punctuality and productivity."
    },
    {
        id: 62,
        emoji: "🌮",
        name: "Taco",
        meaning: "Represents a traditional Mexican taco, often associated with Mexican cuisine and food. It symbolizes deliciousness and flavor."
    },
];

export default emojipedia;