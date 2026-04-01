// PAGE CONTROL
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

// LOGIN
function login(){
  showPage("homePage");
  displayProducts(products);
}

function logout(){
  showPage("loginPage");
}

// PRODUCTS (sample + tum aur add kar sakte ho)
const products=[
{name:"Paneer Butter Masala",price:180,img:"https://via.placeholder.com/150?text=Paneer",category:"veg"},
{name:"Dal Tadka",price:120,img:"https://via.placeholder.com/150?text=Dal",category:"veg"},
{name:"Aloo Paratha",price:80,img:"https://via.placeholder.com/150?text=Paratha",category:"paratha"},
{name:"Chicken Biryani",price:220,img:"https://via.placeholder.com/150?text=Biryani",category:"nonveg"},
{name:"Pizza",price:180,img:"https://via.placeholder.com/150?text=Pizza",category:"snacks"},
{name:"Cold Coffee",price:80,img:"https://via.placeholder.com/150?text=Coffee",category:"drinks"},
{name:"Ice Cream",price:90,img:"https://via.placeholder.com/150?text=IceCream",category:"desserts"}
];

// DISPLAY
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

// FILTER
function filterCat(cat){
  displayProducts(products.filter(p=>p.category===cat));
}

// CART
let cart=JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(p){
  cart.push(p);
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}

function viewCart(){
  showPage("cartPage");

  let html="";
  cart.forEach(p=>{
    html+=`
    <div style="display:flex;align-items:center;margin:10px;">
      <img src="${p.img}" style="width:60px;height:60px;margin-right:10px;">
      <div>${p.name} - ₹${p.price}</div>
    </div>`;
  });

  document.getElementById("cartItems").innerHTML=html;
}

// ORDER + BILL
function placeOrder(){
  let name = prompt("Enter your name:");
  let address=document.getElementById("address").value;
  let pay=document.querySelector('input[name="pay"]:checked');

  if(!name){ alert("Enter name"); return; }
  if(!address){ alert("Enter address"); return; }
  if(!pay){ alert("Select payment"); return; }

  if(pay.value==="UPI"){
    let upi=document.getElementById("upi").value;
    if(!upi.includes("@")){
      alert("Invalid UPI ID");
      return;
    }
  }

  let total=0;
  let rows="";

  cart.forEach((p,i)=>{
    total+=p.price;
    rows+=`
      <tr>
        <td>${i+1}</td>
        <td>${p.name}</td>
        <td>1</td>
        <td>₹${p.price}</td>
      </tr>
    `;
  });

  let gst = Math.round(total * 0.05);
  let finalTotal = total + gst;

  let orderId = "NF" + Math.floor(Math.random()*100000);
  let date = new Date().toLocaleString();

  let billHTML=`
    <div style="max-width:600px;margin:auto;padding:20px;border:2px solid #000;border-radius:10px;">
      <h2 style="text-align:center;">Neha Food App</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Order ID:</b> ${orderId}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Address:</b> ${address}</p>

      <table border="1" width="100%">
        <tr><th>#</th><th>Item</th><th>Qty</th><th>Price</th></tr>
        ${rows}
      </table>

      <p>Subtotal: ₹${total}</p>
      <p>GST: ₹${gst}</p>
      <h3>Total: ₹${finalTotal}</h3>
    </div>
  `;

  document.getElementById("bill").innerHTML=billHTML;

  let orders=JSON.parse(localStorage.getItem("orders"))||[];
  orders.push({name,total:finalTotal});
  localStorage.setItem("orders",JSON.stringify(orders));

  cart=[];
  localStorage.removeItem("cart");

  showPage("billPage");
}

// PRINT
function printBill(){
  let content=document.getElementById("bill").innerHTML;
  let win=window.open("");
  win.document.write(content);
  win.print();
}

// ADMIN
function openAdmin(){
  showPage("adminPage");

  let orders=JSON.parse(localStorage.getItem("orders"))||[];
  let html="";
  orders.forEach((o,i)=>{
    html+=`<p>${i+1}. ${o.name} - ₹${o.total}</p>`;
  });

  document.getElementById("orders").innerHTML=html;
}
