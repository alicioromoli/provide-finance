"use client";
import React, { useEffect, useState } from "react";
import { LenderCard } from "./_components/LenderCard";
import { Grid } from "@mui/material";
import { Lender } from "../../types/lenderType";
import { notFound } from "next/navigation";

interface LenderListProps {}

export const LenderList: React.FC<LenderListProps> = () => {
  const [lenders, setLenders] = useState<Lender[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/lenders");
        const data = await res.json();

        if (!data) {
          throw Error;
        }
        setLenders(await data);
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
    <div>
      <Grid container spacing={4}>
        {lenders?.map((lender, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`${lender.name}-${idx}`}>
            <LenderCard
              toUrl={`/lenders/${lender.id}`}
              desc={lender.description}
              imgUrl={lender.img}
              title={lender.name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LenderList;
