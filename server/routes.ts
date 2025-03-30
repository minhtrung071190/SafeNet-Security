import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Add timestamp
      const entry = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };

      // Store the waitlist entry
      const result = await storage.addWaitlistEntry(entry);
      
      return res.status(201).json({
        success: true,
        message: "Successfully joined the waitlist!",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }

      if (error instanceof Error) {
        return res.status(500).json({
          success: false,
          message: error.message
        });
      }

      return res.status(500).json({
        success: false,
        message: "An unknown error occurred"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
