import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Akash posts some amazing content related to tech and programming. You muct visit his profile and follow him!",
    likes: {
      likeCount: 700,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postPic: "",
    firstName: "Satya",
    lastName: "Nadella",
    username: "satyanadella",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Created a Social Media App called 'Rapid Fire'",
    likes: {
      likeCount: 200,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postPic:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    firstName: "Akash ",
    lastName: "Kumar",
    username: "Akash123",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Listen, I can't do miracles ok",
    likes: {
      likeCount: 800,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postPic: "",
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Inhale the future, Exhale the past.",
    likes: {
      likeCount: 2700,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postPic: "",
    firstName: "Akash ",
    lastName: "Kumar",
    username: "Akash123",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At Google I/O today we shared how we're advancing two core parts of our mission -- knowledge and computing -- to deliver products that are built to help",
    likes: {
      likeCount: 1500,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postPic:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    firstName: "Sundar",
    lastName: "Pichai",
    username: "sundarpichai",
    userPhoto:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Akash I personally liked your projects, Well done !!",
    likes: {
      likeCount: 2800,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postPic: "",
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
