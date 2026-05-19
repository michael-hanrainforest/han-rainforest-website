import { writeFileSync } from "fs";
import { resolve } from "path";

async function run() {
  const fileId = "1wL2XFljAblOvLs_04klRP3FdU34XPDKM";
  // The user shared a link: https://drive.google.com/file/d/1wL2XFljAblOvLs_04klRP3FdU34XPDKM/view?usp=sharing
  // Let's try downloading from uc?export=download
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  console.log("Fetching", url);
  try {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    writeFileSync(resolve("./public/logo.png"), Buffer.from(buffer));
    console.log("Saved to public/logo.png, size:", buffer.byteLength);
  } catch(e) {
    console.error(e);
  }
}
run();
