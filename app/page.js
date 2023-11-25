import Hero from "@/components/Hero/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-2xl">
        Welcome To <span className="font-bold text-blue-500">nrrizki.me</span>
      </h1> */}
      <Hero />
    </main>
  );
}
