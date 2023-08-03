const express = require("express");
const helmet = require("helmet");

const app = express();

// Use helmet middleware for security headers
app.use(helmet());

// Define your Content Security Policy

const cspDirectives = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "example.com"],
    styleSrc: ["'self'", "'unsafe-inline'", "example.com"],
    imgSrc: ["'self'", "example.com", "img.example.com", "data:"],
    fontSrc: ["'self'", "fonts.example.com"],
    connectSrc: ["'self'", "api.example.com"],
    mediaSrc: ["'self'", "media.example.com"],
    objectSrc: ["'none'"], // Disallow the use of <object> tags, only applies to old versions of CSP
    frameSrc: ["'none'"], // Disallow the use of <frame> and <iframe> tags
    frameAncestors: ["'none'"], // Disallow embedding your page in an <iframe> on other sites
    baseUri: ["'self'"],
    formAction: ["'self'", "form.example.com"],
    reportUri: "/csp-report-endpoint", // Specify the endpoint to receive violation reports
    upgradeInsecureRequests: true, // Automatically upgrade HTTP requests to HTTPS
    blockAllMixedContent: true, // Block HTTP resources on HTTPS pages
    pluginTypes: ["application/pdf"], // Allow only specific plugin types
    requireSriFor: ["script", "style"], // Require SRI (Subresource Integrity) for scripts and styles
    sandbox: ["allow-forms", "allow-scripts"], // Enable sandboxing with specific features

    // Additional Directives
    manifestSrc: ["'self'"], // Specify the allowed sources for web app manifest files
    prefetchSrc: ["'self'"], // Specify the allowed sources for prefetching and prerendering
    frameSrcElem: ["'self'"], // Allow frame nesting within a document using the <frame> and <iframe> tags
    navigateTo: ["'self'", "example.com"], // Allow URLs to which the user can navigate
    workerSrc: ["'self'", "workers.example.com"], // Specify the allowed sources for web workers
    childSrc: ["'self'", "child.example.com"], // Specify the allowed sources for nested browsing contexts created by the page

    // Add more directives as per your application's needs
  },
};

// Apply the Content Security Policy
app.use(helmet.contentSecurityPolicy(cspDirectives));

// ... Rest of your Express.js configurations and routes

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
