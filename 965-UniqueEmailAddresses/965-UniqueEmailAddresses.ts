// Last updated: 08.11.2025, 16:20:31
function numUniqueEmails(emails: string[]): number {
  const unique = new Set();
  emails.forEach((email) => {
    let [name, domain] = email.split("@");
    name = name.split("+")[0].split(".").join("");
    unique.add(name + "@" + domain);
  });
  return unique.size;
}