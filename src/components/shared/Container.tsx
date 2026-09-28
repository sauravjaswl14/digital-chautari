import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-5.5 md:px-10", className)}>
      {children}
    </div>
  );
}
