export default function clx(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
