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

export const pricing = [
  {
    id: 26,
    plan: "Marketing",
    description:
      "Attract potential customers to generate leads and drive sales",
    price: 150,
    includes: [
      {
        id: 26.1,
        feature: "5 page website",
      },
      {
        id: 26.2,
        feature: "Unlimited edits",
      },
      {
        id: 26.3,
        feature: "Includes hosting",
      },
      {
        id: 27.3,
        feature: "6 blog articles",
      },
    ],
    btnType: "primary",
  },
  {
    id: 27,
    plan: "Booking",
    description: "Your own customized online store to sell products & services",
    price: 250,
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
    plan: "Custom Plan",
    description:
      "A website tailored to your specific wants & needs to suit your business",
    price: "Price",
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
