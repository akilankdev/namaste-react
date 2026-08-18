import {configureStore} from "@reduxjs/toolkit";

//we will include slice inside the configuration later on.We should not leave reducers as empty,it currently throws error.
const appStore = configureStore({
  reducer: {

  },
});

export default appStore;