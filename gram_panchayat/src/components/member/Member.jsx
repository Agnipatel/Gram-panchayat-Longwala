import Image from "next/image";

const members = [
  {
    name: "Ramesh Kumar",
    role: "Sarpanch",
    image: "/image/g1.jpg",
  },
  {
    name: "Sunita Devi",
    role: "Up-Sarpanch",
    image: "/image/g1.jpg",
  },
  {
    name: "Anil Patel",
    role: "Ward Member",
    image: "/image/g1.jpg",
  },
  {
    name: "Pooja Sharma",
    role: "Ward Member",
    image: "/image/g1.jpg",
  },
  {
    name: "Vikas Singh",
    role: "Ward Member",
    image: "/image/g1.jpg",
  },
];

export default function MembersPage() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-700">
        Panchayat Members
      </h1>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Meet the dedicated members of Longwala Gram Panchayat who are working
        towards the development and progress of our village.
      </p>

      {/* Members Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
          >
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-emerald-600 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
 