
const articles = [
  {
    id: 1,
    title: "Heavy Rain Expected Tomorrow",
    summary: "Meteorologists warn of heavy rainfall in northern regions tomorrow.",
    date: "2025-09-20",
  },
  {
    id: 2,
    title: "Heatwave Continues in South",
    summary: "Temperatures are expected to reach 40°C in southern cities this week.",
    date: "2025-09-18",
  },
  {
    id: 3,
    title: "New Climate Report Released",
    summary: "Global temperatures have risen by 1.2°C compared to pre-industrial levels.",
    date: "2025-09-15",
  },
  {
    id: 4,
    title: "New Climate Report Released",
    summary: "Global temperatures have risen by 1.2°C compared to pre-industrial levels.",
    date: "2025-09-15",
  },
  {
    id: 5,
    title: "New Climate Report Released",
    summary: "Global temperatures have risen by 1.2°C compared to pre-industrial levels.",
    date: "2025-09-15",
  },
  {
    id: 6,
    title: "New Climate Report Released",
    summary: "Global temperatures have risen by 1.2°C compared to pre-industrial levels.",
    date: "2025-09-15",
  },
  {
    id: 7,
    title: "New Climate Report Released",
    summary: "Global temperatures have risen by 1.2°C compared to pre-industrial levels.",
    date: "2025-09-15",
  },
  {
    id: 8,
    title: "New Climate Report Released",
    summary: "Global temperatures have risen by 1.2°C compared to pre-industrial levels.",
    date: "2025-09-15",
  },
];

export default function News() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Weather News</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.id} className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-500 text-sm">{article.date}</p>
            <p className="mt-2 text-gray-700">{article.summary}</p>
            <button className="mt-4 text-blue-600 hover:underline">Read More</button>
          </article>
        ))}
      </div>
    </section>
  );
}
