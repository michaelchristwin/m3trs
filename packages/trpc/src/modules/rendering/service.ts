import { getBrowser } from "./config";
import type { RenderingModel } from "./model";

export abstract class Rendering {
  static async snapshot({
    id,
    width,
    height,
    url,
  }: RenderingModel["snapshotParams"]) {
    const browser = await getBrowser();
    const context = await browser.newContext({
      viewport: { width, height },
    });
    const page = await context.newPage();

    await page.goto(url, {
      waitUntil: "networkidle",
    });
    const el = page.locator(id);
    const buffer = await el.screenshot({
      type: "png",
      quality: 90,
    });
    await context.close();
    return buffer;
  }
}
