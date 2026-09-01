/**
 * Shutters Page — Content
 *
 * Data for the "/shutters/" page, structured to mirror the exact section
 * order and image placement of the source WordPress page
 * (advencoblindsandshutters.co.uk/shutters/), rebuilt with the new design
 * system. Content is copied verbatim; images are the real shutter photos
 * hosted on the source site (wp-content/uploads/2024/11/steptodown.com*),
 * matched to the same sections they appear in on the original page.
 */


export interface ShuttersTextSection {
  label?: string;
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ShuttersImageSection {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  /** true = image on left, false = image on right — matches source page order */
  imageLeft: boolean;
}

export interface ShuttersPageContent {
  badgeLabel: string;
  heroHeading: string;
  heroSubheading: string;
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  /** Text-only sections, in source page order: first 3 come before the
   *  image sections, the last 1 ("Full Window Control") comes after. */
  textSections: ShuttersTextSection[];
  /** Alternating image/text sections, in exact source page order. */
  imageSections: ShuttersImageSection[];
  closingHeading: string;
  closingBody: string;
}

export const shuttersContent: ShuttersPageContent = {
  badgeLabel: "Premium Shutters",
  heroHeading: "Shutters",
  heroSubheading: "Premium Shutters in the UK",
  heroBody:
    "Advenco Window Blinds and Shutters is a trusted name in the UK for high-quality window coverings. We offer premium shutters that add elegance and functionality to your windows, made from top-quality materials with free window measuring and fitting services across the UK.",
  heroImage: "/images/products/perfectfitshutter3.webp",
  heroImageAlt: "White Perfect Fit plantation shutters on a kitchen window and French doors",
  metaTitle: "Premium Shutters in the UK | Advenco Window Blinds and Shutters",
  metaDescription:
    "Premium plantation shutters from Advenco Window Blinds and Shutters — Café Style, Full Height, Tier on Tier, and Bay Window shutters, made in Britain with free measuring and fitting.",

  textSections: [
    {
      heading: "Full Height Shutters: Unmatched Quality for Your Windows",
      body: "Shutters in the UK are a timeless choice for window decoration, built to last. Advenco Window Blinds and Shutters in the UK guarantees the use of premium materials for all our shutters. We specialize in Café Style Shutters in the UK, Full Height Shutters in the UK, Tier on Tier Shutters in the UK, Bay Window Shutters in the UK, and Plantation Shutters in the UK tailored to your needs. Our shutters in the UK are crafted from high-quality waterproof materials to ensure they stand the test of time.",
      bullets: [
        "Premium plantation shutters in the UK made from top-quality materials",
        "Locally designed shutters tailored to the UK climate",
        "Waterproof shutters to keep your windows looking pristine",
        "Café Style, Full Height, and Tier on Tier shutters for all needs",
        "Custom-made Bay Window Shutters in the UK and Plantation Shutters in the UK for all types of windows",
      ],
    },
    {
      heading: "Made in Britain: Quality Plantation Shutters for Every Property",
      body: "For those seeking superior shutters, Advenco Window Blinds and Shutters in the UK offers top-of-the-line, British-made products. Our shutters are available in a range of designs, styles, and colours, perfect for any property. We provide bespoke solutions to meet all your window dressing needs.",
      bullets: [
        "High-quality plantation shutters for homes and apartments",
        "Custom shutters for flats and small apartments",
        "Precise shutters for offices, workspaces, and hotels.",
        "Robust shutters for industrial properties",
        "Best-in-class materials for premium shutters",
      ],
    },
    {
      heading: "Full Window Control with Premium Shutters",
      body: "Advenco Window Blinds and Shutters offers stylish shutters and window coverings designed to provide excellent window control. Choose our café style shutters for abundant daylight with privacy control, or opt for our tier on tier shutters for maximum daylight and fresh air management. We also provide the best full height shutters in the UK, perfect for blackout conditions when required.",
      bullets: [
        "Full privacy control with premium plantation shutters",
        "Complete daylight management with blackout and daylight shutters",
        "Superior insulation with high-quality plantation shutters",
        "Affordable premium shutters in various cities",
        "Free window measuring and shutter fitting services available.",
      ],
    },
  ],

  imageSections: [
    {
      heading: "Tier on Tier Plantation Shutters in the UK: Versatile and Functional",
      body: "Are you searching for premium plantation shutters in the UK? Advenco Window Blinds and Shutters has the perfect solution. We offer high-quality plantation shutters crafted from the finest materials, ensuring they enhance natural light while maintaining privacy. Our shutters in the UK are ideal for living rooms, bedrooms, and offices. Available in various colours, designs, styles, and sizes, our shutters cater to all needs. Don't hesitate – get the best plantation shutters in the UK with free fitting services in our coverage areas. We are the leading supplier of plantation shutters, offering top-quality products for all requirements.",
      image: "/images/products/perfectfitshutter1.webp",
      imageAlt: "White Perfect Fit plantation shutters fitted to French doors in a hallway",
      imageLeft: true,
    },
    {
      heading: "Café Style Shutters in the UK: Elegant and Practical",
      body: "Our classic café style shutters in the UK are perfect for living rooms, office windows, and other spaces requiring ample daylight. With an open top for maximum daylight and a closed bottom for privacy, these shutters offer versatility and style. They can be fully opened for even more light when privacy is not a concern.",
      image: "/images/products/perfectfitshutter2.webp",
      imageAlt: "White Perfect Fit plantation shutters with louvres tilted open on French doors",
      imageLeft: true,
    },
    {
      heading: "Full Height Shutters in the UK: Complete Coverage and Control",
      body: "For spaces where privacy and light control are crucial, Advenco Window Blinds and Shutters in the UK offers full height shutters. These shutters provide full window coverage, allowing for excellent daylight control and complete blackout when necessary. They are ideal for creating dark, private spaces as needed.",
      image: "/images/products/perfectfitshutter4.webp",
      imageAlt: "White full-height Perfect Fit plantation shutters closed across French doors",
      imageLeft: false,
    },
    {
      heading: "Tier on Tier Shutters in the UK: Maximum Flexibility",
      body: "For those who desire enhanced control over their windows, our tier on tier shutters in the UK are the ideal choice. These shutters feature independently controlled panels, offering excellent daylight, privacy, and insulation control. Fully closed, they provide blackout conditions, while they can be opened to allow for fresh air and daylight as needed. Perfect for both homes and offices.",
      image: "/images/products/perfectfitshutter5.webp",
      imageAlt: "White Perfect Fit plantation shutters on a patio door and full-length window",
      imageLeft: true,
    },
    {
      heading: "Bay Window Shutters: Stylish and Functional",
      body: "For bay windows, Advenco Window Blinds and Shutters in the UK provides specially designed shutters. These are tailored for bay-style windows, offering excellent daylight, privacy, and insulation control. Available in a range of sizes, colours, and finishes, our bay window shutters in the UK complement any interior décor.",
      image: "/images/stock/photo-1696123460860-db4ba71573b8.jpg",
      imageAlt: "Dark exterior shutters fitted to a modern apartment balcony",
      imageLeft: false,
    },
    {
      heading: "Free Window Measuring and Shutter Fitting",
      body: "Advenco Window Blinds and Shutters in the UK is one of the premier window decoration suppliers in the UK. All our shutters and window coverings include free window measuring and fitting services. Our experts will take precise measurements of your windows to ensure a perfect fit for your shutters. We provide professional installation with attention to detail, ensuring a flawless finish. Visit our service areas page or call us to check availability in your area.",
      image: "/images/stock/photo-1587475240624-96f0e3dfd2bf.jpg",
      imageAlt: "Dark tier-on-tier shutters fitted to an interior window with an ocean view",
      imageLeft: true,
    },
    {
      heading: "Enhance Your Windows with Premium Shutters",
      body: "Designed from top-notch materials, our plantation shutters in UK by Advenco Window Blinds and Shutters are crafted to enhance the look of your windows and interiors. We offer a wide range of styles including café style shutters, tier on tier shutters, full height shutters, and bay window shutters. With a variety of colours and designs, our shutters in UK are the perfect addition to any interior. Contact the UK's leading window decoration supplier today to get the best plantation shutters for your home, flat, apartment, office, or industrial space.",
      image: "/images/stock/photo-1710773697318-d50ff2492556.jpg",
      imageAlt: "White plantation shutters beside a sofa with red and white cushions",
      imageLeft: false,
    },
  ],

  closingHeading: "Contact Us",
  closingBody:
    "For further inquiries, you can request a free quote, and our representative will get in touch.",
};
