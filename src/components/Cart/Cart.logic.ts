// import jsPDF from "jspdf";
// import { CartItem } from "./Cart.static";

// export const createPDF = (cartItems: CartItem[], totalPrice: number): jsPDF => {
//   const bill = new jsPDF();
//   bill.addImage(
//     "/src/images/Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__2___1_-removebg-preview.png",
//     "PNG",
//     15,
//     10,
//     30,
//     30
//   );
//   bill.line(15, 50, 195, 50);

//   bill.setFontSize(14);
//   bill.text("Bill", 20, 60);
//   bill.setFontSize(12);

//   // Order info
//   bill.text(`Order made on: ${new Date().toLocaleString()}`, 20, 70);
//   cartItems.forEach((item, index) => {
//     const yPos = 80 + index * 10;
//     bill.text(`${index + 1}. ${item.product.name}`, 20, yPos);
//     bill.text(`   - Quantity: ${item.quantity}`, 80, yPos);
//     bill.text(`   - Price: $${item.product.price.toFixed(2)}`, 120, yPos);
//   });

//   const totalPriceYPos = 80 + cartItems.length * 10 + 10;
//   bill.text(`Total Price: $${totalPrice.toFixed(2)}`, 120, totalPriceYPos);

//   return bill;
// };

import jsPDF from "jspdf";
import "jspdf-autotable";
import { CartItem } from "./Cart.static";

export const createPDF = (cartItems: CartItem[], totalPrice: number): jsPDF => {
  const doc = new jsPDF();

  // Add image and line
  doc.addImage(
    "/src/images/Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__2___1_-removebg-preview.png",
    "PNG",
    20,
    20,
    30,
    30
  );
  doc.line(15, 50, 195, 50);

  // Add title
  doc.setFontSize(14);
  doc.text("Bill", 20, 60);
  doc.setFontSize(12);

  // Add order info
  doc.text(`Order made on: ${new Date().toLocaleString()}`, 20, 70);

  // Create an invisible table-like structure
  const tableData = cartItems.map((item, index) => [
    index + 1,
    item.product.name,
    item.quantity,
    `$${item.product.price.toFixed(2)}`,
  ]);

  const headers = ["#", "Product Name", "Quantity", "Price"];

  // Calculate the height of the table
  const tableHeight = 10 + cartItems.length * 10;

  // Set startY to position the table below the order info
  doc.autoTable({
    startY: 80,
    head: [headers],
    body: tableData,
    theme: "grid",
    styles: { fontSize: 10 },
  });

  // Set the position of the total price below the table
  const totalPriceYPos = 80 + tableHeight + 10;
  doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 120, totalPriceYPos);

  return doc;
};
