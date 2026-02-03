import { useEffect, useState } from 'react';

// GitHub API endpoint for latest release
const GITHUB_API_URL = 'https://api.github.com/repos/Kochava-Studios/skwad/releases/latest';

// Cache the version globally so multiple components share it
let cachedVersion: string | null = null;
let fetchPromise: Promise<string | null> | null = null;

interface GitHubRelease {
  tag_name: string;
  name: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

async function fetchVersion(): Promise<string | null> {
  console.log('[useAppVersion] Fetching release from GitHub API');
  try {
    const res = await fetch(GITHUB_API_URL);
    console.log('[useAppVersion] Fetch response status:', res.status, res.statusText);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    const release: GitHubRelease = await res.json();
    console.log('[useAppVersion] Release:', release.tag_name, release.name);

    // tag_name is like "v1.0.42" - remove the "v" prefix
    const version = release.tag_name.replace(/^v/, '');
    return version;
  } catch (err) {
    console.error('[useAppVersion] Failed to fetch release:', err);
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
