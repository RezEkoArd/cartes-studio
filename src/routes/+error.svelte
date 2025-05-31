<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { page } from '$app/stores';
    import Error from "$lib/assets/error/404.svg";
    
    // Status error
    export let status;
    // export let error;
  
    // Pesan custom berdasarkan status
    const errorMessages = {
      404: {
        title: "Halaman Tidak Ditemukan",
        message: "Sepertinya Anda tersesat di dunia digital. Halaman yang Anda cari tidak ada di sini.",
        cta: "Kembali ke Beranda"
      },
      500: {
        title: "Kesalahan Server",
        message: "Terjadi masalah teknis di pihak kami. Tim kreatif kami sedang memperbaikinya.",
        cta: "Coba Lagi"
      },
      default: {
        title: "Terjadi Kesalahan",
        message: "Ada yang tidak beres di sini. Kami sedang berusaha memperbaikinya.",
        cta: "Kembali ke Beranda"
      }
    };
  
    // Dapatkan pesan yang sesuai
    const errorData = errorMessages[status] || errorMessages.default;
  </script>
  
  <svelte:head>
    <title>Error {status} - Cartes Studio</title>
    <meta name="description" content={errorData.message} />
  </svelte:head>
  
  <main class="min-h-screen bg-gradient-to-br from-deep-500 to-primary-dark text-white">
    <Navbar />
    
    <div class="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center min-h-screen">

        <!-- Error Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {errorData.title}
          </h1>
          
          <!-- Error Message -->
          <p class="text-lg md:text-xl max-w-2xl mb-10 text-gray-300 leading-relaxed">
            {errorData.message}
          </p>
        
         <!-- Visual Error Card -->
         <div class="max-w-3xl w-full">
            <div class="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl overflow-hidden relative border border-accent/20 backdrop-blur-sm">
              
              <!-- Main Error SVG Display -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="relative">
                  <!-- Glow effect behind SVG -->
                  <div class="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-150"></div>
                  
                  <!-- Main Error SVG -->
                  <div class="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                    <img 
                      src="{Error}" 
                      alt="Error illustration" 
                      class="w-full h-full object-contain drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              <!-- Subtle Brand Text Overlay (Optional) -->
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div class="text-sm md:text-base opacity-30 text-accent font-medium text-center">
                  Cartes Studio
                </div>
              </div>
              
              <!-- Decorative Background Elements -->
              <div class="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12"></div>
              <div class="absolute bottom-0 left-0 w-20 h-20 bg-accent/5 rounded-full translate-y-10 -translate-x-10"></div>
              <div class="absolute top-1/2 left-0 w-2 h-16 bg-accent/10 rounded-full -translate-x-1"></div>
              <div class="absolute top-1/2 right-0 w-2 h-12 bg-accent/10 rounded-full translate-x-1 transform -translate-y-6"></div>
            </div>
        </div>

        <!-- Status Code with Glow Effect -->
        <div class="mb-8 relative">
          <div class="absolute -inset-4 bg-accent rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div class="relative text-8xl md:text-9xl font-bold text-accent drop-shadow-2xl">
            {status}
          </div>
        </div>
        
        
        <!-- Call to Action Button -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="/" 
            class="px-8 py-4 bg-accent text-primary-dark font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            {errorData.cta}
          </a>
        </div>
        
       
      </div>
    
    <Footer />
  </main>