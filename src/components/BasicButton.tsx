export function BasicButton({
  btnColor,
  children,
}: { btnColor: string } & { children?: React.ReactNode }) {
  return (
    <button
      className={`flex flex-row items-center justify-center p-2 border border-black bg-${btnColor}-200 rounded shadow-md`}
    >
      {children}
    </button>
  );
}
