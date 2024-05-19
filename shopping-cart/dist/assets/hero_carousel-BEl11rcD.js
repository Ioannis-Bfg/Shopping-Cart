import{j as e,r as l,L as u}from"./index-WGqGtP_C.js";function g({image:t,header:n,subheader:r,paragraph:i,call:s}){return e.jsx("section",{id:"hero",className:"w-full bg-center bg-cover bg-hero",children:e.jsx("div",{style:{backgroundImage:`url(${t})`},className:" xl:h-[60vh]  md:h-[500px] bg-cover bg-center px-80 flex justify-end items-center saturate-80"})})}function m(){const[t,n]=l.useState(0),r=[{image:"/hero.jpg",subheader:"New Collection",header:"Summer 2024 FOS Collection",paragraph:`Get ready for the summer with our newest collection of cameras.
          Lightweight, high-quality and perfect for capturing those special
          moments. Explore our new
          summer 2024 FOS collection
          today.`,color:"rgb(14 165 233)"},{image:"/hero_landscape.jpg",subheader:"Landscape Collection",header:"Landscape Photography",paragraph:`Enjoy the beauty of nature with our newest collection of cameras.
          Lightweight, high-quality and perfect for capturing the stunning
          landscapes and vistas. Capture the memories
          of your adventures with FOS
          today.`,color:"rgb(14 165 233)"},{image:"/hero_portrait.jpg",subheader:"Portrait Collection",header:"Perfect for portraits",paragraph:`Enjoy capturing those special moments with our portrait collection of cameras.
          Ideal for capturing portraits and 
          family photos. Capture every single smile and laugh with our cameras.`,color:"rgb(14 165 233)"},{image:"/hero_nature.jpg",subheader:"Nature Collection",header:"Capture the beauty of Nature",paragraph:`Capture the beauty of the world around you with our newest collection of cameras.
          Lightweight, high-quality and perfect for capturing the stunning
          landscapes, wildlife and vistas. Explore our new
          nature collection
          today.`,color:"rgb(14 165 233)"}],i=()=>{const o=t===0?r.length-1:t-1;n(o)},s=()=>{const o=t===r.length-1?0:t+1;n(o)};l.useEffect(()=>{const a=setInterval(()=>{s()},5e3);return()=>{clearInterval(a)}},[s]);const{subheader:h,header:c,paragraph:d}=r[t];return e.jsxs("div",{className:"relative flex items-center justify-center container-lg w-full",children:[e.jsx("button",{onClick:i,"aria-label":"Previous",className:"absolute flex justify-center items-center left-20 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer *:hover:stroke-white hover:bg-sky-500 ",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-left",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})}),e.jsxs("div",{className:"flex flex-col container-lg justify-between items-center gap-2 px-20 py-8 w-[30vw]  bg-[hsl(0,0%,96%,0.9)] rounded-md text-gray-800 absolute right-80 z-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx("p",{className:"text-gray-600 animate-fade-in",children:h}),e.jsx("p",{className:"font-bold text-3xl animate-fade-in",children:c})]}),e.jsx("p",{className:"text-sm  animate-fade-in  mb-4",children:d}),e.jsxs(u,{to:"/shop",style:{backgroundColor:r[t].color},className:"items-center transition-all ease-in duration-200 flex gap-2 hover:gap-4 hover:bg-sky-500 hover:transition-all hover:ease-out hover:duration-[500ms] px-5 py-3 text-white font-semibold rounded-md",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),e.jsx("p",{className:"-translate-y-0.5",children:"Explore More"})]})]},t),e.jsx("div",{className:"overflow-hidden w-full",children:e.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${t*100}%)`},children:r.map((a,o)=>e.jsx("div",{className:"flex-shrink-0 w-full",children:e.jsx(g,{image:a.image})},o))})}),e.jsx("button",{onClick:s,"aria-label":"Next",className:"absolute right-20 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer *:hover:stroke-white hover:bg-sky-500",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-right ",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})}),e.jsx("div",{className:"absolute bottom-6 w-24 h-2 rounded-lg bg-white opacity-70 shadow-sky-600",children:e.jsx("div",{className:"h-full bg-sky-400 w-6  transition-all rounded-[3px] duration-500 ease-in-out",style:{transform:`translateX(${t*(300/(r.length-1))}%)`,transition:"transform 0.5s ease-in-out"}})})]})}export{m as default};
