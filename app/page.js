import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Link href="/dashboard">Aller sur le dashboard</Link>
      <Link href="/sandbox">Aller sur le sandbox</Link>
    </main>
  );
}
