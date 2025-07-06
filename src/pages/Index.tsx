
import React, { Suspense } from 'react';
import SEOHead from '@/components/SEOHead';
import SkipNavigation from '@/components/SkipNavigation';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Lazy load components for better performance
const LazyAbout = React.lazy(() => import('@/components/About'));
const LazySkills = React.lazy(() => import('@/components/Skills'));
const LazyProjects = React.lazy(() => import('@/components/Projects'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20" role="status" aria-label="Loading content">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead />
      <SkipNavigation />
      <ScrollProgress />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <LazyAbout />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <LazySkills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <LazyProjects />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
