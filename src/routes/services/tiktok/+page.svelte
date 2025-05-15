<script>
    import { Music2, Instagram, Tv } from '@lucide/svelte';
    import UltraJaya  from '$lib/assets/logo-partner/Ultrajaya.svg';
    import tiktok1  from '$lib/assets/portofolio/tiktok/tiktok1.jpg';
    import tiktok2  from '$lib/assets/portofolio/tiktok/tiktok2.jpg';
    import tiktok3  from '$lib/assets/portofolio/tiktok/tiktok3.jpg';
    import tiktok4  from '$lib/assets/portofolio/tiktok/tiktok4.png';
    import tiktok5  from '$lib/assets/portofolio/tiktok/tiktok5.png';
    import tiktok6  from '$lib/assets/portofolio/tiktok/tiktok6.png';
    import tiktok7  from '$lib/assets/portofolio/tiktok/tiktok7.png';
    import tiktok8  from '$lib/assets/portofolio/tiktok/tiktok8.png';
    import tiktok9  from '$lib/assets/portofolio/tiktok/tiktok9.png';
    import dAlba from '$lib/assets/logo-partner/dAlba.jpeg';
    import GBK from '$lib/assets/logo-partner/GBK-logo.jpeg';

    const tiktok = {
    title: "Sosial Media Content (TikTok)",
    description: "Kami bantu bisnismu tampil beda di TikTok dengan konten yang viral, kreatif, dan relevan untuk audiens muda...",
    packages: [
  {
    name: "Bronze Package",
    price: "Rp3.000.000",
    remarks: [
      "10 video content / month",
      "Creative content plan (storyline)",
      "Timeline & scheduling",
      "Creative caption & hashtag",
      "1 account executive",
      "Brand strategy consultation & monthly reporting",
      "iPhone 15, Sony A7II, lighting set, mic",
      "Internal talents, Cartes Studio, properties",
      "Social media specialist",
      "Videographer",
      "Video editor"
    ],
    services: [
      "Conceptual video & content posting",
      "Creative strategy development",
      "Performance growth guarantee",
      "Service management",
      "Inventory"
    ]
  },
  {
    name: "Silver Package",
    price: "Rp7.500.000",
    remarks: [
      "22 video content / month",
      "Creative content plan (storyline)",
      "Timeline & scheduling",
      "Creative caption & hashtag",
      "1 account executive",
      "Brand strategy consultation & monthly reporting",
      "iPhone 15, Sony A7II, lighting set, mic",
      "Internal talents, Cartes Studio, properties",
      "Social media specialist",
      "Videographer",
      "Video editor"
    ],
    services: [
      "Conceptual video & content posting",
      "Creative strategy development",
      "Performance growth guarantee",
      "Service management",
      "Inventory"
    ]
  },
  {
    name: "Gold Package",
    price: "Rp10.000.000",
    remarks: [
      "30 video content / month",
      "Creative content plan (storyline)",
      "Timeline & scheduling",
      "Creative caption & hashtag",
      "1 account executive",
      "Brand strategy consultation & monthly reporting",
      "iPhone 15, Sony A7II, lighting set, mic",
      "Internal talents, Cartes Studio, standard properties",
      "Social media specialist",
      "Videographer",
      "Video editor"
    ],
    services: [
      "Conceptual video & content posting",
      "Creative strategy development",
      "Performance growth guarantee",
      "Service management",
      "Inventory"
    ]
  }
],
    portfolio: [
        {
            partner: "UltraJaya",
            logo: UltraJaya,
            items: [ 
                {
                image: tiktok1,
                url: "https://www.tiktok.com/@ultrasquad.id/video/7467916938686008584"
                },
                {
                image: tiktok2,
                url: "https://www.tiktok.com/@ultrasquad.id/video/7447489877433699602"
                },
                {
                image: tiktok3,
                url: "https://www.tiktok.com/@ultrasquad.id/video/7447049561597594898"
                }
             ]
        },
        {
            partner: "Dalba",
            logo: dAlba,
            items: [ 
                {
                image: tiktok4,
                url: "https://www.tiktok.com/@dalba_indonesia/video/7366628968579058950"
                },
                {
                image: tiktok5,
                url: "https://www.tiktok.com/@ultrasquad.id/video/7447489877433699602"
                },
                {
                image: tiktok6,
                url: "https://www.tiktok.com/@dalba_indonesia/video/7434701517438848311"
                }
             ]
        },
        {
            partner: "Gbk",
            logo: GBK,
            items: [ 
                {
                image: tiktok7,
                url: "https://www.tiktok.com/@love_gbk/video/7210049508904848666"
                },
                {
                image: tiktok8,
                url: "https://www.tiktok.com/@love_gbk/video/7183960937085390107"
                },
                {
                image: tiktok9,
                url: "https://www.tiktok.com/@love_gbk/video/7149073562899352859"
                }
            ]
        }
    ]
    };

  </script>


<!-- Title Content -->
<section
  class="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/background/bg-1.jpg')"
>
  <div class="absolute inset-0 bg-black opacity-75"></div>

  <div class="relative z-10 text-center text-white px-6">
    <h1 class="text-4xl md:text-5xl leading-tight tracking-wide">
      <span class="block uppercase text-base text-accent mb-2">cartes ID</span>
      <span class="block font-bold text-white">SOSIAL MEDIA CONTENT</span>
      <span class="block font-light text-slate-300">TIKTOK</span>
    </h1>
  </div>
</section>
  
<!-- PortoFolio Ultra Jaya -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-deep-200">

    <!-- 3 Portfolio Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each tiktok.portfolio.find(p => p.partner === "UltraJaya").items as item}
        <a 
          href={item.url}
          target="_blank"
          class="flex flex-col max-h-[500px] mx-auto space-y-2 hover:-translate-y-2 cursor-pointer transition-all duration-300"
        >
          <img 
            src={item.image}
            alt={`Portfolio ${item.image || ''}`}
            class="w-full h-full object-contain rounded-xl"
            loading="lazy"
          />
        </a>
      {/each}

      </div>
  
    <!-- Title and Logo Wrapper -->
    <div class="flex flex-col md:flex-row justify-between items-center border-t border-slate-300 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-accent mb-4 md:mb-0 leading-tight">
            <span class="block">OUR </span>
            <span class="block">PORTOFOLIO TIKTOK .</span>
        </h2>
      <!-- Company Logo -->
      <img src={tiktok.portfolio.find(p => p.partner === "UltraJaya").logo} alt="Company Logo" class="h-10 md:h-30 md:pr-5" />
    </div>
</section>

<!-- PortoFolio Dalba -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-accent">

    <!-- 3 Portfolio Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 shadow-2xl">
        {#each tiktok.portfolio.find(p => p.partner === "Dalba").items as item}
        <a 
          href={item.url}
          target="_blank"
          class="flex flex-col max-h-[500px] mx-auto space-y-2 hover:-translate-y-2 cursor-pointer transition-all duration-300"
        >
          <img 
            src={item.image}
            alt={`Portfolio ${item.image || ''}`}
            class="w-full h-full object-contain rounded-xl"
            loading="lazy"
          />
        </a>
      {/each}

      </div>
  
    <!-- Title and Logo Wrapper -->
    <div class="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-deep-400 mb-4 md:mb-0 leading-tight">
            <span class="block">OUR</span>
            <span class="block">PORTOFOLIO TIKTOK .</span>
        </h2>
      <!-- Company Logo -->
      <img src={tiktok.portfolio.find(p => p.partner === "Dalba").logo} alt="Company Logo" class="h-10 md:h-30 md:pr-5" />
    </div>
</section>


<!-- PortoFolio GBK -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-deep-400">

    <!-- 3 Portfolio Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 shadow-2xl">
        {#each tiktok.portfolio.find(p => p.partner === "Gbk").items as item}
        <a 
          href={item.url}
          target="_blank"
          class="flex flex-col max-h-[500px] mx-auto space-y-2 hover:-translate-y-2 cursor-pointer transition-all duration-300"
        >
          <img 
            src={item.image}
            alt={`Portfolio ${item.image || ''}`}
            class="w-full h-full object-contain rounded-xl"
            loading="lazy"
          />
        </a>
      {/each}

      </div>
  
    <!-- Title and Logo Wrapper -->
    <div class="flex flex-col md:flex-row justify-between items-center border-t border-slate-300 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-accent mb-4 md:mb-0 leading-tight">
            <span class="block">OUR </span>
            <span class="block">PORTOFOLIO TIKTOK .</span>
        </h2>
      <!-- Company Logo -->
      <img src={tiktok.portfolio.find(p => p.partner === "Gbk").logo} alt="Company Logo" class="h-10 md:h-30 md:pr-5" />
    </div>
</section>

<!-- Pricelist -->
<section class="max-w-full mx-auto px-6 py-16 space-y-12"
style="background-image: url('/background/bg-2.jpg'); object-fit: cover;">
  <h2 class="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-accent mb-12">
    Paket Layanan TikTok Kami
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {#each tiktok.packages as pkg}
  <div class="relative max-w-sm mx-auto rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] group">
    <!-- Glass Background Layer -->
    <div class="absolute inset-0 bg-red-900/20 backdrop-blur-3xl backdrop-saturate-150 border border-white/10"></div>
    
    <!-- Frosted Texture Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50"></div>
    
    <!-- Content Container -->
    <div class="relative z-10 p-8 space-y-6 text-slate-100">
      <!-- Title & Price -->
      <div class="text-center space-y-3">
        <h3 class="text-2xl font-bold text-accent drop-shadow-md">{pkg.name}</h3>
        <p class="text-3xl font-semibold text-primary/90">{pkg.price}</p>
      </div>

      <!-- Remarks (Features) -->
      <div class="space-y-4">
        <div>
          <h4 class="font-bold text-slate-200 mb-3 text-lg">Fitur Unggulan:</h4>
          <ul class="space-y-2 text-slate-300">
            {#each pkg.remarks as remark}
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {remark}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-bold text-slate-200 mb-3 text-lg">Layanan:</h4>
          <ul class="space-y-2 text-slate-300">
            {#each pkg.services as service}
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {service}
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Button -->
      <div class="pt-6">
        <button class="w-full py-3 bg-primary/90 hover:bg-primary border border-primary/50 rounded-xl font-semibold transition-all 
                   duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50">
          Chat Sekarang
        </button>
      </div>
    </div>
  </div>
{/each}
  </div>
</section>

