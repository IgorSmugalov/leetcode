// Last updated: 08.11.2025, 16:20:27
function defangIPaddr(address: string): string {
  return address.split('.').join('[.]')
}
