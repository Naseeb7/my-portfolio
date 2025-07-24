import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 text-center px-4 h-full">
      <h2 className="text-3xl font-semibold">
        <span className="text-primary-100">Oops!</span> You’ve wandered off...
      </h2>
      <p className="max-w-lg text-secondary-300">
        Looks like you’ve discovered a place I haven’t built yet—either it’s
        still in my imagination, or you’ve just found a secret portal.
      </p>
      <Link href="/" className="text-primary-100 animate-pulse">
        🛡️ Back to the Safe Zone
      </Link>
    </div>
  );
};

export default NotFound;
