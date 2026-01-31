// Helper to get correct asset paths for subdirectory deployment
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
