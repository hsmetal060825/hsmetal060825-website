
import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" };
export function Button({ variant = "solid", className, ...props }: Props) {
  const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl transition";
  const styles = variant === "solid" ? "bg-brandBlue text-white hover:opacity-90" : "border border-brandBlue text-brandBlue hover:bg-brandBlue/5";
  return <button className={`${base} ${styles} ${className||""}`} {...props} />;
}
