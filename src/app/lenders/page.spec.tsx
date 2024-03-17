import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LenderList } from "./page";

describe("LenderList", () => {
  it("should render an empty list when API endpoint returns an empty array", async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockReturnValueOnce(
      Promise.resolve({
        json: () => Promise.resolve([]),
      }) as Promise<Response>,
    );
    const { container } = render(<LenderList />);

    await waitFor(() => {
      expect(container.querySelectorAll(".lender-card")).toHaveLength(0);
    });

    mockFetch.mockRestore();
  });

  it("should render a list of lenders with their respective information", async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockReturnValueOnce(
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Lender 1",
              description: "Description 1",
              url: "http://example.com",
              img: "http://example.com/image1.jpg",
            },
            {
              id: 2,
              name: "Lender 2",
              description: "Description 2",
              url: "http://example.com",
              img: "http://example.com/image2.jpg",
            },
          ]),
      }) as Promise<Response>,
    );

    // Render the component
    const { container } = render(<LenderList />);

    await waitFor(() => {
      expect(container.querySelectorAll(".lender-card")).toHaveLength(2);
      expect(
        container.querySelector(".lender-card:nth-child(1) .lender-title"),
      ).toHaveTextContent("Lender 1");
      expect(
        container.querySelector(
          ".lender-card:nth-child(1) .lender-description",
        ),
      ).toHaveTextContent("Description 1");
    });

    mockFetch.mockRestore();
  });
});
