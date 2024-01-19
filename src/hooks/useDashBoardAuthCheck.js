import { useSelector } from "react-redux";

export default function useDashBoardAuth() {
  const auth = useSelector((state) => state.auth);
  if (
    auth?.token &&
    auth?.user &&
    (auth?.user.role === "admin" || auth?.user.role === "dev")
  ) {
    return true;
  } else {
    return false;
  }
}
