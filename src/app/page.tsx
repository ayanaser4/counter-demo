import { BasicButton } from "@/components/BasicButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-white text-black dark:bg-black dark:text-white p-8 rounded-xl shadow-lg">
      <BasicButton color="red">
        <Link href="/server-counter">Server Counter</Link>
      </BasicButton>
      <BasicButton color="blue">
        <Link href="/server-api-counter">Server API Counter</Link>
      </BasicButton>
      <BasicButton color="pink">
        <Link href="/client-counter">Client Counter</Link>
      </BasicButton>
      <BasicButton color="yellow">
        <Link href="/counter-provider-version">Counter Provider Version</Link>
      </BasicButton>
    </div>
  );
}
