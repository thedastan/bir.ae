// components/ui/LinkButton.tsx
import React from "react";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel = target === "_blank" ? "noopener noreferrer" : undefined,
}) => {
  const baseClasses =
    "flex items-center w-full h-[42px] text-[14px] justify-center font-[500] text-white rounded-[8px] transition-all duration-200";

  const variantClasses = {
    primary: "bg-[#9900ff] hover:bg-[#8a00e0]",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline:
      "border border-[#9900ff] text-[#9900ff] hover:bg-[#9900ff] hover:text-white",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
