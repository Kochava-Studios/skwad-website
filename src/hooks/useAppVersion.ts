import { useEffect, useState } from 'react';

// GitHub API endpoint for releases (not /latest since we need to filter)
const GITHUB_API_URL = 'https://api.github.com/repos/Kochava-Studios/skwad/releases';

// Cache the version globally so multiple components share it
let cachedVersion: string | null = null;
let fetchPromise: Promise<string | null> | null = null;

// Format version: "1.0.0.11" -> "1.0.0 (11)"
function formatVersion(version: string): string {
  const parts = version.split('.');
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.${parts[2]} (${parts[3]})`;
  }
  return version;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

async function fetchVersion(): Promise<string | null> {
  console.log('[useAppVersion] Fetching releases from GitHub API');
  try {
    const res = await fetch(GITHUB_API_URL);
    console.log('[useAppVersion] Fetch response status:', res.status, res.statusText);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    const releases: GitHubRelease[] = await res.json();

    // Find the first release with a version tag (starts with "v")
    const release = releases.find(r => r.tag_name.startsWith('v'));
    if (!release) {
      console.warn('[useAppVersion] No version release found');
      return null;
    }
    console.log('[useAppVersion] Release:', release.tag_name, release.name);

    // tag_name is like "v1.0.0.11" - remove the "v" prefix and format
    const rawVersion = release.tag_name.replace(/^v/, '');
    return formatVersion(rawVersion);
  } catch (err) {
    console.error('[useAppVersion] Failed to fetch releases:', err);
    return null;
  }
}

export function useAppVersion(): string | null {
  const [version, setVersion] = useState<string | null>(cachedVersion);

  useEffect(() => {
    if (cachedVersion) {
      setVersion(cachedVersion);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = fetchVersion();
    }

    fetchPromise.then(v => {
      cachedVersion = v;
      setVersion(v);
    });
  }, []);

  return version;
}
