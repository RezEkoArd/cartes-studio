<script>
    let {children} = $props();
    import "../app.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<header>
    <Navbar/>
</header>
<main>
    {@render children()}
</main>