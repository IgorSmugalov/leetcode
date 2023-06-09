function numUniqueEmails(emails: string[]): number {
  const unique = new Set();
  emails.forEach((email) => {
    let [name, domain] = email.split("@");
    name = name.split("+")[0].split(".").join("");
    unique.add(name + "@" + domain);
  });
  return unique.size;
}