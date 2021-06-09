import { locationUtil } from '@grafana/data';
import { locationService, navigationLogger } from '@grafana/runtime';

export function interceptLinkClicks(e: MouseEvent) {
  const anchor = getParentAnchor(e.target as HTMLElement);

  // Ignore if opening new tab or already default prevented
  if (e.ctrlKey || e.metaKey || e.defaultPrevented) {
    return;
  }

  if (anchor) {
    let href = anchor.getAttribute('href');
    const target = anchor.getAttribute('target');

    if (href && !target) {
      navigationLogger('utils', false, 'intercepting link click', e);
      e.preventDefault();

      href = locationUtil.stripBaseFromUrl(href);
      // Ensure old angular urls with no starting '/' are handled the same as before
      // Make sure external links are handled correctly
      // That is they where seen as being absolute from app root
      if (href[0] !== '/') {
        try {
          const external = new URL(href);
          if (external.origin !== window.location.origin) {
            window.location.href = external.toString();
            return;
          }
        } catch (e) {
          console.warn(e);
        }
        href = `/${href}`;
      }
      locationService.push(href);
    }
  }
}

function getParentAnchor(element: HTMLElement | null): HTMLElement | null {
  while (element !== null && element.tagName) {
    if (element.tagName.toUpperCase() === 'A') {
      return element;
    }
    element = element.parentNode as HTMLElement;
  }

  return null;
}
