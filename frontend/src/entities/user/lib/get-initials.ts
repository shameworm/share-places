export function getInitials(name: string): string {
  const nameParts = name.trim().split(" ");
  if (nameParts.length === 0) {
    return "";
  }
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
  console.log(initials);
  return initials;
}
