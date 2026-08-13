import { createContext } from "react";
//createContext is a utility function provided by react to create react context,its like a central storage area to let any component get access to it without props drilling.
//pass an object inside the context
const UserContext = createContext({
  loggedInUser : "Default User",
});
export default UserContext;