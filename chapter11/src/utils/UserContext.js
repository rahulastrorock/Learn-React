import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "astrorock",
    email: "astrorock@gmail.com",
  },
});

UserContext.displayName = "UserContext"; // this is used to debug the context in react dev tools

export default UserContext;
