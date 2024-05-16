import { Suspense } from "react";
import Link from "next/link";

import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

async function FilterHeader({ year, month }: any) {
  const availableYears = await getAvailableNewsYears();

  let linksForYear = availableYears;
  let linksForMonth;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year) {
    linksForMonth = getAvailableNewsMonths(year);
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {"Years: "}
          {linksForYear.map((link: any) => {
            return (
              <li key={link}>
                <Link
                  href={`/archive/${link}`}
                  style={link == year ? { color: "white" } : {}}
                >
                  {link}
                </Link>
              </li>
            );
          })}
          {linksForMonth && "Month: "}
          {linksForMonth &&
            linksForMonth.map((link: any) => {
              const href = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link
                    href={href}
                    style={link === month ? { color: "white" } : {}}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }: any) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }: { params: any }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading filter...</p>}></Suspense> */}
      <Suspense fallback={<p>Loading news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

// const FilteredNewsPage = ({ params }: any) => {
//   const filter = params.filter;

//   let linksForYear = getAvailableNewsYears();
//   let linksForMonth;

//   let links = getAvailableNewsYears();

//   const selectedYear = filter?.[0]; // if not filter then set undefined
//   const selectedMonth = filter?.[1];

//   let news;
//   if (selectedYear) {
//     linksForMonth = getAvailableNewsMonths(selectedYear);
//   }

//   if (selectedYear && !selectedMonth) {
//     news = getNewsForYear(selectedYear);
//   }

//   if (selectedYear && selectedMonth) {
//     news = getNewsForYearAndMonth(selectedYear, selectedMonth);
//   }

//   let newsContent = (
//     <h3 style={{ textAlign: "center", color: "yellow" }}>
//       No news found for the selected period.{" "}
//     </h3>
//   );

//   if (news && news.length > 0) {
//     newsContent = <NewsList news={news} />;
//   }

//   if (
//     (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
//     (selectedMonth &&
//       !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
//   ) {
//     throw new Error("Invalid Filter");
//   }

//   return (
//     <>
//       <header id="archive-header">
//         <nav>
//           <ul>
//             {"Years: "}
//             {linksForYear.map((link: any) => {
//               return (
//                 <li key={link}>
//                   <Link href={`/archive/${link}`}>{link}</Link>
//                 </li>
//               );
//             })}
//             {linksForMonth && "Month: "}
//             {linksForMonth &&
//               linksForMonth.map((link: any) => {
//                 const href = selectedYear
//                   ? `/archive/${selectedYear}/${link}`
//                   : `/archive/${link}`;
//                 return (
//                   <li key={link}>
//                     <Link href={href}>{link}</Link>
//                   </li>
//                 );
//               })}
//           </ul>
//         </nav>
//       </header>
//       {newsContent}
//     </>
//   );
// };

// export default FilteredNewsPage;

// import NewsList from "@/components/news-list";
// import {
//   getAvailableNewsMonths,
//   getAvailableNewsYears,
//   getNewsForYear,
//   getNewsForYearAndMonth,
// } from "@/lib/news";
// import Link from "next/link";
// import React from "react";

// const FilteredNewsPage = ({ params }: any) => {
//   const filter = params.filter;
//   let links = getAvailableNewsYears();

//   const selectedYear = filter?.[0]; // if not filter then set undefined
//   const selectedMonth = filter?.[1];

//   let news;

//   if (selectedYear && !selectedMonth) {
//     news = getNewsForYear(selectedYear);
//     links = getAvailableNewsMonths(selectedYear);
//   }

//   if (selectedYear && selectedMonth) {
//     news = getNewsForYearAndMonth(selectedYear, selectedMonth);
//     links = [];
//   }

//   console.log(news, "hahaha");

//   let newsContent = (
//     <h3 style={{ textAlign: "center", color: "yellow" }}>
//       No news found for the selected period.{" "}
//     </h3>
//   );

//   if (news && news.length > 0) {
//     newsContent = <NewsList news={news} />;
//   }

//   return (
//     <>
//       <header id="archive-header">
//         <nav>
//           <ul>
//             {links.map((link: any) => {
//               const href = selectedYear
//                 ? `/archive/${selectedYear}/${link}`
//                 : `/archive/${link}`;
//               return (
//                 <li key={link}>
//                   <Link href={href}>{link}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </header>
//       {newsContent}
//     </>
//   );
// };

// export default FilteredNewsPage;
