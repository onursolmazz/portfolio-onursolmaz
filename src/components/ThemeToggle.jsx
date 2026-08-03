import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "../store/theme/themeSlice";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

function ThemeToggle() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button
      className="theme_toggle"
      onClick={() => dispatch(toogleTheme())}
      aria-label="Tema değiştir"
    >
      {mode === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}{" "}
    </button>
  );
}

export default ThemeToggle;
