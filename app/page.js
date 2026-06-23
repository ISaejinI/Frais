export default function Home() {
  return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <a href="/dashboard">Aller sur le dashboard</a>
        <a href="/sandbox">Aller sur le sandbox</a>
      </main>
  );
}
