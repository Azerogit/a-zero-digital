export interface PostMeta {
  id: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

export type Block =
  | { type: 'p' | 'h2' | 'h3' | 'callout'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }

export interface BlogPost extends PostMeta {
  body: Block[]
}

const posts: BlogPost[] = [
  {
    id: 'aeo-geo-guide',
    category: 'AEO / GEO',
    title: 'The Complete Guide to AEO & GEO: Getting Cited by ChatGPT and Perplexity',
    excerpt:
      "AI-driven search engines don't rank pages the same way Google does. This guide walks through how to structure your content, implement Schema.org markup, and build entity authority so your brand gets cited in AI responses.",
    date: '2026-04-10',
    readTime: '12 min read',
    body: [
      {
        type: 'p',
        text: 'Search is no longer a list of blue links. When someone asks ChatGPT "who are the best AI marketing agencies in Singapore" or queries Perplexity for "how to improve B2B lead generation with AI," the answer they receive is synthesised from a small number of sources. Your website may rank on page one of Google and still be completely invisible in AI-generated responses. That gap — between traditional SEO and AI citation — is what Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) are designed to close.',
      },
      {
        type: 'p',
        text: 'This guide is the most comprehensive walkthrough we know of for getting your brand consistently cited by large language models. We cover content architecture, Schema.org implementation, entity authority signals, and the measurement approaches we use with our own clients.',
      },
      { type: 'h2', text: 'AEO vs GEO — What\'s the Difference?' },
      {
        type: 'p',
        text: 'These terms are sometimes used interchangeably, but they describe slightly different scopes. AEO (Answer Engine Optimisation) refers to structuring content so that AI-powered answer engines — including Google\'s AI Overviews, ChatGPT with browsing, and Perplexity — retrieve and surface your content when answering user questions. GEO (Generative Engine Optimisation) is broader: it encompasses the full set of signals that influence whether a generative AI system attributes claims, cites sources, or names your brand in a synthesised response.',
      },
      {
        type: 'p',
        text: 'In practice, GEO includes AEO, but also covers non-search contexts: AI assistants processing research queries, enterprise LLMs summarising market landscapes, and retrieval-augmented generation (RAG) systems embedded in SaaS products. If your goal is brand visibility in AI outputs of any kind, you need a GEO strategy.',
      },
      { type: 'h2', text: 'How LLMs Decide What to Cite' },
      {
        type: 'p',
        text: 'Large language models like GPT-4o or Claude were trained on vast text corpora up to a specific cutoff date. For queries where the model has strong parametric knowledge, it may not cite anything at all. For queries beyond its knowledge cutoff — or where the model is operating in a retrieval-augmented mode — it pulls from live web results and surfaces content that meets certain quality criteria.',
      },
      {
        type: 'p',
        text: 'The signals that research suggests influence LLM citation:',
      },
      {
        type: 'ul',
        items: [
          '**Factual density and specificity** — precise statistics, named entities, and concrete examples score higher than vague generalisations',
          '**Structural clarity** — content with clear headings, Q&A pairs, and summary statements is easier for models to excerpt',
          '**Topical authority** — content that comprehensively covers a topic (not just a keyword) signals expertise to both crawlers and models',
          '**Third-party mentions** — your brand appearing consistently across authoritative external sources creates an entity signal that models recognise',
          '**Schema.org structured data** — machine-readable context helps models understand the nature, author, and claims of a piece of content',
        ],
      },
      { type: 'h2', text: 'Structure Your Content for AI Comprehension' },
      { type: 'h3', text: 'Lead with the definition' },
      {
        type: 'p',
        text: 'AI models are queried most often in question form. If your content can open each major section with a clear, quotable definition or statement of the key concept, you dramatically increase the chance of being excerpted. Do not bury the lead. Every H2 section should be answerable as a standalone question.',
      },
      { type: 'h3', text: 'Use explicit Q&A formatting' },
      {
        type: 'p',
        text: 'FAQ sections are among the most-cited content types by AI systems because they map directly onto how queries are structured. Every major page on your website should include an FAQ block marked up with FAQPage schema. The questions should mirror real user queries — check Search Console, AnswerThePublic, or your own sales call recordings.',
      },
      { type: 'h3', text: 'Write in an objective register' },
      {
        type: 'p',
        text: 'First-person content ("we believe…", "our approach is…") is less likely to be cited verbatim by an AI synthesising a neutral answer. Where appropriate, frame factual claims in a more objective register ("research shows…", "the standard approach involves…"). Reserve first-person voice for opinion and experience sections.',
      },
      { type: 'h3', text: 'Factual density matters' },
      {
        type: 'p',
        text: 'Research from Princeton and Georgia Tech found that content with higher "citation-worthiness" — characterised by specific named entities, statistics with sources, and precise temporal markers — was significantly more likely to be retrieved by RAG systems. Audit your existing content for vague language and replace it with precise claims backed by numbers.',
      },
      { type: 'h2', text: 'Schema.org Implementation Guide' },
      {
        type: 'p',
        text: 'Schema.org structured data is the single highest-leverage technical change you can make for AEO/GEO. It communicates machine-readable context that search crawlers and AI retrieval systems use to categorise and trust content. These are the schema types that matter most:',
      },
      {
        type: 'ul',
        items: [
          '**Organization** — establishes your company\'s name, legal identity, location, and area of expertise. Include `legalName`, `taxID`, `foundingDate`, and `knowsAbout` arrays',
          '**FAQPage** — mark up every FAQ section. This is the highest-impact schema type for appearing in AI Overviews and being cited in direct answers',
          '**Article / BlogPosting** — every content piece should have `headline`, `datePublished`, `author`, `publisher`, and `articleSection` declared',
          '**BreadcrumbList** — helps AI systems understand your site\'s topical hierarchy',
          '**HowTo** — for process-oriented content, HowTo schema with defined steps dramatically increases excerpt probability',
          '**Service** — if you\'re a service business, declaring services with `serviceType`, `areaServed`, and `description` feeds directly into AI responses about service providers',
        ],
      },
      { type: 'h3', text: 'Implementation notes' },
      {
        type: 'p',
        text: 'Inject schema as `<script type="application/ld+json">` in the `<head>` of each page — not inline `itemscope` attributes, which are harder to maintain and audit. Validate every schema with Google\'s Rich Results Test before deploying.',
      },
      { type: 'h2', text: 'Building Entity Authority' },
      {
        type: 'p',
        text: 'Entity authority is the degree to which AI systems "know" your brand as a real, trustworthy entity independent of any single webpage. Building it requires consistent, coordinated signals across many sources:',
      },
      {
        type: 'ol',
        items: [
          'Create and maintain a Google Business Profile with complete, consistent information',
          'Ensure your company information is identical across all business directories — CrunchBase, LinkedIn, local Singapore directories',
          'Pursue coverage in industry publications and news outlets; even brief mentions in reputable sources carry significant entity weight',
          'If your founders are quoted in industry content, these person-level entities compound your company\'s authority',
          'Consider whether a Wikipedia article or Wikidata entry is appropriate — for established companies this is among the strongest entity signals possible',
          'Build or contribute to open knowledge graphs where applicable in your vertical',
        ],
      },
      { type: 'h2', text: 'Measuring AEO/GEO Performance' },
      {
        type: 'p',
        text: 'Unlike traditional SEO, AI citation is not directly trackable via analytics today. However, you can build a practical measurement framework:',
      },
      {
        type: 'ul',
        items: [
          '**Track "brand discovery source" in your CRM** — ask every inbound lead how they first heard about you. An increase in "ChatGPT" or "AI tool" responses is a direct signal',
          '**Weekly citation audits** — run your target queries in ChatGPT, Perplexity, and Claude. Document whether your brand is cited, excerpted, or absent',
          '**Search Console click-through on FAQ pages** — improved CTR on FAQ-rich pages correlates with AI Overview inclusion',
          '**Referral traffic from AI platforms** — Perplexity does send referral traffic. Track `perplexity.ai` in your referrers as a leading indicator',
        ],
      },
      {
        type: 'callout',
        text: 'AEO and GEO are long-term strategies. The brands being cited today in AI responses built their entity authority over 12–24 months through consistent, structured, high-quality content. The best time to start is now.',
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'The shift from keyword ranking to AI citation is already underway. Brands that understand how LLMs retrieve and attribute information — and that structure their content accordingly — will have a significant competitive advantage as AI-mediated search continues to grow. AEO and GEO are not replacements for traditional SEO; they are additive layers that compound your visibility across every surface where your buyers are asking questions.',
      },
    ],
  },
  {
    id: 'predictive-lead-scoring',
    category: 'Machine Learning',
    title: 'How We Built a Predictive Lead Scoring Model That Improved Close Rate by 34%',
    excerpt:
      "A behind-the-scenes look at the feature engineering, model selection, and CRM integration process that transformed a Singapore SaaS company's sales pipeline from gut-feel to data-driven qualification.",
    date: '2026-03-28',
    readTime: '9 min read',
    body: [
      {
        type: 'p',
        text: 'When one of our Singapore-based SaaS clients first came to us, their sales team was spending roughly 40% of their time on leads that never closed. Their existing scoring was a simple points-based system: 10 points for a job title, 5 points for company size, 3 points for opening an email. It correlated almost nothing with actual close rates. Eighteen months later, their predictive model — trained on 14 months of historical CRM data — was outperforming their best sales rep\'s intuition on lead qualification. Close rates went up 34%. Here is exactly what we did.',
      },
      { type: 'h2', text: 'The Problem with Rule-Based Scoring' },
      {
        type: 'p',
        text: 'Traditional lead scoring is intuition-driven, not data-driven. A marketing team decides that "VP of Marketing at a 200+ person company who downloaded a whitepaper" sounds like a good lead, assigns arbitrary point values, and calls it a model. The problem is that these rules are based on correlation assumptions that may not hold in your specific market, and they never update themselves.',
      },
      {
        type: 'p',
        text: 'The signals that actually predict close rate in a B2B SaaS context are often non-obvious. In our client\'s case, the single strongest predictor of close was not job title or company size — it was the number of distinct sessions from a single domain across a 14-day window. That is not something anyone would have put in a points-based model.',
      },
      { type: 'h2', text: 'Starting Point — What Data We Had' },
      {
        type: 'p',
        text: 'Before building any model, we conducted a full data audit. The client was using Salesforce with reasonable hygiene, had HubSpot for marketing automation, and used Segment for web analytics. After reconciling these three sources, we had:',
      },
      {
        type: 'ul',
        items: [
          '11,400 leads from the past 14 months',
          '1,843 closed-won opportunities (16.2% baseline close rate)',
          '47 distinct features across CRM, email engagement, and web behaviour data',
          'Company firmographic data enriched via Clearbit',
        ],
      },
      { type: 'h2', text: 'Feature Engineering' },
      {
        type: 'p',
        text: 'Raw CRM data rarely maps cleanly to model features. We spent three weeks on feature engineering before touching a single model. Key features we constructed:',
      },
      {
        type: 'ul',
        items: [
          '**Recency-Frequency-Monetary (RFM) style scores** — days since last touch, number of engagements in last 30 days, total content consumed weighted by asset type',
          '**Intent velocity** — change in engagement rate across two consecutive 7-day windows. A lead accelerating its engagement pattern is a strong positive signal',
          '**Multi-person account signal** — whether more than one person from the same domain had engaged with marketing content. Accounts with multi-stakeholder engagement closed at 2.1× the rate of single-contact accounts',
          '**Stage progression rate** — how quickly similar-profile leads historically moved through funnel stages, used as a prior for new leads',
          '**Negative signals** — unsubscribes, long inactivity gaps, competitor domain patterns in web traffic sources',
        ],
      },
      { type: 'h2', text: 'Model Selection' },
      {
        type: 'p',
        text: 'We evaluated three model families against a held-out test set (20% of data, stratified by close outcome):',
      },
      {
        type: 'ul',
        items: [
          '**Logistic Regression** — interpretable baseline; AUC 0.71',
          '**Random Forest** — AUC 0.79; good handling of non-linear interactions between features',
          '**Gradient Boosting (XGBoost)** — AUC 0.83; best performance; selected for production',
        ],
      },
      {
        type: 'p',
        text: 'We chose XGBoost not just for raw AUC but because its SHAP (SHapley Additive exPlanations) values gave us interpretable feature importance that we could share with the sales team. Explainability matters when you are asking humans to trust a model over their intuition.',
      },
      { type: 'h2', text: 'CRM Integration' },
      {
        type: 'p',
        text: 'A model that lives in a Jupyter notebook helps no one. Integration was a two-week sprint:',
      },
      {
        type: 'ol',
        items: [
          'Built a weekly batch scoring pipeline in Python, running on a scheduled AWS Lambda function',
          'Pulled fresh feature data from Salesforce and Segment, scored all active leads',
          'Pushed a custom `AZ_Predictive_Score` field (0–100) back to each Lead record in Salesforce',
          'Built a Salesforce list view "High-Probability Leads (Score ≥ 70)" as the primary sales queue',
          'Ran a 90-minute enablement session with the sales team on how to interpret and act on the score',
        ],
      },
      { type: 'h2', text: 'Results' },
      {
        type: 'p',
        text: 'We ran a 60-day A/B test — half the sales team working from the predictive queue, half working their traditional prioritisation. Results:',
      },
      {
        type: 'ul',
        items: [
          'Close rate in predictive group: 28.4% vs 21.2% in control (34% relative improvement)',
          'Average sales cycle length: reduced by 8 days in the predictive group',
          'Pipeline coverage: sales team covered 22% more leads per week with the same headcount',
          'Sales team NPS on the tool after 60 days: +62',
        ],
      },
      {
        type: 'callout',
        text: 'The 34% close rate improvement translated to approximately SGD 1.4M in incremental ARR over the following 12 months — without adding a single SDR headcount.',
      },
      { type: 'h2', text: 'Key Lessons' },
      {
        type: 'ol',
        items: [
          'Start with data quality, not model complexity. A clean 20-feature dataset beats a messy 200-feature one every time.',
          'The best features are often behavioural, not firmographic. What a lead does tells you far more than what they are.',
          'Explainability earns adoption. A black-box score that salespeople do not trust will collect dust.',
          'Retrain quarterly. B2B buyer behaviour shifts; a model trained on 2024 data may be systematically wrong by 2026.',
          'Build feedback loops. Sales outcomes should flow back into training data automatically so the model improves over time.',
        ],
      },
    ],
  },
  {
    id: 'marketing-attribution-2026',
    category: 'Analytics',
    title: 'Marketing Attribution in 2026: Why Last-Click Is Dead and What to Use Instead',
    excerpt:
      "With third-party cookies gone and multi-platform journeys more complex than ever, most attribution models are producing misleading data. Here's how to build a model that actually reflects reality.",
    date: '2026-03-14',
    readTime: '10 min read',
    body: [
      {
        type: 'p',
        text: 'In 2024, Google deprecated third-party cookies in Chrome. In 2026, multi-platform buyer journeys span 8–12 touchpoints across channels that share almost no data infrastructure. Yet most B2B marketing teams are still debating whether to use first-click or last-click attribution — as if those models ever reflected reality. This post argues for abandoning simplistic attribution models entirely and describes what to build instead.',
      },
      { type: 'h2', text: 'Why Last-Click Attribution Fails' },
      {
        type: 'p',
        text: 'Last-click attribution assigns 100% of conversion credit to the final touchpoint before a purchase. In a world where the buyer journey is a straight line — awareness ad, then demo, then close — this might work. That world does not exist.',
      },
      {
        type: 'p',
        text: 'In a typical Singapore B2B journey, a VP of Marketing might first encounter your brand through a LinkedIn thought leadership post, read a blog article two weeks later, attend a webinar a month after that, respond to a sales email sequence, and finally book a demo via a branded Google search. Last-click attribution awards 100% of the credit to Google Search. Your LinkedIn and content budget look useless. You cut them. Your pipeline starts to dry up six months later and nobody knows why.',
      },
      { type: 'h2', text: 'Why First-Click Does Not Solve It' },
      {
        type: 'p',
        text: 'First-click has the opposite bias — it awards everything to the awareness channel, which may deserve partial credit but is rarely the sole reason a deal closed. Position-based models (40/20/40 to first, middle, last) are marginally better but still arbitrary. Linear attribution (equal credit to all touches) feels fair but ignores that not all touchpoints are equal in their conversion influence.',
      },
      { type: 'h2', text: 'The Core Problem — Channel Myopia' },
      {
        type: 'p',
        text: 'All simplistic models share a fundamental flaw: they try to allocate 100% of credit across channels that are not independent. The actual reality is that channels work together. A lead who saw your LinkedIn ad before receiving your cold email is significantly more likely to book a demo than one who only received the cold email. Measuring each channel in isolation is like trying to understand music by listening to each instrument separately.',
      },
      { type: 'h2', text: 'Data-Driven Attribution — What It Actually Means' },
      {
        type: 'p',
        text: 'Data-driven attribution uses machine learning to estimate the actual marginal contribution of each touchpoint to conversion, based on empirical patterns in your own data. Rather than applying a fixed rule, it compares the conversion rates of paths that include a given touchpoint against similar paths that do not, and assigns credit accordingly.',
      },
      { type: 'p', text: 'To implement data-driven attribution you need:' },
      {
        type: 'ul',
        items: [
          'A unified customer journey dataset — all touchpoints for each prospect in a single table, keyed by an individual or account identifier',
          'Sufficient volume — typically 2,000+ conversions in your training window for statistical stability',
          'Cross-channel identity resolution — connecting a website visit to an email open to an ad impression to a CRM record',
          'A clearly defined and consistently tracked conversion event',
        ],
      },
      { type: 'h2', text: 'Building a Markov Chain Attribution Model' },
      {
        type: 'p',
        text: 'For companies that have the data but not the budget for enterprise attribution tools, Markov chain models offer an accessible implementation. The core concept: model the buyer journey as a sequence of states (touchpoints), and calculate the "removal effect" of each channel — how much conversion probability drops if that channel is removed from all paths.',
      },
      { type: 'p', text: 'Implementation steps:' },
      {
        type: 'ol',
        items: [
          'Export all conversion paths from your CRM and marketing automation (e.g. "LinkedIn → Blog → Email → Demo Booked")',
          'Build a transition probability matrix between touchpoints using historical path data',
          'Calculate the overall conversion rate from the start state across all paths',
          'For each channel, simulate its removal and calculate the resulting drop in predicted conversions',
          'Normalise the removal effects to sum to 100% — these become your attribution weights',
        ],
      },
      {
        type: 'p',
        text: "Python's ChannelAttribution library and R's ChannelAttribution package both implement this well. With clean data, you can have a working model in a weekend.",
      },
      { type: 'h2', text: 'The Simpler Path — Incrementality Testing' },
      {
        type: 'p',
        text: 'If your data infrastructure is not ready for a full Markov model, incrementality testing (also called lift testing or holdout testing) is the most reliable alternative. The logic: randomly withhold a portion of your audience from seeing a specific channel, and measure the conversion rate difference between the exposed and holdout groups. The delta is the true causal contribution of that channel.',
      },
      {
        type: 'p',
        text: 'Meta, LinkedIn, and Google all offer built-in holdout testing in their ad platforms. This gives you channel-level incrementality without needing a unified dataset. Each test needs 2–4 weeks to reach significance, but the results are causal, not correlational.',
      },
      { type: 'h2', text: 'Practical Next Steps for 2026' },
      {
        type: 'ol',
        items: [
          'Audit your current attribution model and write down the budget decisions it is actually driving',
          'Implement UTM parameters consistently across every channel and campaign if you have not already',
          'Start capturing first-party intent data — session data, form interactions, content consumption — in a data warehouse',
          'Run one incrementality test on your highest-spend channel in the next quarter',
          'Evaluate data-driven attribution tools (Northbeam, Triple Whale, or custom models) once you have six months of unified journey data',
        ],
      },
      {
        type: 'callout',
        text: 'Attribution will never be perfect. The goal is not a perfect model — it is a model that is less wrong than the one you have now, and that makes you less likely to defund the channels quietly building your pipeline.',
      },
    ],
  },
  {
    id: 'ai-marketing-stack-sg',
    category: 'Strategy',
    title: 'Building an AI-Native Marketing Stack for Singapore B2B Companies',
    excerpt:
      'What does an AI-first marketing infrastructure actually look like in practice? We break down the tool categories, integration patterns, and data flows that form the backbone of a modern B2B growth engine.',
    date: '2026-02-27',
    readTime: '14 min read',
    body: [
      {
        type: 'p',
        text: '"AI-first" has become a marketing term. Every SaaS vendor claims their product uses AI. But what does an actually AI-native marketing infrastructure look like — one where artificial intelligence is not a feature bolted onto existing workflows but the core operating layer through which data flows, decisions are made, and content is activated? After building and auditing marketing stacks across Singapore and Southeast Asia, here is our framework.',
      },
      { type: 'h2', text: 'What an AI-Native Stack Is NOT' },
      {
        type: 'p',
        text: 'It is not a collection of AI-powered SaaS tools layered on top of a disconnected data infrastructure. Many B2B companies have invested in an AI writing tool, a predictive scoring feature in their CRM, and an AI content module in their email platform — but each of these operates on different data, makes decisions with different context, and produces outputs that no single system can coordinate. That is AI decoration, not AI architecture.',
      },
      { type: 'h2', text: 'The Four-Layer Framework' },
      {
        type: 'p',
        text: 'An AI-native marketing stack comprises four interdependent layers. Each layer feeds the next. Without the data foundation layer in place, the intelligence layer has nothing to reason over. Without the intelligence layer, the activation layer is just legacy automation with a new name.',
      },
      { type: 'h2', text: 'Layer 1 — Data Foundation' },
      {
        type: 'p',
        text: 'Everything begins with unified, clean, accessible data. The core components:',
      },
      {
        type: 'ul',
        items: [
          '**Customer Data Platform (CDP)** — ingests and identity-resolves data from all touchpoints into a single customer profile. Key requirement: real-time or near-real-time profile updates. For B2B in Singapore, Segment, mParticle, or a custom implementation on a cloud data warehouse are strong options',
          '**CRM as system of record** — HubSpot or Salesforce, maintained with strict data hygiene standards. The AI layer is only as good as the CRM data quality',
          '**Data warehouse** — BigQuery or Snowflake for historical data storage, transformation, and model training. This is where raw event data, CRM snapshots, and campaign performance data converge',
          '**Identity resolution** — the ability to stitch together a LinkedIn click, a website session, and a CRM contact into a single journey. This is the hardest technical problem in modern marketing data and the one most companies under-invest in',
        ],
      },
      { type: 'h2', text: 'Layer 2 — Intelligence Layer' },
      {
        type: 'p',
        text: 'This is the AI layer: models, agents, and decision logic that operate on the unified data to produce predictions, recommendations, and automated decisions.',
      },
      {
        type: 'ul',
        items: [
          '**Predictive scoring models** — lead scoring, churn prediction, upsell propensity, deal probability. Built on ML frameworks (XGBoost, LightGBM) trained on your own CRM data and retrained quarterly',
          '**Segmentation models** — dynamic, behaviour-based segments rather than static list criteria. Clustering on engagement, firmographic, and intent features to find non-obvious cohorts',
          '**Content recommendation engines** — determining which next piece of content a given prospect should see, trained on historical content engagement sequences',
          '**AI agents for research and synthesis** — LLM-based agents that monitor competitor activity, summarise market signals, draft personalised outreach, and surface account intelligence to sales reps',
        ],
      },
      { type: 'h2', text: 'Layer 3 — Activation Layer' },
      {
        type: 'p',
        text: 'Intelligence without activation is analysis paralysis. The activation layer translates model outputs into concrete marketing actions:',
      },
      {
        type: 'ul',
        items: [
          '**Personalised content delivery** — web personalisation based on visitor segment and predicted intent, using tools like Mutiny or a custom implementation via edge functions',
          '**Lifecycle automation** — email sequences, in-product messages, and sales alerts triggered by predictive model outputs, not just static time-based logic',
          '**AI-assisted content production** — using LLMs to generate first drafts and maintain content velocity across channels, reviewed and refined by human writers',
          '**Conversational AI** — chat or email AI agents handling top-of-funnel qualification and demo scheduling with context awareness pulled from the CDP',
        ],
      },
      { type: 'h2', text: 'Layer 4 — Measurement Layer' },
      {
        type: 'p',
        text: 'The measurement layer closes the loop, feeding outcomes back to the intelligence layer to improve model accuracy and budget allocation over time:',
      },
      {
        type: 'ul',
        items: [
          '**Multi-touch attribution** — Markov chain or data-driven models (not last-click) to understand true channel contribution',
          '**Revenue forecasting** — ML-based pipeline forecasting integrated with CRM deal stages and historical close rate patterns',
          '**Experiment infrastructure** — holdout testing framework for measuring true channel incrementality, and an A/B test reporting pipeline',
          '**Data observability** — automated monitoring of data quality so model inputs do not silently degrade and produce misleading scores',
        ],
      },
      { type: 'h2', text: 'Singapore-Specific Considerations' },
      {
        type: 'p',
        text: 'Building an AI marketing stack in Singapore involves regulatory and market factors that differ from Western contexts:',
      },
      {
        type: 'ul',
        items: [
          '**PDPA compliance** — Singapore\'s Personal Data Protection Act governs how you collect, store, and use customer data. Ensure your CDP configuration includes consent management, data residency in Singapore-approved cloud regions, and documented data retention policies',
          '**Platform mix** — LinkedIn and Google dominate B2B digital in Singapore, but WhatsApp Business is increasingly used for mid-funnel nurture. Your stack should treat WhatsApp as a first-class data source and activation channel',
          '**Buyer sophistication** — Singapore B2B buyers are well-informed and multi-lingual. AI content tools must handle formal English business writing with awareness of local business culture',
          '**SME vs enterprise dynamics** — Singapore has a large SME base where buying decisions are made by 1–2 people in 2–8 weeks. Enterprise deals involve procurement and IT security reviews stretching 6–18 months. Segment these journeys architecturally from the start',
        ],
      },
      { type: 'h2', text: 'Where to Start' },
      {
        type: 'p',
        text: 'Most teams try to build all four layers simultaneously and get stuck. We recommend a sequenced approach:',
      },
      {
        type: 'ol',
        items: [
          'Months 1–3: Data foundation. Implement a data warehouse, get CRM hygiene to ≥90% completeness on key fields, set up basic event tracking across all touchpoints',
          'Months 4–6: First intelligence layer. Build one predictive model — lead scoring or churn — and integrate the score back to CRM',
          'Months 7–9: First activation layer. Use the model score to personalise one email sequence and one web experience. Measure the lift rigorously',
          'Months 10–12: Measurement layer. Implement data-driven attribution and pipeline forecasting. Use these to justify and guide the next round of investment',
        ],
      },
      {
        type: 'callout',
        text: 'The companies in Singapore winning on AI marketing did not get there by buying a product. They got there by building a data foundation first and layering intelligence on top over 12–18 months. The competitive moat is the proprietary data, not the models.',
      },
    ],
  },
]

export default posts
