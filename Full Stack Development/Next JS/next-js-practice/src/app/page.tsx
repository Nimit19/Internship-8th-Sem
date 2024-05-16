import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      Home Page
      <Link href={"/blog"}>Navigate to Blog Page </Link>
    </div>
  );
};

export default HomePage;
