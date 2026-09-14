/**
 * Product Blinds — Top-Level Product Pages
 *
 * Data for the standalone "/roller-blinds/", "/roman-blinds/",
 * "/wooden-window-blinds/", "/pleated-blinds/", "/perfect-fit-blinds/",
 * and "/vertical-blinds/" pages — the top-level product types listed under
 * the new "Products" navbar category. Content is copied verbatim from the
 * WordPress site pages; each conforms to the shared CommercialBlindPage
 * template shape (hero + benefit cards + differentiator cards + optional
 * extra sections for content that doesn't fit the card grids).
 */

import type { CommercialBlindPageContent } from "./commercialBlindsPages";


export const productBlindsPages: Record<string, CommercialBlindPageContent> = {
  "roller-blinds": {
    slug: "roller-blinds",
    metaTitle: "Roller Blinds in the UK | Made-to-Measure | Advenco",
    metaDescription:
      "Stylish, made-to-measure roller blinds in the UK from Advenco Window Blinds and Shutters — child-safe, motorized options, free measuring and fitting.",
    badgeLabel: "Roller Blinds",
    heroHeadingLines: ["Stylish and Functional", "Roller Blinds in UK"],
    heroBody: [
      "Roller blinds in UK are a timeless choice for various window styles, offering a broad range of designs and colours. They can be customized with different bases, shapes, and edges, from modern straight lines to elegant waves and classical designs. Most of our roller blinds in UK are crafted using high-quality components with a standard aluminum tube and are available with either side chain control or spring operation. The innovative Soft Rise option allows the blinds to retract gently and smoothly.",
      "The same control mechanism is used to adjust the height of the roller blind, enabling you to raise or lower it to any desired position, just like a standard roller blind. This feature allows the Vision Blind to roll up completely into the stylish cassette headrail, providing an uninterrupted view of the outdoors.",
    ],
    heroImage: "/images/stock/photo-1600493867499-4882d15a30ad.jpg",
    heroImageAlt: "Roller blind product showcase",
    sideImage: "/images/stock/photo-1735822083502-0c5fab870457.jpg",
    sideImageAlt: "Roller blind product showcase",
    importanceLabel: "Leading the Market",
    importanceHeadingLines: ["Advenco Window Blinds and Shutters:", "Affordable Roller Blinds in UK"],
    importanceBody: [
      "Advenco Window Blinds and Shutters in UK has been a nationwide leader in providing affordable roller blinds in UK for many years. We specialize in made-to-measure, custom-made, and professionally fitted blinds for discerning customers across the UK. Our reputation for expert design and quality means that our products will never disappoint when you need them most. We prioritize top-quality materials and a unique variety of products. At Advenco, we never compromise on quality for profit, because our reputation is invaluable, and your satisfaction is our success.",
      "Customer service is equally important to us as we strive to earn your trust. We actively seek feedback to achieve excellence. We value and invest in our team of highly experienced professionals, many of whom have been with us for a significant portion of their careers. Their expertise is at the forefront of our industry. All our staff are directly employed by us, ensuring you receive expert service throughout, from our sales team to our installers, product creators, and after-care service team.",
    ],
    benefits: [
      {
        icon: "award",
        title: "Made in Britain",
        body: "Crafted with care and quality, our specialized roller blinds in UK come with a 12 months guarantee on all domestic roller blinds.",
      },
      {
        icon: "shield-check",
        title: "Child Safe",
        body: "No trailing cords or chains on our slow-rise Elegance blinds, keeping your home safe for children and pets.",
      },
      {
        icon: "sparkles",
        title: "No Sew Lines",
        body: "A clean finish at the bottom of the blind for a seamless, polished look on every window.",
      },
      {
        icon: "wrench",
        title: "Motorized Blinds Available",
        body: "For added convenience, upgrade to motorized operation across our exclusive, award-winning designs.",
      },
      {
        icon: "layers",
        title: "Exclusive Designs",
        body: "Award-winning and unique patterns, customizable with textures, materials, colours, and finishes to suit your preferences.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Perfect Fit Roller Blinds in UK",
        body: "Advenco Window Blinds and Shutters in UK offers perfect fit roller window blinds across the UK for every specification. Our specialized roller blinds in UK are available with high-quality composite materials and perfect fittings for your windows. Our British-made roller blinds are ideal for large windows and openings, custom-made for both large commercial interiors and residential windows.",
      },
      {
        icon: "sun",
        title: "Daylight, Temperature, and Privacy Control",
        body: "For all interiors, our roller blinds in UK offer excellent light control, insulation, and privacy — customizable with textures, materials, colours, and finishes.",
      },
      {
        icon: "award",
        title: "Premium Quality Materials",
        body: "What makes window blinds last long? Alongside accurate fittings, material quality is crucial. Advenco Window Blinds and Shutters in UK guarantees some of the finest roller blinds in UK for your windows, using top-quality composite materials and advanced processing techniques.",
      },
      {
        icon: "sparkles",
        title: "Custom Designs",
        body: "All materials are processed to suit your interiors perfectly, with custom-made options available. Choose your colours, designs, sizes, and material types, and we'll ensure top-notch quality for all kinds of roller blinds in UK.",
      },
      {
        icon: "wrench",
        title: "Free Measuring and Fitting Services",
        body: "Even the smallest mistake in window measuring or blinds fitting can affect functionality or appearance. Advenco offers free window measuring and fitting services in select areas, with next-day appointments available in many parts of the country including Manchester, Leeds, Stoke, Nottingham, Sheffield, Birmingham, Luton, and Watford.",
      },
    ],
    bannerImage: "/images/stock/photo-1735822083502-0c5fab870457.jpg",
    bannerImageAlt: "Blue café style shutters on a white house exterior",
    closingHeading: "Roller Blinds for Home and Office",
    closingBody: [
      "Our professionals will ensure that your roller blinds are fitted precisely and accurately, ensuring longevity and maintaining a pristine appearance.",
      "Contact us now for more information.",
    ],
  },

  "roman-blinds": {
    slug: "roman-blinds",
    metaTitle: "Roman Blinds in the UK | Luxurious Made-to-Measure | Advenco",
    metaDescription:
      "Bespoke Roman blinds in the UK from Advenco Window Blinds and Shutters — luxurious designer fabrics, blackout linings, free measuring and fitting.",
    badgeLabel: "Roman Blinds",
    heroHeadingLines: ["Luxurious UK-Made", "Roman Blinds"],
    heroBody: [
      "At Advenco Window Blinds and Shutters, we take pride in offering bespoke Roman blinds in UK crafted from luxurious designer fabrics. When you pull the chain along the edge, these blinds ascend vertically, folding neatly into horizontal pleats. Each blind is meticulously handcrafted in the UK by our skilled artisans, ensuring that you invest in a stunning product that not only meets but exceeds your expectations.",
      "With a diverse range of exquisite designs, rich textures, and vibrant fabrics, finding a style that complements your interior has never been easier. You also have the option to add a free blackout and energy-saving lining, enhancing the blinds' effectiveness in blocking out light, making them perfect for your bedroom or home office. All our fabric Roman blinds in UK come with a variety of operating mechanisms and linings, including blackout, thermal, and interlining options. Our Roman blinds in UK are delivered with all necessary fixtures and fittings, including child safety features. Explore our range of fabrics below and order a free fabric sample before you buy to ensure you get your perfect Roman blinds in a fabric you love.",
    ],
    heroImage: "/images/2024/11/b-3-768x512.webp",
    heroImageAlt: "Roman blind samples and installation",
    sideImage: "/images/2024/11/e-768x512.webp",
    sideImageAlt: "Roman blind samples and installation",
    importanceLabel: "Affordable & Custom",
    importanceHeadingLines: ["Affordable and Custom", "Roman Blinds in UK"],
    importanceBody: [
      "If you are looking for affordable Roman blinds in UK and haven't found a suitable provider yet, Advenco Window Blinds and Shutters is a UK-based company dedicated to offering high-quality, durable window blinds to our valued customers. With years of successful service in the field, we strive to provide you with the best products that can transform the look of your home in unexpected ways. Our designers will contact you to measure the precise size of your windows for your Roman blinds in UK.",
      "We offer a wide variety of options according to your taste and needs. Our quality and service are unmatched across the UK, and we believe in making no compromises in service. Our modern collection features striped designs with luxurious textured, woven, and printed soft fabrics. From vintage to contemporary, we have a fabric to suit all styles of interiors, allowing you to add some striped elegance to your home.",
    ],
    benefits: [
      {
        icon: "wrench",
        title: "Free Measuring and Fitting",
        body: "Supply and installation within seven days, with next-day service availability in many parts of the country.",
      },
      {
        icon: "award",
        title: "UK-Manufactured Blinds",
        body: "Exceptional quality, serving customers across the UK with a 12-month guarantee on every order.",
      },
      {
        icon: "sparkles",
        title: "Stunning Fabric Designs",
        body: "A collection of colours to suit every palette, from vintage stripes to contemporary textures.",
      },
      {
        icon: "sun",
        title: "Blackout Fabrics",
        body: "For enhanced privacy and sleep, our blackout linings are available free on request for bedrooms and home offices.",
      },
      {
        icon: "leaf",
        title: "Energy-Efficient Fabrics",
        body: "To save you money, our thermal and interlining options help regulate room temperature year-round.",
      },
    ],
    differentiators: [
      {
        icon: "shield-check",
        title: "Trusted Roman Blinds Supplier in the UK",
        body: "Advenco Window Blinds and Shutters offers made-to-measure customized Roman blinds in UK for every window. We provide free window measuring and Roman blinds fitting across UK. Our high-quality Roman blinds in UK are designed specifically for your windows with perfect fittings and the best fabric materials.",
      },
      {
        icon: "layers",
        title: "Exquisite Fabric Materials",
        body: "Roman blinds in UK are all about their exquisite fabric materials. Advenco Window Blinds and Shutters in UK offers high-quality fabric materials for our premium Roman blinds in UK. All our thick fabrics are processed locally to create some of the highest quality Roman shades.",
      },
      {
        icon: "sparkles",
        title: "Extensive Range of Designs, Textures, and Styles",
        body: "Advenco Window Blinds and Shutters in UK offers unique Roman shades for all window needs, finished with custom designs, textures, and styles. Create your own Roman blinds with any design patterns and texture finishes.",
      },
      {
        icon: "users",
        title: "Homes and Offices",
        body: "Roman blinds in UK are perfect for homes, flats, apartments, and office windows. Their fabric materials impart a unique elegance that complements various interior settings.",
      },
      {
        icon: "pound",
        title: "Custom Made-to-Measure",
        body: "Do you want a hassle-free window blinds experience? Advenco Window Blinds and Shutters in UK now offers free window measuring and Roman blinds fitting across UK. Call now to learn more.",
      },
    ],
    bannerImage: "/images/2024/11/g-768x570.webp",
    bannerImageAlt: "Roman blind samples and installation",
    closingHeading: "Custom Made-to-Measure Roman Blinds with Free Measuring and Fitting",
    closingBody: [
      "Do you want a hassle-free window blinds experience? Advenco Window Blinds and Shutters in UK now offers free window measuring and Roman blinds fitting across UK. Call now to learn more.",
    ],
  },

  "wooden-window-blinds": {
    slug: "wooden-window-blinds",
    metaTitle: "Wooden Window Blinds in the UK | Advenco",
    metaDescription:
      "Genuine wooden Venetian blinds in the UK from Advenco Window Blinds and Shutters — natural warmth, custom sizes, free measuring and fitting.",
    badgeLabel: "Wooden Window Blinds",
    heroHeadingLines: ["Natural Warmth and Elegance of", "Wooden Window Blinds in UK"],
    heroBody: [
      "Wooden blinds are crafted from genuine wood, offering a remarkable appearance that brings a warm and natural feel to your home decor. Many individuals prefer real wooden blinds for their sophistication and the refined quality they add to any room. Wood blinds resemble a finely crafted piece of furniture, with a distinctive fine grain and an exquisite surface featuring unique details. These blinds are mostly made from North American hardwoods, using sustainable forestry practices crucial in today's era of dwindling tree supplies.",
      "The patina of genuine wood blinds is unmatched and inimitable. This elegant look requires some care, as harsh chemicals should be avoided when cleaning. Wooden Venetian blinds provide excellent insulation due to their sturdy wood construction, and they offer superior privacy, shielding furniture and artwork from harsh sunlight. Genuine wood blinds are lightweight, durable, and available in a variety of sizes, which is important when covering large or oversized windows.",
    ],
    heroImage: "/images/products/woodvenetianblinds1.webp",
    heroImageAlt: "Golden oak wooden Venetian blinds fitted to a tall bay window",
    sideImage: "/images/products/woodvenetianblinds4.webp",
    sideImageAlt: "White-painted wooden Venetian blinds with tape ladders on a wide kitchen window",
    importanceLabel: "Diverse Finishes",
    importanceHeadingLines: ["Diverse Finish Options for", "Wooden Window Blinds in UK"],
    importanceBody: [
      "If you have a specific stained wood trim or want to match furniture, hardwood blinds come in beautiful stains and various types. Real wood blinds are a luxurious addition to any home, adding an unparalleled warmth of elegance. Wooden window blinds in UK are essentially an irresistible design choice for your windows.",
      "If you are seeking affordable wooden Venetian blinds or wood window blinds in UK and haven't found a suitable supplier yet, Advenco Window Blinds and Shutters is a UK-based company dedicated to providing quality and reliable window blinds to their valued clients in the UK. Our engineers will contact you to measure the exact size of your windows for which you want wooden blinds. Wood blinds are available in oil, lacquer, and painted finishes in Batley, West Yorkshire, UK, and surrounding areas including Manchester, Leeds, Stoke-on-Trent, Nottingham, Sheffield, Birmingham, Luton, and Watford.",
    ],
    benefits: [
      {
        icon: "layers",
        title: "Black Wooden Venetian Blind",
        body: "One of ten types of wooden window blinds in UK available, alongside Oak, White, Acacia Hardwood, and Natural Wooden Venetian styles.",
      },
      {
        icon: "sparkles",
        title: "Faux Wood Cordless Venetian Blind",
        body: "Available in White and Glacier Grey finishes, plus Acacia Extended Drop and Cream Extended Drop Wooden Venetian Blinds for larger windows.",
      },
      {
        icon: "wrench",
        title: "Free Measuring and Fitting",
        body: "Advenco Window Blinds and Shutters in UK offers free window measuring services in UK any day of the week. Once your blinds are ready, our professionals provide free installation.",
      },
      {
        icon: "shield-check",
        title: "Quality Assurance",
        body: "We use quality materials to ensure our wooden window blinds remain strong and durable for years. Our accurately machine-cut and hand-assembled wooden window blinds in UK maintain their functionality over time.",
      },
      {
        icon: "award",
        title: "Real Wood Slats",
        body: "For an elegant look, luxury finishes, and a wide range of wood colors — long-lasting, functional wooden blinds trusted by thousands of homeowners and commercial building managers.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "High-Quality Wooden Blinds",
        body: "For homes and offices, our real wood slats provide an elegant look with luxury finishes and a wide range of wood colors.",
      },
      {
        icon: "wrench",
        title: "On-Site Window Measuring and Blinds Installation",
        body: "Trusted by thousands of homeowners and commercial building managers across the country, with quick maintenance visits and next-day appointments.",
      },
      {
        icon: "award",
        title: "British Woods, Finished and Polished to Perfection",
        body: "If you need truly high-quality wooden blinds that you can be proud of, Advenco Window Blinds and Shutters offers just that and more. Our home and office wooden blinds are made from the best materials, using local British woods finished and polished to perfection by professional craftsmen.",
      },
      {
        icon: "sparkles",
        title: "Handmade Wooden Window Blinds",
        body: "Always provided with impeccable surface finishes and exceptional material quality, whether you need wooden blinds for a home, flat, apartment, or commercial office.",
      },
      {
        icon: "users",
        title: "Available Any Day of the Week",
        body: "We are available any day of the week. Call now to book your doorstep visit for today or any other day of the week.",
      },
    ],
    bannerImage: "/images/products/woodvenetianblinds2.webp",
    bannerImageAlt: "Dark walnut wooden Venetian blinds with an autumn view through the window",
    closingHeading: "Beautiful Wooden Window Blinds in UK to Elevate Your Home",
    closingBody: [
      "If you need truly high-quality wooden blinds that you can be proud of, Advenco Window Blinds and Shutters offers just that and more. Our home and office wooden blinds are made from the best materials, using local British woods finished and polished to perfection by professional craftsmen.",
      "Whether you need wooden blinds for a home, flat, apartment, or commercial office, we provide the best products to meet your needs. We are available any day of the week. Call now to book your doorstep visit for today or any other day of the week.",
    ],
  },

  "pleated-blinds": {
    slug: "pleated-blinds",
    metaTitle: "Pleated Blinds in the UK | Advenco Window Blinds and Shutters",
    metaDescription:
      "Elegant, energy-efficient pleated blinds in the UK from Advenco Window Blinds and Shutters — bespoke designs, easy maintenance, professional installation.",
    badgeLabel: "Pleated Blinds",
    heroHeadingLines: ["Boost Your Home's Aesthetic with", "Pleated Blinds"],
    heroBody: [
      "When it comes to enhancing your home's interior, window treatments play a crucial role. Among the various options available, pleated blinds in UK stand out for their elegance and functionality. At Advenco Window Blinds and Shutters in UK, we offer a stunning range of pleated blinds in UK that can transform your living space. Based in the UK, we are committed to providing high-quality window treatments that blend style and practicality.",
    ],
    heroImage: "/images/stock/photo-1688818228795-d465bf6e3c35.jpg",
    heroImageAlt: "Pleated blinds product showcase",
    sideImage: "/images/stock/photo-1688818228795-d465bf6e3c35.jpg",
    sideImageAlt: "Pleated blinds product showcase",
    importanceLabel: "Why Choose Pleated Blinds",
    importanceHeadingLines: ["Why Choose Pleated", "Blinds in UK?"],
    importanceBody: [
      "Pleated blinds in UK are a popular choice for many homeowners due to their versatility and aesthetic appeal. Here are some key reasons why pleated blinds are an excellent addition to any home:",
    ],
    benefits: [
      {
        icon: "sparkles",
        title: "Sleek Design",
        body: "Pleated blinds in UK feature a clean, streamlined look that complements both modern and traditional interiors. Their neat, folded design adds a touch of sophistication to any room.",
      },
      {
        icon: "sun",
        title: "Light Control",
        body: "These pleated blinds in UK offer excellent control over natural light, allowing you to create the perfect ambiance. You can adjust the blinds to let in just the right amount of sunlight, reducing glare and protecting your furniture from UV rays.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Pleated blinds in UK can help regulate indoor temperatures by providing an extra layer of insulation. This can lead to reduced energy costs, as they keep your home cooler in the summer and warmer in the winter.",
      },
      {
        icon: "eye",
        title: "Privacy",
        body: "With pleated blinds in UK, you can enjoy enhanced privacy without compromising on natural light. Their design allows you to cover your windows completely or partially, depending on your needs.",
      },
      {
        icon: "layers",
        title: "Wide Range of Styles and Colours",
        body: "At Advenco, we offer pleated blinds in UK of various styles, colours, and patterns. Whether you prefer a minimalist look or something more vibrant, we have options to suit your taste.",
      },
    ],
    differentiators: [
      {
        icon: "wrench",
        title: "Customization to Suit Your Needs",
        body: "At Advenco Window Blinds and Shutters in UK, we understand that every home is unique. That's why we offer bespoke pleated blinds tailored to your specific requirements. Our expert team will work with you to choose the perfect fabric, colour, and design that complements your home's décor.",
      },
      {
        icon: "sparkles",
        title: "Easy Maintenance",
        body: "Pleated blinds in UK are not only stylish but also easy to maintain. They are designed to be durable and require minimal upkeep. Regular dusting and occasional spot cleaning are usually sufficient to keep them looking pristine.",
      },
      {
        icon: "award",
        title: "Experience and Expertise",
        body: "With years of experience in the industry, we have the knowledge and skills to help you find the perfect window treatments for your home.",
      },
      {
        icon: "shield-check",
        title: "High-Quality Products",
        body: "We use only the finest materials to ensure our blinds are durable and long-lasting.",
      },
      {
        icon: "pound",
        title: "Competitive Pricing",
        body: "We offer competitive prices without compromising on quality, ensuring you get the best value for your money.",
      },
    ],
    extraSections: [
      {
        heading: "Perfect for Any Room",
        paragraphs: [
          "Pleated blinds in UK are versatile and can be installed in any room of your home. They are particularly well-suited for:",
        ],
        bullets: [
          "Living Rooms: Create a cozy and inviting atmosphere by controlling the amount of natural light.",
          "Bedrooms: Ensure a good night's sleep with blinds that offer excellent blackout properties.",
          "Kitchens: Enjoy privacy and light control while adding a stylish touch to your cooking space.",
          "Home Offices: Reduce glare on your computer screen and maintain a professional look with sleek pleated blinds.",
        ],
      },
      {
        heading: "Professional Installation",
        paragraphs: [
          "At Advenco Window Blinds and Shutters in UK, we pride ourselves on providing exceptional customer service. Our team of professionals will handle the installation process from start to finish, ensuring a perfect fit and flawless operation of your pleated blinds in UK.",
        ],
      },
    ],
    bannerImage: "/images/stock/photo-1653134641891-118e3094fc42.jpg",
    bannerImageAlt: "Pleated blinds product showcase",
    closingHeading: "Contact Us Today",
    closingBody: [
      "Ready to elevate your home's interior with stunning pleated blinds? Contact Advenco Window Blinds and Shutters today for a consultation. Let us help you find the perfect window treatment solution that enhances your home's beauty and functionality.",
    ],
  },

  "perfect-fit-blinds": {
    slug: "perfect-fit-blinds",
    metaTitle: "Perfect Fit Blinds in the UK | Advenco Window Blinds and Shutters",
    metaDescription:
      "No-drill Perfect Fit blinds in the UK from Advenco Window Blinds and Shutters — roller, pleated, and Venetian options with expert installation.",
    badgeLabel: "Perfect Fit Blinds",
    heroHeadingLines: ["The Ultimate Guide to", "Perfect Fit Blinds in the UK"],
    heroBody: [
      "When it comes to window treatments that offer both style and functionality, Perfect Fit blinds in UK are an excellent choice. At Advenco Window Blinds and Shutters in UK, we pride ourselves on offering top-quality window solutions tailored to your needs. In this guide, we'll explore everything you need to know about Perfect Fit blinds in UK, why they're a great choice, and how they can enhance your home.",
    ],
    heroImage: "/images/products/perfectfitblinds1.webp",
    heroImageAlt: "Oak wood-effect Perfect Fit Venetian blinds fitted to a triple casement window",
    sideImage: "/images/products/perfectfitblinds2.webp",
    sideImageAlt: "Oak Perfect Fit Venetian blinds fitted to a kitchen bay window above the sink",
    importanceLabel: "What are Perfect Fit Blinds?",
    importanceHeadingLines: ["What are Perfect Fit", "Blinds in UK?"],
    importanceBody: [
      "Perfect Fit blinds in UK are a revolutionary window blind system that snaps into place within your window frame without the need for drilling or screws. This innovative design allows the blinds to move together with the window or door, providing a seamless look and maximum light control. They are ideal for uPVC windows and doors, including tilt and turn windows, conservatories, and skylights.",
    ],
    benefits: [
      {
        icon: "wrench",
        title: "No Drilling or Screws",
        body: "Perfect Fit blinds in UK are installed using a unique bracket system that clips into your window frame, making the installation process quick and easy.",
      },
      {
        icon: "sun",
        title: "Enhanced Light Control",
        body: "These blinds in UK fit snugly within the frame, reducing light gaps and providing excellent control over the amount of light entering your room.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Perfect Fit blinds in UK can help insulate your home by reducing heat loss during the winter and keeping your rooms cooler in the summer.",
      },
      {
        icon: "shield-check",
        title: "Child Safety",
        body: "With no loose cords or chains, Perfect Fit blinds in UK are a safer option for homes with young children and pets.",
      },
      {
        icon: "sparkles",
        title: "Aesthetic Appeal",
        body: "The sleek and integrated design of Perfect Fit blinds in UK enhances the overall look of your windows, offering a clean and modern appearance.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Perfect Fit Roller Blinds",
        body: "Simple and stylish, these blinds are perfect for achieving a minimalist look while providing excellent light control.",
      },
      {
        icon: "sparkles",
        title: "Perfect Fit Pleated Blinds",
        body: "These blinds add a touch of elegance and are available in various fabrics, including blackout and thermal options.",
      },
      {
        icon: "eye",
        title: "Perfect Fit Venetian Blinds",
        body: "Ideal for those who prefer adjustable light levels, these blinds come in a range of colours and finishes to complement any décor.",
      },
      {
        icon: "award",
        title: "Quality Products",
        body: "We source our Perfect Fit blinds in UK from leading manufacturers to ensure durability and style.",
      },
      {
        icon: "users",
        title: "Expert Installation",
        body: "Our professional team ensures a flawless fit and finish for every installation.",
      },
    ],
    extraSections: [
      {
        heading: "How to Choose the Right Perfect Fit Blinds",
        paragraphs: [
          "When selecting Perfect Fit blinds, consider the following factors:",
        ],
        bullets: [
          "Room Function: Think about the purpose of the room and how much light control and privacy you need.",
          "Style and Décor: Choose a colour and design that complements your existing interior décor.",
          "Window Type: Ensure the blinds you select are suitable for the type of window or door you have.",
        ],
      },
    ],
    bannerImage: "/images/products/perfectfitblinds4.webp",
    bannerImageAlt: "Duck-egg Perfect Fit Venetian blinds on white French doors opening to a garden",
    closingHeading: "Conclusion",
    closingBody: [
      "Perfect Fit blinds are a versatile and stylish window treatment option that offers numerous benefits. At Advenco Window Blinds and Shutters, we are dedicated to helping you find the perfect solution for your home. With our extensive range of high-quality blinds and expert installation services, you can enjoy the perfect blend of functionality and aesthetics.",
      "Contact us today to learn more about our Perfect Fit blinds and schedule a free consultation. Transform your windows with Advenco, and experience the difference of perfectly fitted blinds.",
    ],
  },

  "vertical-blinds": {
    slug: "vertical-blinds",
    metaTitle: "Vertical Blinds for Sale in the UK | Advenco Window Blinds and Shutters",
    metaDescription:
      "Custom made-to-measure vertical blinds in the UK from Advenco Window Blinds and Shutters — 500+ styles, motorized options, free measuring and fitting.",
    badgeLabel: "Vertical Blinds",
    heroHeadingLines: ["Vertical Blinds", "for Sale in the UK"],
    heroBody: [
      "Vertical blinds in UK offer the perfect balance between light control and privacy, making them ideal for a range of window types including large and small windows, French doors, patio doors, and bay windows. They can open fully or bunch to each side, providing flexible coverage options. Available in a vast array of colours with 89mm louvre size, vertical blinds in UK are both practical and affordable while adding a touch of elegance to any space.",
      "All our vertical blinds in UK come with either wand (stick) control or chain control, and our advanced machinery and robotics ensure custom-made vertical blinds in UK of any size.",
    ],
    heroImage: "/images/products/vertical1.webp",
    heroImageAlt: "Blue-grey patterned vertical blind louvres angled across a sunlit windowsill",
    sideImage: "/images/products/vertical2.webp",
    sideImageAlt: "Close-up of grey patterned vertical blind louvres hanging from a white headrail track",
    importanceLabel: "Diverse Range",
    importanceHeadingLines: ["Diverse Range of", "Styles and Colours"],
    importanceBody: [
      "With over 500 styles and colours to choose from, Advenco Window Blinds and Shutters in UK is the leading provider of exclusive and award-winning designs. Our vertical blinds in UK are available in jacquards, prints, sheers, translucent, and flame-retardant materials, ensuring you find the perfect vertical blind in UK to suit your needs.",
    ],
    benefits: [
      {
        icon: "layers",
        title: "Clear Hooks and Hangers",
        body: "Precision fittings including nickel chain joining louvres for smooth, reliable operation.",
      },
      {
        icon: "shield-check",
        title: "Child-Safe Cordless Blinds",
        body: "No trailing cords or chains — a safer option for homes with children and pets.",
      },
      {
        icon: "wrench",
        title: "Apollo Blinds Elegance Wand",
        body: "For adjustment, plus motorized options available with powered louvre systems, 8 tilt and traverse functions, and automatic Night and Day settings.",
      },
      {
        icon: "award",
        title: "Made in the UK",
        body: "With a 12-month guarantee on all products and over 400 fabrics in our collection.",
      },
      {
        icon: "sparkles",
        title: "Made-to-Measure, Bespoke to Any Size",
        body: "Adjustable to fit your room's needs, with motorized blinds available across our full range.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Types of Vertical Blinds in UK",
        body: "Choose from Fabric Insert Vertical Blinds, Chainless Bottom Weights Vertical Blinds, Aluminum Pelmets Vertical Blinds, and Wand Control and Cathedral Applications Vertical Blinds. Perfect fit vertical blinds are available for all window types, ensuring a precise fit and comprehensive attention to detail.",
      },
      {
        icon: "shield-check",
        title: "Trusted Provider of Vertical Blinds",
        body: "Advenco Window Blinds and Shutters is a trusted provider of window blinds in UK, offering high-quality vertical blinds in UK for homes, apartments, offices, and more. Our vertical blinds in UK are crafted from durable materials, ensuring longevity and aesthetic appeal.",
      },
      {
        icon: "pound",
        title: "Competitive Prices",
        body: "Enjoy our blinds at competitive prices, with additional discounts for bulk purchases. Perfect fit vertical blinds are tailored to your specific windows, ensuring a flawless fit every time.",
      },
      {
        icon: "award",
        title: "High-Quality Vertical Blinds Materials",
        body: "The elegance of vertical blinds in UK lies in their material quality. Advenco Window Blinds and Shutters in UK guarantees top-notch materials for your vertical window blinds in UK. Locally produced and high-quality, our materials ensure your blinds maintain their look and functionality for years.",
      },
      {
        icon: "wrench",
        title: "Free Measuring and Fitting Services",
        body: "Avoid the hassle of incorrect measurements with our free onsite measuring and fitting service available in many parts of the UK. Advenco Window Blinds and Shutters in UK ensures precise measurements and professional installation for your vertical blinds in UK.",
      },
    ],
    bannerImage: "/images/products/vertical3.webp",
    bannerImageAlt: "White leaf-textured vertical blind louvres with a chain-weight link along the sill",
    closingHeading: "Elegant Designs and Long-Lasting Functionality",
    closingBody: [
      "Advenco Window Blinds and Shutters in UK is synonymous with quality in the UK. Our vertical blinds in UK feature elegant designs and robust functionality, crafted from the best materials and top-quality components. Our blinds enhance your interiors with their vibrant colours and patterns, providing a long-lasting and attractive window covering solution.",
      "For further inquiries or to request a free quote, contact us today. Email us or visit our website for more details. Feel free to reach out with any questions. We look forward to assisting you!",
    ],
  },
};

export type ProductBlindsSlug = keyof typeof productBlindsPages;
