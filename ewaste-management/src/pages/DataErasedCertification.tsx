import { certifications } from "../data/certifications";

function DataErasedCertification() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Erasure Certificate</h2>
      <p>Proof of secure data destruction</p>

      {certifications.map((cert) => (
        <div
          key={cert.certId}
          style={{
            border: "2px solid #2e7d32",
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "#f1f8f4",
          }}
        >
          <h3>Certificate ID: {cert.certId}</h3>

          <p><strong>Waste ID:</strong> {cert.wasteId}</p>
          <p><strong>Item:</strong> {cert.item}</p>
          <p><strong>Owner:</strong> {cert.ownerName}</p>
          <p><strong>Data Erased By:</strong> {cert.erasedBy}</p>
          <p><strong>Erase Method:</strong> {cert.eraseMethod}</p>
          <p><strong>Erase Date:</strong> {cert.eraseDate}</p>

          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {cert.verificationStatus}
            </span>
          </p>

          <button
            style={{
              marginTop: "10px",
              padding: "8px 14px",
              cursor: "pointer",
            }}
          >
            Download Certificate
          </button>
        </div>
      ))}
    </div>
  );
}

export default DataErasedCertification;
