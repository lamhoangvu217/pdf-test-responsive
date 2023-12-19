function PDFViewer() {
  return (
    <div>
      <div
        style={{
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          height: "650px",
        }}
        id="my"
      >
        <iframe
          src="https://trading.dsc.com.vn/notify/file?filepath=/files/ca/20231218/0001010063/OGQ2OTYxOTQtNThjMi00Yjg1LTlhNmQtMTM2MWJiMzI5ZmE2/EKYCCUSTSIGN.20231218.17787.PDF"
          style={{
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            border: "none",
          }}
          scrolling="yes"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default PDFViewer;
