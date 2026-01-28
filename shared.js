async function loadCSV(url){
  const res = await fetch(url, {cache: "no-store"});
  const text = await res.text();
  const lines = text.trim().split(/\r?\n/);
  const headers = lines[0].split(",").map(h => h.trim());
  const rows = lines.slice(1).map(line => {
    const cols = line.split(",").map(c => c.trim());
    const obj = {};
    headers.forEach((h,i)=>obj[h]=cols[i] ?? "");
    return obj;
  });
  return rows;
}
function qsParam(name){
  const u = new URL(window.location.href);
  return u.searchParams.get(name) || "";
}