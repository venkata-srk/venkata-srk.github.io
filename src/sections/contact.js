import EmbedSnippet from "@calcom/embed-snippet";

export function renderContact(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title animate-on-scroll">Get in Touch</h1>
          <p class="section-subtitle animate-on-scroll">Have a project in mind, a question, or just want to say hello? I'd love to hear from you at <a class="contact-email" href="mailto:venkata.srk@outlook.com">venkata.srk@outlook.com</a>. Or, if you prefer a live conversation, you can book a time below.</p>
        </div>

        <div class="contact-calendar-layout animate-on-scroll">
          <div id="my-cal-inline" class="contact-calendar-embed"></div>
        </div>
      </div>
    </section>
  `;

  // Setup Calendar
  setupCalendar();
}

async function setupCalendar() {
  try {
    const cal = EmbedSnippet("https://app.cal.com/embed/embed.js");
    
    cal("init", "15min", { origin: "https://app.cal.com" });
    
    cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline",
      calLink: "venkatasrk/15min",
      layout: "month_view",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"}
    });
    
    cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  } catch (error) {
    console.error("Failed to load Cal embed:", error);
  }
}
