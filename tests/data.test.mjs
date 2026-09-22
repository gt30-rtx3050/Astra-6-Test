import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { filterByCategory, monthlyPrice } from "../src/utils.js";
const items = [{ tags: ["Branding", "UI/UX"] }, { tags: ["Frontend"] }];
test("All categories retains all items without mutation", () => {
  assert.deepEqual(filterByCategory(items, "All categories"), items);
  assert.equal(items.length, 2);
});
test("Category filtering handles matches and empty results", () => {
  assert.deepEqual(filterByCategory(items, "Branding"), [items[0]]);
  assert.deepEqual(filterByCategory(items, "Unknown"), []);
});
test("Annual pricing applies the displayed 24% discount", () => {
  assert.equal(monthlyPrice(2500), 2500);
  assert.equal(monthlyPrice(2500, true), 1900);
  assert.equal(monthlyPrice(5500, true), 4180);
  assert.equal(monthlyPrice(8500, true), 6460);
});
test("Every bundled image is present and nonempty", () => {
  const assets = JSON.parse(
    fs.readFileSync(new URL("../src/local-assets.json", import.meta.url)),
  );
  assert.equal(new Set(assets).size, assets.length);
  for (const id of assets) {
    assert.ok(
      fs.statSync(new URL(`../public/assets/${id}.webp`, import.meta.url))
        .size > 100,
    );
  }
});
