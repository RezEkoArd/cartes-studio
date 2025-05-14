
<script>
  import PortfolioSection from './PortfolioSection.svelte';
  import { tiktok } from './data.js'; // Atau bisa langsung objek tiktok-nya

  let portfolios = tiktok.portfolio;
</script>

{#each portfolios as section, i}
  <PortfolioSection
    partner={section.partner}
    items={section.items}
    logo={section.logo}
    index={i}
  />
{/each}
