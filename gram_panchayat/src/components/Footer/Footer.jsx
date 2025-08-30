// app/components/Footer.tsx
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Longwala Village Office, Sundarpur District
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> office@longwala.panchayat.in
            </li>
          </ul>
        </div>

        {/* About Panchayat */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Panchayat</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Gram Panchayat Longwala is committed to transparent governance,
            community welfare, and sustainable development for all villagers.
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <Link href="#" aria-label="Facebook" className="p-2 rounded-full bg-white shadow hover:bg-gray-200">
              <Facebook size={18} />
            </Link>
            <Link href="#" aria-label="Twitter" className="p-2 rounded-full bg-white shadow hover:bg-gray-200">
              <Twitter size={18} />
            </Link>
            <Link href="#" aria-label="Instagram" className="p-2 rounded-full bg-white shadow hover:bg-gray-200">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-gray-200 text-gray-600 text-center text-sm py-3">
        © {new Date().getFullYear()} Gram Panchayat Longwala | Designed as Demo Prototype
      </div>
    </footer>
  );
}
