// GitHub releases base URL
const GITHUB_RELEASES_URL = 'https://github.com/Kochava-Studios/skwad/releases/latest/download';

// Helper to get correct asset paths
// For release assets (appcast.xml, Skwad.zip, Skwad.dmg), use GitHub releases
// For other assets, use relative paths
export const getAssetPath = (path: string): string => {
  // Release assets come from GitHub
  const releaseAssets = ['appcast.xml', 'Skwad.zip', 'Skwad.dmg'];
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  if (releaseAssets.includes(cleanPath)) {
    return `${GITHUB_RELEASES_URL}/${cleanPath}`;
  }

  // Other assets use relative paths
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
