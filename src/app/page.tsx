"use client";
import { Button, H1 } from "govuk-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <H1>Home</H1>
      <Button as={Link} href="/articles" buttonColour="#000033">
        Articles
      </Button>
    </>
  );
}
