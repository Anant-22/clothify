// Sample product data
const products = [
    { name: 'brown Jecket', price: '500rs' },
    { name: 'Blue Jeans', price: '500rs' },
    { name: 'black Tshirt', price: '500rs' },
    { name: 'Red Tshirt', price: '500rs' },
    { name: 'Sneakers', price: '500rs' },
    { name: 'Black Jecket', price: '500rs' },

];

function searchItems() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Only search if query is longer than 3 characters
    if (query.length > 3) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
                resultsContainer.appendChild(div);
            });
        } else {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.textContent = 'No items found.';
            resultsContainer.appendChild(noResultsDiv);
        }

        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
}
