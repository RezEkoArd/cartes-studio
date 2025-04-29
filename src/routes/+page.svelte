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


    // Content Section Our Services
    let services = [
        {
          title: "Brand Strategy",
          description: "Membangun strategi brand kuat dan terarah agar bisnismu lebih dikenal dan dipercaya.",
          icon: "🧠",
        },
        {
          title: "UI/UX Design",
          description: "Desain antarmuka menarik dan user-friendly untuk meningkatkan engagement.responsive, dan SEO friendly dengan teknologi modern",
          icon: "🎨",
        },
        {
          title: "Content Marketing",
          description: "Strategi konten yang efektif untuk koneksi emosional dan konversi audiens.responsive, dan SEO friendly dengan teknologi modern",
          icon: "✍️",
        },
        {
          title: "Web Development",
          description: "Membangun website cepat, responsive, dan SEO friendly dengan teknologi modern.responsive, dan SEO friendly dengan teknologi modern",
          icon: "💻",
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
    { title: "E-commerce Website",   category: "Web",     image: img1 },
    { title: "Mobile Banking App",    category: "App",     image: img2 },
    { title: "Brand Identity",        category: "Brand",   image: img6 },
    { title: "Content Campaign",      category: "Content", image: img1 },
    { title: "Landing Page Promo",    category: "Web",     image: img2 },
    { title: "Social Media Kit",      category: "Content", image: img6 },
  ];

    // Build unique categories + "All"
    let categories = ["All", ...new Set(portfolios.map(p => p.category))];
  let active = "All";

  // Reactive filtered list
  $: filtered = active === "All"
    ? portfolios
    : portfolios.filter(p => p.category === active);


</script>


<!-- Hero Section -->
<section class="bg-linear-to-t from-primary-dark to-deep-400">
    <div class="max-w-screen-xl flex flex-col-reverse gap-10 px-4 py-16 mx-auto lg:flex-row lg:items-center lg:justify-between">
        <div class="lg:mb-0 lg:max-w-xl sr__hide" use:reveal={{preset: 'fade', duration: '2000'}}>
            <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white dark:text-white sm:text-5xl">
                Clarity in Every Creation
            </h1>
            <p class="mt-6 text-lg text-gray-300">
                Agency digital yang siap membawa brand kamu ke level berikutnya dengan strategi dan desain yang impactful.
            </p>
            <div class="mt-10 lg:mt-40 flex flex-wrap gap-1 text-white text-2xl">
                <span class="animate-bounce">
                    <ChevronsDown size="25"/>
                </span> 
                <p class="animate-bounce ">ScrollDown</p>
              </div>
        </div>

        <div class="lg:w-1/2 " >
            <img src={Hero} alt="hero-page" class="w-full rounded-lg shadow-lg sr__hide" use:reveal>
        </div>
    </div>
</section>


<!-- About me -->
<section id="aboutme" class="bg-accent">
    <div class="max-w-screen-xl flex flex-col gap-10 px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h1 class="font-extrabold text-4xl text-primary" use:reveal={{y: 100, duration: '2000'}}>Why us</h1>

        <div use:reveal={{y: 100, duration: '2000'}}>
            <EmblaAutoPlay class="bg-primary-light w-full h-20"/>
        </div>

        <p class="font-normal text-xl lg:text-center lg:text-3xl leading-6 lg:leading-10 lg:font-medium text-gray-900 antialiased" use:reveal={{preset: 'fade',x: 100, duration: '2000'}}>Cartes.id adalah partner strategis brand Anda dalam membangun, mengelola, dan mengembangkan
            aset digital mulai dari live streaming, produksi konten, manajemen media sosial, hingga foto produk untuk mendorong pertumbuhan jangka panjang di era digital</p>
    </div>

    <div class="w-3/4 mx-auto flex flex-col items-center justify-center content-center gap-3 pb-10 lg:flex-row lg:gap-10 " use:reveal={{preset: 'fade',y: 100, duration: '2000'}}>
        <AnimatedNumber
        target={50}
        label="Toko Aktif"
        content="Creators +"
        duration={1500}
        classes="mx-auto" />

        <AnimatedNumber
        target={1000}
        label="Toko Aktif"
        content="Creators +"
        duration={1500}
        classes="mx-auto" />

        <AnimatedNumber
        target={500}
        label="Toko Aktif"
        content="Creators +"
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
    

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each services as service (service.title)}
          <div 
          class="relative p-8 h-[26rem] bg-gradient-to-br from-deep-400 via-deep-500 to-deep-400 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          use:reveal={{ y: 50, duration: 700 }}
        >
          <div class="flex flex-col items-start gap-4"> 
            <!-- Icon --> 
            <div class="text-6xl text-accent drop-shadow-md">{service.icon}</div>
        
            <!-- Title -->
            <h3 class="text-2xl font-bold text-white leading-tight">{service.title}</h3>
        
            <!-- Description -->
            <p class="text-slate-300 text-sm mt-2 text-left">{service.description}</p>
          </div>
        
          <!-- Glow Effect -->
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-accent opacity-10 rounded-full blur-3xl"></div>
        
          <!-- Learn More -->
          <div class="mt-4">
            <button class="flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">
              Learn more
              <ChevronRight class="w-4 h-4" />
            </button>
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
            src={portfolio.image} 
            alt={portfolio.title} 
            class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="p-5 flex flex-col gap-2">
            <h3 class="text-primary-dark text-xl font-bold">{portfolio.title}</h3>
            <p class="text-deep-300 text-sm">{portfolio.category}</p>
            <button class="mt-2 bg-deep-400 p-2 rounded-xl text-accent text-sm font-semibold hover:underline">
              View Project
            </button>
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

    <!-- Testimonial Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each testimonials as testimonial}
        <div class="bg-primary-dark rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
          <p class="text-slate-100 mb-6 italic">"{testimonial.quote}"</p>
          <div class="flex items-center gap-4">
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              class="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 class="text-white font-bold">{testimonial.name}</h4>
              <p class="text-white text-sm font-">{testimonial.position}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
