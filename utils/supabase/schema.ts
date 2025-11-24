/**
 * Supabase Database Schema
 *
 * ⚠️ IMPORTANT: This file defines the database schema interfaces.
 * DO NOT MODIFY THIS FILE - it should match your Supabase database structure exactly.
 *
 * If you need to update the database schema:
 * 1. Make changes directly in Supabase
 * 2. Update this file manually to reflect the changes
 * 3. Never auto-generate or modify this file
 */

export interface Product {
  id: string;
  created_at?: string;
  name: string;
  color: string;
  price: number;
  rating: string;
  volume: string;
  folder: string; // Supabase storage folder (e.g., "product-1")
}
