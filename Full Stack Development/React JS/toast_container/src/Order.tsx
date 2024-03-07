import React, { useState } from "react";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import Barcode from "react-barcode";

interface OrderDetails {
  product: string;
  quantity: number;
  price: number;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const generatePdfDocument = (): JSX.Element => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Barcode
        value={`4n%$888415\+ut%`}
        width={1}
        height={50}
        displayValue={false}
      />
    </Page>
  </Document>
);

const OrderForm: React.FC = () => {
  const [ok, setOk] = useState<boolean>(false);
  const handleConfirmOrder = () => {
    setOk(true);
  };
  return (
    <>
      <button type="button" onClick={handleConfirmOrder}>
        Confirm Order
      </button>

      {ok && (
        <PDFDownloadLink
          document={generatePdfDocument()}
          fileName="invoice.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

export default OrderForm;
