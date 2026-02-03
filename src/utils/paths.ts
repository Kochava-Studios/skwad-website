// GitHub releases base URL - works for direct downloads (links), not for fetch (CORS)
const GITHUB_RELEASES_URL = 'https://github.com/Kochava-Studios/skwad/releases/latest/download';

// Helper to get correct asset paths
// For release assets (Skwad.zip, Skwad.dmg), use GitHub releases
// For other assets, use relative paths
export const getAssetPath = (path: string): string => {
  // Release assets come from GitHub (direct download links work, fetch doesn't due to CORS)
  const releaseAssets = ['Skwad.zip', 'Skwad.dmg'];
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  if (releaseAssets.includes(cleanPath)) {
    return `${GITHUB_RELEASES_URL}/${cleanPath}`;
  }

  // Other assets use relative paths
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
