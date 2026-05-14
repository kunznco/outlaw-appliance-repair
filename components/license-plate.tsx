import { cn } from "@/lib/utils";

interface LicensePlateProps {
  state?: string;
  number: string;
  className?: string;
}

export function LicensePlate({
  state = "California",
  number,
  className,
}: LicensePlateProps) {
  return (
    <div
      className={cn("plate", className)}
      role="text"
      aria-label={`${state} ${number}`}
    >
      <span className="state">{state}</span>
      <span className="number">{number}</span>
    </div>
  );
}
