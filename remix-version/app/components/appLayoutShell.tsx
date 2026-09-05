import { AppShell } from "@mantine/core";
import Header from "./header";
import { ReactNode } from "react";

export default function AppLayoutShell({ children }: { children: ReactNode }) {

    return (
        <AppShell>
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )

}