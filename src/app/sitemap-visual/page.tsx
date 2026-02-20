type SitemapNode = {
  name: string;
  path: string;
  description: string;
  children?: SitemapNode[];
};

const sitemap: SitemapNode[] = [
  {
    name: "Home",
    path: "/",
    description: "Hero, value prop, feature highlights, social proof, CTA",
    children: [
      {
        name: "Features",
        path: "/features",
        description: "Deep dive into all product capabilities",
        children: [
          {
            name: "Patron Management",
            path: "/features/patrons",
            description: "Track visitors, memberships, and check-ins",
          },
          {
            name: "Book Catalog",
            path: "/features/catalog",
            description: "Inventory, search, and availability tracking",
          },
          {
            name: "Late Fees & Billing",
            path: "/features/billing",
            description: "Automated fee calculation and payment collection",
          },
          {
            name: "Movie & Media Rentals",
            path: "/features/media",
            description: "DVDs, Blu-rays, digital media lending",
          },
        ],
      },
      {
        name: "Login",
        path: "/login",
        description: "Existing user sign-in",
      },
      {
        name: "Sign Up",
        path: "/signup",
        description: "New account creation and onboarding",
      },
    ],
  },
  {
    name: "About",
    path: "/about",
    description: "Mission, story, and team",
    children: [
      {
        name: "Our Story",
        path: "/about/story",
        description: "How and why we built this",
      },
      {
        name: "Team",
        path: "/about/team",
        description: "The people behind the product",
      },
    ],
  },
  {
    name: "Pricing",
    path: "/pricing",
    description: "Small Library / District / Enterprise tiers",
  },
  {
    name: "Resources",
    path: "/resources",
    description: "Learning center and content hub",
    children: [
      {
        name: "Blog",
        path: "/resources/blog",
        description: "Articles on library management",
      },
      {
        name: "Case Studies",
        path: "/resources/case-studies",
        description: "Real library success stories",
      },
      {
        name: "Help Center",
        path: "/resources/help",
        description: "Documentation and guides",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    description: "Get in touch and request a demo",
    children: [
      {
        name: "Demo Request",
        path: "/contact/demo",
        description: "Book a personalized walkthrough",
      },
    ],
  },
];

function NodeCard({ node }: { node: SitemapNode }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm min-w-[200px] max-w-[240px] text-center hover:border-white/25 hover:bg-white/10 transition-all">
        <h3 className="text-sm font-semibold text-white">{node.name}</h3>
        <p className="mt-1 text-[11px] font-mono text-white/40">{node.path}</p>
        <p className="mt-2 text-xs text-white/60 leading-relaxed">
          {node.description}
        </p>
      </div>

      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-6 bg-white/15" />
          <div className="relative flex gap-4 flex-wrap justify-center">
            {/* Horizontal connector line */}
            {node.children.length > 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-white/15" style={{ width: "calc(100% - 200px)" }} />
            )}
            {node.children.map((child) => (
              <div key={child.path} className="flex flex-col items-center">
                <div className="w-px h-6 bg-white/15" />
                <NodeCard node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SitemapVisual() {
  function countPages(node: SitemapNode): number {
    let count = 1;
    if (node.children) {
      for (const child of node.children) {
        count += countPages(child);
      }
    }
    return count;
  }
  const totalPages = sitemap.reduce((sum, node) => sum + countPages(node), 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
            Library Management Software
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            Marketing Site — Sitemap
          </h1>
          <p className="mt-3 text-sm text-white/50">
            {totalPages} pages across {sitemap.length} top-level sections
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-12 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border border-white/10 bg-white/5" />
            <span>Page</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-white/15" />
            <span>Navigation link</span>
          </div>
        </div>

        {/* Sitemap Tree — top-level pages side by side */}
        <div className="flex gap-8 justify-center items-start flex-wrap pb-16">
          {sitemap.map((node) => (
            <NodeCard key={node.path} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
