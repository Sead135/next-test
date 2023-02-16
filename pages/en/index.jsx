import React from "react";
import Link from "next/link";

const Page = () => (
  <div>
    <h1>Текущая локализация: English</h1>
    <a href="/ru">
      <button>Перейти на русскую локализацию</button>
    </a>
    <br />
    <br />
    <a href="/en/Somepage">
      <button>Перейти на somepage</button>
    </a>
  </div>
);

export default Page;
