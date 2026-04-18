let cart = [];
let allOrders = [];

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
  window.scrollTo(0,0);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";
  setTimeout(() => t.style.display = "none", 3000);
}

window.onload = () => showPage("loginPage");

function login() {
  showPage("homePage");
  displayProducts(products);
  showToast("Welcome Back To NAC Kitchen ! 👨‍🍳");
}

function logout() { cart = []; showPage("loginPage"); }

const products = [
/* VEG */
{name:"Paneer Butter Masala",price:180,img:"https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-480x270.jpg",category:"veg"},
{name:"Matar Paneer",price:160,img:"https://aartimadan.com/wp-content/uploads/2020/12/matar-paneer.jpg",category:"veg"},
{name:"Dal Tadka",price:120,img:"https://www.scrumptiously.com/wp-content/uploads/2024/10/MoongDalTadka.webp",category:"veg"},
{name:"Palak Paneer",price:170,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/palak-paneer-recipe.jpg",category:"veg"},
{name:"Mix Veg",price:140,img:"https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg",category:"veg"},
{name:"Chole Bhature",price:130,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSGdnYZQdHTIFMfQv6nDCcepVRqMzpFn0BA&s",category:"veg"},
{name:"Rajma Chawal",price:140,img:"https://stackeatfoods.com/wp-content/uploads/2024/01/34_Rajma_Chawal.png",category:"veg"},
{name:"Veg Biryani",price:150,img:"https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg",category:"veg"},
{name:"Kadhi Pakoda",price:130,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnDj2WJyUpL7xmLjub8MObeQyQde1c6U1tQ&s",category:"veg"},
{name:"Aloo Gobi",price:120,img:"https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg",category:"veg"},

/* PARATHA */
{name:"Aloo Paratha",price:80,img:"https://i0.wp.com/smithakalluraya.com/wp-content/uploads/2015/02/image.1024x1024-95.jpg?resize=720%2C972&ssl=1",category:"paratha"},
{name:"Paneer Paratha",price:100,img:"https://kashkandhaba.com/wp-content/uploads/2025/07/IMG_20240724_195502-1024x576-1.jpg",category:"paratha"},
{name:"Gobhi Paratha",price:90,img:"https://madhurasrecipe.com/wp-content/uploads/2020/10/Gobi-Paratha-Marathi-Recipe-585x488.jpg",category:"paratha"},
{name:"Onion Paratha",price:85,img:"https://smithakalluraya.com/wp-content/uploads/2014/11/onion-paratha-pyaaz-ka-paratha-stuffed-onion-flatbread.1024x1024-1.jpg",category:"paratha"},
{name:"Mix Paratha",price:110,img:"https://static.toiimg.com/thumb/53721534.cms?imgsize=315238&width=800&height=800",category:"paratha"},
{name:"Cheese Paratha",price:120,img:"https://www.spicebangla.com/wp-content/uploads/2024/08/Cheese-Paratha.webp",category:"paratha"},
{name:"Lachha Paratha",price:70,img:"https://5.imimg.com/data5/SELLER/Default/2023/11/363422062/DJ/UR/UC/17806333/laccha-paratha.jpg",category:"paratha"},
{name:"Methi Paratha",price:90,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbivSdG3oZMiR1xWmcWv3L8p2XCEjee1A6w&s",category:"paratha"},
{name:"Corn Paratha",price:100,img:"https://i.ytimg.com/vi/73AAA_OWSpQ/maxresdefault.jpg",category:"paratha"},
{name:"Butter Paratha",price:60,img:"https://i.ytimg.com/vi/G8BSGywfRMs/sddefault.jpg",category:"paratha"},

/* NONVEG */
{name:"Chicken Biryani",price:220,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s",category:"nonveg"},
{name:"Butter Chicken",price:250,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgt7C8jecnmD-1Y4YIBiG1fCX4k5vrcvqWNA&s",category:"nonveg"},
{name:"Chicken Curry",price:200,img:"https://www.spicebangla.com/wp-content/uploads/2024/10/Chicken-Curry-Recipe0.webp",category:"nonveg"},
{name:"Fish Fry",price:230,img:"https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg",category:"nonveg"},
{name:"Egg Curry",price:140,img:"https://www.whiskaffair.com/wp-content/uploads/2019/03/Chettinad-Egg-Curry-2-3.jpg",category:"nonveg"},
{name:"Chicken Tikka",price:260,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg",category:"nonveg"},
{name:"Grilled Chicken",price:280,img:"https://spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg",category:"nonveg"},
{name:"Mutton Curry",price:300,img:"https://images.pexels.com/photos/5949896/pexels-photo-5949896.jpeg",category:"nonveg"},
{name:"Prawns Fry",price:320,img:"https://thespiceadventuress.com/wp-content/uploads/2023/03/kaju-jhinga-square.jpg",category:"nonveg"},
{name:"Chicken Wings",price:210,img:"https://www.allrecipes.com/thmb/IAGTZKbsS1YkRcbA-MlKASk7T5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241152-fried-chicken-wings-ddmfs-hero-1x2-1261-7201cc37727446adb6698c269585d5a0.jpg",category:"nonveg"},

/* SNACKS */
{name:"Pizza",price:180,img:"https://images.jdmagicbox.com/v2/comp/bangalore/a3/080pxx80.xx80.200218070744.k1a3/catalogue/pizzarea-venkateshwara-layout-bangalore-pizza-outlets-1tkezj9e5x.jpg",category:"snacks"},
{name:"Burger",price:120,img:"https://www.yummyfoodrecipes.com/resources/picture/org/Veg-Burger-Recipe.jpg",category:"snacks"},
{name:"French Fries",price:80,img:"https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg",category:"snacks"},
{name:"Sandwich",price:70,img:"https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800",category:"snacks"},
{name:"Pav Bhaji",price:100,img:"https://bhojmasale.com/cdn/shop/articles/delicious-pav-bhaji-recipe-a-step-by-step-guide-930907_1024x1024.webp?v=1739152900",category:"snacks"},
{name:"Momos",price:90,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrS0ivnCYvD5MnoAP32sqZKPKu60jYKlLqA&s",category:"snacks"},
{name:"Samosa",price:40,img:"https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",category:"snacks"},
{name:"Spring Roll",price:90,img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg",category:"snacks"},
{name:"Nachos",price:110,img:"https://brandsitesplatform-res.cloudinary.com/image/fetch/w_auto:100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_auto,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fgosa9gpqd0a6exkliimkqw_gmi_hi_res_jpeg.jpeg%3F",category:"snacks"},
{name:"Hot Dog",price:120,img:"https://www.licious.in/blog/wp-content/uploads/2016/07/Hot-Dogs.jpg",category:"snacks"},

/* DRINKS */
{name:"Cold Coffee",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc0iMv4lAVizIzc4r24XTQ2IMXAzGMKAARA&s",category:"drinks"},
{name:"Lassi",price:70,img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg",category:"drinks"},
{name:"Mango Shake",price:90,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg",category:"drinks"},
{name:"Chocolate Shake",price:100,img:"https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg",category:"drinks"},
{name:"Soft Drink",price:50,img:"https://www.bbassets.com/media/uploads/p/l/251039_15-thums-up-soft-drink.jpg",category:"drinks"},
{name:"Lemon Juice",price:40,img:"https://steviala.com/wp-content/uploads/2020/04/lime.jpg",category:"drinks"},
{name:"Green Tea",price:60,img:"https://cdn.gaiagoodhealth.com/wp-content/uploads/2024/08/07141124/green-tea-scaled.jpg",category:"drinks"},
{name:"Milkshake",price:90,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/250px-Strawberry_milk_shake_%28cropped%29.jpg",category:"drinks"},
{name:"Orange Juice",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k3dmXxGhAIYtpo1VDWy8SJi30wQqJ5J9Ig&s",category:"drinks"},
{name:"Iced Tea",price:70,img:"https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg",category:"drinks"},

/* DESSERTS */
{name:"Gulab Jamun",price:60,img:"https://www.awesomecuisine.com/wp-content/uploads/2014/10/rasgulla-500x375.jpg",category:"desserts"},
{name:"Rasgulla",price:70,img:"https://www.awesomecuisine.com/wp-content/uploads/2014/10/rasgulla-500x375.jpg",category:"desserts"},
{name:"Chocolate Cake",price:120,img:"https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800",category:"desserts"},
{name:"Ice Cream",price:90,img:"https://www.cookwithmanali.com/wp-content/uploads/2021/05/Vanilla-Ice-Cream.jpg",category:"desserts"},
{name:"Brownie",price:100,img:"https://i.pinimg.com/736x/22/d0/2c/22d02c3cbb0b2ba46f0089b6c94821fa.jpg",category:"desserts"},
{name:"Cupcake",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPktfJtoCpcxH5PEispcMDg8I6mWXKDVtqw&s",category:"desserts"},
{name:"Donut",price:70,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnVUn7rFHDh56GEoMCCXeQzKNbCg-PLKvUQ&s",category:"desserts"},
{name:"Kheer",price:60,img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg",category:"desserts"},
{name:"Jalebi",price:50,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBgKKHixKWqStkDZLSt6bDi_MAVj6MDAtkA&s",category:"desserts"},
{name:"Falooda",price:110,img:"https://cdn.foodfanatic.com/uploads/2016/05/falooda-photo.jpg",category:"desserts"}
];

function displayProducts(data) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `<div class="card"><img src="${item.img}"><h4>${item.name}</h4><p>₹${item.price}</p><button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button></div>`;
  });
}

function filterCat(cat) { displayProducts(products.filter(p => p.category === cat)); }
function addToCart(n, p) { cart.push({name:n, price:p}); showToast("Added " + n); }

function viewCart() {
  showPage("cartPage");
  const div = document.getElementById("cartItems");
  div.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    div.innerHTML += `<div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee"><span>${item.name}</span><span>₹${item.price} <button onclick="removeFromCart(${index})" style="background:none; color:red; padding:0">❌</button></span></div>`;
  });
  div.innerHTML += `<h3 style="text-align:right">Total: ₹${total}</h3>`;
}

function removeFromCart(i) { cart.splice(i, 1); viewCart(); }

function toggleUPI() {
  const mode = document.querySelector('input[name="pay"]:checked').value;
  document.getElementById("upiBox").style.display = (mode === "UPI") ? "block" : "none";
}

function placeOrder() {
  const addr = document.getElementById("address").value;
  const payMode = document.querySelector('input[name="pay"]:checked')?.value;
  if (!cart.length || !addr || !payMode) return showToast("Missing details!");
  if (payMode === "UPI") {
    const upiId = document.getElementById("upi").value;
    const pin = document.getElementById("upiPin").value;
    if (!upiId.includes("@") || pin.length !== 6) return showToast("Invalid UPI Details!");
  }
  const order = { id: Math.floor(1000 + Math.random() * 9000), items: [...cart], total: cart.reduce((a, b) => a + b.price, 0), address: addr, date: new Date().toLocaleString() };
  allOrders.push(order);
  generateBill(order);
  cart = [];
  showPage("billPage");
}

function generateBill(o) {
  let list = o.items.map(i => `<tr><td>${i.name}</td><td style="text-align:right">₹${i.price}</td></tr>`).join("");
  document.getElementById("bill").innerHTML = `<div class="bill-box"><div class="bill-header"><h2>CLOUD KITCHEN</h2><p>Premium Food Delivery</p><p>-------------------------</p></div><p><strong>INVOICE NO:</strong> #${o.id}</p><p><strong>DATE:</strong> ${o.date}</p><p><strong>ADDRESS:</strong> ${o.address}</p><table class="bill-table"><thead><tr><th>ITEM</th><th style="text-align:right">PRICE</th></tr></thead><tbody>${list}</tbody><tfoot><tr class="total-row"><td>TOTAL</td><td style="text-align:right">₹${o.total}</td></tr></tfoot></table><div style="text-align:center; margin-top:20px;"><p>*** THANK YOU ***</p><p>Visit Again!</p></div></div>`;
}

function printBill() { window.print(); }

function openAdmin() {
  showPage("adminPage");
  const div = document.getElementById("orders");
  div.innerHTML = allOrders.length ? "" : "No orders found.";
  allOrders.forEach((o, i) => { div.innerHTML += `<div style="background:#fff; margin:10px; padding:15px; border-radius:10px; text-align:left"><b>Order #${o.id}</b> - ${o.date}<br>Total: ₹${o.total} | Address: ${o.address}</div>`; });
                    }
  
