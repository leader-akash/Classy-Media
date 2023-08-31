import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Satya",
    lastName: "Nadella",
    username: "satyanadella",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://news.microsoft.com/exec/satya-nadella/",
    bio: "Chairman and CEO of Microsoft Corporation",
    coverPhoto:
      "https://pbs.twimg.com/profile_banners/20571756/1553288451/1500x500",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akash",
    lastName: "",
    username: "akash123",
    password: "akash123",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://github.com/VLeads/",
    coverPhoto:
      "https://raw.githubusercontent.com/VLeads/RapidFire/dev/src/assets/images/result-bg.jpg",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg",
    bio: "Aspiring Full Stack developer 👨‍💻 | learning and sharing | neogcamp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://www.spacex.com/",
    coverPhoto:
      "https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    bio: "Revolutionizing the world |Owns Tesla, SpaceX, Hyperloop, Starlink etc.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sundar",
    lastName: "Pichai",
    username: "sundarpichai",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://github.com/VLeads/",
    coverPhoto:
      "https://raw.githubusercontent.com/VLeads/RapidFire/dev/src/assets/images/result-bg.jpg",
    userPhoto:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    bio: "CEO,  Google and Alphabet",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
