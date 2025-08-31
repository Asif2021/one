"use client";

export default function HeroWithVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4" // put your video in public/videos folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for darkening video) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-center text-white">
        <h1 className="text-2xl mb-4">Tuned to the pulse of</h1>
        <h1 className="text-9xl mb-6">
         Digital Future
        </h1>
        <p className="p-[31%] py-3 rounded-lg shadow-lg">
          Creating the next generation of Digital-first, Cloud-first, and AI-first businesses
        with hyper-personalized and end-to-end automation services.
        </p>
      </div>
    </section>
  );
}
