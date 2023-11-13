import Check from "../../public/icons/calendar.png";

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
    service: "Availability Calendar",
    description:
      "Display an up-to-date availability calendar to help visitors see when the property is open for booking.",
    icon: Check,
  },
  {
    service: "Booking and Reservation System",
    description:
      "Implement a user-friendly booking system that allows guests to check availability, select dates, and make reservations directly on your site.",
    icon: Check,
  },
  {
    service: "Guest Reviews and Testimonials",
    description:
      "Showcase positive reviews and testimonials from previous guests to build trust and credibility.",
    icon: Check,
  },
  {
    service: "FAQ Section",
    description:
      "Address common questions and concerns in a frequently asked questions (FAQ) section to assist potential guests.",
    icon: Check,
  },
  {
    service: "Admin Panel",
    description:
      "Admin panel will allow you to create, update, and delete listings on your persoanlized booking websites. You can aslo view the number of bookings, and make any updates as needed.",
    icon: Check,
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
