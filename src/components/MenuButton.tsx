import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type MenuButtonProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const { menuOpen, toggleMenu } = props;
  return (
    <Button
      variant="ghost"
      className={cn("absolute right-4 z-50 md:hidden")}
      onClick={toggleMenu}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative h-6 w-6">
        {/* Top bar */}
        <motion.span
          className="absolute block h-0.5 w-4 rounded-full bg-current"
          initial={{
            x: "-50%",
            left: "50%",
            top: "20%",
            y: 0,
            rotate: 0,
          }}
          animate={{
            x: "-50%",
            left: "50%",
            top: menuOpen ? "50%" : "20%",
            y: menuOpen ? "-50%" : 0,
            rotate: menuOpen ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Middle bar */}
        <motion.span
          className="absolute block h-0.5 w-4 rounded-full bg-current"
          initial={{
            x: "-50%",
            left: "50%",
            top: "50%",
            y: "-50%",
            opacity: 1,
          }}
          animate={{
            x: "-50%",
            left: "50%",
            top: "50%",
            y: "-50%",
            opacity: menuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Bottom bar */}
        <motion.span
          className="absolute block h-0.5 w-4 rounded-full bg-current"
          initial={{
            x: "-50%",
            left: "50%",
            bottom: "20%",
            y: 0,
            rotate: 0,
          }}
          animate={{
            x: "-50%",
            left: "50%",
            bottom: menuOpen ? "50%" : "20%",
            y: menuOpen ? "50%" : 0,
            rotate: menuOpen ? -45 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </Button>
  );
};

export default MenuButton;
