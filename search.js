const searchInput = document.querySelector('#searchInput');
const searchResults = document.querySelector('#searchResults');

const products = [
  { name: 'ORANGE SHORT', url: 'product short skirt w.html', image: 'image/short skirt 1.jpg' },
  { name: 'GRAY SHIRT', url: 'product shirt w.html', image: 'image/Shirt w 1.jpg' },
  { name: 'BROWN BELT', url: 'product Belt .html', image: 'image/thắt lưng 1.jpg' },
  { name: 'SET 1', url: 'product set w .html', image: 'image/set w 8.jpeg' },
  { name: 'ORANGE T-SHIRT', url: 'product T-shirt m.html', image: 'image/Áo phông cam nhạt nam.jpg' },
  { name: 'LIGHT YELLOW TROUSER', url: 'product trouser m.html', image: 'image/Trou 1.jpg' },
  { name: 'GRAY SHORT', url: 'product short skirt w.html', image: 'image/Short skirt 2.jpg' },
  { name: 'PINK SHORT', url: 'product short m.html', image: 'image/Short skirt 4.jpg' },
  { name: 'DARK GREEN SHORT', url: 'product short m.html', image: 'image/Short skirt 5.jpg' },
  { name: 'DARK BLUE SHORT', url: 'product short m.html', image: 'image/Short skirt 6.jpg' },
  { name: 'RED SHORT', url: 'product short m.html', image: 'image/Short skirt 7.jpg' },
];

searchInput.addEventListener('keyup', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  const filteredProducts = products.filter(function(product) {
    return product.name.toLowerCase().includes(searchTerm);
  });

  // Hiển thị kết quả tìm kiếm
  searchResults.innerHTML = '';
  for (let i = 0; i < filteredProducts.length; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = filteredProducts[i].image;
    const a = document.createElement('a');
    a.textContent = filteredProducts[i].name;
    a.href = filteredProducts[i].url;
    li.appendChild(img);
    li.appendChild(a);
    searchResults.appendChild(li);
  }
// Add new results
if (searchTerm) {
filteredProducts.forEach(function(product) {
const li = document.createElement('li');
const link = document.createElement('a');
link.href = product.url;
const img = document.createElement('img');
img.src = product.image;
img.alt = product.name;
const span = document.createElement('span');
span.textContent = product.name;
link.appendChild(img);
link.appendChild(span);
li.appendChild(link);
searchResults.appendChild(li);
});

// Show search results
searchResults.style.display = 'block';
} else {
// Hide search results
searchResults.style.display = 'none';
}
});