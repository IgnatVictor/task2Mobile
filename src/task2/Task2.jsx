import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Task2() {
  const [data, setData] = useState([]);
  var tableBody = [];
  var heading = [
    "documentDate",
    "documentType",
    "erpInvoiceId",
    "erpPaymentId",
    "invoiceNumber",
    "invoiceSerial",
    "invoiceValue",
  ];

  const getDate = (string) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  };

  if (data) {
    tableBody = [];
    data.map((payment) => {
      tableBody.push([
        getDate(payment.documentDate),
        payment.documentType,
        payment.erpInvoiceId,
        payment.erpPaymentId,
        payment.invoiceNumber,
        payment.invoiceSerial,
        payment.invoiceValue,
      ]);
    });
  }

  const loadData = async () => {
    const response = await axios.get(
      "https://test.aqmeter.com/v2/test/payment-history"
    );
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <table style={{ width: 1000 }}>
        <thead>
          <tr>
            {heading.map((head) => (
              <th key={uuidv4()}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((payment) => {
            return (
              <tr key={uuidv4()}>
                {payment.map((item) => {
                  return <td key={uuidv4()}> {item}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <button onClick={loadData}>Refresh</button>
    </div>
  );
}

export default Task2;
