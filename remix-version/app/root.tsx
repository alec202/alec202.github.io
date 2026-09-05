import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import AppLayoutShell from "./components/appLayoutShell";
import { MantineProvider } from "@mantine/core";

import { colors } from "./colors";

const appTheme = createTheme({
  primaryColor: colors.primary.background
})

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <MantineProvider>
          <AppLayoutShell>
            <Outlet />
          </AppLayoutShell>
        </MantineProvider>
        <Scripts />
      </body>
    </html>
  );
}
