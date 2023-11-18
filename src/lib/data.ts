import Calendar from "../../public/icons/calendar.png";
import Reviews from "../../public/icons/reviews.png";
import Admin from "../../public/icons/admin.png";
import Next from "../../public/icons/nextjs.png";
import Mongo from "../../public/icons/mongodb.png";
import Cloudinary from "../../public/icons/cloudinary.png";
import NextAuth from "../../public/icons/nextAuth.png";
import Node from "../../public/icons/nodejs.png";
import Stripe from "../../public/icons/stripe.png";
import Vercel from "../../public/icons/vercel.png";
import Google from "../../public/icons/google.png";
import Pie from "../../public/icons/pie.png";
import Property from "../../public/icons/property.png";
import Reservation from "../../public/icons/reservation.png";
import User from "../../public/icons/user.png";
import Booking from "../../public/icons/booking.png";
import Profile from "../../public/icons/profile.png";
import Money from "../../public/icons/money.png";

export const benefits = [
  {
    heading: "Lower Fees",
    description:
      "When you have your own website, you have full control over your property listings, pricing, and booking policies. You can set your own rules and policies without being subject to the platforms' terms and conditions.",
  },
  {
    heading: "Greater Control",
    description:
      "Airbnb and VRBO charge hosts various fees, including service fees, host fees, and payment processing fees. These can significantly eat into your profits. With your own website, you can avoid or minimize these fees.",
  },
  {
    heading: "No Competing Listings",
    description:
      "On third-party platforms, your property is often listed alongside numerous competing properties, making it harder to stand out. On your website, you can focus solely on your property, giving it the undivided attention it deserves.",
  },
  {
    heading: "Diversification",
    description:
      "Relying solely on Airbnb and VRBO can be risky, as their policies and algorithms can change at any time. Having your own website provides a level of diversification and independence.",
  },
  {
    heading: "Long-Term Cost Savings",
    description:
      "While building and maintaining a website may involve an initial investment, it can save you money in the long run compared to paying ongoing fees to third-party platforms.",
  },
  {
    heading: "Data Ownership",
    description:
      "When you use Airbnb and VRBO, they own and control the guest data. With your own website, you own and control this valuable information, allowing you to build a list of past guests for marketing purposes.",
  },
] as const;

export const features = [
  {
    service: "Booking and Reservation System",
    description:
      "Implement a user-friendly booking system that allows guests to check availability, select dates, and make reservations directly on your site.",
    icon: Calendar,
  },
  {
    service: "Guest Reviews and Testimonials",
    description:
      "Showcase positive reviews and testimonials from previous guests to build trust and credibility. Visitors will only be able to review once they've booked a stay on your property.",
    icon: Calendar,
  },
  {
    service: "Admin Panel",
    description:
      "Admin panel will allow you to create, update, and delete listings on your persoanlized booking websites. You can aslo view the number of bookings, and make any updates as needed.",
    icon: Calendar,
  },
  {
    service: "Payment Processing",
    description:
      "With the use of stripe, you will be able to accept all major credit card on your own personal booking website. you can even issue refunds if someone cancels a stay at your property.",
    icon: Calendar,
  },
] as const;

export const caseStudies = [
  {
    company: "ABC Company",
    companyDesc: "ABC Company is a company that does business",
    projectDetails:
      "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in laudantium, unde vitae molestiae nostrum id neque ipsa doloremque! Porro tempore quaerat earum? Doloremque atque assumenda molestias cum qui suscipit.",
    href: "/",
  },
  {
    company: "ABC Company",
    companyDesc: "ABC Company is a company that does business",
    projectDetails:
      "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in laudantium, unde vitae molestiae nostrum id neque ipsa doloremque! Porro tempore quaerat earum? Doloremque atque assumenda molestias cum qui suscipit.",
    href: "/",
  },
] as const;

export const process = [
  {
    id: 59,
    processName: "Free analysis & offer",
    processDescription:
      "In a non-binding initial consultation, we analyze the current situation and discuss your expectations and goals. About a day after our initial consultation, you will receive a non-binding offer with a scope of services that is tailored precisely to your needs and goals.",
  },
  {
    id: 60,
    processName: "Strategy & concept",
    processDescription:
      "We analyze your target audience and develop a strategy to ideally position your website. Based on the concept, I create a prototype that gives you an impression of the later structure.",
  },
  {
    id: 61,
    processName: "Design & Development",
    processDescription:
      "You will receive a design draft that we will coordinate together until everything is in place. I will develop your website using WordPress or Webflow based on this template. The site will look perfect on all devices and details and small animations give it that certain something.",
  },
  {
    id: 62,
    processName: "Go live",
    processDescription:
      "In a personal workshop, I'll show you how to manage your content and add new ones. You don't need any technical know-how for this. Ready? Then we'll put your website live together and have a party.",
  },
] as const;

export const pricing = [
  {
    id: 26,
    plan: "Starter",
    description:
      "Ideal for individuals looking to get started, with 1 to 10 properties as you scale your business.",
    price: 250,
    includes: [
      {
        id: 26.1,
        feature: "5 page website",
      },
      {
        id: 26.2,
        feature: "Admin Dashboard",
      },
      {
        id: 26.3,
        feature: "Payment Processing",
      },
      {
        id: 27.3,
        feature: "Blog Articles",
      },
    ],
    btnType: "primary",
  },
  {
    id: 27,
    plan: "Advanced",
    description:
      "Perfect for growing businesses with 10 to 20 properties  that need additional features and advanced support.",
    price: 350,
    includes: [
      {
        id: 26.1,
        feature: "Everything in Marketing, plus:",
      },
      {
        id: 26.2,
        feature: "Online store",
      },
      {
        id: 26.3,
        feature: "Admin Dashboard",
      },
      {
        id: 27.3,
        feature: "Payment Setup",
      },
    ],
    btnType: "secondary",
  },
  {
    id: 28,
    plan: "Custom",
    description:
      "Tailored solutions for large-scale organizations with 20 or more properties with unique requirements.",
    price: "Custom",
    includes: [
      {
        id: 28.1,
        feature: "Price dependent on:",
      },
      {
        id: 28.2,
        feature: "Number of add'll pages",
      },
      {
        id: 28.3,
        feature: "Scope of Work",
      },
      {
        id: 28.3,
        feature: "Time involved",
      },
    ],
    btnType: "tertiary",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question: "What types of websites do you specialize in creating?",
    answer:
      "We specialize in developing custom websites for small businesses across various industries, including e-commerce, service-based, portfolio, and informational websites.",
  },
  {
    id: 37,
    question: "How long does it typically take to build a website?",
    answer:
      "The timeline can vary based on the complexity of the project. On average, a small business website takes around 2 to 4 weeks from initial concept to launch.",
  },

  {
    id: 39,
    question: "Can you design a website that matches my brand's identity?",
    answer:
      " Absolutely! We'll work closely with you to ensure your website's design aligns with your brand's colors, logo, and overall identity to create a cohesive online presence.",
  },
  {
    id: 40,
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Yes, all websites we develop are mobile-friendly and responsive. We prioritize delivering an optimal user experience on various devices and screen sizes.",
  },

  {
    id: 42,
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 43,
    question: "Will my website be search engine friendly?",
    answer:
      "Absolutely, we follow best practices for on-page SEO during development, helping your website rank well on search engines and driving organic traffic.",
  },
  {
    id: 44,
    question: "Can you integrate e-commerce functionality into my website?",
    answer:
      "Yes, we can incorporate e-commerce features, allowing you to sell products or services directly from your website, complete with Stripe, a secure payment gateway.",
  },
  {
    id: 45,
    question: "What's the process for getting started on my project?",
    answer:
      "To get started, simply reach out to us via our contact form or phone. We'll schedule a consultation to discuss your goals, needs, and provide you with a tailored plan and estimate for your project.",
  },
  {
    id: 46,
    question:
      "Can you assist with transferring my existing domain name to your hosting service?",
    answer:
      "Absolutely, we can guide you through the process of transferring your domain name to our hosting service. We'll ensure a smooth transition so that your website remains accessible with minimal downtime during the switch.",
  },
] as const;

export const footer = [
  {
    id: 1,
    heading: "About",
    section: [
      {
        id: 2,
        name: "Terms of Use",
        href: "/terms",
      },
      {
        id: 3,
        name: "Privacy Poilicy",
        href: "/privacy",
      },
      {
        id: 4,
        name: "Accessibility Policy",
        href: "/accessibility",
      },
      {
        id: 5,
        name: "California Disclosures",
        href: "/california",
      },
    ],
  },
  {
    id: 6,
    heading: "Services",
    section: [
      {
        id: 7,
        name: "Airport Transfers",
        href: "/services",
      },
      {
        id: 8,
        name: "Long Distance",
        href: "/services",
      },
      {
        id: 9,
        name: "Party Bus",
        href: "/services",
      },
      {
        id: 10,
        name: "Special Events",
        href: "/services",
      },
    ],
  },
  {
    id: 11,
    heading: "Booking",
    section: [
      {
        id: 12,
        name: "24/7",
        href: "/contact",
      },
      {
        id: 13,
        name: "Phoenix",
        href: "/contact",
      },
      {
        id: 146,
        name: "Scottsdale",
        href: "/contact",
      },
      {
        id: 15,
        name: "West Valley",
        href: "/contact",
      },
    ],
  },
  {
    id: 16,
    heading: "Contact",
    section: [
      {
        id: 17,
        name: "Phone",
        href: "/contact",
      },
      {
        id: 18,
        name: "Email",
        href: "/contact",
      },
      {
        id: 19,
        name: "Address",
        href: "/contact",
      },
      {
        id: 20,
        name: "Phone",
        href: "/contact",
      },
    ],
  },
] as const;

export const values = [
  {
    value: "Client Focus",
    desc: "Our clients are at the heart of everything we do. We strive to exceed their expectations with each service.",
  },
  {
    value: "Integrity",
    desc: "Honesty and transparency guide our actions, helping us build lasting relationships with our clients.",
  },
  {
    value: "Innovation",
    desc: "We embrace change and innovation, constantly exploring better ways to serve our clients.",
  },
] as const;

export const techStack = [
  {
    icon: Next,
    name: "Next.js",
    desc: "A React-based open-source framework that enables the development of server-rendered, or statically generated web applications with a focus on simplicity and performance.",
  },
  {
    icon: Mongo,
    name: "Mongo DB",
    desc: "MongoDB is a cross-platform, document-oriented NoSQL database that provides high performance, scalability, and flexibility for handling and organizing data in a JSON-like BSON format.",
  },
  {
    icon: Cloudinary,
    name: "Cloudinary",
    desc: "Cloudinary is a cloud-based image and video management platform that offers a comprehensive suite of tools for uploading, storing, optimizing, and delivering media assets.",
  },
  {
    icon: NextAuth,
    name: "Next Auth",
    desc: "An authentication library for Next.js applications that simplifies the implementation of various authentication providers, offering a seamless and customizable solution for user authentication.",
  },
  {
    icon: Node,
    name: "Node",
    desc: "Node.js is a server-side JavaScript runtime environment that allows developers to execute JavaScript code on the server, enabling the development of scalable and high-performance web applications.",
  },
  {
    icon: Stripe,
    name: "Stripe",
    desc: "Stripe is a popular online payment processing platform that provides APIs and tools for businesses to securely accept and manage payments over the internet, supporting various payment methods and currencies.",
  },
  {
    icon: Vercel,
    name: "Vercel",
    desc: "Vercel is a cloud platform for serverless deployment that specializes in hosting Jamstack websites and serverless functions, providing a seamless and efficient way to deploy and scale web applications with ease.",
  },
  {
    icon: Google,
    name: "Google Analytics",
    desc: "A web analytics service that tracks and reports website traffic, providing insights into user behavior, demographics, and other metrics to help better understand and optimize online presence.",
  },
] as const;

export const adminData = [
  {
    icon: Pie,
    category: "Admin Dashboard",
    tasks: [
      {
        task: "Retrieve the total sales for either the current day or an extended period, check the number of bookings, and view a graph chart illustrating the sales history.",
      },
    ],
  },
  {
    icon: Property,
    category: "Property Listings",
    tasks: [
      {
        task: "Create new property listings for your guests, update existing listings as needed, enjoy unlimited image uploads for each property, and easily delete listings when necessary.",
      },
    ],
  },
  {
    icon: Reservation,
    category: "Guest Reservations",
    tasks: [
      {
        task: "Review booked dates, check-in/check-out details, and access guest receipts easily. Additionally, manage your reservations efficiently by deleting them as needed.",
      },
    ],
  },
  {
    icon: User,
    category: "User Info",
    tasks: [
      {
        task: "View comprehensive reservation information for all guests, assign user roles like admin or regular user, and effortlessly delete users when required.",
      },
    ],
  },
  {
    icon: Reviews,
    category: "Guest Reviews",
    tasks: [
      {
        task: "Effortlessly view all comments and efficiently manage your content by deleting comments as necessary.",
      },
    ],
  },
  {
    icon: Money,
    category: "Payment Access",
    tasks: [
      {
        task: "Access all of the payments that were sent to you by your guest. Issue refunds, print receipts, and manage all charges",
      },
    ],
  },
] as const;

export const guestData = [
  {
    icon: Booking,
    category: "My Bookings",
    tasks: [
      {
        task: "Check booked dates, view check-in/check-out details, and review the total amount paid for reservations. Additionally, access detailed reservation information and conveniently print reservation receipts in PDF format.",
      },
    ],
  },
  {
    icon: Profile,
    category: "My Profile",
    tasks: [
      {
        task: "Easily update your profile by changing your username, updating your email address, uploading a new user image, and modifying your password as needed.",
      },
    ],
  },
] as const;

export const webFeatures = [
  {
    feature: "Resposive",
    desc: "Designed to adapt and display optimally on various devices and screen sizes, providing an optimal user experience by adjusting its layout and content dynamically.",
  },
  {
    feature: "Accessible",
    desc: "Ensures that people with disabilities can perceive, understand, navigate, and interact with its content, features, and functionalities effectively, providing an inclusive and equal user experience for all.",
  },
  {
    feature: "SEO",
    desc: "A search engine optimized website is configured to enhance its visibility and ranking on search engine results pages, employing strategies to improve its relevance, accessibility, and overall performance for better search engine discoverability.",
  },
  {
    feature: "Page Speed Optimzed",
    desc: "Webite pages load quickly and efficiently, ensuring fast loading times for its pages and content, which contributes to a better user experience and may positively impact search engine rankings.",
  },
];
