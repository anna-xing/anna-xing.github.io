import Link from "../components/Link";

const RESUME_URL =
  "https://drive.google.com/file/d/1ZqcecURszhB7Q_R0ZfTt-0tmJ1LMavxU/view";
const LINKEDIN_URL = "https://www.linkedin.com/in/anna-xing/";

export default function Home() {
  return (
    <main className="p-8 min-h-screen flex flex-row items-center">
      <div className="max-w-[400px] mx-auto grid gap-6">
        <h1 className="text-4xl">
          Hi! I'm Anna, a full-stack software engineer ◡̈
        </h1>
        <p className="text-lg">
          I like building tech for social good. I'm currently at{" "}
          <Link href="https://www.withpavilion.com" inline>Pavilion</Link>, where we
          help state + local governments serve their communities more
          effectively by simplifying the procurement process.
        </p>
        <div className="flex flex-row gap-4">
          <Link href={RESUME_URL}>Resumé</Link>
          <Link href={LINKEDIN_URL}>LinkedIn</Link>
        </div>
      </div>
    </main>
  );
}
