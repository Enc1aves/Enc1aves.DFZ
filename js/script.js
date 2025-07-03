// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Example: NFT Gallery (placeholder dynamic rendering)
    const nftSection = document.getElementById("nfts");
    if (nftSection) {
      const exampleNFTs = [
        {
          chain: "Ethereum",
          image: "images/sample-nft.png",
          name: "DeadFellaz",
          number: "#1234",
          url: "nft.html"
        },
        {
          chain: "Ethereum",
          image: "images/sample-nft.png",
          name: "DeadFellaz",
          number: "#4321",
          url: "nft.html"
        }
      ];
  
      const chains = [...new Set(exampleNFTs.map(nft => nft.chain))];
  
      chains.forEach(chain => {
        const chainHeader = document.createElement("h3");
        chainHeader.textContent = chain;
        nftSection.appendChild(chainHeader);
  
        const row = document.createElement("div");
        row.className = "nft-container";
        exampleNFTs
          .filter(nft => nft.chain === chain)
          .forEach(nft => {
            const link = document.createElement("a");
            link.href = nft.url;
            link.innerHTML = `
              <img src="${nft.image}" alt="${nft.name} ${nft.number}" />
            `;
            row.appendChild(link);
          });
        nftSection.appendChild(row);
      });
    }
  
    // Blog Filter (blog.html)
    const categorySelect = document.getElementById("category-select");
    const blogContainer = document.getElementById("blog-posts");
  
    if (categorySelect && blogContainer) {
      const posts = [
        { title: "Launching My Web3 Persona", category: "web3", link: "post-template.html" },
        { title: "NFT Interoperability Deep Dive", category: "tech", link: "post-template.html" },
        { title: "Bear Market Lessons", category: "web3", link: "post-template.html" }
      ];
  
      const renderPosts = (filter = "all") => {
        blogContainer.innerHTML = "";
        posts
          .filter(post => filter === "all" || post.category === filter)
          .forEach(post => {
            const card = document.createElement("div");
            card.className = "blog-post";
            card.innerHTML = `<h2><a href="${post.link}">${post.title}</a></h2>`;
            blogContainer.appendChild(card);
          });
      };
  
      categorySelect.addEventListener("change", e => {
        renderPosts(e.target.value);
      });
  
      renderPosts();
    }
  });
  