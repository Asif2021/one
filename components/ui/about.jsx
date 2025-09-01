import Image from "next/image";

export default function About() {
  return (
 <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between px-6">
  {/* Left content */}
  <div className="w-full md:w-1/2 p-6">
    <h5 className="text-sm font-bold text-black">Managed Service Provider</h5>
    <h1 className="text-4xl md:text-3xl font-bold text-blue-950 mt-2">Faster Change with Managed Services</h1>
    <p className="mt-4 text-gray-600 font-semibold">
      De-risking your future through agile engineering and secure delivery pipelines. We keep your infrastructure and applications stable, cost-effective, and relevant to evolving business needs.
    </p>
    <button className="mt-15 bg-black font-bold text-white px-6 py-2 rounded-xl hover:bg-orange-500 transition">
      Know more
    </button>
  </div>

  {/* Right content */}
  <div className="w-full md:w-1/2 p-8">
    <div className="flex items-center justify-center flex-1 rounded-xl transition">
      <Image
        src="/images/1.jpg"
        alt="image"
        width={440}
        height={250}
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>
  </div>
</div>

  );
}