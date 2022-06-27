import { combineReducers } from "redux";
import recentlyReduser from "./recently/recentlyReduser";
import savedReduser from "./saved/savedReduser";

const rootReduser = combineReducers({
    recentlyReduserState: recentlyReduser,
    savedReduserState: savedReduser
})

export default rootReduser;