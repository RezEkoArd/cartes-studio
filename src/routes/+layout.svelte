<script>
  import Navbar from "$lib/components/Navbar.svelte";
    let {children} = $props();
    import "../app.css";

</script>

<header>
    <Navbar/>
</header>
<main>
    {@render children()}
</main>