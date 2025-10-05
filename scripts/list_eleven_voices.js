const fs = require('fs');
const path = require('path');

async function main() {
  const envPath = path.join(__dirname, '..', 'backend', '.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env not found at', envPath);
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, 'utf8');
  const match = content.match(/^ELEVEN_API_KEY\s*=\s*(.+)$/m);
  if (!match) {
    console.error('ELEVEN_API_KEY not found in .env');
    process.exit(1);
  }
  let key = match[1].trim();
  // strip quotes
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1);
  }

  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: {
      'xi-api-key': key,
      'Accept': 'application/json'
    }
  });
  if (!res.ok) {
    console.error('ElevenLabs API request failed', res.status, await res.text());
    process.exit(1);
  }
  const j = await res.json();
  if (!Array.isArray(j.voices)) {
    console.log(JSON.stringify(j, null, 2));
    return;
  }
  console.log('Found voices:');
  j.voices.forEach(v => {
    console.log(`${v.id}\t${v.name}\t${v.gender || v.category || ''}`);
  });
}

main().catch(e => { console.error(e); process.exit(1); });
