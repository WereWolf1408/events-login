import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch } from "../store";
import { authActions } from "../store/reducers/auth";
import { login, logout } from "../store/reducers/auth/async-action-creater";

const allActions = {
  ...authActions,
  login,
  logout,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActions, dispatch);
};
