// Google Analytics event tracking utility
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

// Pre-defined events for key user actions
export const analytics = {
  pdfUploaded: (fileName) => trackEvent('pdf_uploaded', { file_name: fileName }),
  pdfDownloaded: (fileName) => trackEvent('pdf_downloaded', { file_name: fileName }),
  toolUsed: (toolName) => trackEvent('tool_used', { tool_name: toolName }),
  featureUsed: (featureName) => trackEvent('feature_used', { feature_name: featureName }),
  pageOperation: (operation) => trackEvent('page_operation', { operation }),
};
