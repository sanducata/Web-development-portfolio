import ImageProject1 from "../assets/Images/socialMediaApp.png";

export const Projects = [
  {
    id: 1,
    title: "Social media app for designers",
    description:
      "This was the final project for my bachelor's degree. I created it using the MERN stack and it was my first project built in React.",
    extendedDescription:
      "I built a social media web application for artists and designers for the bachelor's degree final project. In this application people can create and log into a user account. Once logged in, the user can post images of their own work and can also edit the posts. Users can edit their personal profile, they can interact with other users through comments and likes on posts, private messages and they can follow/unfollow each other.",
    image: ImageProject1,
    links: {
      demo: "",
      github: "https://github.com/sanducata/Social-media-app",
    },
    categories: ["React", "Express", "NodeJS", "MongoDB", "CSS"],
    comingSoon: false,
  },
  {
    id: 2,
    title: "Online store",
    description:
      "In the second year of university I built a graffiti online store as a project for the WEB Technologies class. It was one of the very first websites I've ever built.",
    extendedDescription:
      "In the second year of university I build an online store as a project for the WEB Technologies class. The technologies that I used were HTML, CSS and PHP. The products and the user accounts were stored in a relational database. There were two types of users: customers and administrators. Customers could only view and buy products, while the administrators could add/edit/delete products, because they had access to the database (they could perform CRUD operations).",
    links: { demo: "", github: "https://github.com/sanducata/Online-store" },
    categories: ["HTML", "CSS", "PHP"],
    comingSoon: false,
  },
  {
    id: 3,
    title: "Graphic design portfolio",
    description: "",
    extendedDescription: "",
    links: { demo: "", github: "" },
    categories: [],
    comingSoon: true,
  },
];
