/**
 * Supabase Storage Helper Functions
 *
 * Utility functions for accessing images and files from Supabase Storage
 */

const SUPABASE_URL = 'https://uhizkbechdhzugjcokym.supabase.co';
const STORAGE_BASE = `${SUPABASE_URL}/storage/v1/object/public`;

/**
 * Get the main product image URL from Supabase Storage
 *
 * @param folder - Product folder name from database (e.g., "product-1", "product-2")
 * @returns Full URL to main.jpg image
 *
 * @example
 * const product = await getProductById("123");
 * const imageUrl = getProductImageUrl(product.folder);
 */
export function getProductImageUrl(folder: string): string {
  return `${STORAGE_BASE}/${folder}/main.jpg`;
}

/**
 * Get any product asset URL from Supabase Storage
 *
 * @param folder - Product folder name
 * @param filename - File name (e.g., "main.jpg", "thumbnail.jpg", "detail.png")
 * @returns Full URL to the file
 *
 * @example
 * const thumbUrl = getProductAssetUrl("product-1", "thumbnail.jpg");
 */
export function getProductAssetUrl(folder: string, filename: string): string {
  return `${STORAGE_BASE}/${folder}/${filename}`;
}

/**
 * Get a generic storage URL
 *
 * @param bucket - Bucket name (e.g., "product-1", "assets")
 * @param path - File path within bucket
 * @returns Full URL to the file
 *
 * @example
 * const url = getStorageUrl("product-1", "images/main.jpg");
 */
export function getStorageUrl(bucket: string, path: string): string {
  return `${STORAGE_BASE}/${bucket}/${path}`;
}
