import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("ErrorBoundary caught an unhandled component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ padding: "20px", textAlign: "center", color: "#a0a0a0" }}>
          <p className="text-body">Preview temporarily unavailable</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
