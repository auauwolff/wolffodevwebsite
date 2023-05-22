import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../stores/GlobalStore";
import { Icon } from "astro-icon";

const MenuButton = ({ children }) => {
  const open = useStore(isMenuOpen);
  //   console.log(
  //     "🚀\u001b[1;32m ~ file: MenuButton.tsx:7 ~ MenuButton ~ isMenuOpen:",
  //     open
  //   );

  const onClick = () => {
    isMenuOpen.set(!open);
  };

  return <button onClick={onClick}>teste2s</button>;
};

export default MenuButton;
