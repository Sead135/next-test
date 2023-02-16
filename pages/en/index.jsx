import Link from "next/link";
import React from "react";

const Page = () => (
  <div>
    <h1>Текущая локализация: English</h1>
    <Link href="/ru">
      <button>Перейти на русскую локализацию</button>
    </Link>
    <br />
    <br />
    <Link href="/en/Somepage" >
      <button>Перейти на somepage</button>
    </Link>
  </div>
);

export default Page;
