import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-brand-black text-white p-8">
          <h1 className="text-4xl text-red-500 mb-4 font-bold">App Crashed</h1>
          <p className="mb-8 text-xl text-brand-gray-light">Please send a screenshot of this error to the developer.</p>
          <div className="w-full max-w-4xl bg-black border border-red-500 rounded p-4 overflow-auto">
            <h2 className="text-red-400 font-bold mb-2">{this.state.error && this.state.error.toString()}</h2>
            <pre className="text-gray-400 text-sm whitespace-pre-wrap">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
