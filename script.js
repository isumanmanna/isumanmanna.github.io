/* Kawach DSR form v1.0.0 */
(()=>{var T=`
:host { all: initial; display: block; }
* { box-sizing: border-box; }
.dsar-root {
  --form-background: #ffffff;
  --form-surface: #ffffff;
  --form-text: #1a1a1a;
  --form-label: #333;
  --form-placeholder: #9ca3af;
  --form-muted: #6b7280;
  --form-border: #d1d5db;
  --form-section-border: #e5e5e5;
  --form-option-border: #e5e7eb;
  --form-accent: #0891b2;
  --form-focus-ring: rgba(8, 145, 178, 0.1);
  --form-option-hover: #f9fafb;
  --form-option-selected: rgba(8, 145, 178, 0.05);
  --form-button: #155265;
  --form-button-hover: #005f78;
  --form-button-disabled: #d1d5db;
  --form-success-background: #d1fae5;
  --form-success-text: #065f46;
  --form-success-border: #a7f3d0;
  --form-error-background: #fee2e2;
  --form-error-text: #991b1b;
  --form-error-border: #fecaca;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  max-width: 700px;
  margin: 0 auto;
  color: var(--form-text);
}
.dsar-root.dark {
  --form-background: #1e1e1e;
  --form-surface: #2a2a2a;
  --form-text: #fff;
  --form-label: #ddd;
  --form-placeholder: #666;
  --form-muted: #888;
  --form-border: #444;
  --form-section-border: #333;
  --form-option-border: #444;
  --form-accent: #0d7490;
  --form-focus-ring: rgba(13, 116, 144, 0.1);
  --form-option-hover: #333;
  --form-option-selected: rgba(13, 116, 144, 0.1);
  --form-button: #0d7490;
  --form-button-hover: #007595;
  --form-button-disabled: #444;
  --form-success-background: #064e3b;
  --form-success-text: #6ee7b7;
  --form-success-border: #065f46;
  --form-error-background: #7f1d1d;
  --form-error-text: #fca5a5;
  --form-error-border: #991b1b;
}
.dsar-form {
  background: var(--form-background);
  border-radius: 8px;
  padding: 15px 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.dsar-header { text-align: center; margin-bottom: 10px; }
.dsar-section {
  font-size: 18px;
  font-weight: 600;
  color: var(--form-text);
  margin: 0 0 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--form-section-border);
}
.dsar-details-heading { margin-top: 20px; }
.dsar-group { margin-bottom: 20px; }
.dsar-label {
  display: block;
  margin-bottom: 8px;
  color: var(--form-label);
  font-size: 12px;
  font-weight: 400;
}
.dsar-input, .dsar-textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--form-border);
  border-radius: 6px;
  font-size: 12px;
  background: var(--form-surface);
  color: var(--form-text);
  transition: all 0.2s;
  font-family: inherit;
}
.dsar-input::placeholder, .dsar-textarea::placeholder {
  color: var(--form-placeholder);
}
.dsar-input:focus, .dsar-textarea:focus {
  outline: none;
  border-color: var(--form-accent);
  box-shadow: 0 0 0 3px var(--form-focus-ring);
}
.dsar-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
.dsar-help {
  font-size: 11px;
  color: var(--form-muted);
  margin-top: 6px;
  line-height: 1.4;
}
.dsar-radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}
.dsar-option {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid var(--form-option-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--form-surface);
}
.dsar-option:hover {
  border-color: var(--form-accent);
  background: var(--form-option-hover);
}
.dsar-option.selected {
  border-color: var(--form-accent);
  background: var(--form-option-selected);
}
.dsar-option input {
  margin: 2px 12px 0 0;
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}
.dsar-option-content { flex: 1; }
.dsar-option-title {
  display: block;
  font-weight: 500;
  color: var(--form-text);
  font-size: 12px;
  margin-bottom: 4px;
}
.dsar-option-description {
  display: block;
  font-size: 11px;
  color: var(--form-muted);
  line-height: 1.4;
}
.dsar-root.dark .dsar-option-description { color: #aaa; }
.dsar-button {
  width: 100%;
  padding: 12px;
  background: var(--form-button);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 10px;
}
.dsar-button:hover { background: var(--form-button-hover); }
.dsar-button:disabled {
  background: var(--form-button-disabled);
  cursor: not-allowed;
}
.dsar-footer {
  text-align: center;
  font-size: 13px;
  color: var(--form-muted);
  margin-top: 16px;
  line-height: 1.5;
}
.dsar-message {
  margin-top: 20px;
  padding: 14px 16px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
}
.dsar-message.success {
  background: var(--form-success-background);
  color: var(--form-success-text);
  border: 1px solid var(--form-success-border);
}
.dsar-message.error {
  background: var(--form-error-background);
  color: var(--form-error-text);
  border: 1px solid var(--form-error-border);
}
.dsar-message[hidden], .dsar-required[hidden] { display: none; }
@media (max-width: 640px) { .dsar-form { padding: 30px 20px; } }
`;var M=[["access","Data Access","Request a copy of the personal data we hold about you."],["deletion","Data Erasure","Request that we erase the personal data we hold about you."],["correction","Data Correction","Request to update or correct inaccurate personal data."]],z=({container:r,theme:h,onSubmit:x})=>{let y=r.ownerDocument,k=r.shadowRoot||r.attachShadow({mode:"open"}),e=(a,n,s)=>{let i=y.createElement(a);return n&&(i.className=n),s!==void 0&&(i.textContent=s),i},S=a=>e("h2","dsar-section",a),v=(a,n,s)=>{let i=e("div","dsar-group"),c=e("label","dsar-label",a);return c.htmlFor=n.id,i.append(c,n),s&&i.appendChild(e("p","dsar-help",s)),i},b=e("style");b.textContent=T;let o=e("div",`dsar-root${h==="dark"?" dark":""}`),t=e("form","dsar-form"),q=e("div","dsar-header");q.appendChild(e("h2",null,"Data Subject Access Request (DSAR) Submission")),t.appendChild(q),t.appendChild(S("Your Contact Information"));let u=e("input","dsar-input");u.type="text",u.id="ef-name",u.name="fullName",u.required=!0,u.placeholder="Enter your full legal name",t.appendChild(v("Full Name (Required)",u));let d=e("input","dsar-input");d.type="email",d.id="ef-email",d.name="email",d.required=!0,d.placeholder="Enter your email address",t.appendChild(v("Email Address (Required)",d,"We will use this email for confirmation and identity verification."));let m=S("Type of Data Request (Required)");m.id="dsar-request-type-heading",t.appendChild(m);let g=e("div","dsar-radio-group");g.setAttribute("role","radiogroup"),g.setAttribute("aria-labelledby",m.id);let w=M.map(([a,n,s])=>{let i=e("label","dsar-option"),c=e("input");c.type="radio",c.name="requestType",c.value=a,c.required=!0;let A=e("span","dsar-option-content");return A.append(e("span","dsar-option-title",n),e("span","dsar-option-description",s)),i.append(c,A),c.addEventListener("change",()=>E()),g.appendChild(i),{label:i,radio:c}});t.appendChild(g);let f=S("Specific Details");f.classList.add("dsar-details-heading");let p=e("span","dsar-required"," (Required)");p.hidden=!0,f.appendChild(p),t.appendChild(f);let R=e("textarea","dsar-textarea");R.id="ef-details",R.name="details",R.placeholder="Explain your request clearly. E.g., I would like to correct the date of birth associated with my account.",t.appendChild(v("Please provide details about your request",R,"The more detail you provide, the faster we can process your request."));let C=e("button","dsar-button","Submit Request");C.type="submit",t.appendChild(C);let D=e("p","dsar-footer");D.append("Final fulfillment is subject to mandatory ",e("strong",null,"identity verification")," and legal review."),t.appendChild(D);let l=e("div","dsar-message");l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),l.hidden=!0,t.appendChild(l),t.addEventListener("submit",x),o.appendChild(t),k.replaceChildren(b,o);function E(){w.forEach(({label:n,radio:s})=>n.classList.toggle("selected",s.checked));let a=w.find(({radio:n})=>n.value==="correction").radio.checked;R.required=a,p.hidden=!a}return{form:t,showMessage(a,n){var s;l.className=`dsar-message ${a}`,l.textContent=n,l.hidden=!1,(s=l.scrollIntoView)==null||s.call(l,{behavior:"smooth",block:"center"})},setSubmitting(a){C.disabled=a,C.textContent=a?"Submitting Request...":"Submit Request"},reset(){t.reset(),E()}}};var F="dsar-form-container",I="The DSR form is not configured. Please contact the website owner.";function N({script:r,doc:h=globalThis.document,fetchImpl:x=globalThis.fetch}){var q,u;let y=h.getElementById(F);if(!y)return console.warn(`Kawach DSR form: #${F} was not found.`),null;let k=(q=r==null?void 0:r.getAttribute("data-token"))==null?void 0:q.trim(),e=(u=r==null?void 0:r.getAttribute("data-settings-id"))==null?void 0:u.trim(),S=r==null?void 0:r.getAttribute("data-theme"),v=(r==null?void 0:r.getAttribute("data-api"))||(r==null?void 0:r.src),b=null;if(v)try{let d=new URL(v);(d.protocol==="http:"||d.protocol==="https:")&&(b=d.origin)}catch{}let o;return o=z({container:y,theme:S,onSubmit:async d=>{if(d.preventDefault(),!k||!e||!b){o.showMessage("error",I);return}let m=new FormData(o.form),g=String(m.get("email")||"").trim(),w={requester_name:String(m.get("fullName")||"").trim(),contact_email:g,type:m.get("requestType"),additional_info:String(m.get("details")||"").trim()};if(w.type==="correction"&&!w.additional_info){o.showMessage("error","Providing details is mandatory for data correction requests.");return}o.setSubmitting(!0);try{let f=await x(`${b}/api/dsar_case/${encodeURIComponent(e)}`,{method:"POST",credentials:"omit",headers:{"Content-Type":"application/json","X-Widget-Token":k},body:JSON.stringify(w)}),p=await f.json().catch(()=>({}));f.ok?(o.reset(),o.showMessage("success",`Request received. We have logged your case. Your Request ID will be sent to ${g} shortly. Further communication about your request will go to this email.`)):o.showMessage("error",typeof(p==null?void 0:p.message)=="string"?p.message:"Something went wrong. Please try again.")}catch(f){console.error("Kawach DSR form submission failed.",f),o.showMessage("error","Sorry, there was an error submitting your request. Please try again later or contact us directly.")}finally{o.setSubmitting(!1)}}}),(!k||!e||!b)&&(o.setSubmitting(!0),o.showMessage("error",I)),o}(function(h){if(!h)return;let x=()=>{try{N({script:h})}catch(y){console.error("Kawach DSR form failed to start.",y)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x()})(document.currentScript);})();
