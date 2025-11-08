import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Title</h1>
        <p className="text-gray-600">Subtitle</p>
      </section>
    </main>
  );
}