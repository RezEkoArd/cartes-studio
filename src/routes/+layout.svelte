<script>
  import Footer from "$lib/components/Footer.svelte";
import Navbar from "$lib/components/Navbar.svelte";
    let {children} = $props();
    import "../app.css";

</script>

<main class="relative">
    <Navbar/>
    {@render children()}
    <Footer/>
</main>
