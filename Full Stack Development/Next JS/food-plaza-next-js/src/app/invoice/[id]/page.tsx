import PrintInvoice from "@/Sections/Invoice/PrintInvoice";
import React from "react";

const InvoicePage = () => {
  return (
    <>
      <PrintInvoice />
      <div id="contentToPrint">Invoice</div>
    </>
  );
};

export default InvoicePage;
