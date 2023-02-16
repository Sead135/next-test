import Link from "next/link";
import React from "react";

const Somepage = () => {
  return (
    <div>
      <h1>Какая-то страница EN</h1>
      <Link href="/en">
        <button>Назад</button>
      </Link>
    </div>
  );
};

export default Somepage;
