interface BasicButtonProps {
  color: "red" | "blue" | "pink" | "yellow";
  children?: React.ReactNode;
}

const colorClasses: Record<string, string> = {
  red: "bg-red-500 text-white dark:bg-red-700",
  blue: "bg-blue-500 text-white dark:bg-blue-700",
  pink: "bg-pink-500 text-white dark:bg-pink-700",
  yellow: "bg-yellow-500 text-black dark:bg-yellow-700 dark:text-white",
};

export function BasicButton({ color, children }: BasicButtonProps) {
  return (
    <button
      className={`flex flex-row items-center justify-center p-2 border border-black rounded shadow-md ${colorClasses[color]}`}
    >
      {children}
    </button>
  );
}
