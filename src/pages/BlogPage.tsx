import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import PageHero from '../components/sections/shared/PageHero'
import { useScrollReveal } from '../hooks/useScrollReveal'
import posts from '../data/blogPosts'

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'A-zero Digital Insights',
  url: 'https://a-zero.co/blog',
  publisher: { '@type': 'Organization', name: 'A-zero Digital', url: 'https://a-zero.co' },
  description: 'AI marketing, data science, and growth strategy insights from A-zero Digital.',
}

const postSchemas = posts.map((p) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: p.title,
  datePublished: p.date,
  author: { '@type': 'Organization', name: 'A-zero Digital' },
  publisher: { '@type': 'Organization', name: 'A-zero Digital', url: 'https://a-zero.co' },
  description: p.excerpt,
  url: `https://a-zero.co/blog/${p.id}`,
  articleSection: p.category,
}))

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://a-zero.co/blog' },
  ],
}

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]

export default function BlogPage() {
  const ref = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Blog &amp; Insights | A-zero Digital — AI Marketing &amp; Data Science</title>
        <meta
          name="description"
          content="AI marketing strategy, data science, predictive analytics, and AEO/GEO insights from Singapore's leading AI marketing consultancy."
        />
        <link rel="canonical" href="https://a-zero.co/blog" />
      </Helmet>

      <SchemaMarkup schema={blogSchema} />
      {postSchemas.map((s, i) => <SchemaMarkup key={i} schema={s} />)}
      <SchemaMarkup schema={breadcrumbSchema} />

      <PageHero
        label="Insights"
        title="Ideas Worth Compounding"
        subtitle="AI marketing, data science strategy, and growth thinking for B2B leaders in Singapore and Southeast Asia."
      />

      {/* Category filter */}
      <div className="border-b border-az-border/20 bg-az-bg-off">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12 py-4">
          <div className="flex gap-2 flex-wrap" role="list" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-pill border transition-colors duration-150 ${
                  cat === activeCategory
                    ? 'bg-az-primary text-az-inverse border-az-primary'
                    : 'bg-transparent text-az-secondary border-az-border/30 hover:text-az-primary hover:border-az-border'
                }`}
                aria-pressed={cat === activeCategory}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-20"
        aria-label="Blog posts"
      >
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`flex flex-col p-8 bg-az-card border border-az-border/20 rounded-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1 reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-az-muted border border-az-border/30 rounded-tag px-2 py-1">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-az-secondary">{post.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-xl text-az-primary mb-3 leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-az-secondary leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="font-mono text-xs text-az-muted" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="inline-flex items-center gap-1 font-body text-sm text-az-primary">
                    Read more <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
