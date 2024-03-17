"use client";
import { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { notFound } from "next/navigation";
import { Lender } from "../../../types/lenderType";

export const LenderPage = ({ params }: { params: { lenderId: string } }) => {
  const [lender, setLender] = useState<Lender | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/lenders/${params.lenderId}`);
        const data = await res.json();

        if (!data) {
          throw Error;
        }
        setLender(await data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return notFound();
  }

  return (
    <main>
      {lender && (
        <Container maxWidth="xl" sx={{ boxSizing: "border-box" }}>
          <Box gap={4} display="flex" flexDirection="column">
            <Typography variant="h1">{lender.name}</Typography>
            <Box maxWidth={450}>
              <img src={lender.img} alt="title" style={{ maxWidth: "100%" }} />
            </Box>
            <Typography variant="subtitle1">{lender.description}</Typography>
          </Box>
        </Container>
      )}
    </main>
  );
};

export default LenderPage;
