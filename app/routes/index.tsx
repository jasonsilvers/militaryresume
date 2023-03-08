import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/Button";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main>
      <header className="mx-auto max-w-7xl py-6">
        <nav className="flex justify-between px-20">
          <Link
            className="rounded-md bg-slate-400 p-5 text-white hover:opacity-50"
            to="/resumebuilder/time"
          >
            Test
          </Link>
          <Link className="rounded-md bg-slate-400 p-5 text-white" to="/">
            test 2
          </Link>
        </nav>
      </header>
      <h1>Welcome to Military Resume</h1>

      {user ? (
        <Link
          to="/resumebuilder"
          className="flex items-center justify-center rounded-md border border-transparent bg-gray-50 px-4 py-3 text-base font-medium text-blue-500 shadow-md hover:bg-blue-50 sm:px-8"
        >
          View Resume Builder for {user.email}
        </Link>
      ) : (
        <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
          <Link
            to="/join"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-500 shadow-sm hover:bg-blue-50 sm:px-8"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center rounded-md bg-blue-700 px-4 py-3 font-medium text-white hover:bg-blue-600"
          >
            Log In
          </Link>
        </div>
      )}
    </main>
  );
}
