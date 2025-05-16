// Trending tags data
export const trendingTags = [
  "CatMemes",
  "Programming",
  "MondayMood",
  "GameOfThrones",
  "WorkFromHome",
  "FoodFails",
  "PetLife",
  "MovieReactions",
  "SchoolLife",
  "GamingMoments",
  "OfficeHumor",
];

// Initial meme data
export const initialMemes = [
  {
    id: 1,
    title: "When the code finally works",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20a%20person%20celebrating%20with%20arms%20raised%20in%20victory%2C%20joyful%20expression%2C%20clean%20modern%20office%20background%2C%20high%20quality%20digital%20art%20style%2C%20vibrant%20colors%2C%20simple%20background%20that%20makes%20text%20readable&width=600&height=500&seq=1&orientation=landscape",
    creator: "CodeMaster",
    likes: 2453,
    comments: 132,
    shares: 567,
    timeAgo: "2h",
    tags: ["Programming", "WorkLife"],
  },
  {
    id: 2,
    title: "Monday morning vibes",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20a%20sleepy%20cat%20with%20coffee%20mug%2C%20Monday%20morning%20mood%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20minimalist%20style%2C%20perfect%20for%20meme%20text&width=600&height=800&seq=2&orientation=portrait",
    creator: "CatLover",
    likes: 3782,
    comments: 245,
    shares: 892,
    timeAgo: "4h",
    tags: ["MondayMood", "CatMemes"],
  },
  {
    id: 3,
    title: "Gaming all night be like",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20a%20person%20with%20bloodshot%20eyes%20staring%20at%20computer%20screen%20in%20dark%20room%2C%20gaming%20setup%20with%20RGB%20lights%2C%20simple%20background%2C%20digital%20art%20style%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=600&seq=3&orientation=squarish",
    creator: "GamerPro",
    likes: 5621,
    comments: 342,
    shares: 1243,
    timeAgo: "6h",
    tags: ["Gaming", "NightOwl"],
  },
  {
    id: 4,
    title: "When someone touches your food",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20an%20angry%20cat%20protecting%20food%20bowl%2C%20dramatic%20expression%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20minimalist%20style%2C%20perfect%20for%20adding%20meme%20text&width=600&height=700&seq=4&orientation=portrait",
    creator: "FoodieKing",
    likes: 4231,
    comments: 198,
    shares: 732,
    timeAgo: "8h",
    tags: ["FoodFails", "CatMemes"],
  },
  {
    id: 5,
    title: "Working from home reality",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20person%20in%20pajamas%20with%20laptop%20balancing%20cat%20and%20coffee%2C%20messy%20home%20office%2C%20simple%20background%2C%20digital%20art%20style%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20text%20overlay&width=600&height=500&seq=5&orientation=landscape",
    creator: "RemoteWorker",
    likes: 6543,
    comments: 432,
    shares: 1532,
    timeAgo: "12h",
    tags: ["WorkFromHome", "RealityCheck"],
  },
  {
    id: 6,
    title: "Movie night expectations vs reality",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20split%20image%20of%20romantic%20movie%20setup%20versus%20reality%20of%20person%20surrounded%20by%20snacks%20looking%20messy%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=600&seq=6&orientation=squarish",
    creator: "MovieBuff",
    likes: 3245,
    comments: 176,
    shares: 567,
    timeAgo: "1d",
    tags: ["MovieReactions", "ExpectationVsReality"],
  },
];

// Additional memes for pagination
export const additionalMemes = [
  {
    id: 7,
    title: "That Friday feeling",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20person%20dancing%20excitedly%20in%20office%20setting%2C%20Friday%20celebration%20mood%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=500&seq=14&orientation=landscape",
    creator: "WeekendWarrior",
    likes: 7821,
    comments: 432,
    shares: 1876,
    timeAgo: "1d",
    tags: ["FridayMood", "OfficeHumor"],
  },
  {
    id: 8,
    title: "When the WiFi drops one bar",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20dramatic%20transformation%20from%20high%20quality%20to%20pixelated%20image%2C%20technology%20humor%2C%20simple%20clean%20background%2C%20digital%20art%20style%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=600&seq=15&orientation=squarish",
    creator: "TechGeek",
    likes: 5432,
    comments: 321,
    shares: 987,
    timeAgo: "2d",
    tags: ["TechProblems", "FirstWorldProblems"],
  },
  {
    id: 9,
    title: "Diet starts tomorrow",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20person%20surrounded%20by%20junk%20food%20with%20guilty%20expression%2C%20food%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=700&seq=16&orientation=portrait",
    creator: "FoodLover",
    likes: 6789,
    comments: 543,
    shares: 1234,
    timeAgo: "2d",
    tags: ["FoodMemes", "DietFails"],
  },
  {
    id: 10,
    title: "Trying to explain my job to my parents",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20confused%20elderly%20couple%20listening%20to%20young%20professional%2C%20generation%20gap%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=500&seq=17&orientation=landscape",
    creator: "DigitalNomad",
    likes: 4567,
    comments: 345,
    shares: 876,
    timeAgo: "3d",
    tags: ["WorkLife", "GenerationGap"],
  },
  {
    id: 11,
    title: "When you finally find that bug in your code",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20programmer%20with%20magnifying%20glass%20finding%20tiny%20bug%20in%20code%2C%20programming%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=600&seq=18&orientation=squarish",
    creator: "BugHunter",
    likes: 8765,
    comments: 654,
    shares: 2345,
    timeAgo: "3d",
    tags: ["Programming", "DebuggingNightmare"],
  },
  {
    id: 12,
    title: "Online shopping expectations vs reality",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20split%20image%20of%20perfect%20product%20photo%20versus%20disappointing%20actual%20product%2C%20shopping%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=700&seq=19&orientation=portrait",
    creator: "ShopaholicQueen",
    likes: 9876,
    comments: 765,
    shares: 3456,
    timeAgo: "4d",
    tags: ["OnlineShopping", "ExpectationVsReality"],
  },
];

// Final batch of memes
export const finalMemes = [
  {
    id: 13,
    title: "When someone asks if I'm busy this weekend",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20person%20surrounded%20by%20streaming%20services%20and%20snacks%2C%20introvert%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=500&seq=20&orientation=landscape",
    creator: "IntrovertLife",
    likes: 6543,
    comments: 432,
    shares: 1234,
    timeAgo: "4d",
    tags: ["WeekendPlans", "IntrovertProblems"],
  },
  {
    id: 14,
    title: "Group project contribution",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20uneven%20workload%20distribution%20in%20group%20project%2C%20education%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=600&seq=21&orientation=squarish",
    creator: "StudentLife",
    likes: 7654,
    comments: 543,
    shares: 2345,
    timeAgo: "5d",
    tags: ["SchoolLife", "GroupProjects"],
  },
  {
    id: 15,
    title: "When the waiter asks if everything is okay",
    imageUrl:
      "https://readdy.ai/api/search-image?query=A%20funny%20meme%20showing%20person%20with%20mouth%20full%20of%20food%20giving%20thumbs%20up%20to%20waiter%2C%20restaurant%20humor%2C%20simple%20clean%20background%2C%20high%20quality%20digital%20art%2C%20vibrant%20colors%2C%20perfect%20for%20meme%20caption&width=600&height=700&seq=22&orientation=portrait",
    creator: "FoodieLife",
    likes: 8765,
    comments: 654,
    shares: 3456,
    timeAgo: "5d",
    tags: ["FoodMemes", "RestaurantMoments"],
  },
];

// Notifications data
export const notifications = [
  { id: 1, text: "CodeMaster commented on your meme", time: "2 min ago" },
  {
    id: 2,
    text: 'Your meme "Monday Vibes" is trending!',
    time: "15 min ago",
  },
  { id: 3, text: "GamerPro shared your meme", time: "1 hour ago" },
  {
    id: 4,
    text: 'You earned the "Viral Creator" badge!',
    time: "3 hours ago",
  },
  { id: 5, text: "New template suggestions for you", time: "5 hours ago" },
];

// Top creators data
export const topCreators = [
  {
    id: 1,
    name: "MemeKing",
    avatar:
      "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20young%20male%20with%20glasses%20and%20modern%20haircut%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=7&orientation=squarish",
    memes: 342,
    followers: "45.2K",
  },
  {
    id: 2,
    name: "LaughFactory",
    avatar:
      "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20female%20with%20curly%20hair%20and%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=8&orientation=squarish",
    memes: 287,
    followers: "38.7K",
  },
  {
    id: 3,
    name: "ViralVision",
    avatar:
      "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20artistic%20style%20and%20unique%20fashion%20sense%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=9&orientation=squarish",
    memes: 256,
    followers: "32.1K",
  },
  {
    id: 4,
    name: "JokeMaster",
    avatar:
      "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20looking%20person%20with%20quirky%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=10&orientation=squarish",
    memes: 198,
    followers: "24.5K",
  },
  {
    id: 5,
    name: "MemeQueen",
    avatar:
      "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20female%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=11&orientation=squarish",
    memes: 175,
    followers: "21.8K",
  },
];

// Leaderboard data
export const leaderboardData = {
  weekly: [
    {
      id: 1,
      name: "MemeKing",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20young%20male%20with%20glasses%20and%20modern%20haircut%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=7&orientation=squarish",
      points: 12453,
      rank: 1,
      change: "up",
    },
    {
      id: 2,
      name: "LaughFactory",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20female%20with%20curly%20hair%20and%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=8&orientation=squarish",
      points: 10782,
      rank: 2,
      change: "same",
    },
    {
      id: 3,
      name: "ViralVision",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20artistic%20style%20and%20unique%20fashion%20sense%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=9&orientation=squarish",
      points: 9654,
      rank: 3,
      change: "up",
    },
    {
      id: 4,
      name: "JokeMaster",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20looking%20person%20with%20quirky%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=10&orientation=squarish",
      points: 8765,
      rank: 4,
      change: "down",
    },
    {
      id: 5,
      name: "MemeQueen",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20female%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=11&orientation=squarish",
      points: 7654,
      rank: 5,
      change: "up",
    },
    {
      id: 6,
      name: "FunnyBones",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20quirky%20person%20with%20funny%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=23&orientation=squarish",
      points: 6543,
      rank: 6,
      change: "down",
    },
    {
      id: 7,
      name: "GiggleGuru",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20person%20with%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=24&orientation=squarish",
      points: 5432,
      rank: 7,
      change: "up",
    },
    {
      id: 8,
      name: "HumorHero",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20person%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=25&orientation=squarish",
      points: 4321,
      rank: 8,
      change: "same",
    },
    {
      id: 9,
      name: "ChuckleChamp",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20unique%20style%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=26&orientation=squarish",
      points: 3210,
      rank: 9,
      change: "down",
    },
    {
      id: 10,
      name: "LolMaster",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20person%20with%20playful%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=27&orientation=squarish",
      points: 2109,
      rank: 10,
      change: "up",
    },
  ],
  monthly: [
    {
      id: 3,
      name: "ViralVision",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20artistic%20style%20and%20unique%20fashion%20sense%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=9&orientation=squarish",
      points: 45678,
      rank: 1,
      change: "up",
    },
    {
      id: 1,
      name: "MemeKing",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20young%20male%20with%20glasses%20and%20modern%20haircut%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=7&orientation=squarish",
      points: 43210,
      rank: 2,
      change: "down",
    },
    {
      id: 2,
      name: "LaughFactory",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20female%20with%20curly%20hair%20and%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=8&orientation=squarish",
      points: 39876,
      rank: 3,
      change: "same",
    },
    {
      id: 5,
      name: "MemeQueen",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20female%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=11&orientation=squarish",
      points: 35432,
      rank: 4,
      change: "up",
    },
    {
      id: 4,
      name: "JokeMaster",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20looking%20person%20with%20quirky%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=10&orientation=squarish",
      points: 32109,
      rank: 5,
      change: "down",
    },
    {
      id: 7,
      name: "GiggleGuru",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20person%20with%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=24&orientation=squarish",
      points: 28765,
      rank: 6,
      change: "up",
    },
    {
      id: 6,
      name: "FunnyBones",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20quirky%20person%20with%20funny%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=23&orientation=squarish",
      points: 25432,
      rank: 7,
      change: "down",
    },
    {
      id: 10,
      name: "LolMaster",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20person%20with%20playful%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=27&orientation=squarish",
      points: 21098,
      rank: 8,
      change: "up",
    },
    {
      id: 8,
      name: "HumorHero",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20person%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=25&orientation=squarish",
      points: 19876,
      rank: 9,
      change: "down",
    },
    {
      id: 9,
      name: "ChuckleChamp",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20unique%20style%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=26&orientation=squarish",
      points: 17654,
      rank: 10,
      change: "same",
    },
  ],
  allTime: [
    {
      id: 1,
      name: "MemeKing",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20young%20male%20with%20glasses%20and%20modern%20haircut%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=7&orientation=squarish",
      points: 987654,
      rank: 1,
      change: "same",
    },
    {
      id: 3,
      name: "ViralVision",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20artistic%20style%20and%20unique%20fashion%20sense%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=9&orientation=squarish",
      points: 876543,
      rank: 2,
      change: "up",
    },
    {
      id: 2,
      name: "LaughFactory",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20female%20with%20curly%20hair%20and%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=8&orientation=squarish",
      points: 765432,
      rank: 3,
      change: "down",
    },
    {
      id: 5,
      name: "MemeQueen",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20female%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=11&orientation=squarish",
      points: 654321,
      rank: 4,
      change: "same",
    },
    {
      id: 4,
      name: "JokeMaster",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20looking%20person%20with%20quirky%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=10&orientation=squarish",
      points: 543210,
      rank: 5,
      change: "same",
    },
    {
      id: 6,
      name: "FunnyBones",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20quirky%20person%20with%20funny%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=23&orientation=squarish",
      points: 432109,
      rank: 6,
      change: "same",
    },
    {
      id: 7,
      name: "GiggleGuru",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20cheerful%20person%20with%20bright%20smile%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=24&orientation=squarish",
      points: 321098,
      rank: 7,
      change: "same",
    },
    {
      id: 8,
      name: "HumorHero",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20confident%20person%20with%20stylish%20appearance%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=25&orientation=squarish",
      points: 210987,
      rank: 8,
      change: "same",
    },
    {
      id: 9,
      name: "ChuckleChamp",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20person%20with%20unique%20style%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=26&orientation=squarish",
      points: 109876,
      rank: 9,
      change: "same",
    },
    {
      id: 10,
      name: "LolMaster",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20humorous%20person%20with%20playful%20expression%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=27&orientation=squarish",
      points: 98765,
      rank: 10,
      change: "same",
    },
  ],
};

export const popularTemplates = [
  {
    id: 1,
    name: "Drake Hotline Bling",
    category: "Reactions",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Drake%2520Hotline%2520Bling%2520meme%2520template%2520with%2520two%2520panels%2520showing%2520rejection%2520and%2520approval%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=300&seq=101&orientation=squarish",
  },
  {
    id: 2,
    name: "Distracted Boyfriend",
    category: "Relationships",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Distracted%2520boyfriend%2520meme%2520template%2520showing%2520man%2520looking%2520at%2520another%2520woman%2520while%2520with%2520girlfriend%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=200&seq=102&orientation=landscape",
  },
  {
    id: 3,
    name: "Two Buttons",
    category: "Decisions",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Two%2520buttons%2520meme%2520template%2520showing%2520person%2520sweating%2520while%2520deciding%2520between%2520two%2520buttons%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=300&seq=103&orientation=squarish",
  },
  {
    id: 4,
    name: "Change My Mind",
    category: "Debates",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Change%2520my%2520mind%2520meme%2520template%2520with%2520person%2520sitting%2520at%2520table%2520with%2520sign%252C%2520campus%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=200&seq=104&orientation=landscape",
  },
  {
    id: 5,
    name: "Expanding Brain",
    category: "Intelligence",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Expanding%2520brain%2520meme%2520template%2520with%2520four%2520panels%2520showing%2520increasingly%2520glowing%2520brains%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=400&seq=105&orientation=portrait",
  },
  {
    id: 6,
    name: "Woman Yelling at Cat",
    category: "Arguments",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Woman%2520yelling%2520at%2520confused%2520cat%2520at%2520dinner%2520table%2520meme%2520template%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=200&seq=106&orientation=landscape",
  },
  {
    id: 7,
    name: "Surprised Pikachu",
    category: "Reactions",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Surprised%2520Pikachu%2520meme%2520template%2520showing%2520shocked%2520expression%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=300&seq=107&orientation=squarish",
  },
  {
    id: 8,
    name: "Disaster Girl",
    category: "Chaos",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Disaster%2520Girl%2520meme%2520template%2520showing%2520young%2520girl%2520smiling%2520with%2520fire%2520in%2520background%252C%2520simple%2520clean%2520background%252C%2520high%2520quality%2520digital%2520art%252C%2520perfect%2520for%2520meme%2520creation%252C%2520blank%2520template&width=300&height=200&seq=108&orientation=landscape",
  },
];
