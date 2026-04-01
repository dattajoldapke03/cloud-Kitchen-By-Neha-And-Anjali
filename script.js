// SHOW PAGE
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.style.display="none");
  document.getElementById(id).style.display="block";

  document.querySelector(".top-bar").style.display =
  (id==="loginPage")?"none":"flex";
}

window.onload=()=>showPage("loginPage");

// LOGIN
function login(){
  showPage("homePage");
  displayProducts(products);
}

function logout(){ showPage("loginPage"); }

// PRODUCTS
const products=[
{name:"Paneer Butter Masala",price:180,img:"https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-480x270.jpg",category:"veg"},
{name:"Dal Tadka",price:120,img:"https://www.scrumptiously.com/wp-content/uploads/2024/10/MoongDalTadka.webp",category:"veg"},
{name:"Aloo Paratha",price:80,img:"https://i0.wp.com/smithakalluraya.com/wp-content/uploads/2015/02/image.1024x1024-95.jpg",category:"paratha"},
{name:"Paneer Paratha",price:100,img:"https://kashkandhaba.com/wp-content/uploads/2025/07/IMG_20240724_195502-1024x576-1.jpg",category:"paratha"}
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

function filterCat(c){
  displayProducts(products.filter(p=>p.category===c));
}

function searchFood(){
  let v=document.getElementById("search").value.toLowerCase();
  displayProducts(products.filter(p=>p.name.toLowerCase().includes(v)));
}

// CART
let cart=[];

function addToCart(p){
  let f=cart.find(i=>i.name===p.name);
  if(f){ f.qty++; }
  else{ cart.push({...p,qty:1}); }
}

function viewCart(){
  showPage("cartPage");

  let html="",total=0;

  cart.forEach((p,i)=>{
    let sub=p.price*p.qty;
    total+=sub;

    html+=`
    <div class="cart-item">
      <div class="cart-left">
        <img src="${p.img}">
        <div>
          ${p.name}<br>
          <div class="qty-box">
            <button onclick="decrease(${i})">-</button>
            ${p.qty}
            <button onclick="increase(${i})">+</button>
          </div>
        </div>
      </div>

      <div>
        ₹${sub}<br>
        <button onclick="removeItem(${i})">Remove</button>
      </div>
    </div>`;
  });

  document.getElementById("cartItems").innerHTML=html;
  document.getElementById("total").innerHTML=
  `Total ₹${total}<br>
   <button onclick="goPayment()">Checkout</button>`;
}

function increase(i){ cart[i].qty++; viewCart(); }
function decrease(i){ cart[i].qty>1?cart[i].qty--:cart.splice(i,1); viewCart(); }
function removeItem(i){ cart.splice(i,1); viewCart(); }

function goPayment(){ showPage("paymentPage"); }

// PAYMENT
function placeOrder(){
  let address=document.getElementById("address").value;
  let method=document.querySelector('input[name="pay"]:checked').value;
  let upi=document.getElementById("upi").value;

  if(address===""){ alert("Enter address"); return; }
  if(method==="UPI" && !upi.includes("@")){
    alert("Invalid UPI ID"); return;
  }

  generateBill(address,method);
}

// BILL
function generateBill(address,method){
  let total=0,rows="";

  cart.forEach(p=>{
    let sub=p.price*p.qty;
    total+=sub;
    rows+=`<tr><td>${p.name} x ${p.qty}</td><td>₹${sub}</td></tr>`;
  });

  document.getElementById("bill").innerHTML=`
  <div class="bill-box">
    <h2>Order Bill</h2>
    <p>Address: ${address}</p>
    <p>Payment: ${method}</p>
    <table>${rows}</table>
    <h3>Total ₹${total}</h3>
    <button onclick="showPage('homePage')">Home</button>
  </div>`;

  showPage("billPage");
  cart=[];
}
