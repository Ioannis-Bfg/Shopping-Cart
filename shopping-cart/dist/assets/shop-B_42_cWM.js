import{r as a,j as s}from"./index-BE6lQ7eA.js";import{S as x}from"./shop_item-C9YxRCum.js";function g({shopItems:t}){const[r,c]=a.useState(!1),[l,n]=a.useState(!1),o=e=>{c(e.target.checked)},i=e=>{n(e.target.checked)},d=t.filter(e=>r&&l?e.isSale&&e.isNew:r?e.isSale:l?e.isNew:!0);return s.jsxs("div",{className:"w-full bg-gray-100 flex flex-col py-20 px-20 min-h-[800px] ",children:[s.jsx("p",{className:"text-3xl font-bold self-center",tabIndex:0,children:"Shop"}),s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between",children:[s.jsxs("div",{className:"col-span-2 px-20 py-20 sm:border-r-2 flex flex-col items-center gap-4",children:[s.jsx("p",{className:"text-2xl font-semibold",tabIndex:0,children:"Filters"}),s.jsxs("div",{className:"flex flex-row sm:flex-col",children:[s.jsx("div",{className:"mt-4",children:s.jsxs("label",{htmlFor:"showSaleItems",className:"inline-flex items-center",children:[s.jsx("input",{type:"checkbox",id:"showSaleItems",className:"form-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",checked:r,onChange:o}),s.jsx("span",{className:"ml-2 text-sm text-gray-700 truncate",children:"Show sale items"})]})}),s.jsx("div",{className:"mt-4",children:s.jsxs("label",{htmlFor:"showNewItems",className:"inline-flex items-center",children:[s.jsx("input",{type:"checkbox",id:"showNewItems",className:"form-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",checked:l,onChange:i}),s.jsx("span",{className:"ml-2 text-sm text-gray-700 truncate",children:"Show new items"})]})})]})]}),s.jsx("div",{className:" px-10 py-20 ",style:{width:"100%",display:"flex",flexWrap:"wrap",gap:"2rem"},children:d.map((e,h)=>s.jsx(x,{id:e.id,imageUrl:e.imageUrl,isNew:e.isNew,isSale:e.isSale,model:e.model,price:e.price},e.id))})]})]})}export{g as default};
