import Template from "./Template";
import "bootstrap/dist/css/bootstrap.min.css";

import "./global.css";
export const metadata = {
  title: "RAB - Heavy Equipment Rental",
  description: "Your Trusted Partner for Project Elevation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" initial-scale="1" />
      </head>
      <body>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
