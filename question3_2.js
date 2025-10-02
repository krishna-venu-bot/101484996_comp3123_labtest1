import fs from "fs/promises";
import path from "path";

const logsDir = path.join(process.cwd(), "Logs");

async function removeLogs() {
  try {
    await fs.access(logsDir);
  } catch {
    console.log("No Logs directory found. Nothing to remove.");
    return;
  }

  const files = await fs.readdir(logsDir);
  for (const file of files) {
    console.log(`Deleting: ${file}`);
    await fs.unlink(path.join(logsDir, file));
  }

  await fs.rmdir(logsDir);
  console.log("Logs directory removed successfully");
}

console.log("▶️ Running Question 3 (Remove Logs)...");
removeLogs().catch((err) => {
  console.error("Failed to remove logs:", err);
  process.exitCode = 1;
});
