import jsPDF from "jspdf";
import "jspdf-autotable";
import { IMeal } from "../../static/interfaces";

declare module "jspdf" {
  interface jsPDF {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autoTable: (options: any) => jsPDF;
  }
}

export const createPDF = (meals: IMeal[], totalPrice: number): jsPDF => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = new jsPDF() as jsPDF & { autoTable: any };

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
  const tableData = meals.map((meal) => [
    meal.id,
    meal.name,
    meal.count,
    `$${meal.price.toFixed(2)}`,
  ]);

  const headers = ["#", "Product Name", "Quantity", "Price"];
  const tableHeight = 10 + meals.length * 10;

  doc.autoTable({
    startY: 80,
    head: [headers],
    body: tableData,
    theme: "grid",
    styles: { fontSize: 10 },
  });
  const totalPriceYPos = 80 + tableHeight + 10;
  doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 120, totalPriceYPos);

  return doc;
};
