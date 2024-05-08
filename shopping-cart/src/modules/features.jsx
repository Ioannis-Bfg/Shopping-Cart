export default function Features() {
  return (
    <div className="flex gap-10 py-20 w-full justify-center px-[600px]">
      <div className="border border-sky-600 px-40 py-10  text-lg font-light rounded-md flex items-center justify-center gap-6 shadow-md container">
        <svg
          className="fill-sky-600 size-20 min-w-10 max-w-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>check-circle-outline</title>
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
        </svg>
        Certified Seller
      </div>
      <div className="border border-sky-600 px-40 py-10 rounded-md  text-lg font-light items-center justify-center flex gap-6 shadow-md container">
        <svg
          className="fill-sky-600 size-20 min-w-10 max-w-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>mailbox-open-outline</title>
          <path d="M14,11H20V15H18V13H14V11M18,4H8A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4M11,18H5V9A3,3 0 0,1 8,6A3,3 0 0,1 11,9V18M21,18H13V9C13,7.92 12.65,6.86 12,6H18A3,3 0 0,1 21,9V18Z" />
        </svg>
        Free Shipping
      </div>
      <div className="border border-sky-600 px-40 py-10 items-center text-lg font-light rounded-md  justify-center flex gap-6 shadow-md container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-sky-600 size-20 min-w-10 max-w-24"
          viewBox="0 0 24 24"
        >
          <title>keyboard-return</title>
          <path d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
        </svg>
        14-Day Returns
      </div>
    </div>
  );
}
