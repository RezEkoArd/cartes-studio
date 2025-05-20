<script>
	import Accordion from './../lib/components/Accordion.svelte';
    import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
	  import {ChevronRight, ChevronsDown} from '@lucide/svelte';
    import {reveal} from 'svelte-reveal';
    import Hero from "$lib/assets/hero.png";
    import EmblaAutoPlay from '$lib/components/EmblaAutoPlay.svelte';
    import Google from "$lib/assets/logo-partner/google.png";
    import Shopee from "$lib/assets/logo-partner/shopee-logo.png";
    import Twitch from "$lib/assets/logo-partner/twitch-logo.png";
    import Fiver from "$lib/assets/logo-partner/fiver-logo.png";
    import img1 from '$lib/assets/img1.jpg';
    import img2 from '$lib/assets/img2.jpg';
    import img6 from '$lib/assets/img6.jpg';
    import profile1 from '$lib/assets/profile/profile1.jpg';
    import profile2 from '$lib/assets/profile/profile2.jpg';
    import profile3 from '$lib/assets/profile/profile3.jpg';
    // Portofolio
    import porto1 from '$lib/assets/portofolio/tiktok/tiktok1.jpg';
    import porto2 from '$lib/assets/portofolio/tiktok/tiktok6.png';
    import porto3 from '$lib/assets/portofolio/tiktok/tiktok8.png';
    import porto4 from '$lib/assets/portofolio/instagram/reels3.jpg';
    import porto5 from '$lib/assets/portofolio/instagram/reels4.jpg';
    import porto6 from '$lib/assets/portofolio/instagram/Feed1.jpg';
    import porto7 from '$lib/assets/portofolio/instagram/Feed2.jpg';

    // Services
    import { Music2, Instagram, Tv } from '@lucide/svelte';
    import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';

    // data Why Choose us
    const features = [
    {
      title: "End-to-End Service",
      description: "Dari strategi hingga eksekusi — kami menangani semua kebutuhan digital Anda."
    },
    {
      title: "Content that Converts",
      description: "Fokus pada konten yang bukan hanya menarik, tapi membentuk identitas visual yang berkelas dan berdampak."
    },
    {
      title: "Agile & Scalable",
      description: "Cocok untuk brand baru hingga korporasi — kami siap tumbuh bersama Anda."
    }
  ];

  
    // Content Section Our Services
    let services = [
        {
          url: "tiktok",
          title: "Sosial Media Content  (TikTok)",
          description: "Kami bantu bisnismu tampil beda di TikTok dengan konten yang viral, kreatif, dan relevan untuk audiens muda. Optimalkan reach dan engagement tanpa harus repot mikir ide setiap hari.",
          icon: Music2,
        },
        {
          url: "instagram",
          title: "Sosial Media Content (Instagram)",
          description: "Bangun kredibilitas dan visual brand kamu di Instagram lewat konten yang konsisten, estetis, dan terstruktur. Cocok untuk membangun komunitas dan menarik pelanggan ideal.",
          icon: Instagram,
        },
        {
          url: "livestream",
          title: "Jasa Livestreaming",
          description: "Tingkatkan penjualan dan interaksi real-time dengan layanan livestream profesional. Cocok untuk launching produk, promosi, atau sesi Q&A dengan audiensmu secara langsung.",
          icon: Tv,
        }
      ];

    // data testimonial
    let testimonials = [
      {
        name: "Andi Wijaya",
        position: "CEO StartupTech",
        quote: "Layanan yang sangat profesional, timnya cepat tanggap dan hasilnya sangat memuaskan!",
        image: profile1
      },
      {
        name: "Rina Ayu",
        position: "Marketing Manager Shopee",
        quote: "Kami sangat senang bekerja sama, semua kebutuhan desain kami terpenuhi dengan cepat dan tepat.",
        image: profile2
      },
      {
        name: "Dimas Pratama",
        position: "Founder Dims Studio",
        quote: "Sangat recommended untuk pembuatan website maupun branding!",
        image: profile3
      }
    ];

    //Portofolio data dummy
    let portfolios = [
  {
    title: "UltraJaya • @ultrasquad.id",
    category: "Tiktok",
    image: porto1,
    link: "https://www.tiktok.com/@ultrasquad.id/video/7467916938686008584"
  },
  {
    title: "D'Alba • @dalba_indonesia",
    category: "Tiktok",
    image: porto2,
    link: "https://www.tiktok.com/@dalba_indonesia/video/7434701517438848311"
  },
  {
    title: "GBK • love_gbk",
    category: "Tiktok",
    image: porto3,
    link: "https://www.tiktok.com/@love_gbk/video/7183960937085390107"
  },
  {
    title: "GBK • @love_gbk",
    category: "Instagram Reels",
    image: porto4,
    link: "https://www.instagram.com/reel/DCO_em6yCed/"
  },
  {
    title: "GBK • @peavolk",
    category: "Instagram Reels",
    image: porto5,
    link: "https://www.instagram.com/reel/C_cbPaMyhkr/"
  },
  {
    title: "Miebar • @miebar.id",
    category: "Instagram Content",
    image: porto6,
    link: "https://www.instagram.com/miebar.id/"
  },
  {
    title: "Zeintin • @zeintin.official",
    category: "Instagram Content",
    image: porto7,
    link: "https://www.instagram.com/zeintin.official/"
  }
];


    // Build unique categories + "All"
    let categories = ["All", ...new Set(portfolios.map(p => p.category))];
  let active = "All";

  // Reactive filtered list
  $: filtered = active === "All"
    ? portfolios
    : portfolios.filter(p => p.category === active);


</script>


<!-- ?Hero Section -->
<section class="bg-linear-to-t from-primary-dark to-deep-400">
    <div class="max-w-screen-xl flex flex-col-reverse gap-10 px-4 py-16 mx-auto lg:flex-row lg:items-center lg:justify-between">
        <div class="lg:mb-0 lg:max-w-xl sr__hide" use:reveal={{preset: 'fade', duration: '2000'}}>
            <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white dark:text-white sm:text-5xl">
              Elevating Brands Through Visual Excellence
            </h1>
            <p class="mt-6 text-lg text-gray-300">
              From immersive live streams to high-end content
              production, we turn ideas into refined digital experiences
              that connect, engage, and convert.
              Kami bukan hanya tim kreatif, tapi mitra jangka panjang
              dalam membentuk identitas visual yang berkelas dan
              berdampak.
            </p>
              <div class="mt-10 lg:mt-40  gap-1 text-primary-dark text-2xl ">
                <div class="bg-accent w-fit flex flex-row items-center py-3  px-5 rounded-full animate-bounce">
                  <span class="">
                      <ChevronsDown size="25" color="#930526"/>
                  </span> 
                  <p>ScrollDown</p>
                </div>
              </div>
        </div>

        <div class="lg:w-1/2 " >
            <img src={Hero} loading="lazy" img alt="hero-page" class="w-full rounded-lg shadow-lg sr__hide" use:reveal>
        </div>
    </div>
</section>


<!-- About me -->
<section id="aboutme" class="bg-accent py-12 text-center">
    <div class="max-w-3xl mx-auto mb-10 px-4">
      <h2 class="text-2xl font-bold mb-6 text-gray-800" use:reveal={{preset: 'fade', duration: '3000'}}>
        Why Choose Cartes.id?
      </h2>
      <p class="text-gray-500 leading-relaxed" use:reveal={{preset: 'fade',y: 100, duration: '1000'}}>
        Cartes.id adalah partner strategis brand Anda dalam membangun, mengelola, dan mengembangkan aset digital mulai dari live streaming, produksi konten, manajemen media sosial, hingga foto produk untuk mendorong pertumbuhan jangka panjang di era digital.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4" use:reveal={{preset: 'fade',y: 100, duration: '1000'}}>
      {#each features as feature}
        <div class="bg-primary-dark shadow-xl p-6 rounded-xl transition-all hover:shadow-2xl">
          <!-- Title -->
          <h3 class="text-lg font-semibold mb-3 text-gray-100">
            {feature.title}
          </h3>
          
          <!-- Description -->
          <p class="text-gray-300 text-sm leading-relaxed">
            {feature.description}
          </p>

          
        </div>
      {/each}
    </div>

      <div class="w-3/4 mx-auto mt-10 flex flex-col items-center justify-center content-center gap-3 pb-10 lg:flex-row lg:gap-10 " use:reveal={{preset: 'fade',y: 100, duration: '2000'}}>
          <AnimatedNumber
          target={5000}
          label="Connect to"
          content="Passionate Creators "
          duration={1500}
          classes="mx-auto" />

          <AnimatedNumber
          target={20}
          label="Partnering With"
          content="Brands & SMEs "
          duration={1500}
          classes="mx-auto" />

          <AnimatedNumber
          target={30}
          label="Expanding to"
          content="Content Niches"
          duration={1500}
          classes="mx-auto" />
      </div>
</section>

<!-- Client Page -->
<section  class="bg-primary-dark">
    <div class="max-w-screen-xl flex flex-col gap-10 px-4 py-16 mx-auto">
      <h1 class="font-extrabold text-4xl text-accent text-center mb-10">Proudly Featured In</h1>
  
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center w-full">
        <img src={Google} alt="Google" class="w-40 h-auto object-contain" />
        <img src={Shopee} alt="Shopee" class="w-40 h-auto object-contain" />
        <img src={Fiver} alt="Fiver" class="w-40 h-auto object-contain" />
        <img src={Twitch} alt="Twitch" class="w-40 h-auto object-contain" />
      </div>
    </div>
</section>

<!-- Our Services -->
<section id="services" class="bg-accent py-16">
  <div class="max-w-screen-xl mx-auto px-4 text-center">
    <h2 class="text-4xl font-extrabold text-primary-dark mb-5" use:reveal={{ y: 50, duration: 500 }}>
      Our Services
    </h2>
    <p class="font-light text-md text-black mb-10">Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam melakukan Digital Marketing.</p>
    

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service (service.title)}
          <div 
          class="relative p-8 h-[26rem] bg-gradient-to-br from-deep-400 via-deep-500 to-deep-400 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          use:reveal={{ y: 50, duration: 700 }}
        >
          <div class="flex flex-col items-start gap-4"> 
            <!-- Icon --> 
            <div class="w-full text-6xl text-accent flex justify-center items-center gap-5">
              <svelte:component this={service.icon} size="100" color="#ffffe7" />
            </div>
        
            <!-- Title -->
            <h3 class="w-full text-2xl font-bold text-white leading-tight">{service.title}</h3>

            <!-- Description -->
            <p class="text-slate-300 text-sm mt-2 text-left">{service.description}</p>
          </div>
        
          <!-- Glow Effect -->
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-accent opacity-10 rounded-full blur-3xl"></div>
        
          <!-- Learn More -->
          <div class="mt-4">
            <a data-sveltekit-preload-data="hover" href="/services/{service.url}" class="flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 text-sm font-semibold">
              Learn more
              <ChevronRight class="w-4 h-4" />
            </a>
          </div>
        </div>    
      {/each}
    </div>
  </div>
</section>

<!-- Portofolio  Section-->
<section class="bg-deep-500 py-20 "id="portofolio">
  <div class="max-w-screen-xl mx-auto px-6">
    <!-- Title -->
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold text-accent mb-2">Our Portfolio</h2>
      <p class="text-slate-300 max-w-2xl mx-auto">
        Beberapa project terbaik yang pernah kami kerjakan untuk berbagai industri dan klien.
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      {#each categories as cat}
        <button
          class="px-4 py-2 rounded-full text-sm font-medium transition
                 {active === cat 
                   ? 'bg-accent text-primary-dark' 
                   : 'bg-deep-400 text-slate-300 hover:bg-deep-300'}"
          on:click={() => active = cat}
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- Grid Portfolios -->
    <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each filtered as portfolio (portfolio.title)}
        <div class="bg-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
          <img 
          loading="lazy"
            src={portfolio.image} 
            alt={portfolio.title} 
            class="w-full h-100 aspect-9/16 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="p-5 flex flex-col gap-2">
            <h3 class="text-primary-dark text-xl font-bold">{portfolio.title}</h3>
            <p class="text-deep-300 text-sm">{portfolio.category}</p>
            <a data-sveltekit-preload-code="hover" href={portfolio.link} target="_blank" class=" w-full mt-2 bg-deep-400 p-2 rounded-xl text-accent text-sm  font-semibold mx-auto block text-center hover:underline">
              View Project
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>


<section class="bg-accent py-20">
  <div class="max-w-screen-xl mx-auto px-6">
    <!-- Title -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
      <p class="text-primary-dark max-w-2xl mx-auto">Testimoni dari para klien kami yang telah mempercayakan project mereka kepada kami.</p>
    </div>

    <!-- Component Testimonial -->
    <TestimonialCarousel />

  </div>
</section>
