// ===== PAGE CONTROL =====
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.style.display="none");
  document.getElementById(id).style.display="block";
}

window.onload=()=>{
  showPage("loginPage");

  document.querySelectorAll('input[name="pay"]').forEach(r=>{
    r.addEventListener("change",()=>{
      document.getElementById("upiBox").style.display =
      (r.value==="UPI")?"block":"none";
    });
  });
};

function login(){
  showPage("homePage");
  displayProducts(products);
}

function logout(){
  showPage("loginPage");
}

// ===== PRODUCTS (60+) =====
const products = [

// VEG (10)
const veg = [
{name:"Paneer Butter Masala",price:180,img:"https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-480x270.jpg"},
{name:"Matar Paneer",price:160,img:"https://aartimadan.com/wp-content/uploads/2020/12/matar-paneer.jpg"},
{name:"Dal Tadka",price:120,img:"https://www.scrumptiously.com/wp-content/uploads/2024/10/MoongDalTadka.webp"},
{name:"Palak Paneer",price:170,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/palak-paneer-recipe.jpg"},
{name:"Mix Veg",price:140,img:"https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg"},
{name:"Chole Bhature",price:130,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSGdnYZQdHTIFMfQv6nDCcepVRqMzpFn0BA&s"},
{name:"Rajma Chawal",price:140,img:"https://stackeatfoods.com/wp-content/uploads/2024/01/34_Rajma_Chawal.png"},
{name:"Veg Biryani",price:150,img:"https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg"},
{name:"Kadhi Pakoda",price:130,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnDj2WJyUpL7xmLjub8MObeQyQde1c6U1tQ&s"},
{name:"Aloo Gobi",price:120,img:"https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg"}
];

// PARATHA (10)
const paratha = [
{name:"Aloo Paratha",price:80,img:"https://i0.wp.com/smithakalluraya.com/wp-content/uploads/2015/02/image.1024x1024-95.jpg?resize=720%2C972&ssl=1"},
{name:"Paneer Paratha",price:100,img:"https://kashkandhaba.com/wp-content/uploads/2025/07/IMG_20240724_195502-1024x576-1.jpg"},
{name:"Gobhi Paratha",price:90,img:"https://madhurasrecipe.com/wp-content/uploads/2020/10/Gobi-Paratha-Marathi-Recipe-585x488.jpg"},
{name:"Onion Paratha",price:85,img:"https://smithakalluraya.com/wp-content/uploads/2014/11/onion-paratha-pyaaz-ka-paratha-stuffed-onion-flatbread.1024x1024-1.jpg"},
{name:"Mix Paratha",price:110,img:"https://static.toiimg.com/thumb/53721534.cms?imgsize=315238&width=800&height=800"},
{name:"Cheese Paratha",price:120,img:"https://www.spicebangla.com/wp-content/uploads/2024/08/Cheese-Paratha.webp"},
{name:"Lachha Paratha",price:70,img:"https://5.imimg.com/data5/SELLER/Default/2023/11/363422062/DJ/UR/UC/17806333/laccha-paratha.jpg"},
{name:"Methi Paratha",price:90,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbivSdG3oZMiR1xWmcWv3L8p2XCEjee1A6w&s"},
{name:"Corn Paratha",price:100,img:"https://i.ytimg.com/vi/73AAA_OWSpQ/maxresdefault.jpg"},
{name:"Butter Paratha",price:60,img:"https://i.ytimg.com/vi/G8BSGywfRMs/sddefault.jpg"}
];

// NONVEG (10)
const nonveg = [
{name:"Chicken Biryani",price:220,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s"},
{name:"Butter Chicken",price:250,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgt7C8jecnmD-1Y4YIBiG1fCX4k5vrcvqWNA&s"},
{name:"Chicken Curry",price:200,img:"https://www.spicebangla.com/wp-content/uploads/2024/10/Chicken-Curry-Recipe0.webp"},
{name:"Fish Fry",price:230,img:"https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg"},
{name:"Egg Curry",price:140,img:"https://www.whiskaffair.com/wp-content/uploads/2019/03/Chettinad-Egg-Curry-2-3.jpg"},
{name:"Chicken Tikka",price:260,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg"},
{name:"Grilled Chicken",price:280,img:"https://spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg"},
{name:"Mutton Curry",price:300,img:"https://images.pexels.com/photos/5949896/pexels-photo-5949896.jpeg"},
{name:"Prawns Fry",price:320,img:"https://thespiceadventuress.com/wp-content/uploads/2023/03/kaju-jhinga-square.jpg"},
{name:"Chicken Wings",price:210,img:"https://www.allrecipes.com/thmb/IAGTZKbsS1YkRcbA-MlKASk7T5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241152-fried-chicken-wings-ddmfs-hero-1x2-1261-7201cc37727446adb6698c269585d5a0.jpg"}
];

// SNACKS (10)
const snacks = [
{name:"Pizza",price:180,img:"https://images.jdmagicbox.com/v2/comp/bangalore/a3/080pxx80.xx80.200218070744.k1a3/catalogue/pizzarea-venkateshwara-layout-bangalore-pizza-outlets-1tkezj9e5x.jpg"},
{name:"Burger",price:120,img:"https://www.yummyfoodrecipes.com/resources/picture/org/Veg-Burger-Recipe.jpg"},
{name:"French Fries",price:80,img:"https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg"},
{name:"Sandwich",price:70,img:"https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800"},
{name:"Pav Bhaji",price:100,img:"https://bhojmasale.com/cdn/shop/articles/delicious-pav-bhaji-recipe-a-step-by-step-guide-930907_1024x1024.webp?v=1739152900"},
{name:"Momos",price:90,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrS0ivnCYvD5MnoAP32sqZKPKu60jYKlLqA&s"},
{name:"Samosa",price:40,img:"https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800"},
{name:"Spring Roll",price:90,img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg"},
{name:"Nachos",price:110,img:"https://brandsitesplatform-res.cloudinary.com/image/fetch/w_auto:100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_auto,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fgosa9gpqd0a6exkliimkqw_gmi_hi_res_jpeg.jpeg%3F"},
{name:"Hot Dog",price:120,img:"https://www.licious.in/blog/wp-content/uploads/2016/07/Hot-Dogs.jpg"}
];

// DRINKS (10)
const drinks = [
{name:"Cold Coffee",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc0iMv4lAVizIzc4r24XTQ2IMXAzGMKAARA&s"},
{name:"Lassi",price:70,img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg"},
{name:"Mango Shake",price:90,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg"},
{name:"Chocolate Shake",price:100,img:"https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg"},
{name:"Soft Drink",price:50,img:"https://www.bbassets.com/media/uploads/p/l/251039_15-thums-up-soft-drink.jpg"},
{name:"Lemon Juice",price:40,img:"https://steviala.com/wp-content/uploads/2020/04/lime.jpg"},
{name:"Green Tea",price:60,img:"https://cdn.gaiagoodhealth.com/wp-content/uploads/2024/08/07141124/green-tea-scaled.jpg"},
{name:"Milkshake",price:90,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/250px-Strawberry_milk_shake_%28cropped%29.jpg"},
{name:"Orange Juice",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k3dmXxGhAIYtpo1VDWy8SJi30wQqJ5J9Ig&s"},
{name:"Iced Tea",price:70,img:"https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg"}
];
// DESSERTS (10)
const desserts = [
{name:"Gulab Jamun",price:60,img:"https://recipes.timesofindia.com/recipes/gulab-jamun/rs63799510.cms"},
{name:"Rasgulla",price:70,img:"https://www.awesomecuisine.com/wp-content/uploads/2014/10/rasgulla-500x375.jpg"},
{name:"Chocolate Cake",price:120,img:"https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800"},
{name:"Ice Cream",price:90,img:"https://www.cookwithmanali.com/wp-content/uploads/2021/05/Vanilla-Ice-Cream.jpg"},
{name:"Brownie",price:100,img:"https://i.pinimg.com/736x/22/d0/2c/22d02c3cbb0b2ba46f0089b6c94821fa.jpg"},
{name:"Cupcake",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPktfJtoCpcxH5PEispcMDg8I6mWXKDVtqw&s"},
{name:"Donut",price:70,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnVUn7rFHDh56GEoMCCXeQzKNbCg-PLKvUQ&s"},
{name:"Kheer",price:60,img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg"},
{name:"Jalebi",price:50,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBgKKHixKWqStkDZLSt6bDi_MAVj6MDAtkA&s"},
{name:"Falooda",price:110,img:"https://cdn.foodfanatic.com/uploads/2016/05/falooda-photo.jpg"}
];
// ===== DISPLAY =====
function displayProducts(list){
  let html="";
  list.forEach(p=>{
    html+=`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
    </div>`;
  });
  document.getElementById("products").innerHTML=html;
}

function filterCat(cat){
  displayProducts(products.filter(p=>p.category===cat));
}

// ===== CART =====
let cart=[];

function addToCart(p){
  cart.push(p);
  alert("Added to cart");
}

function viewCart(){
  showPage("cartPage");
  let html="";
  cart.forEach(p=>{
    html+=`<p>${p.name} - ₹${p.price}</p>`;
  });
  document.getElementById("cartItems").innerHTML=html;
}

// ===== ORDER =====
function placeOrder(){
  let name=prompt("Enter Name");
  let address=document.getElementById("address").value;
  let pay=document.querySelector('input[name="pay"]:checked');
  let upi=document.getElementById("upi").value;

  document.getElementById("upiError").style.display="none";

  if(!name || !address || !pay){
    alert("Fill all");
    return;
  }

  if(pay.value==="UPI"){
    if(!upi || !upi.includes("@")){
      document.getElementById("upiError").style.display="block";
      return;
    }
  }

  let subtotal=cart.reduce((s,i)=>s+i.price,0);
  let gst=subtotal*0.05;
  let total=subtotal+gst;

  let orders=JSON.parse(localStorage.getItem("orders"))||[];

  orders.push({
    name,address,payment:pay.value,
    items:cart,subtotal,gst,total,
    date:new Date().toLocaleString()
  });

  localStorage.setItem("orders",JSON.stringify(orders));

  let bill=`
  <div class="bill-box">
    <h2>🧾 Neha & Anjali Kitchen</h2>
    <p>Name: ${name}</p>
    <p>Address: ${address}</p>
    <p>Payment: ${pay.value}</p>
    <hr>

    <table>
      <tr><th>Item</th><th>Price</th></tr>
      ${cart.map(i=>`<tr><td>${i.name}</td><td>₹${i.price}</td></tr>`).join("")}
    </table>

    <hr>
    <p>Subtotal: ₹${subtotal}</p>
    <p>GST: ₹${gst.toFixed(2)}</p>
    <h3>Total: ₹${total.toFixed(2)}</h3>
  </div>
  `;

  document.getElementById("bill").innerHTML=bill;
  cart=[];
  showPage("billPage");
}

// ===== ADMIN =====
function openAdmin(){
  showPage("adminPage");

  let orders=JSON.parse(localStorage.getItem("orders"))||[];
  let html="";

  orders.forEach((o,i)=>{
    html+=`
    <div class="bill-box">
      <h3>Order #${i+1}</h3>
      <p>Name: ${o.name}</p>
      <p>Address: ${o.address}</p>
      <p>Payment: ${o.payment}</p>
      <p>Date: ${o.date}</p>

      <table>
        <tr><th>Item</th><th>Price</th></tr>
        ${o.items.map(it=>`<tr><td>${it.name}</td><td>₹${it.price}</td></tr>`).join("")}
      </table>

      <p>Subtotal: ₹${o.subtotal}</p>
      <p>GST: ₹${o.gst.toFixed(2)}</p>
      <h4>Total: ₹${o.total.toFixed(2)}</h4>
    </div>
    `;
  });

  document.getElementById("orders").innerHTML = html || "No Orders Yet";
}

function printBill(){
  window.print();
}
