import{j as e,r as i,L as u}from"./index-Dso-M8DT.js";function m({image:t,header:n,subheader:r,paragraph:l,call:s}){return e.jsx("div",{style:{backgroundImage:`url(${t})`},className:"md:bg-cover py-[20rem] bg-[length:50%_100%] bg-center lg:bg-center px-80 flex justify-end items-center saturate-100"})}function p(){const[t,n]=i.useState(0),r=[{image:"/hero.jpg",subheader:"New Collection",header:"Summer 2024 FOS Collection",paragraph:`Get ready for the summer with our newest collection of cameras.
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
          today.`,color:"rgb(14 165 233)"}],l=()=>{const a=t===0?r.length-1:t-1;n(a)};i.useEffect(()=>{console.log("carousel-rendered")});const s=()=>{const a=t===r.length-1?0:t+1;n(a)};i.useEffect(()=>{const o=setInterval(()=>{s()},5e3);return()=>{clearInterval(o)}},[s]);const{subheader:c,header:d,paragraph:h}=r[t];return e.jsxs("div",{className:"relative flex items-center justify-center px-20 mb-10 overflow-hidden",children:[e.jsx("button",{onClick:l,"aria-label":"Previous",className:"absolute flex justify-center items-center md:bottom-auto md:left-20 bottom-20 left-40 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer *:hover:stroke-white hover:bg-sky-500 ",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-left",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})}),e.jsxs("div",{className:"flex flex-col justify-between w-[40%] items-center gap-8 md:gap-2 px-20 py-8 bg-[hsl(0,0%,96%,0.9)] rounded-md text-gray-800 absolute  z-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx("p",{className:"text-gray-600 text-xl text-center  animate-fade-in",children:c}),e.jsx("p",{className:"font-bold md:text-2xl text-center hidden md:block text-sm animate-fade-in",children:d})]}),e.jsx("p",{className:"text-xs  animate-fade-in  mb-4 hidden md:block",children:h}),e.jsxs(u,{to:"/shop",style:{backgroundColor:r[t].color},className:"items-center transition-all ease-in duration-200 flex gap-2 hover:gap-4 hover:bg-sky-500 hover:transition-all hover:ease-out hover:duration-[500ms] px-5 py-3 text-white font-semibold rounded-md",children:[e.jsx("div",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})}),e.jsx("p",{className:"-translate-y-0.5",children:"Explore More"})]})]},t),e.jsx("div",{children:e.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${t*100}%)`},children:r.map((o,a)=>e.jsx("div",{className:"flex-shrink-0 w-full",children:e.jsx(m,{image:o.image})},a))})}),e.jsx("button",{onClick:s,"aria-label":"Next",className:"absolute  md:right-20 md:bottom-auto bottom-20 right-40 p-2 bg-white rounded-full shadow-md cursor-pointer *:hover:stroke-white hover:bg-sky-500",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-right ",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})}),e.jsx("div",{className:"absolute bottom-6 w-24 h-2 rounded-lg bg-white opacity-70 shadow-sky-600",children:e.jsx("div",{className:"h-full bg-sky-400 w-6  transition-all rounded-[3px] duration-500 ease-in-out",style:{transform:`translateX(${t*(300/(r.length-1))}%)`,transition:"transform 0.5s ease-in-out"}})})]})}export{p as default};
