import { useEffect, useState } from 'react';
import { getAssetPath } from '../utils/paths';

// Cache the version globally so multiple components share it
let cachedVersion: string | null = null;
let fetchPromise: Promise<string | null> | null = null;

async function fetchVersion(): Promise<string | null> {
  const appcastUrl = getAssetPath('appcast.xml');
  console.log('[useAppVersion] Fetching appcast from:', appcastUrl);
  try {
    const res = await fetch(appcastUrl);
    console.log('[useAppVersion] Fetch response status:', res.status, res.statusText);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    const xml = await res.text();
    console.log('[useAppVersion] Received XML:', xml.substring(0, 200) + '...');

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');
    const parserError = doc.querySelector('parsererror');
    if (parserError) {
      console.error('[useAppVersion] XML parse error:', parserError.textContent);
      return null;
    }

    const v = doc.querySelector('shortVersionString')?.textContent;
    const b = doc.querySelector('version')?.textContent;
    console.log('[useAppVersion] Parsed version:', { shortVersionString: v, version: b });

    if (v && b) {
      return `${v} (build ${b})`;
    }
    console.warn('[useAppVersion] Missing version fields in appcast');
    return null;
  } catch (err) {
    console.error('[useAppVersion] Failed to fetch appcast:', err);
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
