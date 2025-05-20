<script>
  import { MapPinHouse, Phone } from '@lucide/svelte';
    import { fade } from 'svelte/transition';

  let sending = false;
  let sent = false;

</script>

<section class="bg-deep-400 min-h-screen py-20 px-6 flex items-center justify-center">
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 ">
      
      <!-- Kiri: Info Kontak -->
      <div class="flex flex-col justify-between space-y-8" in:fade={{ duration: 700 }}>
        <h2 class="text-sm font-extrabold text-white">Contact</h2>
        <p class="text-slate-50 text-6xl">
          Looking to scale your conversion through TikTok & Shopee affiliate creators?
        </p>
        <p class="text-slate-100 font-light">
          Let’s Connect & Grow Together!
        </p>
        
        <div class="text-primary-dark space-y-4">
          <div>
            <p class="text-slate-100 font-bold mt-2 mb-2 flex"> 
                <span>
                    <Phone color="#eee" class="mr-3"/>
                </span>
                Phone:
            </p>
            <p class="text-slate-100 font-light text-sm">+62 878 8987 5535</p>
          </div>
  
          <div>
            <p class="text-slate-100 font-bold mt-2 mb-2 flex"> 
                <span>
                    <MapPinHouse color="#eee" class="mr-3"/>
                </span>
                Address:
            </p>
            <p class="text-slate-100 font-light text-sm">

              Jl. Gelatik VI No.1 blok G7, Pd. Kacang Tim.,<br/>
              Pd. Aren, Kota Tangerang Selatan, Banten 15226
            </p>
          </div>
        </div>
      </div>
  
      <!-- Kanan: Form -->
      <div class="flex flex-col justify-center bg-accent rounded-3xl shadow-lg space-y-8 p-8" in:fade={{ duration: 700, delay: 200 }}>
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-primary-dark mb-2">Get in Touch</h3>
          <p class="text-slate-500">Fill out the form below, and we’ll get back to you soon.</p>
        </div>
  
        <!-- <form class="space-y-6" on:submit={handleSubmit}> -->
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-primary-dark">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                class="mt-1 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:outline-none hover:shadow-md transition"
              />
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-primary-dark">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                class="mt-1 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:outline-none hover:shadow-md transition"
              />
            </div>
          </div>
  
          <div>
            <label for="subject" class="block text-sm font-medium text-primary-dark">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              required
              class="mt-1 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:outline-none hover:shadow-md transition"
            />
          </div>
  
          <div>
            <label for="message" class="block text-sm font-medium text-primary-dark">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us more about your project..."
              required
              class="mt-1 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:outline-none hover:shadow-md transition"
            ></textarea>
          </div>
  
          <button
            type="submit"
            class="mt-4 w-full py-4 bg-primary-dark hover:bg-primary rounded-xl text-accent font-bold transition-all duration-300 flex items-center justify-center"
            disabled={sending}
          >
            {#if sending}
              Sending...
            {:else if sent}
              Sent!
            {:else}
              Send Message
            {/if}
          </button>
        </form>
      </div>
    </div>
  </section>