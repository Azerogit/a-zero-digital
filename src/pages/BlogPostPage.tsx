import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import posts from '../data/blogPosts'
import type { Block } from '../data/blogPosts'

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-az-primary">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="font-mono text-sm bg-az-card border border-az-border/20 rounded px-1.5 py-0.5">{part.slice(1, -1)}</code>
    }
    return part
  })
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} id={slugify(block.text)} className="font-display font-bold text-2xl text-az-primary mt-12 mb-4 leading-snug scroll-mt-24">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={index} className="font-display font-semibold text-lg text-az-primary mt-8 mb-3">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={index} className="font-body text-base text-az-secondary leading-relaxed mb-5">
          {renderInline(block.text)}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} className="mb-5 space-y-2 pl-4">
          {block.items.map((item, i) => (
            <li key={i} className="font-body text-base text-az-secondary leading-relaxed flex gap-3">
              <span className="text-az-muted mt-1.5 flex-shrink-0 text-xs">—</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={index} className="mb-5 space-y-2 pl-4">
          {block.items.map((item, i) => (
            <li key={i} className="font-body text-base text-az-secondary leading-relaxed flex gap-3">
              <span className="font-mono text-xs text-az-muted mt-1.5 flex-shrink-0 w-4">{i + 1}.</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <blockquote key={index} className="my-8 pl-5 border-l-2 border-az-primary bg-az-card rounded-r-card py-4 pr-5">
          <p className="font-body text-base text-az-primary font-medium leading-relaxed">
            {block.text}
          </p>
        </blockquote>
      )
  }
}

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id === id)

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = posts.indexOf(post)
  const prev = posts[currentIndex + 1] ?? null
  const next = posts[currentIndex - 1] ?? null

  const tocItems = post.body.filter(b => b.type === 'h2') as Array<{ type: 'h2'; text: string }>

  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    url: `https://a-zero.co/blog/${post.id}`,
    articleSection: post.category,
    author: {
      '@type': 'Organization',
      name: 'A-zero Digital',
      legalName: 'A-ZERO DIGITAL PTE. LTD.',
      url: 'https://a-zero.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'A-zero Digital',
      url: 'https://a-zero.co',
    },
    isPartOf: { '@type': 'Blog', url: 'https://a-zero.co/blog' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://a-zero.co/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://a-zero.co/blog/${post.id}` },
    ],
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-SG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Helmet>
        <title>{post.title} | A-zero Digital</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://a-zero.co/blog/${post.id}`} />
      </Helmet>

      <SchemaMarkup schema={postSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Top padding to clear fixed navbar */}
      <div className="pt-20 md:pt-28" />

      {/* Breadcrumb */}
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-body text-sm text-az-secondary hover:text-az-primary transition-colors duration-150"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <header className="max-w-container mx-auto px-4 md:px-8 xl:px-12 mb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-az-muted border border-az-border/30 rounded-tag px-2 py-1">
          {post.category}
        </span>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-az-primary mt-5 mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="font-body text-lg text-az-secondary leading-relaxed mb-8 max-w-3xl">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-5 border-t border-az-border/20 pt-5">
          <div className="flex items-center gap-1.5 text-az-muted">
            <Calendar size={13} aria-hidden="true" />
            <time className="font-mono text-xs" dateTime={post.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-1.5 text-az-muted">
            <Clock size={13} aria-hidden="true" />
            <span className="font-mono text-xs">{post.readTime}</span>
          </div>
          <span className="font-mono text-xs text-az-muted">A-zero Digital</span>
        </div>
      </header>

      {/* Divider */}
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
        <div className="border-t border-az-border/20 mb-12" />
      </div>

      {/* Article body — two-column editorial layout on lg+ */}
      <article
        className="max-w-container mx-auto px-4 md:px-8 xl:px-12 mb-20"
        aria-label={post.title}
      >
        <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-16">
          {/* Main reading column */}
          <div className="min-w-0 max-w-prose">
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* Article meta */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-az-muted border border-az-border/30 rounded-tag px-2 py-1">
                  {post.category}
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center gap-2 text-az-muted">
                    <Calendar size={12} aria-hidden="true" />
                    <time className="font-mono text-xs" dateTime={post.date}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-2 text-az-muted">
                    <Clock size={12} aria-hidden="true" />
                    <span className="font-mono text-xs">{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Table of contents */}
              {tocItems.length > 0 && (
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-az-muted mb-3">
                    In this article
                  </p>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2">
                      {tocItems.map((item) => (
                        <li key={item.text}>
                          <a
                            href={`#${slugify(item.text)}`}
                            className="font-body text-sm text-az-secondary hover:text-az-primary transition-colors duration-150 leading-snug block"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Mini CTA */}
              <div className="border border-az-border/20 rounded-card p-5 bg-az-card">
                <p className="font-body text-sm font-medium text-az-primary mb-2 leading-snug">
                  Ready to apply these ideas?
                </p>
                <p className="font-body text-xs text-az-secondary leading-relaxed mb-4">
                  We help B2B companies in Singapore build AI marketing systems that drive measurable growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-az-primary hover:gap-2.5 transition-all duration-150"
                >
                  Start a conversation <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Post navigation */}
      <div className="border-t border-az-border/20">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prev ? (
              <Link
                to={`/blog/${prev.id}`}
                className="group flex flex-col gap-2 p-6 bg-az-card border border-az-border/20 rounded-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-az-muted flex items-center gap-1.5">
                  <ArrowLeft size={11} aria-hidden="true" /> Previous
                </span>
                <span className="font-body text-sm font-medium text-az-primary group-hover:text-az-primary leading-snug line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/blog/${next.id}`}
                className="group flex flex-col gap-2 p-6 bg-az-card border border-az-border/20 rounded-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 md:text-right"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-az-muted flex items-center gap-1.5 md:justify-end">
                  Next <ArrowRight size={11} aria-hidden="true" />
                </span>
                <span className="font-body text-sm font-medium text-az-primary group-hover:text-az-primary leading-snug line-clamp-2">
                  {next.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-az-primary py-16">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-az-inverse/50 mb-4">
            Work with Us
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-az-inverse mb-4 max-w-xl mx-auto leading-tight">
            Ready to apply these ideas to your business?
          </h2>
          <p className="font-body text-sm text-az-inverse/70 mb-8 max-w-md mx-auto leading-relaxed">
            We work with B2B companies across Singapore and Southeast Asia to build AI marketing systems that drive measurable growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-az-inverse text-az-primary font-body font-semibold rounded-pill px-8 py-3 text-sm hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Start a conversation <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
