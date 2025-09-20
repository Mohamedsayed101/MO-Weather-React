
const photos = [
  "/Images/weather1.jpg",
  "/Images/weather4.jpg",
  "/Images/weather3.jpg",
  "/Images/weather4.jpg",
  "/Images/weather2.jpg",
  "/Images/weather4.jpg",
  "/Images/weather2.jpg",
  "/Images/weather4.jpg",
  "/Images/weather2.jpg",
  "/Images/weather4.jpg",
  "/Images/weather2.jpg",
  "/Images/weather4.jpg",
];

export default function Photos() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Photos</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Weather ${index}`}
            className="rounded-lg shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
