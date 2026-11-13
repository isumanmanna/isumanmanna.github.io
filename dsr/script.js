(function () {
  "use strict";

  const script = document.currentScript;
  const token = script?.getAttribute("data-token") || "";
  const settingsId = script?.getAttribute("data-settings-id") || "";
  const theme = script?.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const containerId = "dsar-form-container";

  const styles = [
    '#dsar-form-container .dsar-widget { --surface:#fff; --soft:#f3f8f6; --text:#183039; --muted:#60727a; --line:#dce6e4; --accent:#087e75; --field:#fff; --hero:#123c43; width:min(100%,760px); margin:24px auto; color:var(--text); font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif; }',
    '#dsar-form-container .dsar-widget[data-theme="dark"] { --surface:#17282e; --soft:#24443f; --text:#edf6f4; --muted:#b3c5c5; --line:#3b5357; --accent:#6bd4bf; --field:#20343a; --hero:#0c252b; }',
    '#dsar-form-container .dsar-widget *,#dsar-form-container .dsar-widget *::before,#dsar-form-container .dsar-widget *::after { box-sizing:border-box; }',
    '#dsar-form-container .dsar-card { overflow:hidden; background:var(--surface); border:1px solid var(--line); border-radius:18px; box-shadow:0 16px 48px rgba(16,49,52,.09),0 2px 8px rgba(16,49,52,.04); }',
    '#dsar-form-container .dsar-hero { position:relative; overflow:hidden; padding:35px 40px 33px; background:var(--hero); color:#fff; }',
    '#dsar-form-container .dsar-hero::after { content:""; position:absolute; right:-55px; top:-105px; width:310px; height:310px; border:1px solid rgba(255,255,255,.13); border-radius:50%; box-shadow:0 0 0 45px rgba(255,255,255,.035),0 0 0 95px rgba(255,255,255,.025); pointer-events:none; }',
    '#dsar-form-container .dsar-eyebrow { display:inline-flex; align-items:center; gap:8px; margin-bottom:14px; color:#adede1; font-size:11px; font-weight:750; letter-spacing:.13em; text-transform:uppercase; }',
    '#dsar-form-container .dsar-eyebrow svg { width:16px; height:16px; }',
    '#dsar-form-container .dsar-hero h1 { position:relative; z-index:1; margin:0; color:#fff; font-size:clamp(25px,4vw,33px); font-weight:720; letter-spacing:-.035em; line-height:1.18; }',
    '#dsar-form-container .dsar-hero p { position:relative; z-index:1; max-width:490px; margin:12px 0 0; color:#d4e8e7; font-size:14px; }',
    '#dsar-form-container .dsar-form { padding:32px 40px 28px; }',
    '#dsar-form-container .dsar-section + .dsar-section { margin-top:34px; }',
    '#dsar-form-container .dsar-section-heading { display:flex; align-items:center; gap:12px; margin-bottom:18px; }',
    '#dsar-form-container .dsar-step { display:grid; place-items:center; width:29px; height:29px; flex:none; border-radius:9px; background:var(--soft); color:var(--accent); font-size:12px; font-weight:800; }',
    '#dsar-form-container .dsar-section-heading h2 { margin:0; color:var(--text); font-size:17px; font-weight:700; letter-spacing:-.015em; }',
    '#dsar-form-container .dsar-optional { margin-left:auto; color:var(--muted); font-size:12px; text-align:right; }',
    '#dsar-form-container .dsar-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }',
    '#dsar-form-container .dsar-field label { display:block; margin-bottom:7px; color:var(--text); font-size:13px; font-weight:650; }',
    '#dsar-form-container .dsar-field input,#dsar-form-container .dsar-field textarea { display:block; width:100%; min-height:46px; padding:11px 13px; border:1px solid var(--line); border-radius:9px; outline:0; background:var(--field); color:var(--text); font:inherit; font-size:14px; transition:border-color .18s,box-shadow .18s; }',
    '#dsar-form-container .dsar-field input::placeholder,#dsar-form-container .dsar-field textarea::placeholder { color:var(--muted); opacity:.8; }',
    '#dsar-form-container .dsar-field input:focus,#dsar-form-container .dsar-field textarea:focus { border-color:var(--accent); box-shadow:0 0 0 3px var(--soft); }',
    '#dsar-form-container .dsar-field textarea { min-height:112px; resize:vertical; }',
    '#dsar-form-container .dsar-helper { margin:7px 0 0; color:var(--muted); font-size:12px; line-height:1.45; }',
    '#dsar-form-container .dsar-choices { display:grid; grid-template-columns:repeat(3,1fr); gap:11px; }',
    '#dsar-form-container .dsar-choice { position:relative; display:block; min-height:128px; padding:17px 15px 15px; border:1px solid var(--line); border-radius:11px; background:var(--field); cursor:pointer; transition:border-color .18s,background .18s,box-shadow .18s; }',
    '#dsar-form-container .dsar-choice:hover { border-color:var(--accent); }',
    '#dsar-form-container .dsar-choice:has(input:checked) { border-color:var(--accent); background:var(--soft); box-shadow:inset 0 0 0 1px var(--accent); }',
    '#dsar-form-container .dsar-choice:has(input:focus-visible) { outline:3px solid var(--accent); outline-offset:2px; }',
    '#dsar-form-container .dsar-choice input { position:absolute; top:17px; right:15px; width:18px; height:18px; margin:0; accent-color:var(--accent); }',
    '#dsar-form-container .dsar-choice-icon { display:grid; place-items:center; width:31px; height:31px; margin-bottom:11px; border-radius:8px; background:var(--soft); color:var(--accent); }',
    '#dsar-form-container .dsar-choice-icon svg { width:17px; height:17px; }',
    '#dsar-form-container .dsar-choice-title { display:block; margin-bottom:3px; color:var(--text); font-size:13px; font-weight:700; }',
    '#dsar-form-container .dsar-choice-description { display:block; color:var(--muted); font-size:12px; line-height:1.4; }',
    '#dsar-form-container .dsar-actions { margin-top:29px; padding-top:24px; border-top:1px solid var(--line); }',
    '#dsar-form-container .dsar-submit { display:inline-flex; align-items:center; justify-content:center; gap:10px; width:100%; min-height:49px; padding:11px 18px; border:0; border-radius:9px; background:#087e75; color:#fff; font:inherit; font-size:14px; font-weight:700; cursor:pointer; transition:background .18s,transform .18s; }',
    '#dsar-form-container .dsar-submit:hover { background:#076960; transform:translateY(-1px); }',
    '#dsar-form-container .dsar-submit:focus-visible { outline:3px solid var(--accent); outline-offset:3px; }',
    '#dsar-form-container .dsar-submit:disabled { opacity:.6; cursor:wait; transform:none; }',
    '#dsar-form-container .dsar-submit svg { width:16px; height:16px; }',
    '#dsar-form-container .dsar-footer { margin:13px 0 0; color:var(--muted); font-size:12px; text-align:center; line-height:1.5; }',
    '#dsar-form-container .dsar-message { margin-top:17px; padding:13px 15px; border-radius:9px; font-size:13px; line-height:1.5; }',
    '#dsar-form-container .dsar-message[hidden] { display:none; }',
    '#dsar-form-container .dsar-message.success { background:#e8f6f2; color:#155548; border:1px solid #b5dfd1; }',
    '#dsar-form-container .dsar-message.error { background:#fff1ef; color:#9b342c; border:1px solid #f2c5bf; }',
    '#dsar-form-container .dsar-widget[data-theme="dark"] .dsar-message.success { background:#244941; color:#c2f4df; border-color:#367660; }',
    '#dsar-form-container .dsar-widget[data-theme="dark"] .dsar-message.error { background:#4b302e; color:#ffd3cd; border-color:#87514b; }',
    '#dsar-form-container .dsar-message strong { display:block; margin-bottom:3px; font-size:14px; }',
    '@media(max-width:640px) { #dsar-form-container .dsar-widget { margin:12px auto; } #dsar-form-container .dsar-hero { padding:28px 24px; } #dsar-form-container .dsar-form { padding:27px 24px; } #dsar-form-container .dsar-grid,#dsar-form-container .dsar-choices { grid-template-columns:1fr; } #dsar-form-container .dsar-choice { min-height:0; padding:13px 46px 13px 56px; } #dsar-form-container .dsar-choice-icon { position:absolute; top:14px; left:14px; margin:0; } #dsar-form-container .dsar-choice input { top:19px; } }'
  ].join("\n");

  const icon = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h18v14H3z"/><path d="M7 9h10M7 13h6"/></svg>',
    erase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M10 7V4h4v3m4 0-1 13H7L6 7"/><path d="M10 11v5m4-5v5"/></svg>',
    correct: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9M3 17.5V21h3.5L18.8 8.7l-3.5-3.5L3 17.5Z"/><path d="m13.5 7 3.5 3.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>'
  };

  const formHTML = [
    '<div class="dsar-widget" data-theme="' + theme + '"><div class="dsar-card">',
    '<header class="dsar-hero"><div class="dsar-eyebrow">' + icon.shield + ' Privacy request</div>',
    '<h1>Take control of your data.</h1><p>Tell us what you need, and our privacy team will help with your personal data request.</p></header>',
    '<form class="dsar-form" id="dsar-request-form">',
    '<section class="dsar-section" aria-labelledby="dsar-contact-title"><div class="dsar-section-heading"><span class="dsar-step" aria-hidden="true">01</span><h2 id="dsar-contact-title">Your contact information</h2></div>',
    '<div class="dsar-grid"><div class="dsar-field"><label for="dsar-name">Full name <span aria-hidden="true">*</span></label><input id="dsar-name" name="fullName" type="text" autocomplete="name" placeholder="Your full legal name" required></div>',
    '<div class="dsar-field"><label for="dsar-email">Email address <span aria-hidden="true">*</span></label><input id="dsar-email" name="email" type="email" autocomplete="email" aria-describedby="dsar-email-help" placeholder="you@example.com" required><p class="dsar-helper" id="dsar-email-help">We’ll use this for confirmation and identity verification.</p></div></div></section>',
    '<section class="dsar-section" aria-labelledby="dsar-type-title"><div class="dsar-section-heading"><span class="dsar-step" aria-hidden="true">02</span><h2 id="dsar-type-title">What would you like to do? <span aria-hidden="true">*</span></h2></div><div class="dsar-choices" role="radiogroup" aria-labelledby="dsar-type-title">',
    '<label class="dsar-choice"><input type="radio" name="requestType" value="access" required><span class="dsar-choice-icon">' + icon.access + '</span><span class="dsar-choice-title">Access my data</span><span class="dsar-choice-description">Get a copy of the personal data we hold.</span></label>',
    '<label class="dsar-choice"><input type="radio" name="requestType" value="deletion"><span class="dsar-choice-icon">' + icon.erase + '</span><span class="dsar-choice-title">Erase my data</span><span class="dsar-choice-description">Ask us to delete your personal data.</span></label>',
    '<label class="dsar-choice"><input type="radio" name="requestType" value="correction"><span class="dsar-choice-icon">' + icon.correct + '</span><span class="dsar-choice-title">Correct my data</span><span class="dsar-choice-description">Update information that is inaccurate.</span></label></div></section>',
    '<section class="dsar-section" aria-labelledby="dsar-details-title"><div class="dsar-section-heading"><span class="dsar-step" aria-hidden="true">03</span><h2 id="dsar-details-title">Tell us more</h2><span class="dsar-optional" id="dsar-details-status">Optional</span></div>',
    '<div class="dsar-field"><label for="dsar-details">Details of your request</label><textarea id="dsar-details" name="details" aria-describedby="dsar-details-help" placeholder="Share any details that will help us find or correct your information..."></textarea><p class="dsar-helper" id="dsar-details-help">For corrections, tell us which information needs to change.</p></div></section>',
    '<div class="dsar-actions"><button class="dsar-submit" type="submit"><span>Submit privacy request</span>' + icon.arrow + '</button><p class="dsar-footer">To protect your information, we’ll verify your identity before fulfilling your request.</p><div class="dsar-message" id="dsar-message" role="status" aria-live="polite" hidden></div></div>',
    '</form></div></div>'
  ].join("");

  function showMessage(message, type, email) {
    const box = document.getElementById("dsar-message");
    box.className = "dsar-message " + type;
    box.replaceChildren();
    const title = document.createElement("strong");
    title.textContent = type === "success" ? "Request received" : "Unable to submit request";
    const body = document.createElement("span");
    body.textContent = type === "success"
      ? "We’ve logged your request. Your request ID and next steps will be sent to " + email + "."
      : message;
    box.append(title, body);
    box.hidden = false;
  }

  function init() {
    const container = document.getElementById(containerId);
    if (!container) return;
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    container.innerHTML = formHTML;

    const form = container.querySelector("form");
    const details = form.elements.details;
    const detailsStatus = container.querySelector("#dsar-details-status");
    form.addEventListener("change", (event) => {
      if (event.target.name !== "requestType") return;
      const correction = event.target.value === "correction";
      details.required = correction;
      detailsStatus.textContent = correction ? "Required for corrections" : "Optional";
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {
        requester_name: String(formData.get("fullName") || "").trim(),
        contact_email: String(formData.get("email") || "").trim(),
        type: formData.get("requestType"),
        additional_info: String(formData.get("details") || "").trim()
      };
      if (data.type === "correction" && !data.additional_info) {
        details.required = true;
        details.reportValidity();
        return;
      }
      if (!token || !settingsId) {
        showMessage("The form is missing its configuration. Please contact the site owner.", "error");
        return;
      }

      const button = form.querySelector(".dsar-submit");
      const buttonLabel = button.querySelector("span");
      const message = form.querySelector("#dsar-message");
      button.disabled = true;
      buttonLabel.textContent = "Submitting…";
      message.hidden = true;
      try {
        const response = await fetch("https://in.kawach.ai/api/dsar_case/" + encodeURIComponent(settingsId), {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Widget-Token": token },
          body: JSON.stringify(data)
        });
        if (response.ok) {
          showMessage("", "success", data.contact_email);
          form.reset();
          details.required = false;
          detailsStatus.textContent = "Optional";
        } else {
          let errorMessage = "Something went wrong. Please try again.";
          try {
            const result = await response.json();
            if (typeof result.message === "string") errorMessage = result.message;
          } catch (_) { /* The server did not return JSON. */ }
          showMessage(errorMessage, "error");
        }
      } catch (_) {
        showMessage("We couldn’t send your request. Please check your connection and try again.", "error");
      } finally {
        button.disabled = false;
        buttonLabel.textContent = "Submit privacy request";
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
