import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
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
      "https://imageio.forbes.com/specials-images/imageserve/64c0eee9b26575296516a7fe/TOPSHOT-US-SPACE-SPACEX-STARSHIP/0x0.jpg?crop=3100,1745,x1433,y2273,safe&height=400&width=711&fit=bounds",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    bio: "Revolutionizing the world |Owns Tesla, SpaceX, Hyperloop, Starlink etc.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
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
      "https://media.istockphoto.com/id/1354846583/photo/microsoft-france-headquarters-entrance-in-issy-les-moulineaux-near-paris.jpg?s=612x612&w=0&k=20&c=qp3gYZx05398hv3BLzBIMRhm8MoxLzPxs6V7Xr2oIeE=",
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
    link: "https://github.com/leader-akash",
    coverPhoto:
      "https://www.shutterstock.com/shutterstock/videos/1096669817/thumb/9.jpg?ip=x480",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg",
    bio: "Aspiring Full Stack developer 👨‍💻 | learning and sharing",
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
    link: "https://github.com/leader-akash",
    coverPhoto:
      "https://images.unsplash.com/photo-1678483790053-71367bc7a02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    userPhoto:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    bio: "CEO,  Google and Alphabet",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
