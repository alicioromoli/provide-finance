import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/lenders">
        <Typography variant="h1">LENDERS</Typography>
      </Link>
    </main>
  );
}
