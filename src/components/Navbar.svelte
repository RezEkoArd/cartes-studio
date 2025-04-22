<script>
    import {Menu} from '@lucide/svelte';
    import {MoveUpRight} from '@lucide/svelte';
</script>

<div class="flex p-6 content-center justify-between bg-accent text-slate-100 relative">
    <div class="flex items-center gap-2">
        <img src="/logo.png" alt="logo" class="w-10">
        <h1 class="font-semibold text-xl text-primary-dark ">Cartes Studio</h1>
    </div>

    <div class="hidden lg:flex items-center space-x-20">
        <a href="/kontak" class="text-primary-dark font-semibold text-lg leading-relaxed">About Us</a>
        <a href="/kontak" class="text-primary-dark font-semibold text-lg leading-relaxed">Service</a>
        <a href="/kontak" class="text-primary-dark font-semibold text-lg leading-relaxed">Blog</a>
    </div>
   
    <button class="hidden rounded-full bg-primary-dark px-3 py-2 lg:flex gap-1 cursor-pointer hover:bg-deep-500 ">
            Let's Collaborate 
            <MoveUpRight size=10/>
    </button>

    <!-- Hamburger -->
    <label class="flex content-center justify-center my-auto lg:hidden">
        <input type="checkbox" class="peer hidden" />
        <Menu size="25" color="black"/>

        <nav class="absolute top-18  left-0 w-full p-4 bg-deep-100 shadow-lg rounded opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition duration-300">
            <ul class="space-y-5 gap-20">
              <li><a href="/" class=" text-slate-800 font-light text-lg hover:text-slate-100 ">About Us</a></li>
              <li><a href="/tentang" class=" text-slate-800 font-light text-lg hover:text-slate-100 ">Service</a></li>
              <li><a href="/blog" class=" text-slate-800 font-light text-lg hover:text-slate-100 ">Blog</a></li>
              <li><a href="/kontak" class="flex items-end content-center text-slate-100 font-light hover:text-slate-100 ">
                <div class="rounded-full bg-primary-dark px-3 py-2 flex gap-1">
                    Let's Collaborate 
                    <MoveUpRight size=10/>
                </div>
                </a></li>
            </ul>
        </nav>
    </label>

</div>  