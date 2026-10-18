import { Project } from '../types';

export const PROJECTS: Project[] = [
  // --- FLAGSHIP BRAND IDENTITY PROJECTS ---
  {
    id: 'packagehook',
    slug: 'packagehook',
    title: 'Packagehook',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Logistics & Supply Chain',
    year: '2024',
    featured: true,
    priorityOrder: 1,
    briefSummary: 'Comprehensive visual identity system, packaging architecture, and digital touchpoints for an end-to-end modern logistics and delivery platform.',
    deliverables: ['Identity System', 'Packaging Architecture', 'Vehicle Livery', 'Wayfinding & Signage', 'App Design System'],
    role: 'Lead Brand Identity Designer',
    colorTheme: {
      primary: '#FF5416',
      secondary: '#181A20',
      background: '#0D0E12',
      accent: '#FF7A45',
      text: '#F5F6F8'
    },
    typographySpecimen: {
      primaryFont: 'Outfit Display',
      secondaryFont: 'Plus Jakarta Sans',
      sampleText: 'PRECISION LOGISTICS / END-TO-END VISIBILITY'
    },
    assets: [
      {
        id: 'packagehook-hero',
        slotLabel: 'Packagehook Primary Identity & Monogram',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#FF5416',
        secondaryColor: '#181A20',
        textColor: '#FFFFFF',
        sampleHeadline: 'PACKAGEHOOK',
        sampleSubtitle: 'Unified Parcel Infrastructure',
        caption: 'Primary brand mark and dynamic kinetic hook monogram on matte volcanic charcoal.'
      },
      {
        id: 'packagehook-packaging',
        slotLabel: 'Packagehook Modular Shipping Packaging',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'packaging',
        accentColor: '#FF5416',
        secondaryColor: '#E6E9EE',
        textColor: '#12141A',
        sampleHeadline: 'REVERSIBLE KRAFT ENVELOPE',
        sampleSubtitle: 'Corrugated System · FSC Certified',
        caption: 'Modular corrugated outer packaging suite with tape typography and barcode labeling standards.'
      },
      {
        id: 'packagehook-app',
        slotLabel: 'Packagehook Fleet & Courier Digital Interface',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'interface',
        accentColor: '#FF5416',
        secondaryColor: '#12141A',
        textColor: '#FFFFFF',
        sampleHeadline: 'DISPATCH RADAR',
        sampleSubtitle: 'Live Route Node Verification',
        caption: 'High-contrast mobile interface design for courier navigation and route verification.'
      },
      {
        id: 'packagehook-livery',
        slotLabel: 'Packagehook Transit Fleet Livery',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'collateral',
        accentColor: '#181A20',
        secondaryColor: '#FF5416',
        textColor: '#FFFFFF',
        sampleHeadline: 'RAPID TRANSIT FLEET',
        sampleSubtitle: 'Urban Van & Cargo Bike Livery Spec',
        caption: 'High-visibility vehicle graphics and reflective livery guidelines for urban transit.'
      }
    ]
  },
  {
    id: 'repay',
    slug: 'repay',
    title: 'Repay',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Fintech & Digital Payments',
    year: '2024',
    featured: true,
    priorityOrder: 2,
    briefSummary: 'Brand strategy and visual identity system for a frictionless fintech startup bridging automated repayment rails and consumer financial confidence.',
    deliverables: ['Brand Mark', 'Design Tokens', 'Physical Debit Card Mockups', 'Mobile App UI Theme', 'Motion Guidelines'],
    role: 'Brand Identity & Visual System Designer',
    colorTheme: {
      primary: '#3874FF',
      secondary: '#0B1021',
      background: '#070A14',
      accent: '#6B98FF',
      text: '#F0F4FF'
    },
    typographySpecimen: {
      primaryFont: 'Bricolage Grotesque',
      secondaryFont: 'DM Sans',
      sampleText: 'FRICTIONLESS REPAYMENT PROTOCOLS'
    },
    assets: [
      {
        id: 'repay-hero',
        slotLabel: 'Repay Brand Mark & Obsidian Card Specimen',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#3874FF',
        secondaryColor: '#0E1428',
        textColor: '#FFFFFF',
        sampleHeadline: 'REPAY FINTECH',
        sampleSubtitle: 'Smart Automated Liquidity',
        caption: 'Core identity lockup, custom curved currency symbol, and obsidian metal debit card mockup.'
      },
      {
        id: 'repay-tokens',
        slotLabel: 'Repay Design Tokens & Financial Geometry',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'specimen',
        accentColor: '#3874FF',
        secondaryColor: '#162040',
        textColor: '#E8EFFF',
        sampleHeadline: 'RADIAL SPLINE RATIOS',
        sampleSubtitle: 'Geometric Monogram Construction',
        caption: 'Mathematical grid construction for the signature counter-clockwise loop monogram.'
      },
      {
        id: 'repay-mobile',
        slotLabel: 'Repay Transaction & Balance Interface',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'interface',
        accentColor: '#3874FF',
        secondaryColor: '#070A14',
        textColor: '#FFFFFF',
        sampleHeadline: 'INSTANT SETTLEMENT',
        sampleSubtitle: 'Real-Time Clearing Dashboard',
        caption: 'Clean financial dashboard screens highlighting typographic hierarchy and legibility.'
      }
    ]
  },
  {
    id: 'african-export-club',
    slug: 'african-export-club',
    title: 'African Export Club',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Global Trade & Investment Club',
    year: '2023',
    featured: true,
    priorityOrder: 3,
    briefSummary: 'Editorial-grade identity and institutional brand framework for a premier continental export guild connecting agricultural and industrial producers to international markets.',
    deliverables: ['Institutional Seal', 'Brand Guidelines Monograph', 'Trade Certificate System', 'Summit Collateral', 'Digital Portal'],
    role: 'Creative Director & Brand Designer',
    colorTheme: {
      primary: '#1F4B3C',
      secondary: '#D4AF37',
      background: '#0B130E',
      accent: '#E5C058',
      text: '#F8F6F0'
    },
    typographySpecimen: {
      primaryFont: 'Fraunces Serif',
      secondaryFont: 'Plus Jakarta Sans',
      sampleText: 'CONTINENTAL COMMERCE / GLOBAL HORIZONS'
    },
    assets: [
      {
        id: 'aec-hero',
        slotLabel: 'African Export Club Guild Emblem & Seal',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#D4AF37',
        secondaryColor: '#1F4B3C',
        textColor: '#FAF7EE',
        sampleHeadline: 'AFRICAN EXPORT CLUB',
        sampleSubtitle: 'Continental Trade Federation',
        caption: 'Institutional emblem combining interlocking nautical compass lines with stylized baobab canopy.'
      },
      {
        id: 'aec-monograph',
        slotLabel: 'AEC Hardbound Guild Guidelines Monograph',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'specimen',
        accentColor: '#1F4B3C',
        secondaryColor: '#FAF7EE',
        textColor: '#1A2920',
        sampleHeadline: 'CHARTER OF EXCELLENCE',
        sampleSubtitle: 'Foil-Stamped Linen Monograph',
        caption: 'Hot-stamped gold foil on British racing green bookcloth with custom deckle-edge paper.'
      },
      {
        id: 'aec-certificate',
        slotLabel: 'AEC Export Verification Passport Document',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'collateral',
        accentColor: '#D4AF37',
        secondaryColor: '#152E24',
        textColor: '#FFFFFF',
        sampleHeadline: 'ORIGIN ACCREDITATION',
        sampleSubtitle: 'Anti-Counterfeit Guilloche Patterns',
        caption: 'Secure trade certification document featuring custom guilloche geometry and security watermarks.'
      }
    ]
  },
  {
    id: 'the-yard-fitness',
    slug: 'the-yard-fitness',
    title: 'The Yard Fitness',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Athletic Conditioning & Gym Facility',
    year: '2023',
    featured: true,
    priorityOrder: 4,
    briefSummary: 'Industrial brutalist brand identity, atmospheric environmental graphics, and tactile apparel branding for an elite athletic strength and performance facility.',
    deliverables: ['Custom Display Typeface', 'Wayfinding & Facility Signage', 'Apparel & Merch System', 'Member Keycard', 'Digital Booking App'],
    role: 'Lead Visual Designer',
    colorTheme: {
      primary: '#D6FF00',
      secondary: '#111215',
      background: '#0A0A0C',
      accent: '#E5FF4D',
      text: '#F5F5F7'
    },
    typographySpecimen: {
      primaryFont: 'Outfit Black Condensed',
      secondaryFont: 'JetBrains Mono',
      sampleText: 'HEAVY RESISTANCE / UNCOMPROMISING CONDITIONING'
    },
    assets: [
      {
        id: 'yard-hero',
        slotLabel: 'The Yard Fitness Raw Steel Monogram & Signage',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#D6FF00',
        secondaryColor: '#111215',
        textColor: '#FFFFFF',
        sampleHeadline: 'THE YARD',
        sampleSubtitle: 'High-Density Conditioning Facility',
        caption: 'Custom stencil letterforms cut directly into powder-coated industrial steel with chartreuse glow.'
      },
      {
        id: 'yard-merch',
        slotLabel: 'The Yard Heavyweight Athletic Apparel System',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'collateral',
        accentColor: '#D6FF00',
        secondaryColor: '#191B22',
        textColor: '#FFFFFF',
        sampleHeadline: 'PERFORMANCE DRY-FIT',
        sampleSubtitle: 'Rubberized High-Density Heat-Transfer',
        caption: 'Minimalist athletic apparel labels with rubberized high-density silicone typography and wash tags.'
      },
      {
        id: 'yard-signage',
        slotLabel: 'The Yard Facility Zone Wayfinding Grid',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'specimen',
        accentColor: '#D6FF00',
        secondaryColor: '#0E0F12',
        textColor: '#FFFFFF',
        sampleHeadline: 'ZONE 03: POWER RACKS',
        sampleSubtitle: 'Concrete Floor Stencil System',
        caption: 'Architectural spatial navigation stenciled directly onto cast concrete floors and gym pillars.'
      }
    ]
  },

  // --- FLAGSHIP PITCH DECK DESIGN PROJECTS ---
  {
    id: 'nexa-health',
    slug: 'nexa-health',
    title: 'Nexa Health',
    discipline: 'Pitch Deck Design',
    category: 'pitch-deck',
    clientSector: 'Series A Healthtech & AI Diagnostics',
    year: '2024',
    featured: true,
    priorityOrder: 5,
    briefSummary: 'Strategic $18M Series A fundraising pitch deck restructuring complex clinical trials data, multi-payer revenue economics, and investor storytelling into a high-conviction narrative.',
    deliverables: ['18-Slide Investor Presentation', 'Clinical Data Visualization', 'TAM/SAM/SOM Sizing Models', 'Unit Economics Breakdown', 'Executive One-Pager'],
    role: 'Pitch Deck Strategist & Lead Presentation Designer',
    colorTheme: {
      primary: '#00C2A0',
      secondary: '#071619',
      background: '#040B0D',
      accent: '#26E5C2',
      text: '#F2FAF8'
    },
    narrativeStrategy: 'Transformed an overly dense 40-slide academic deck into an airtight 16-slide narrative: establishing the $42B diagnostic delay crisis, proving proprietary 99.4% algorithm precision, and demonstrating 3.8x hospital ROI within 90 days.',
    assets: [
      {
        id: 'nexa-deck-cover',
        slotLabel: 'Nexa Health Series A Pitch Deck Slide Spread',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'slide',
        accentColor: '#00C2A0',
        secondaryColor: '#08171B',
        textColor: '#FFFFFF',
        sampleHeadline: 'SERIES A DECK / $18M ROUND',
        sampleSubtitle: 'Real-time Autonomous Triage Architecture',
        caption: 'Slide 01 & Slide 04: Market Defensibility & Core Technology Validation.'
      },
      {
        id: 'nexa-deck-metrics',
        slotLabel: 'Nexa Clinical Trials Efficacy Infographic',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'slide',
        accentColor: '#00C2A0',
        secondaryColor: '#0E2228',
        textColor: '#FFFFFF',
        sampleHeadline: '99.4% SENSITIVITY',
        sampleSubtitle: 'Clinical Multi-Center Cohort Validation',
        caption: 'Information architecture transforming 2,400-patient randomized clinical trial data into clear investor proof.'
      },
      {
        id: 'nexa-deck-tam',
        slotLabel: 'Nexa TAM/SAM/SOM Market Opportunity Model',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'slide',
        accentColor: '#00C2A0',
        secondaryColor: '#061316',
        textColor: '#FFFFFF',
        sampleHeadline: '$42B DIAGNOSTIC ADDRESSABLE TAM',
        sampleSubtitle: 'US Inpatient & Outpatient Radiology Nodes',
        caption: 'Concentric market sizing visualization illustrating bottom-up hospital contract expansion.'
      }
    ],
    slides: [
      {
        slideNumber: 1,
        slideType: 'Cover',
        title: 'Title Slide',
        headline: 'Autonomous Clinical Triage for High-Velocity Emergency Networks',
        narrativeObjective: 'Immediately position Nexa as an enterprise-grade infrastructure player, not a casual healthcare gadget.',
        bulletPoints: ['Raising $18M Series A', '38 Institutional Hospital Deployments', 'FDA 510(k) Cleared Diagnostic Engine'],
        graphicType: 'cover-statement',
        accentColor: '#00C2A0',
        bgColor: '#061418',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 2,
        slideType: 'Problem',
        headline: 'Critical Pathology Reports Average 4.2 Hours Delay in Emergency Centers',
        title: 'The Bottleneck',
        narrativeObjective: 'Quantify the life-or-death human cost and the staggering $11,400 malpractice liability risk per delayed triage event.',
        bulletPoints: ['4.2 hr median radiologist turnaround time', '68% of delayed cases occur outside standard business hours', '$8.4B annual hospital overhead in bottlenecked ICU admissions'],
        keyMetric: { label: 'Average Diagnostic Delay', value: '4.2 hrs' },
        graphicType: 'metric-cards',
        accentColor: '#FF5C5C',
        bgColor: '#150A0A',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 3,
        slideType: 'Solution / Product',
        headline: 'Sub-90-Second Inference Engine Embedded directly in PACS Scanners',
        title: 'The Breakthrough',
        narrativeObjective: 'Show the seamless zero-behavior-change integration into existing hospital hardware pipelines.',
        bulletPoints: ['Zero workflow interruption: hooks into GE, Siemens, and Philips DICOM feeds', 'Edge inference: Zero latency, zero HIPAA data transit outside local hospital intranet', '99.4% verified diagnostic sensitivity across 14 acute intracranial conditions'],
        graphicType: 'system-diagram',
        accentColor: '#00C2A0',
        bgColor: '#061418',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 4,
        slideType: 'Market / TAM',
        headline: '$42B Total Addressable Market Across 6,100 US & European Hospital Networks',
        title: 'Market Sizing',
        narrativeObjective: 'Defend bottom-up market sizing showing clear pathway to $120M ARR within 4 years.',
        bulletPoints: ['$42B TAM: Global Emergency Radiology Software Market', '$6.8B SAM: North American Enterprise Hospital Groups', '$840M SOM: First 48 Target Regional Health Networks'],
        keyMetric: { label: 'Serviceable Obtainable Market', value: '$840M' },
        graphicType: 'market-pyramid',
        accentColor: '#26E5C2',
        bgColor: '#061418',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 5,
        slideType: 'Business Model',
        headline: 'Predictable Annual SaaS Contracts with 138% Net Revenue Retention',
        title: 'Unit Economics',
        narrativeObjective: 'Prove stellar financial hygiene: high LTV/CAC ratio and rapid payback.',
        bulletPoints: ['$140K average annual contract value (ACV)', '138% Net Revenue Retention through multi-department expansion', '4.6x LTV to CAC ratio with 7-month customer acquisition payback'],
        keyMetric: { label: 'Net Revenue Retention', value: '138%' },
        graphicType: 'data-chart',
        accentColor: '#00C2A0',
        bgColor: '#061418',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 6,
        slideType: 'Traction / Financials',
        headline: 'From $400K to $4.2M ARR in 14 Months Across 38 Top Health Systems',
        title: 'Traction & Momentum',
        narrativeObjective: 'Prove compounding velocity and clear regulatory moats that block late entrants.',
        bulletPoints: ['38 Health systems live with 0 churn over 18 months', 'Exclusive multi-year partnership with Tier-1 Midwest Trauma Alliance', 'Clear path to $16M ARR by end of FY2026'],
        keyMetric: { label: 'Current ARR', value: '$4.2M' },
        graphicType: 'data-chart',
        accentColor: '#00C2A0',
        bgColor: '#061418',
        textColor: '#FFFFFF'
      }
    ]
  },
  {
    id: 'orbit-fleet',
    slug: 'orbit-fleet',
    title: 'Orbit Fleet',
    discipline: 'Pitch Deck Design',
    category: 'pitch-deck',
    clientSector: 'Seed Stage Autonomous Freight & Telematics',
    year: '2024',
    featured: true,
    priorityOrder: 6,
    briefSummary: 'Seed investment pitch deck translating heavy hardware-software telemetry, fleet operations economics, and regulatory milestones into a compelling 14-slide VC story.',
    deliverables: ['14-Slide Seed Deck', 'Fleet Economics Infographics', 'Hardware Sensor Stack Diagram', 'Founding Team Credentials'],
    role: 'Pitch Deck Architect & Designer',
    colorTheme: {
      primary: '#3B82F6',
      secondary: '#0C111C',
      background: '#070A10',
      accent: '#60A5FA',
      text: '#F1F5F9'
    },
    narrativeStrategy: 'Distilled intricate IoT telemetry sensor diagrams into an elegant, clean story showing how retrofit hardware turns legacy truck fleets into 22% more fuel-efficient autonomous haulers.',
    assets: [
      {
        id: 'orbit-deck-cover',
        slotLabel: 'Orbit Fleet Seed Round Pitch Presentation',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'slide',
        accentColor: '#3B82F6',
        secondaryColor: '#0C111C',
        textColor: '#FFFFFF',
        sampleHeadline: 'ORBIT FLEET / $4.5M SEED',
        sampleSubtitle: 'Autonomous Long-Haul Telematics',
        caption: 'Cover and unit economics slide displaying operational efficiency metrics.'
      },
      {
        id: 'orbit-deck-stack',
        slotLabel: 'Orbit Hardware-Software Telemetry Architecture',
        aspectRatio: '4:3',
        recommendedDimensions: '1440x1080',
        type: 'slide',
        accentColor: '#3B82F6',
        secondaryColor: '#121A2C',
        textColor: '#FFFFFF',
        sampleHeadline: 'CAN-BUS SENSOR FUSION',
        sampleSubtitle: 'Real-time Edge Predictive Analytics',
        caption: 'Custom data visualization demonstrating vehicle telemetry processing at 100Hz.'
      }
    ],
    slides: [
      {
        slideNumber: 1,
        slideType: 'Cover',
        title: 'Title Slide',
        headline: 'Predictive Telematics & Tele-Operation for Mid-Mile Commercial Freight',
        narrativeObjective: 'Establish institutional credibility in heavy freight mobility.',
        bulletPoints: ['Raising $4.5M Seed', '500+ Connected Vehicles in Pilot Testing', '22% Proven Fuel Reduction'],
        graphicType: 'cover-statement',
        accentColor: '#3B82F6',
        bgColor: '#0C111C',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 2,
        slideType: 'Problem',
        headline: 'Trucking Carriers Bleed 34% of Operating Margins on Idling & Driver Churn',
        title: 'The Operating Crisis',
        narrativeObjective: 'Highlight the severe margin squeeze on mid-market logistics operators.',
        bulletPoints: ['94% annualized commercial driver turnover rate', '$1.40/mile average operating cost in unoptimized routes', 'Severe regulatory penalties for hours-of-service compliance violations'],
        keyMetric: { label: 'Driver Annual Turnover', value: '94%' },
        graphicType: 'metric-cards',
        accentColor: '#EF4444',
        bgColor: '#160E0E',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 3,
        slideType: 'Solution / Product',
        headline: '15-Minute OBD-II Plug & Play Hardware with Edge Intelligence',
        title: 'Frictionless Solution',
        narrativeObjective: 'Show that fleets do not need $150K custom truck replacements.',
        bulletPoints: ['Universal retrofit: plugs into standard J1939 heavy-duty diagnostic ports', 'Autonomous idle cutoff and smart platooning algorithm', 'Cellular + Starlink satellite fallback for 100% remote road coverage'],
        graphicType: 'system-diagram',
        accentColor: '#3B82F6',
        bgColor: '#0C111C',
        textColor: '#FFFFFF'
      },
      {
        slideNumber: 4,
        slideType: 'Traction / Financials',
        headline: 'Letters of Intent from 6 Regional Freight Haulers Totaling 2,800 Trucks',
        title: 'Commercial Traction',
        narrativeObjective: 'Validate commercial appetite and strong willingness to pay.',
        bulletPoints: ['$1.2M pipeline in signed Letters of Intent', 'Pilot trials showing $1,420 monthly net fuel savings per truck', 'Gross margins reaching 74% at hardware scale'],
        keyMetric: { label: 'Pre-Contracted Fleet Pipeline', value: '2,800 trucks' },
        graphicType: 'data-chart',
        accentColor: '#3B82F6',
        bgColor: '#0C111C',
        textColor: '#FFFFFF'
      }
    ]
  },
  {
    id: 'kora-carbon',
    slug: 'kora-carbon',
    title: 'Kora Carbon',
    discipline: 'Pitch Deck Design',
    category: 'pitch-deck',
    clientSector: 'Climate Tech & Carbon Removal Registry',
    year: '2023',
    featured: false,
    priorityOrder: 7,
    briefSummary: 'Strategic institutional presentation deck for sovereign and institutional capital, structuring carbon credit verification methodologies and permanent carbon sequestration registries.',
    deliverables: ['16-Slide Strategic Deck', 'Carbon Credit Waterfall Flowchart', 'Registry Security Architecture'],
    role: 'Presentation Art Director',
    colorTheme: {
      primary: '#10B981',
      secondary: '#061B13',
      background: '#030E0A',
      accent: '#34D399',
      text: '#ECFDF5'
    },
    narrativeStrategy: 'Transformed complex geochemical soil carbon modeling and regulatory compliance mechanisms into a crystalline visual deck for sovereign ESG wealth funds.',
    assets: [
      {
        id: 'kora-deck-hero',
        slotLabel: 'Kora Carbon Investor Deck Spread',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'slide',
        accentColor: '#10B981',
        secondaryColor: '#061B13',
        textColor: '#FFFFFF',
        sampleHeadline: 'KORA CARBON / INSTITUTIONAL ROUND',
        sampleSubtitle: 'Verifiable Enhanced Rock Weathering Credits',
        caption: 'Institutional slide series highlighting geochemical permanence and audited credit issuance.'
      }
    ]
  },
  {
    id: 'vesper-retail',
    slug: 'vesper-retail',
    title: 'Vesper Retail',
    discipline: 'Pitch Deck Design',
    category: 'pitch-deck',
    clientSector: 'Growth Stage Omnichannel Commerce',
    year: '2024',
    featured: false,
    priorityOrder: 8,
    briefSummary: 'Series B pitch deck highlighting cohort retention curves, merchant multi-store adoption metrics, and international market penetration strategies.',
    deliverables: ['20-Slide Growth Deck', 'Cohort Retention Curves', 'Enterprise Sales Funnel Map'],
    role: 'Pitch Deck Visual Designer',
    colorTheme: {
      primary: '#8B5CF6',
      secondary: '#130C24',
      background: '#0B0715',
      accent: '#A78BFA',
      text: '#F5F3FF'
    },
    assets: [
      {
        id: 'vesper-deck-hero',
        slotLabel: 'Vesper Retail Series B Presentation Deck',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'slide',
        accentColor: '#8B5CF6',
        secondaryColor: '#130C24',
        textColor: '#FFFFFF',
        sampleHeadline: 'VESPER / SERIES B',
        sampleSubtitle: 'Unified Physical & Digital Merchant OS',
        caption: 'Financial cohort analysis and merchant lifetime value expansion visual spreads.'
      }
    ]
  },
  {
    id: 'catalyst-bio',
    slug: 'catalyst-bio',
    title: 'Catalyst Bio',
    discipline: 'Pitch Deck Design',
    category: 'pitch-deck',
    clientSector: 'Deep Tech Synthetic Biology',
    year: '2023',
    featured: false,
    priorityOrder: 9,
    briefSummary: 'Fundraising presentation articulating enzymatic pathway discovery, high-throughput biofoundry scalability, and intellectual property defensibility for biotech venture capitalists.',
    deliverables: ['15-Slide Seed Deck', 'Enzymatic Reaction Infographic', 'IP Portfolio Roadmap'],
    role: 'Information Designer & Presentation Specialist',
    colorTheme: {
      primary: '#EC4899',
      secondary: '#1A0A14',
      background: '#0F050C',
      accent: '#F472B6',
      text: '#FDF2F8'
    },
    assets: [
      {
        id: 'catalyst-deck-hero',
        slotLabel: 'Catalyst Bio Deep Tech Presentation Deck',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'slide',
        accentColor: '#EC4899',
        secondaryColor: '#1A0A14',
        textColor: '#FFFFFF',
        sampleHeadline: 'CATALYST BIO / SEED FINANCING',
        sampleSubtitle: 'Engineered Biocatalysis for Fine Chemicals',
        caption: 'Scientific pathway visualization combined with disciplined venture capital economics.'
      }
    ]
  },

  // --- ADDITIONAL BRAND IDENTITY PROJECTS ---
  {
    id: 'ligada',
    slug: 'ligada',
    title: 'Ligada',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Modern Architectural Real Estate',
    year: '2023',
    featured: false,
    priorityOrder: 10,
    briefSummary: 'Warm architectural brand identity and sales gallery environmental collateral for a boutique property development collective.',
    deliverables: ['Identity System', 'Sales Gallery Signage', 'Finishes Sample Case', 'Property Lookbook'],
    role: 'Brand Designer',
    colorTheme: {
      primary: '#C88A58',
      secondary: '#1A1613',
      background: '#0F0D0B',
      accent: '#DCA273',
      text: '#FAF7F4'
    },
    assets: [
      {
        id: 'ligada-hero',
        slotLabel: 'Ligada Architectural Monogram & Property Book',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#C88A58',
        secondaryColor: '#1A1613',
        textColor: '#FAF7F4',
        sampleHeadline: 'LIGADA REAL ESTATE',
        sampleSubtitle: 'Considered Living Spaces',
        caption: 'Warm terracotta and raw travertine stone identity for architectural residences.'
      }
    ]
  },
  {
    id: 'cota',
    slug: 'cota',
    title: 'Cota',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Faith-Based Community & Collective',
    year: '2023',
    featured: false,
    priorityOrder: 11,
    briefSummary: 'Modern, welcoming visual system and communal gathering materials for a contemporary faith community.',
    deliverables: ['Brand Mark', 'Gathering Guides', 'Signage System', 'Digital Community Hub'],
    role: 'Visual Identity Designer',
    colorTheme: {
      primary: '#6366F1',
      secondary: '#13132B',
      background: '#0B0B1A',
      accent: '#818CF8',
      text: '#EEF2FF'
    },
    assets: [
      {
        id: 'cota-hero',
        slotLabel: 'Cota Community Emblem & Typography',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#6366F1',
        secondaryColor: '#13132B',
        textColor: '#EEF2FF',
        sampleHeadline: 'COTA COLLECTIVE',
        sampleSubtitle: 'Gathering, Fellowship & Service',
        caption: 'Minimalist continuous loop emblem symbolizing unity and communal support.'
      }
    ]
  },
  {
    id: 'cipher',
    slug: 'cipher',
    title: 'Cipher',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Software Engineering & Tech Training Institute',
    year: '2023',
    featured: false,
    priorityOrder: 12,
    briefSummary: 'Rigorous geometric identity and educational materials for an intensive software engineering and computer science academy.',
    deliverables: ['Dynamic Logo System', 'Curriculum Syllabus Guides', 'Student Certificates', 'Campus Signage'],
    role: 'Brand Identity Designer',
    colorTheme: {
      primary: '#06B6D4',
      secondary: '#0B181E',
      background: '#060E12',
      accent: '#22D3EE',
      text: '#ECFEFF'
    },
    assets: [
      {
        id: 'cipher-hero',
        slotLabel: 'Cipher Monogram & Terminal Brand Graphics',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#06B6D4',
        secondaryColor: '#0B181E',
        textColor: '#ECFEFF',
        sampleHeadline: 'CIPHER INSTITUTE',
        sampleSubtitle: 'Systems Programming & Logic Systems',
        caption: 'Monospaced typographic identity and algorithmic generative logo system.'
      }
    ]
  },
  {
    id: 'akure-art-tech',
    slug: 'akure-art-tech',
    title: 'Akure Art and Tech Hub',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Creative Incubator & Tech Space',
    year: '2022',
    featured: false,
    priorityOrder: 13,
    briefSummary: 'Vibrant civic and cultural identity honoring regional creative heritage while projecting technological innovation.',
    deliverables: ['Hub Brand Mark', 'Exhibition Collateral', 'Wayfinding', 'Event Poster Series'],
    role: 'Creative Lead & Identity Designer',
    colorTheme: {
      primary: '#F59E0B',
      secondary: '#1A1407',
      background: '#0E0B04',
      accent: '#FBBF24',
      text: '#FFFBEB'
    },
    assets: [
      {
        id: 'akure-hero',
        slotLabel: 'Akure Art & Tech Hub Identity Mark',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#F59E0B',
        secondaryColor: '#1A1407',
        textColor: '#FFFBEB',
        sampleHeadline: 'AKURE ART & TECH HUB',
        sampleSubtitle: 'Convergence of Craft and Code',
        caption: 'Geometric emblem inspired by traditional regional textile patterns merged with circuit paths.'
      }
    ]
  },
  {
    id: 'tce',
    slug: 'tce',
    title: 'TCE',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Venture Capital & Early Stage Fund',
    year: '2023',
    featured: false,
    priorityOrder: 14,
    briefSummary: 'Minimalist high-conviction identity and institutional investor portal for an early-stage venture capital firm backing audacious founders.',
    deliverables: ['Wordmark System', 'Investor Quarterly Deck', 'Business Cards & Stationery', 'Website'],
    role: 'Brand Identity Designer',
    colorTheme: {
      primary: '#94A3B8',
      secondary: '#131720',
      background: '#0A0C10',
      accent: '#CBD5E1',
      text: '#F8FAFC'
    },
    assets: [
      {
        id: 'tce-hero',
        slotLabel: 'TCE Venture Capital Wordmark & Monogram',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#CBD5E1',
        secondaryColor: '#131720',
        textColor: '#F8FAFC',
        sampleHeadline: 'TCE CAPITAL',
        sampleSubtitle: 'High-Conviction Early Stage Venture',
        caption: 'Chiseled typographic mark with restrained silver metallic foil application.'
      }
    ]
  },
  {
    id: 'aunty-helens-pot',
    slug: 'aunty-helens-pot',
    title: "Aunty Helen's Pot",
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Artisanal Culinary & Food Business',
    year: '2022',
    featured: false,
    priorityOrder: 15,
    briefSummary: 'Hearty, authentic culinary branding and custom jar packaging labels celebrating heritage recipes and slow-simmered flavors.',
    deliverables: ['Custom Hand-lettered Mark', 'Glass Jar Label Suite', 'Takeaway Packaging', 'Menu Systems'],
    role: 'Brand & Packaging Designer',
    colorTheme: {
      primary: '#EA580C',
      secondary: '#201007',
      background: '#120803',
      accent: '#F97316',
      text: '#FFF7ED'
    },
    assets: [
      {
        id: 'helen-hero',
        slotLabel: "Aunty Helen's Pot Brand Mark & Jar Suite",
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'packaging',
        accentColor: '#EA580C',
        secondaryColor: '#201007',
        textColor: '#FFF7ED',
        sampleHeadline: "AUNTY HELEN'S POT",
        sampleSubtitle: 'Slow-Cooked Heritage Recipes',
        caption: 'Tactile textured paper labels with wax seals and warm terracotta culinary color palette.'
      }
    ]
  },
  {
    id: 'hephzibahs-atelier',
    slug: 'hephzibahs-atelier',
    title: "Hephzibah's Atelier",
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Haute Couture & Bespoke Fashion House',
    year: '2023',
    featured: false,
    priorityOrder: 16,
    briefSummary: 'Luxury bespoke identity system, woven garment tags, and minimalist lookbook for a contemporary haute couture atelier.',
    deliverables: ['Monogram Insignia', 'Woven Garment Labels', 'Embossed Garment Box', 'Lookbook Editorial'],
    role: 'Creative Director & Brand Designer',
    colorTheme: {
      primary: '#E2E8F0',
      secondary: '#1A1819',
      background: '#0D0C0D',
      accent: '#F8FAFC',
      text: '#FFFFFF'
    },
    assets: [
      {
        id: 'hephzibah-hero',
        slotLabel: "Hephzibah's Atelier Woven Labels & Insignia",
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'collateral',
        accentColor: '#E2E8F0',
        secondaryColor: '#1A1819',
        textColor: '#FFFFFF',
        sampleHeadline: "HEPHZIBAH'S ATELIER",
        sampleSubtitle: 'Bespoke Couture & Tailoring',
        caption: 'Monochrome high-contrast typography on black damask woven silk labels with metallic thread.'
      }
    ]
  },
  {
    id: 'lia-money',
    slug: 'lia-money',
    title: 'Lia Money',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Web3 & Multi-Chain Wallet',
    year: '2023',
    featured: false,
    priorityOrder: 17,
    briefSummary: 'Clean, trust-first visual identity and digital interface branding for a self-custody Web3 wallet engineered for everyday cross-border remittances.',
    deliverables: ['Vector Mark System', 'Mobile App Tokens', 'Social Campaign Assets', 'Security Guidelines'],
    role: 'Lead Brand Designer',
    colorTheme: {
      primary: '#06D6A0',
      secondary: '#0A1C16',
      background: '#050F0B',
      accent: '#2EE5B3',
      text: '#F0FDF8'
    },
    assets: [
      {
        id: 'lia-hero',
        slotLabel: 'Lia Money Vector Mark & App Icon',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#06D6A0',
        secondaryColor: '#0A1C16',
        textColor: '#F0FDF8',
        sampleHeadline: 'LIA MONEY',
        sampleSubtitle: 'Borderless Self-Custody Payments',
        caption: 'Clean geometric loop mark representing instant peer-to-peer liquidity and trust.'
      }
    ]
  },
  {
    id: 'the-well-experience',
    slug: 'the-well-experience',
    title: 'The Well Experience',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Church & Modern Ministry',
    year: '2022',
    featured: false,
    priorityOrder: 18,
    briefSummary: 'Fluid, modern ministry branding, stage environment visuals, and worship media templates centered on restoration and community.',
    deliverables: ['Identity System', 'Stage Motion Graphics Templates', 'Program Guides', 'Podcast Visuals'],
    role: 'Brand & Visual Designer',
    colorTheme: {
      primary: '#38BDF8',
      secondary: '#0C1E2B',
      background: '#061017',
      accent: '#7DD3FC',
      text: '#F0F9FF'
    },
    assets: [
      {
        id: 'well-hero',
        slotLabel: 'The Well Experience Logo & Stage Visuals',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'brand-mark',
        accentColor: '#38BDF8',
        secondaryColor: '#0C1E2B',
        textColor: '#F0F9FF',
        sampleHeadline: 'THE WELL EXPERIENCE',
        sampleSubtitle: 'Community, Faith & Restoration',
        caption: 'Fluid water ripple geometry rendered as a modern architectural monogram.'
      }
    ]
  },
  {
    id: 'tvo-travels',
    slug: 'tvo-travels',
    title: 'TVO Travels',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Luxury Travel & Bespoke Curated Tours',
    year: '2022',
    featured: false,
    priorityOrder: 19,
    briefSummary: 'Sophisticated travel identity and leather-bound itinerary folder branding for high-touch bespoke travel and safari experiences.',
    deliverables: ['Brand Mark & Monogram', 'Passport Wallets & Luggage Tags', 'Itinerary Design System', 'Digital Booking Suite'],
    role: 'Brand & Print Designer',
    colorTheme: {
      primary: '#D97706',
      secondary: '#1A1308',
      background: '#0D0903',
      accent: '#F59E0B',
      text: '#FFFBEB'
    },
    assets: [
      {
        id: 'tvo-hero',
        slotLabel: 'TVO Travels Luggage Tag & Itinerary Monogram',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'collateral',
        accentColor: '#D97706',
        secondaryColor: '#1A1308',
        textColor: '#FFFBEB',
        sampleHeadline: 'TVO TRAVELS',
        sampleSubtitle: 'Bespoke Global Journeys',
        caption: 'Topographic contour line motifs paired with embossed saddle leather luggage tags.'
      }
    ]
  },
  {
    id: 'humancentric',
    slug: 'humancentric',
    title: 'Humancentric',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    clientSector: 'Ecommerce Ergonomics & Workspace Goods',
    year: '2023',
    featured: false,
    priorityOrder: 20,
    briefSummary: 'Editorial email marketing design system, product campaign newsletters, and typography-driven promotional templates driving customer engagement.',
    deliverables: ['Email Design System', 'Promotional Campaign Architecture', 'Typography Guidelines', 'Modular Component Library'],
    role: 'Editorial & Campaign Designer',
    colorTheme: {
      primary: '#64748B',
      secondary: '#141822',
      background: '#0B0D13',
      accent: '#94A3B8',
      text: '#F8FAFC'
    },
    assets: [
      {
        id: 'humancentric-hero',
        slotLabel: 'Humancentric Email Campaign Layout Suite',
        aspectRatio: '16:9',
        recommendedDimensions: '1920x1080',
        type: 'interface',
        accentColor: '#94A3B8',
        secondaryColor: '#141822',
        textColor: '#F8FAFC',
        sampleHeadline: 'HUMANCENTRIC CAMPAIGNS',
        sampleSubtitle: 'Ergonomic Workspace Architecture',
        caption: 'High-converting responsive email layout system with clear typographic hierarchy.'
      }
    ]
  }
];
