"use server";

import type { Review } from "@/lib/types";
import { cache } from "react";

export const getGoogleReviews = cache(
  async (): Promise<{ success: boolean; data: { testimonials: Review[] } }> => {
    try {
      const placeId = process.env.PLACE_ID;
      const apiKey = process.env.GOOGLE_API_KEY;

      if (!placeId || !apiKey) {
        throw new Error("Missing API key or Place ID");
      }

      const res = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,reviews,userRatingCount`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "displayName,rating,reviews,userRatingCount",
          },
          next: { revalidate: 60 },
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Google API Error:", text);
        throw new Error("Failed to fetch Google reviews");
      }

      const data = await res.json();
      return {
        success: true,
        data: { testimonials: (data.reviews as Review[]) || [] },
      };
    } catch (err) {
      console.error("Error fetching reviews:", err);
      return { success: false, data: { testimonials: [] } };
    }
  }
);
