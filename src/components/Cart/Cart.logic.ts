import jsPDF from "jspdf";
import "jspdf-autotable";
import { IMeal } from "../../static/interfaces";
import { AutoTableOptions } from "./Cart.static";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => jsPDF;
  }
}

export const createPDF = (meals: IMeal[], totalPrice: number): jsPDF => {
  const doc = new jsPDF();

  doc.addImage("/src/assets/FoodFlyLogo.png", "PNG", 20, 20, 30, 30);
  doc.line(15, 50, 195, 50);

  doc.setFontSize(16);
  doc.text("Bill", 20, 60);
  doc.setFontSize(12);

  const tableData = meals.map((meal, index) => [
    index + 1,
    meal.name,
    meal.count,
    meal.price + " $",
    meal.packagePrice + " $",
    meal.additionalNote,
    `$${meal.price.toFixed(2)}`,
  ]);

  const headers = [
    "#",
    "Product Name",
    "Quantity",
    "Price",
    "Package price",
    "Additional Note",
  ];
  const tableHeight = 10 + meals.length * 10;

  doc.autoTable({
    startY: 80,
    head: [headers],
    body: tableData,
    theme: "grid",
    styles: {
      fontSize: 10,
      headStyles: { fillColor: "var(--color-gree)" },
    },
  });
  const totalPriceYPos = 80 + tableHeight + 10;
  doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 120, totalPriceYPos);

  doc.text("Thank you for using our service!", 20, totalPriceYPos + 20);
  const date = new Date().toLocaleString();
  doc.text(`Date: ${date}`, 20, doc.internal.pageSize.height - 10);

  return doc;
};
