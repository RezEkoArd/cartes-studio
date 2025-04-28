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
<section class="bg-accent">
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
<section class="bg-primary-dark">
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

<section class="bg-accent py-16">
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