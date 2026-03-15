export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: "Formed",
    slug: "formed",
    image: "/images/formed.avif",
    summary: "Vimeo OTT platform with 6,000+ media assets and first-page Google rankings.",
    description:
      "As Project Manager for Vimeo OTT, I managed the content team and oversaw uploading, cataloging, and managing 6,000+ media and text assets.\n\nI collaborated on UI/UX design, testing, and ensuring platform quality. I worked to categorize and optimize assets for search while partnering with the design team for a user-friendly experience.\n\nThrough careful planning and execution, we launched a highly functional platform. Thanks to SEO efforts, the site ranks on Google's first page for key Catholic media and video terms.",
    tags: ["Vimeo OTT", "SEO", "UI/UX", "Content Management", "Project Management"],
  },
  {
    title: "Napa Legal",
    slug: "napa-legal",
    image: "/images/napa-legal.avif",
    summary: "Complex Webflow database filtering and membership platform.",
    description:
      "A complex Webflow database display and filtering subsystem, as well as a membership platform that enabled our client to add critical functionality behind a paywall.\n\nCarefully crafted the database display and filtering subsystem to allow users to easily search, sort, and filter large datasets, while also ensuring that the display was visually appealing and easy to use.\n\nAdditionally, we developed a membership platform that allowed the client to monetize access to premium content.",
    tags: ["Webflow", "Database", "Membership", "Filtering", "Paywall"],
  },
  {
    title: "Augustine Institute",
    slug: "augustine-institute",
    image: "/images/augustine-institute.avif",
    summary: "Rebuilt 250+ page website into streamlined Webflow landing pages.",
    description:
      "As the leader of a team of designers and content creators, I oversaw the rebuilding of a website on the Webflow platform. The original website consisted of over 250 pages and posts, which presented a significant challenge when it came to maintenance and updating.\n\nOur team worked to rebuild the site in Webflow, consolidating the content into a dozen landing pages that utilized Webflow collections to simplify the maintenance process. By organizing the content into a handful of collections, or Webflow data tables, we were able to streamline the management and updating of the site, significantly reducing the workload for the team.",
    tags: ["Webflow", "Redesign", "CMS", "Team Lead", "Content Strategy"],
  },
  {
    title: "Ignatius Book Fairs",
    slug: "ignatius-book-fairs",
    image: "/images/ignatius-book-fairs.avif",
    summary: "Fully custom headless BigCommerce/Webflow serving 200+ national book fairs.",
    description:
      "This is a fully custom headless Bigcommerce. Worked with a development team, UX/UI and customer service teams to create a fully custom Webflow/Bigcommerce project currently serving over 200 national book fairs and growing.",
    tags: ["BigCommerce", "Headless", "Webflow", "E-commerce", "Custom Development"],
  },
  {
    title: "US Enzymes",
    slug: "us-enzymes",
    image: "/images/us-enzymes.avif",
    summary: "WooCommerce to Shopify migration with B2B coupon system and CRM integration.",
    description:
      "Migrated a Woocommerce cart to Shopify, designed and configured every aspect of the site. Created an add-on system for B2B coupons and a data integration to company CRM tool.",
    tags: ["Shopify", "Migration", "B2B", "CRM Integration", "E-commerce"],
  },
  {
    title: "Florida Healthy Chef",
    slug: "florida-healthy-chef",
    image: "",
    summary: "Webflow site with SEO dominance for Florida personal chef searches.",
    description:
      "The focus of this Webflow project was a beautiful food gallery, making the value proposition obvious. The site is configured to be found on searches in southwest Florida.\n\nCurrently for Florida searchers, it holds a Google position for \"Florida healthy chef\", position 2 for \"healthy personal chef\", position 3 for \"personal chef organic.\"\n\nThe site also features a Google search ad for the more generic \"personal chef\" which can be turned on or off and consistently generates leads in the on state.",
    tags: ["Webflow", "SEO", "Google Ads", "Gallery", "Lead Generation"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
