function exploreAll() {
    window.location.href = "#products";
}

function showDetails(name, description, price) {
    document.getElementById('product-name').innerText = name;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-price').innerText = price;
    document.getElementById('details').style.display = 'block';
}
