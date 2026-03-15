import "./MetricsTracker.scss";

export default function MetricsTracker() {
  return (
    <div className="container my-5 metrics-page">
      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-2">Page Analytics - Rameshkk</h3>
        {/* <p className="text-muted mb-0">
          Real-time analytics and usage insights for IGC 2026: GEOCHENNAI
        </p> */}
      </div>

      {/* Card Wrapper */}
      <div className="card shadow-sm border-0 metrics-card">
        <div className="card-body p-0">
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/972c099e-5885-4afe-b1c0-940d7b856db9/page/CDGsF"
            allowFullScreen
            className="metrics-iframe"
          />
        </div>
      </div>
    </div>
  );
}
