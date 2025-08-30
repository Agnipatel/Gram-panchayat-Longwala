import Image from "next/image";
import Gallery from "@/components/Gallery/Gallery";
import Member from "@/components/member/Member";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Panchayat Name + About */}
      <section className="bg-gradient-to-r from-black to-emerald-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Gram Panchayat — Longwala
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-100">
          लॉंगवाला नहीं, स्मार्ट विलेज लॉंगवाला कहिए।  
          Empowering our village with transparent governance, sustainable
          development, and community-driven innovation.
        </p>
      </section>

      {/* About Section (Two Column Layout) */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/image/g1.jpg" // change image path as per your project
              alt="Longwala Village"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              About Longwala Panchayat
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Longwala is a vibrant village community focused on modernization
              while preserving its rich culture. With an emphasis on clean
              infrastructure, digital governance, and improved education
              facilities, Longwala is leading the way as a model Smart Village.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The Panchayat’s initiatives bring together tradition and progress,
              ensuring sustainable development while empowering the community to
              participate in shaping its future.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />
      <Member/>
    </div>
  );
}
