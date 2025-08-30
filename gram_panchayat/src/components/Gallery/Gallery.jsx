// app/gallery/page.tsx
import Image from "next/image";

export default function GalleryPage() {
  // Local images stored in /public/assets/gallery
  const images = [
    "/image/g1.jpg",
    "/image/g2.jpg",
     "/image/g3.png",
      "/image/g4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800">
           Longwala Village Gallery
        </h1>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          A glimpse of Smart Village Longwala — people, culture, community
          spaces, and Panchayat development activities.
        </p>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-64 rounded-xl shadow-md overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Village Gallery Image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
