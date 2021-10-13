export function lerp(a1: number, a2: number, t: number) {
  return (1 - t) * a1 + t * a2;
}

export function FormData(target: HTMLFormElement) {
  return Object.fromEntries(new globalThis.FormData(target).entries());
}

export function URLSearchParams(value: string) {
  if (!value) return {};
  return Object.fromEntries(new globalThis.URLSearchParams(value).entries());
}
