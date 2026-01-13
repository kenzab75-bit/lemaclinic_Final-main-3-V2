import type { ButtonHTMLAttributes } from "react";

interface MegaMenuSInformerProps {
  scrollToSection: (id: string) => void;
  className?: string;
}

const MegaMenuSInformer = ({ scrollToSection, className }: MegaMenuSInformerProps) => {
  const handleClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"] = () => {
    scrollToSection("victimes");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ??
        "relative text-[#E0E0E0] hover:text-[#E02B2B] font-medium transition-all duration-300 group"
      }
      aria-label="Aller à la section s'informer"
    >
      S'informer
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E02B2B] transition-all duration-300 group-hover:w-full" />
    </button>
  );
};

export default MegaMenuSInformer;
