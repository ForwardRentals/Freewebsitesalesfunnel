// Copies every application to Hermes, which emails the applicant from
// freesitecompanycanada@gmail.com and alerts Jeremy. Fire-and-forget: it never
// blocks or breaks the form, and the Google Sheet post still runs as before.
const HERMES_INTAKE_URL = "https://hermes.thefulltimehobby.workers.dev/intake/form";

export function sendToHermes(payload: URLSearchParams) {
  try {
    fetch(HERMES_INTAKE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(payload)),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // never let Hermes affect the form
  }
}
