import { Link } from "react-router-dom";

export const newsArticles = [
  {
    id: "series-a-funding",
    slug: "series-a-funding",
    category: "Company",
    title: "Builders secures $12M Series A to scale product analytics",
    excerpt: "We're thrilled to announce our latest funding round led by Sequoia Capital, enabling us to bring enterprise-grade tooling to early-stage startups.",
    date: "June 25, 2026",
    author: "Nabil Hasan",
    readTime: "5 min read",
    image: "/news-hero-art.png",
    content: [
      {
        type: "lead",
        text: "It's official: Builders has raised $12M in Series A funding. This milestone isn't just about capital—it's about validation from the industry that the way startups build and measure products needs to change.",
      },
      {
        type: "p",
        text: "Since our launch, we've seen incredible adoption from builders who were frustrated by the complexity of legacy analytics platforms. We set out to build a tool that felt native, lightning-fast, and deeply integrated with modern development workflows. This new capital allows us to accelerate that vision.",
      },
      {
        type: "h2",
        text: "What this means for our customers",
      },
      {
        type: "p",
        text: "With this new capital, we are quadrupling down on our core analytics engine. Expect faster queries, more intuitive dashboarding, and a completely revamped alerting system rolling out over the next quarter.",
      },
      {
        type: "p",
        text: "We're also expanding our engineering and design teams. If you're passionate about building tools for builders, we'd love to hear from you.",
      }
    ]
  },
  {
    id: "new-feature-rollout",
    slug: "new-feature-rollout",
    category: "Product",
    title: "Introducing Feature Flags: Ship with confidence",
    excerpt: "Control your releases, test in production, and decouple deployment from release with our new Feature Flags suite.",
    date: "June 22, 2026",
    author: "Sarah Jenks",
    readTime: "3 min read",
    image: "/lib-launch-deck.png",
    content: [
      {
        type: "lead",
        text: "Feature flags are now in open beta for all users on the Pro and Enterprise plans.",
      },
      {
        type: "p",
        text: "Releasing software shouldn't be a nerve-wracking event. By decoupling deployment from release, teams can safely push code to production and gradually turn on features for specific user segments.",
      },
      {
        type: "h2",
        text: "Targeting capabilities",
      },
      {
        type: "p",
        text: "Our new suite allows you to target users based on location, device type, subscription tier, or any custom attribute you send to Builders. You can run percentage-based rollouts and seamlessly connect flag evaluations to your core analytics metrics to measure feature impact in real-time.",
      }
    ]
  },
  {
    id: "community-meetup",
    slug: "community-meetup",
    category: "Community",
    title: "Builders Community Meetup: Jakarta 2026",
    excerpt: "Join us this August in Jakarta for our first-ever community meetup. Network with fellow founders, share war stories, and get an exclusive preview of our Q4 roadmap.",
    date: "June 18, 2026",
    author: "Community Team",
    readTime: "2 min read",
    image: "/lib-signal-board.png",
    content: [
      {
        type: "lead",
        text: "We are coming to Jakarta! Our vibrant Southeast Asian community has been asking for an in-person event, and we're finally making it happen.",
      },
      {
        type: "p",
        text: "The meetup will feature talks from our engineering team, a fireside chat with local startup founders who have scaled using Builders, and plenty of time for networking.",
      },
      {
        type: "h2",
        text: "Event Details",
      },
      {
        type: "p",
        text: "Date: August 15, 2026\nLocation: Sudirman Central Business District (SCBD), Jakarta\nRegistration opens next week. Keep an eye on your inbox!",
      }
    ]
  },
  {
    id: "soc2-compliance",
    slug: "soc2-compliance",
    category: "Company",
    title: "Builders achieves SOC 2 Type II Compliance",
    excerpt: "Security and trust are foundational to our platform. We are proud to announce that we have successfully completed our SOC 2 Type II audit.",
    date: "June 10, 2026",
    author: "Security Team",
    readTime: "2 min read",
    image: "/lib-warehouse-one.png",
    content: [
      {
        type: "lead",
        text: "Protecting your data is our highest priority. Today, we're sharing a major milestone in our security program: Builders is now officially SOC 2 Type II compliant.",
      },
      {
        type: "p",
        text: "This independent validation confirms that our information security practices, policies, procedures, and operations meet the rigorous SOC 2 standards for security, availability, and confidentiality.",
      },
      {
        type: "p",
        text: "Enterprise customers can request a copy of our latest report through their account manager or our Trust Center.",
      }
    ]
  }
];

export default function NewsPage() {
  return (
    <div className="news-gallery-page">
      <section className="perks-hero-panel" style={{marginBottom: '40px'}}>
        <div className="perks-hero-copy">
          <span className="perks-hero-eyebrow">Latest News</span>
          <h2>
            Product updates, company announcements, and community highlights.
          </h2>
          <p>
            Stay up to date with the latest from the Builders team and our global community of product makers.
          </p>
        </div>
      </section>

      <div className="news-gallery-grid">
        {newsArticles.map((article) => (
          <Link key={article.id} to={`/news/${article.slug}`} className="panel-card" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="panel-card-media">
              <img src={article.image} alt="" className="panel-generated-image" />
            </div>
            <div className="panel-card-body" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div className="news-gallery-card-meta" style={{marginBottom: '16px'}}>
                <span className="pop-label-pill">{article.category}</span>
                <span className="news-gallery-card-date">{article.date}</span>
              </div>
              <h3 className="news-gallery-card-title">{article.title}</h3>
              <p className="news-gallery-card-excerpt" style={{marginBottom: '16px'}}>{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
