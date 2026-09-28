import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";
import Reveal, { type RevealProps } from "./Reveal";

interface CardProps extends Omit<RevealProps, "delay"> {
  index?: number;
  variant?: "light" | "dark";
  padded?: boolean;
}


export default function Card({
  index = 0,
  variant = "light",
  padded = true,
  className,
  ...rest
}: CardProps) {
  return (
    <Reveal
      delay={stagger(index)}
      className={cn(
        variant === "dark" ? "card-dark" : "card-flat",
        padded && "p-5.5",
        className,
      )}
      {...rest}
    />
  );
}
