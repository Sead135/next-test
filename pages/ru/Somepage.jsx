import Link from 'next/link';
import React from 'react'

const Somepage = () => {
  return (
    <div>
      <h1>Какая-то страница RU</h1>
      <Link href="/ru">
        <button>Назад</button>
      </Link>
    </div>
  );
}

export default Somepage