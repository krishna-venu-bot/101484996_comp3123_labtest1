import fs from "fs/promises";
import path from "path";

const logsDir = path.join(process.cwd(), "Logs");

async function createLogs() {
  await fs.mkdir(logsDir, { recursive: true });
  process.chdir(logsDir);

  const creations = [];
  for (let i = 1; i <= 10; i++) {
    const file = `log${i}.txt`;
    const content = `Log ${i}\nCreated: ${new Date().toISOString()}\nProcess CWD: ${process.cwd()}\n`;
    creations.push(fs.writeFile(file, content).then(() => console.log(`📝 Created: ${file}`)));
  }
  await Promise.all(creations);
  console.log("All 10 log files created in Logs folder");
}

console.log("Running Question 3 (Add Logs)...");
createLogs().catch((err) => {
  console.error("Failed to create logs:", err);
  process.exitCode = 1;
});
