// Nested Object
const products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Powerful laptop for all your computing needs.",
    img: "https://wallpapers.com/images/featured/laptop-pictures-2l1fs0hwq4c9obgx.jpg",
  },
  {
    name: "Headphones",
    price: 79.99,
    description: "High-quality headphones for immersive audio experience.",
    img: "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714521600&semt=sph",
  },
  {
    name: "Smartphone",
    price: 699.99,
    description: "Advanced smartphone with cutting-edge features.",
    img: "https://c4.wallpaperflare.com/wallpaper/953/97/219/samsung-galaxy-f-foldable-smartphone-hd-wallpaper-preview.jpg",
  },
  {
    name: "Tablet",
    price: 449.99,
    description: "Portable tablet for entertainment and productivity.",
    img: "https://www.androidauthority.com/wp-content/uploads/2021/03/Lenovo-Smart-Tab-M10-HD-with-smart-dock.jpg",
  },
  {
    name: "Smartwatch",
    price: 249.99,
    description: "Stay connected and track your fitness with this smartwatch.",
    img: "https://w0.peakpx.com/wallpaper/635/1011/HD-wallpaper-smart-watch-smartwatch-gadget.jpg",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    description: "Experience the thrill of gaming with this powerful console.",
    img: "https://c1.wallpaperflare.com/preview/915/913/172/xbox-remote-control-game-console.jpg",
  },
  {
    name: "Camera",
    price: 599.99,
    description: "Capture life's moments with stunning clarity and detail.",
    img: "https://t3.ftcdn.net/jpg/00/52/45/32/360_F_52453293_qGCRFdf6nEkCLjBuRIHQIQMOOaYmgNpN.jpg",
  },
  {
    name: "Wireless Speaker",
    price: 129.99,
    description: "Enjoy your favorite music wirelessly with this speaker.",
    img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "External Hard Drive",
    price: 129.99,
    description: "Expand your storage and backup your files with ease.",
    img: "https://www.shutterstock.com/image-illustration/external-hard-drive-isolated-on-260nw-250551106.jpg",
  },
  {
    name: "Wireless Mouse",
    price: 29.99,
    description: "Navigate your computer with precision and comfort.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/01/33/mouse-20223_640.jpg",
  },
  {
    name: "Printer",
    price: 199.99,
    description: "Print documents and photos with exceptional quality.",
    img: "https://5.imimg.com/data5/YF/VR/SD/GLADMIN-4601828/xp1500-hero-paper-690x460-500x500.jpg",
  },
  {
    name: "Desk Lamp",
    price: 49.99,
    description: "Illuminate your workspace with adjustable brightness.",
    img: "https://images.unsplash.com/photo-1523380262778-076eb862d38f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc2slMjBsYW1wfGVufDB8fDB8fHww",
  },
  {
    name: "Fitness Tracker",
    price: 79.99,
    description: "Monitor your health and track your workouts.",
    img: "https://t3.ftcdn.net/jpg/01/19/10/50/360_F_119105017_fvaI0vIf10n6WmvCTnlHtO5sBxZaEcxk.jpg",
  },
  {
    name: "Bluetooth Earbuds",
    price: 99.99,
    description: "Wireless earbuds for on-the-go audio enjoyment.",
    img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Portable Charger",
    price: 39.99,
    description: "Charge your devices anywhere, anytime.",
    img: "https://www.shutterstock.com/image-photo/charging-power-bank-portable-powerbank-260nw-2017914827.jpg",
  },
  {
    name: "USB Flash Drive",
    price: 19.99,
    description: "Store and transfer your files conveniently.",
    img: "https://media.istockphoto.com/id/882310638/photo/usb-memory-stick-with-skull-icon-3d-render.jpg?s=612x612&w=0&k=20&c=bglJlUcTNWtwBmmhfeU3i1q1Jl4C-uqZ05Yd8P_dCsM=",
  },
  {
    name: "Monitor",
    price: 299.99,
    description: "Upgrade your display for enhanced productivity.",
    img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?cs=srgb&dl=pexels-xxss-is-back-777001.jpg&fm=jpg",
  },
  {
    name: "Keyboard",
    price: 49.99,
    description: "Type comfortably with this reliable keyboard.",
    img: "https://w0.peakpx.com/wallpaper/998/22/HD-wallpaper-keyboard-gamer-colors-gamer-keyboard-keyboard-gamer-neon-thumbnail.jpg",
  },
  {
    name: "Computer Mousepad",
    price: 9.99,
    description: "Enhance your mouse precision with this smooth pad.",
    img: "https://c1.wallpaperflare.com/preview/261/791/724/computer-mouse-computer-input-device-mouse-pad.jpg",
  },
  {
    name: "Graphic Tablet",
    price: 199.99,
    description: "Express your creativity with this digital drawing tablet.",
    img: "https://c4.wallpaperflare.com/wallpaper/443/84/853/design-comfort-professional-tablet-for-drawing-wallpaper-preview.jpg",
  },
  {
    name: "Wireless Router",
    price: 79.99,
    description: "Fast and reliable internet connection for your home network.",
    img: "https://media.istockphoto.com/id/495732397/photo/black-wi-fi-router.jpg?s=612x612&w=0&k=20&c=KX1g5e0Fx48GZ_jIpSuUP1_jPkp6eAiJYFj2GYCzQoc=",
  },
];

// ---------------------------------------------------------------------

// Declaring Variable

const card = document.querySelector(".card-container");

// Event Listener Function
window.addEventListener("DOMContentLoaded", function () {
  const display = products.map((product, index) => {
    return ` 
    <div class="card-container">
    <div class="card">
    <img src="${product.img}" alt="">
    <div class="card-content">
    <h3> ${product.name}  </h3>
    <p> <b> Price:</b>  ${product.price} <br> <b> Description:</b> ${product.description} </p>
    <button class="btn">
    Visit
   </button>
    </div>
    </div>
    </div>
 `;
  });
  card.innerHTML = display;
});
