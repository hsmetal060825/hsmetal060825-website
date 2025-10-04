
import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "gold" | "outline" };
export function Button({ variant="gold", className, ...props }: Props) {
  const styles = variant==="gold" ? "btn btn-gold" : "btn btn-outline";
  return <button className={`${styles} ${className||""}`} {...props} />;
}
