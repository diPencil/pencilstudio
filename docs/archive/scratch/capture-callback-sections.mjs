import { writeFileSync } from 'fs';

async function main() {
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const versionData = await versionRes.json();
  const webSocketDebuggerUrl = versionData.webSocketDebuggerUrl;

  const ws = new globalThis.WebSocket(webSocketDebuggerUrl);

  await new Promise((resolve) => ws.addEventListener('open', resolve));

  let id = 1;
  const callbacks = new Map();

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      callbacks.get(msg.id)(msg);
      callbacks.delete(msg.id);
    }
  });

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      callbacks.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  // Create new target for /support/callback
  const createTargetRes = await send('Target.createTarget', { url: 'http://localhost:3003/support/callback' });
  const targetId = createTargetRes.result.targetId;

  const attachRes = await send('Target.attachToTarget', { targetId, flatten: true });
  const sessionId = attachRes.result.sessionId;

  function sendSession(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      callbacks.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, sessionId, method, params }));
    });
  }

  await sendSession('Page.enable');
  await sendSession('DOM.enable');
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  // Wait for load
  await new Promise((r) => setTimeout(r, 3000));

  // Get nodes or scroll down to each section
  // Section 1: id="callback-section-1" (or data-section="full-cycle")
  // Let's screenshot section 1, 2, 3
  const evalSection = async (selector) => {
    const res = await sendSession('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.querySelector('${selector}');
          if (!el) return null;
          el.scrollIntoView({ behavior: 'instant', block: 'center' });
          const rect = el.getBoundingClientRect();
          return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
        })()
      `,
      returnByValue: true
    });
    return res.result.value;
  };

  // Section 1:
  await evalSection('[data-section="full-cycle"]');
  await new Promise((r) => setTimeout(r, 600));
  const snap1 = await sendSession('Page.captureScreenshot', { format: 'png' });
  writeFileSync('C:/Users/mahmo/.gemini/antigravity/brain/8d461998-b0a5-449d-a02d-dd0a3bbc1af2/callback-section-1.png', Buffer.from(snap1.result.data, 'base64'));
  console.log('Saved callback-section-1.png');

  // Section 2:
  await evalSection('[data-section="authority-velocity"]');
  await new Promise((r) => setTimeout(r, 600));
  const snap2 = await sendSession('Page.captureScreenshot', { format: 'png' });
  writeFileSync('C:/Users/mahmo/.gemini/antigravity/brain/8d461998-b0a5-449d-a02d-dd0a3bbc1af2/callback-section-2.png', Buffer.from(snap2.result.data, 'base64'));
  console.log('Saved callback-section-2.png');

  // Section 3:
  await evalSection('[data-section="pillars"]');
  await new Promise((r) => setTimeout(r, 600));
  const snap3 = await sendSession('Page.captureScreenshot', { format: 'png' });
  writeFileSync('C:/Users/mahmo/.gemini/antigravity/brain/8d461998-b0a5-449d-a02d-dd0a3bbc1af2/callback-section-3.png', Buffer.from(snap3.result.data, 'base64'));
  console.log('Saved callback-section-3.png');

  await send('Target.closeTarget', { targetId });
  ws.close();
}

main().catch(console.error);

