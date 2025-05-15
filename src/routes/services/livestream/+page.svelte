<script>
    import UltraJaya from "$lib/assets/logo-partner/Ultrajaya.svg";
    import Dalba from "$lib/assets/logo-partner/dAlba.jpeg";
    import BOJ from "$lib/assets/logo-partner/BOJ.png";
    import Tirtir from "$lib/assets/logo-partner/tirtir.svg";
  import PortofolioSection from "$lib/components/PortofolioSection.svelte";


    const livestream = {
        packages : [
        {
            name: "Studio Daily Package",
            price: "Rp1.000.000",
            remarks: [
            "1x session live commerce (4 hours/session)",
            "1 Host",
            "Studio equipment set",
            "Digital asset / property system",
            "OBS / real set",
            "1 Operation"
            ],
            services: [
            "TikTok / Other Platform Live Commerce",
            "Creative Strategy Development",
            "Service Management",
            "Inventory"
            ]
        },
        {
            name: "Studio Package Silver",
            price: "Rp20.000.000",
            remarks: [
            "180 Hours total (30 livestream sessions @ 6 hours/day)",
            "2 Hosts",
            "Creative content & time plan",
            "Digital asset creation",
            "1 Account Executive",
            "TikTok Shop account management",
            "Monthly reporting",
            "iPhone 15",
            "2 Lighting Godox",
            "1 Host/frame",
            "Cartes Studio Properties / Digital Asset",
            "Livestream Assistant",
            "SV LS Reminder: 7 contents/month"
            ],
            services: [
            "TikTok / Other Platform Live Commerce",
            "Creative Strategy Development",
            "Live Streaming Strategy & Production",
            "Service Management",
            "Inventory"
            ]
        },
        {
            name: "Studio Package Gold",
            price: "Rp45.000.000",
            remarks: [
            "180 Hours total (30 livestream sessions @ 6 hours/day)",
            "2 Hosts",
            "Creative content & time plan",
            "Digital asset creation",
            "1 Account Executive",
            "TikTok Shop account management",
            "Monthly reporting",
            "Mirrorless Sony A7VII Camera",
            "2 Lighting Godox",
            "1 Host/frame",
            "Cartes Studio Properties / Digital Asset",
            "OBS System / Real Set",
            "Livestream Producer & Livestream Assistant",
            "SV LS Reminder: 10 contents/month"
            ],
            services: [
            "TikTok / Other Platform Live Commerce",
            "Creative Strategy Development",
            "Live Streaming Strategy & Production",
            "Service Management",
            "Inventory"
            ]
        }
        ]
    }

</script>

<!-- Hero Page -->
<section
class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
style="background-image: url('/background/bg-2.jpg')"
>
<div class="absolute inset-0 bg-black opacity-20"></div>

<div class="relative z-10 text-center text-white px-6">
  <h1 class="text-4xl md:text-5xl leading-tight tracking-wide">
    <span class="block uppercase text-base text-accent mb-2">cartes</span>
    <span class="block font-bold text-white">LIVE STREAMING</span>
  </h1>
</div>
</section>

<!-- Portofolio -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-accent">
     <div class="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-0 leading-tight">
            <span class="block">OUR OBS DESIGN</span>
            <span class="block">PORTOFOLIO .</span>
        </h2>
    </div>
    <div class="">
        <PortofolioSection/>
    </div>
</section>

<!-- Why You Get  -->
<section class="max-w-full h-[80vh] bg-black flex flex-col justify-between items-center p-6 relative overflow-hidden">
    <!-- Header -->
    <div class="relative w-full flex justify-center items-center">
        <h1 class="font-bold text-4xl md:text-6xl text-white mt-10 text-center">
            What you get?
            <span class="block mt-2 text-lg font-normal">Professional Live Streaming Package</span>
        </h1>
        <p class="absolute top-0 left-5 md:left-10 font-serif text-xl text-white/60">Cartes</p>
    </div>

    <!-- Content Grid -->
    <div class="w-full max-w-6xl flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        
        <!-- Equipment List -->
        {#each [
            'STUDIO FULL SET',
            'SHORT VIDEO CONTENT REMINDER',
            'FULL PROFESSIONAL EQUIPMENT (GODOX LIGHTING, SONY A7II, IPHONE 15)',
            'OPERATION LIVE STREAM',
            'CREATIVE 3D BACKGROUND LIVE STREAM',
            'CREATIVE PLAN & REPORTING'
        ] as item}
            <div class="flex items-start gap-4 p-4 border-l-4 border-emerald-500 bg-black/30 hover:bg-black/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                    <h3 class="text-white font-semibold text-lg mb-1">{@html item.replace(' (', '<span class="text-gray-400 font-normal"> (')}</h3>
                    {#if item.includes('OPERATION')}
                        <p class="text-gray-400 text-sm mt-1">(inklusive technical crew)</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

</section>

<!-- Pricelist Component -->
<section class="min-h-screen bg py-20 px-4 sm:px-6 lg:px-8" style="background-image: url('/background/bg-4.jpg'); object-fit: contain;">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Studio Packages</h2>
        <p class="text-slate-300 text-lg">Pilih paket yang sesuai kebutuhan bisnis Anda</p>
      </div>
  
      <!-- Pricing Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each livestream.packages as pkg}
          <div class="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <!-- Ribbon for Popular -->
            {#if pkg.name.includes('Silver')}
              <div class="absolute -top-4 right-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
            {/if}
  
            <!-- Package Header -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p class="text-3xl font-bold text-primary">{pkg.price}</p>
            </div>
  
            <!-- Features List -->
            <div class="space-y-6">
              <div>
                <h4 class="text-white font-semibold mb-4 text-lg">Fitur Utama:</h4>
                <ul class="space-y-3">
                  {#each pkg.remarks as remark}
                    <li class="flex items-start text-slate-300">
                      <svg class="w-5 h-5 text-primary mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {remark}
                    </li>
                  {/each}
                </ul>
              </div>
  
              <div class="border-t border-white/10 pt-6">
                <h4 class="text-white font-semibold mb-4 text-lg">Layanan Termasuk:</h4>
                <ul class="space-y-3">
                  {#each pkg.services as service}
                    <li class="flex items-start text-slate-300">
                      <svg class="w-5 h-5 text-primary mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {service}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
  
            <!-- CTA Button -->
            <div class="mt-8">
              <button class="w-full py-3 bg-primary hover:bg-deep-500 text-white font-semibold rounded-lg transition-all 
                        duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/20">
                Pilih Paket
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
</section>

