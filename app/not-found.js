import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | My App',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-light-primary animate-pulse">
          404
        </p>
        
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-400 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for...
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors duration-400"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
