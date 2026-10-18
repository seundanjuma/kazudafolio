export type ProjectCategory = 'all' | 'brand-identity' | 'pitch-deck';

export interface VisualAsset {
  id: string;
  slotLabel: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:2' | '21:9';
  recommendedDimensions: string;
  type: 'brand-mark' | 'packaging' | 'slide' | 'collateral' | 'specimen' | 'interface';
  caption?: string;
  // Fallback visual data for realistic placeholder rendering
  accentColor: string;
  secondaryColor: string;
  textColor: string;
  svgIcon?: string;
  sampleHeadline?: string;
  sampleSubtitle?: string;
  // Local or external image URL if Stephen uploads or replaces
  customUrl?: string;
}

export interface PitchDeckSlide {
  slideNumber: number;
  slideType: 'Cover' | 'Problem' | 'Market / TAM' | 'Solution / Product' | 'Business Model' | 'Traction / Financials' | 'GTM / Team';
  title: string;
  headline: string;
  narrativeObjective: string;
  keyMetric?: { label: string; value: string };
  bulletPoints?: string[];
  graphicType: 'data-chart' | 'system-diagram' | 'market-pyramid' | 'metric-cards' | 'cover-statement';
  accentColor: string;
  bgColor: string;
  textColor: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  discipline: 'Brand Identity' | 'Pitch Deck Design';
  category: 'brand-identity' | 'pitch-deck';
  clientSector: string;
  year: string;
  featured: boolean;
  priorityOrder: number;
  briefSummary: string;
  deliverables: string[];
  role: string;
  colorTheme: {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
    text: string;
  };
  typographySpecimen?: {
    primaryFont: string;
    secondaryFont: string;
    sampleText: string;
  };
  assets: VisualAsset[];
  slides?: PitchDeckSlide[];
  narrativeStrategy?: string;
  ndaProtected?: boolean;
}

export interface WorkSnapshot {
  id: string;
  projectId: string;
  projectSlug: string;
  projectTitle: string;
  discipline: 'Brand Identity' | 'Pitch Deck Design';
  category: 'brand-identity' | 'pitch-deck';
  assetLabel: string;
  artifactType: 'Identity Lockup' | 'Packaging System' | 'Type Specimen' | 'Slide Sequence' | 'TAM Market Model' | 'Wayfinding Sign' | 'App Interface' | 'Posters & Livery';
  cardSpan: 'standard' | 'tall' | 'short' | 'wide';
  primaryColor: string;
  surfaceColor: string;
  accentColor: string;
  textColor: string;
  headline: string;
  subtext: string;
  customUrl?: string;
}
