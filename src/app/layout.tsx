"use client";
import StyledComponentsRegistry from "@/lib/registry";
import * as GovUK from "govuk-react";
import { Link, SearchBox } from "govuk-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GovUK.GlobalStyle />
        <body>
          <GovUK.TopNav
            bgColor="#000033"
            serviceTitle={
              <GovUK.TopNav.Anchor as={Link} to="/">
                CMS Renderer Frontend
              </GovUK.TopNav.Anchor>
            }
            search={
              <GovUK.SearchBox>
                {SearchBox.Input && <SearchBox.Input placeholder="Search GOV.UK" />}
                {SearchBox.Button && <SearchBox.Button />}
              </GovUK.SearchBox>
            }>
            <GovUK.TopNav.NavLink as={Link} to="/">
              Home
            </GovUK.TopNav.NavLink>
          </GovUK.TopNav>
          <GovUK.Page.WidthContainer>
            <GovUK.PhaseBanner level="alpha">
              This service is in Alpha stage. See <Link href="https://example.com">find out what that means</Link>
            </GovUK.PhaseBanner>
            <GovUK.Page.Main>{children}</GovUK.Page.Main>
          </GovUK.Page.WidthContainer>
          <div style={{ position: "fixed", bottom: 0, width: "100vw" }}>
            <GovUK.Footer />
          </div>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
