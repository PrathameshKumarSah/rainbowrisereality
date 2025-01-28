import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// properties data
export const PROPERTIES = [
  {
    title: "Rise Resort Residences (Residential)",
    image: img1,
    category: "Cottage",
    address: "Via Roma 21",
    country: "Italy",
    city: "Greater Noida",
    area: 450,
    price: "Starting From 1.75 CR",
    description: "3,4 & 5 BHK Ultra Luxury Villas Location Techzone 4, Greater Noida west",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Oceanview Oasis Serenity Escape",
    image: img2,
    category: "Residence",
    address: "Bondi Road 105",
    country: "Australia",
    city: "Sydney",
    area: 500,
    price: 600,
    description: "A beautiful residence with a stunning ocean view, perfect for a serene escape.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2
    }
  },
  {
    title: "Sunrise Sanctuary Solace Retreat",
    image: img3,
    category: "House",
    address: "Sakura Street 15",
    country: "Japan",
    city: "Kyoto",
    area: 420,
    price: 480,
    description: "A peaceful retreat with modern amenities and beautiful sunrise views.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Urban Elegance Sophistication Haven",
    image: img4,
    category: "Property",
    address: "Queen Street 77",
    country: "Canada",
    city: "Toronto",
    area: 550,
    price: 800,
    description: "An elegant urban property with sophisticated design and ample space.",
    facilities: {
      bedrooms: 5,
      bathrooms: 4,
      parkings: 3
    }
  },
  {
    title: "Rustic Retreat Charm Cottage",
    image: img1,
    category: "Villa",
    address: "Carrer de Mallorca 9",
    country: "Spain",
    city: "Barcelona",
    area: 470,
    price: 700,
    description: "A charming rustic villa with modern amenities and scenic views.",
    facilities: {
      bedrooms: 3,
      bathrooms: 3,
      parkings: 2
    }
  },
  {
    title: "Garden Grove Oasis Retreat Haven",
    image: img3,
    category: "Penthouse",
    address: "Rua Visconde de Pirajá 305",
    country: "Brazil",
    city: "Rio de Janeiro",
    area: 520,
    price: 680,
    description: "A luxurious penthouse with a garden grove and breathtaking views.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2
    }
  },
  {
    title: "Mountain Majesty Tranquility Haven",
    image: img2,
    category: "Home",
    address: "Bahnhofstrasse 88",
    country: "Switzerland",
    city: "Zurich",
    area: 480,
    price: 750,
    description: "A tranquil home with majestic mountain views and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Lakefront Lodge Haven Haven",
    image: img5,
    category: "Apartment",
    address: "Long Street 123",
    country: "South Africa",
    city: "Cape Town",
    area: 430,
    price: 500,
    description: "A cozy lakefront apartment with scenic views and modern amenities.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Serenity Shores Bliss Haven",
    image: img4,
    category: "Villa",
    address: "Sukhumvit Road 42",
    country: "Thailand",
    city: "Bangkok",
    area: 460,
    price: 520,
    description: "A serene villa with blissful surroundings and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1
    }
  },
];


// properties data
export const BLOGS = [
  {
    title: "Tranquil Terrace Tranquility Haven",
    image: blog1,
    category: "Cottage",
  },
  {
    title: "Oceanview Oasis Serenity Escape",
    image: blog2,
    category: "Residence",
  },
  {
    title: "Sunrise Sanctuary Solace Retreat",
    image: blog3,
    category: "House",
  },
  {
    title: "Urban Elegance Sophistication Haven",
    image: blog4,
    category: "Property",
    }
]


// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      {label: "About Us", value: "/about-us"},
      {label: "Popular residencies", value: "/"},
      {label: "Privacy Policy", value: "/privacy-policy"},
      {label: "Admin", value: "/admin"},
    ],
  },
  {
    title: "Our Community",
    links: [
      {label: "Terms and Conditions", value: "/"},
      {label: "Special Offers", value: "/"},
      {label: "Customer Reviews", value: "/"},
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "+91-8077148435, +91-8058517274" },
    { label: "Email Address", value: "info.rainbowriserealty@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: <FaInstagram />, id: "instagram", url: "https://www.instagram.com/rainbowriserealty/" },
    { icon: <FaLinkedin />, id: "linkedin",  url: "https://www.linkedin.com/in/rainbow-rise-realty-8641a1333" },
    { icon: <FaFacebook />, id: "facebook", url: "/" },
    { icon: <FaTwitter />, id: "twitter",  url: "/" },
    { icon: <FaYoutube />, id: "youtube",  url: "/" },
  ],
};
