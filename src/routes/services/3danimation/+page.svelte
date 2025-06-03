<script>
    import UltraJaya from "$lib/assets/logo-partner/Ultrajaya.svg";
    import Dalba from "$lib/assets/logo-partner/dAlba.jpeg";
    import BOJ from "$lib/assets/logo-partner/BOJ.png";
    import Tirtir from "$lib/assets/logo-partner/tirtir.svg";
  import PortofolioSection from "$lib/components/PortofolioSection.svelte";
  import PortofolioAnimation3d from "$lib/components/PortofolioAnimation3d.svelte";


  const animation3D = {
    items: [
      {
        name: "Rendering Only",
        services: [
          {
            title: "Per Frame (Full HD)",
            description: "Tanpa modeling, hanya rendering",
            price: "Rp20.000 / frame"
          },
          {
            title: "Per Detik (30 FPS)",
            description: "Untuk scene yang sudah siap render",
            price: "Rp500.000 / detik"
          }
        ],
        note: "Harga diatas bersifat estimasi dan dapat berubah sesuai tingkat kompleksitas, deadline dan jumlah revisi"
      },
      {
        name: "3D Animation",
        services: [
          {
            title: "Logo Animation",
            description: "Animasi logo berdurasi 3–5 detik",
            price: "Rp500.000"
          },
          {
            title: "Product Animation",
            description: "Showcase produk berdurasi 15–30 detik",
            price: "Rp2.000.000"
          },
          {
            title: "Full Animation",
            description: "Durasi 60 detik dengan animasi kompleks",
            price: "Rp10.000.000"
          }
        ]
      },
      {
        name: "Rigging & Character Animation",
        services: [
          {
            title: "Basic Rigging",
            description: "Rigging karakter standar (tanpa ekspresi)",
            price: "Rp1.000.000"
          },
          {
            title: "Advanced Rigging",
            description: "Rigging lengkap dengan ekspresi wajah",
            price: "Rp4.000.000"
          },
          {
            title: "Character Animation",
            description: "Per 10 detik animasi karakter",
            price: "Rp500.000"
          }
        ]
      },
      {
        name: "3D Modeling",
        services: [
          {
            title: "Simple Object",
            description: "Botol, box, kemasan, furniture sederhana",
            price: "Rp300.000"
          },
          {
            title: "Complex Product",
            description: "Elektronik, mesin, kosmetik kompleks",
            price: "Rp1.500.000"
          },
          {
            title: "Character Modeling",
            description: "Tanpa rigging, siap untuk animasi",
            price: "Rp2.500.000"
          }
        ]
      },
      {
        name: "3D Visualisasi (Archviz)",
        services: [
          {
            title: "Still Image (Interior/Exterior)",
            description: "1 sudut pandang, kualitas menengah",
            price: "Rp1.500.000"
          },
          {
            title: "High-End Rendering",
            description: "Realistis untuk presentasi klien premium",
            price: "Rp5.000.000"
          },
          {
            title: "Walkthrough Animation",
            description: "Video 30–60 detik interior/exterior",
            price: "Rp7.000.000"
          }
        ]
      }
    ]
  };


</script>

<!-- Hero Page -->
<section
class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
style="background-image: url('/background/bg-6.jpg')"
>
<div class="absolute inset-0 bg-black opacity-40"></div>

<div class="relative z-10 text-center text-white px-6">
  <h1 class="text-4xl md:text-5xl leading-tight tracking-wide">
    <span class="block uppercase text-base text-accent mb-2">cartes</span>
    <span class="block font-bold text-white">3D ANIMATION</span>
  </h1>
</div>
</section>

<!-- Portofolio -->
<section class="max-w-full mx-auto px-6 py-12 space-y-10 bg-primary-dark">
     <div class="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-0 leading-tight">
            <span class="block">OUR PORTOFOLIO .</span>
            <span class="block">LATEST PROJECTS</span>
        </h2>
    </div>
    <div class="">
        <PortofolioAnimation3d/>
    </div>
</section>



<!-- Pricelist Component -->
<section class="py-16 bg-gradient-to-br from-accent to-deep-100">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-deep-500 mb-4">
          Daftar Harga Layanan Animasi 3D
        </h2>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p class="mt-6 text-lg text-deep-400 max-w-2xl mx-auto">
          Layanan profesional untuk semua kebutuhan animasi 3D Anda. Harga kompetitif dengan kualitas terbaik.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each animation3D.items as category}
          <div 
            class="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-xl transition-all duration-300 border border-primary-light transform hover:-translate-y-1 flex flex-col"
          >
            <div class="bg-gradient-to-r from-deep-500 to-deep-400 p-5">
              <h3 class="text-xl font-bold text-white">{category.name}</h3>
            </div>
            
            <div class="p-6 flex-grow">
              <ul class="space-y-5">
                {#each category.services as service}
                  <li class="pb-4 border-b border-deep-100 last:border-0 last:pb-0">
                    <div class="flex justify-between items-start gap-2">
                      <div>
                        <h4 class="font-semibold text-deep-500">{service.title}</h4>
                        <p class="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                      <span class="bg-primary-light text-deep-500 font-bold px-3 py-1 rounded-lg whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                  </li>
                {/each}
              </ul>

              <!-- Note Section -->
              {#if category.note}
                <div class="mt-6 pt-4 border-t border-deep-100">
                  <div class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-deep-400 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-xs text-deep-400 italic">{category.note}</p>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

<!-- Bottom CTA -->
<section class="py-16 text-center bg-primary-dark">
    <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Butuh Custom Package?
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Setiap project memiliki kebutuhan unik. Mari diskusikan kebutuhan spesifik Anda untuk mendapatkan penawaran terbaik.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
          Hubungi Kami
        </button>
        <button class="px-8 py-3 border-2 border-primary/30 text-primary dark:text-primary-light font-semibold rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300">
          Lihat Portfolio
        </button>
      </div>
    </div>
  </section>      
  
