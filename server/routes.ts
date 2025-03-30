import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // API endpoint to submit a consultation request
  app.post("/api/consultation-request", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await storage.createConsultationRequest(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Consultation request submitted successfully",
        data: consultationRequest 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error",
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Get all consultation requests
  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const consultationRequests = await storage.getConsultationRequests();
      res.status(200).json({ 
        success: true,
        data: consultationRequests 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch consultation requests" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
