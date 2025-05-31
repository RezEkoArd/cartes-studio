<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { page } from '$app/stores';
  let {children} = $props();
  import "../app.css";

  // Get SEO data from page data
  const seo = $derived($page.data || {});

    // Check if current page is an error page
    const isErrorPage = $derived($page.error || $page.route?.id?.includes('error') || false);

  
  // Business schema for structured data
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "Cartes Studio",
    "description": "Professional digital marketing and content creation services including TikTok, Instagram, livestreaming, and 3D animation",
    "url": "https://cartesstudio.com",
    "telephone": "+62 878 8987 5535",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Gelatik VI No.1 blok G7, Pd. Kacang Tim.",
      "addressLocality": "Pd. Aren",
      "addressRegion": "Kota Tangerang Selatan, Banten",
      "postalCode": "15226",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2615",
      "longitude": "106.7539"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Indonesia"
    }
  };
</script>

<svelte:head>
  <title>{seo.title || 'Cartes Studio - Digital Marketing Services'}</title>
  <meta name="description" content={seo.description || 'Professional digital marketing and content creation services'} />
  {#if seo.keywords}
    <meta name="keywords" content={seo.keywords} />
  {/if}
  
  <!-- Canonical URL -->
  {#if seo.canonical}
    <link rel="canonical" href={seo.canonical} />
  {/if}
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={seo.title || 'Cartes Studio'} />
  <meta property="og:description" content={seo.description || 'Professional digital marketing and content creation services'} />
  <meta property="og:image" content={seo.ogImage || '/logo.png'} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:site_name" content="Cartes Studio" />
  <meta property="og:locale" content="id_ID" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo.title || 'Cartes Studio'} />
  <meta name="twitter:description" content={seo.description || 'Professional digital marketing and content creation services'} />
  <meta name="twitter:image" content={seo.ogImage || '/logo.png'} />
  
  <!-- Additional SEO meta tags -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Cartes Studio" />
  <meta name="language" content="Indonesian" />
  <meta name="geo.region" content="ID-BT" />
  <meta name="geo.placename" content="Tangerang Selatan" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(businessSchema)}</script>`}
</svelte:head>

{#if isErrorPage}
  <!-- Tampilkan hanya konten error tanpa navbar dan footer -->
  {@render children()}
{:else}
  <!-- Tampilkan layout normal dengan navbar dan footer -->
  <main class="relative">
    <Navbar />
    {@render children()}
    <Footer />
  </main>
{/if}

<!-- <main class="relative">
    <Navbar/>
    {@render children()}
    <Footer/>
</main> -->
