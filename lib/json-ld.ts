/**
 * Serialize a JSON-LD object for safe inline injection into a
 * `<script type="application/ld+json">` tag.
 *
 * `JSON.stringify` does NOT escape `<`, `>`, `&`, or the JS line separators
 * U+2028 / U+2029. A literal `</script>` (or those separators) inside any
 * string field could otherwise break out of the script context — the known
 * JSON-LD injection vector. We escape each to its `\uXXXX` form: JSON-LD
 * parsers decode them back to the original characters, while the HTML parser
 * sees inert text and can't use them to close the tag.
 *
 * Harmless today (every schema field is author-curated static content), but
 * this keeps us safe the moment any schema string becomes dynamic or
 * user-sourced (e.g. live-synced review text).
 */

// `<`, `>`, `&`, U+2028, U+2029 — written as escapes so the source stays ASCII.
const UNSAFE_JSON_LD_CHARS = new RegExp("[<>&\\u2028\\u2029]", "g");

export function jsonLdScript(schema: unknown): string {
  return JSON.stringify(schema).replace(
    UNSAFE_JSON_LD_CHARS,
    (char) => "\\u" + char.charCodeAt(0).toString(16).padStart(4, "0"),
  );
}
