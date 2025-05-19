<script>
    import reels1 from '$lib/assets/portofolio/instagram/reels1.jpg';
    import reels2 from '$lib/assets/portofolio/instagram/reels2.jpg';
    import reels3 from '$lib/assets/portofolio/instagram/reels3.jpg';
    import reels4 from '$lib/assets/portofolio/instagram/reels4.jpg';
    import reels5 from '$lib/assets/portofolio/instagram/reels5.jpg';
    import reels6 from '$lib/assets/portofolio/instagram/reels6.jpg';
    import GBK from '$lib/assets/logo-partner/GBK-logo.jpeg';
    import Peavolk from '$lib/assets/logo-partner/peavolk.jpeg';
    import img1 from '$lib/assets/img1.jpg';
    import Feed1 from '$lib/assets/portofolio/instagram/Feed1.jpg';
    import Feed2 from '$lib/assets/portofolio/instagram/Feed2.jpg';

    const instagram = {
        packages: [],
        portfolio: [
        {
            partner: "GBK",
            logo: GBK,
            items: [ 
                {
                image: reels1,
                url: "https://www.instagram.com/reel/C9gU4vsS_N_/"
                },
                {
                image: reels2,
                url: "https://www.instagram.com/reel/C88-nItJSK0/"
                },
                {
                image: reels3,
                url: "https://www.instagram.com/reel/DCO_em6yCed/"
                }
            ]
        },
        {
            partner: "Peavolk",
            logo: Peavolk,
            items: [ 
                {
                image: reels4,
                url: "https://www.instagram.com/reel/C_cbPaMyhkr/"
                },
                {
                image: reels5,
                url: "https://www.instagram.com/reel/C_cbPaMyhkr/"
                },
                {
                image: reels6,
                url: "https://www.instagram.com/reel/C_cbPaMyhkr/"
                }
            ]
        },
        ],
        packages: [
  {
    name: "1 Month Package",
    price: "Rp5.000.000",
    remarks: [
      "16 Feeds Content (total)",
      "8 Content still image or carousel",
      "8 Video reels",
      "15 IG story (12x repost, 3 new)",
      "Creative content editorial plan development",
      "Related creative caption & hashtag",
      "1 Account Executive",
      "Brand Strategy Consultation",
      "Monthly Reporting"
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
    name: "3 Months Package",
    price: "Rp15.000.000",
    remarks: [
      "48 Feeds Content (total)",
      "24 Content still image or carousel",
      "24 Video reels",
      "48 IG story (45x repost, 3 new story)",
      "Creative content editorial plan development",
      "Related creative caption & hashtag",
      "1 Account Executive",
      "Brand Strategy Consultation",
      "Monthly Reporting"
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
    name: "6 Months Package",
    price: "Rp30.000.000",
    remarks: [
      "96 Feeds Content (total)",
      "48 Content still image or carousel",
      "48 Video reels",
      "48 IG story (45x repost, 3 new story)",
      "Creative content editorial plan development",
      "Related creative caption & hashtag",
      "1 Account Executive",
      "Brand Strategy Consultation",
      "Monthly Reporting"
    ],
    services: [
      "Conceptual video & content posting",
      "Creative strategy development",
      "Performance growth guarantee",
      "Service management",
      "Inventory"
    ]
  }
]

    }
</script>

<!-- Title -->
<section
  class="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/background/bg-1.jpg')"
>
  <div class="absolute inset-0 bg-black opacity-75"></div>

  <div class="relative z-10 text-center text-white px-6">
    <h1 class="text-4xl md:text-5xl leading-tight tracking-wide">
      <span class="block uppercase text-base text-accent mb-2">cartes ID</span>
      <span class="block font-bold text-white">SOSIAL MEDIA CONTENT</span>
      <span class="block font-light text-slate-300">INSTAGRAM</span>
    </h1>
  </div>
</section>

<!-- PortoFolio Reel GBK -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-deep-200">

    <!-- 3 Portfolio Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each instagram.portfolio.find(p => p.partner === "GBK").items as item}
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
            <span class="block">OUR PORTOFOLIO</span>
            <span class="block">INSTAGRAM REELS .</span>
        </h2>
      <!-- Company Logo -->
      <img src={instagram.portfolio.find(p => p.partner === "GBK").logo} alt="Company Logo" class="h-10 md:h-30 md:pr-5" />
    </div>
</section>

<!-- PortoFolio Reel Peavolk -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-accent">

    <!-- 3 Portfolio Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each instagram.portfolio.find(p => p.partner === "Peavolk").items as item}
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
    <div class="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-0 leading-tight">
            <span class="block">OUR PORTOFOLIO</span>
            <span class="block">INSTAGRAM REELS .</span>
        </h2>
      <!-- Company Logo -->
      <img src={instagram.portfolio.find(p => p.partner === "Peavolk").logo} alt="Company Logo" class="h-10 md:h-30 md:pr-5" />
    </div>
</section>

<!-- Porto Instagram Feed -->
<section class="flex flex-col lg:flex-row gap-10 items-start justify-between px-6 py-12 bg-deep-200">

    <div class="max-w-screen-xl flex flex-col-reverse gap-10 px-4 py-16 mx-auto lg:flex-row lg:items-center lg:justify-between">
        <div class="lg:mb-0 lg:max-w-xl sr__hide">
            <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white dark:text-white sm:text-5xl">
                <span class="block">OUR </span>
                <span class="block">PORTFOLIO</span>
                <span class="block">INSTAGRAM</span>
                <span class="block">FEED .</span>
            </h1>
            <p class="mt-6 text-2xl text-gray-300">
                https://www.instagram.com/miebar.id/
            </p>

        </div>

        <div class="lg:w-1/2 " >
            <img src={Feed1} alt="insta-feed" class="w-full max-h-[800px] rounded-lg shadow-lg sr__hide" >
        </div>
    </div>
  </section>

  <!-- Feed2  -->
  <section class="flex flex-col lg:flex-row gap-10 items-start justify-between px-6 py-12 bg-accent">

    <div class="max-w-screen-xl flex flex-col-reverse gap-10 px-4 py-16 mx-auto lg:flex-row lg:items-center lg:justify-between">
        <div class="lg:mb-0 lg:max-w-xl sr__hide">
            <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-5xl">
                <span class="block">OUR </span>
                <span class="block">PORTFOLIO</span>
                <span class="block">INSTAGRAM</span>
                <span class="block">FEED .</span>
            </h1>
            <p class="mt-6 text-2xl text-gray-800">
              https://www.instagram.com/zeintin.official/
            </p>

        </div>

        <div class="lg:w-1/2 " >
            <img src={Feed2} alt="insta-feed" class="w-full max-h-[800px] rounded-lg shadow-lg sr__hide" >
        </div>
    </div>
  </section>
  

<!-- Pricelist -->
<section class="max-w-full mx-auto px-6 py-16 space-y-12"
style="background-image: url('/background/bg-2.jpg'); object-fit: contain;">
  <h2 class="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-accent mb-12">
    Paket Layanan TikTok Kami
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {#each instagram.packages as pkg}
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