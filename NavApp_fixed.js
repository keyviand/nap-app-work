/* ======= Config ======= */
// TODO: Replace with your real GraphHopper API key
const GRAPHOPPER_KEY = "f4c5a097-3b80-4b50-88f7-8b6f8a115181";

/* ======= Data ======= */
const campuses = [
  {
    id: 1,
    name: "Cochran Campus",
    address: "1100 Second Street SE, Cochran, GA 31014",
    lat: 32.379845, lng: -83.342543,
    buildings: [
      { name: "Russell Auditorium", lat: 32.38039, lng: -83.346899, desc: "Performance venue" },
      { name: "Student Rec Center", lat: 32.381122, lng: -83.341309, desc: "Fitness facilities" },
      { name: "Roberts Library", lat: 32.381032, lng: -83.347188, desc: "Main library" },
      { name: "Dillard Hall", lat: 32.381087, lng: -83.345772, desc: "Science labs and classrooms" },
      { name: "Grace Hall", lat: 32.381222, lng: -83.34427, desc: "Residence hall" },
      { name: "Harris Hall", lat: 32.379765, lng: -83.347371, desc: "Residence hall" },
      { name: "Talmadge Hall", lat: 32.379303, lng: -83.34677, desc: "Residence hall" },
      { name: "Peacock Office Building", lat: 32.379693, lng: -83.346072, desc: "Administrative offices" },
      { name: "Wiggs Office Building", lat: 32.380362, lng: -83.345279, desc: "Faculty offices" },
      { name: "Walker Hall", lat: 32.380037, lng: -83.345622, desc: "Classrooms and auditorium" },
      { name: "Ebenezer Hall", lat: 32.380498, lng: -83.344785, desc: "Residence hall" },
      { name: "Morris Gymnasium", lat: 32.379883, lng: -83.344452, desc: "Athletic and fitness facility" },
      { name: "Georgia Hall", lat: 32.380046, lng: -83.343616, desc: "Dining hall" },
      { name: "Alderman Hall", lat: 32.37924, lng: -83.345397, desc: "Classrooms" },
      { name: "Whipple Hall", lat: 32.380797, lng: -83.34192, desc: "Academic building" },
      { name: "Athletic Training Facility", lat: 32.380598, lng: -83.340901, desc: "Sports medicine and training" },
      { name: "Anderson Dormitory", lat: 32.382055, lng: -83.344098, desc: "Residence hall" },
      { name: "Haynes Dormitory", lat: 32.381422, lng: -83.34354, desc: "Residence hall" },
      { name: "Gateway Dormitory", lat: 32.382155, lng: -83.34265, desc: "Residence hall" },
      { name: "Regents Dormitory", lat: 32.381756, lng: -83.340644, desc: "Residence hall" },
      { name: "Sanford Hall", lat: 32.380656, lng: -83.346346, desc: "Career services" },
      { name: "Browning Dormitory", lat: 32.379438, lng: -83.34619, desc: "Residence hall" },
      { name: "Jackson Office Building", lat: 32.380475, lng: -83.34501, desc: "HR, IT, business" },
      { name: "Knights Dormitory", lat: 32.381538, lng: -83.342607, desc: "Residence hall" },
      { name: "Chiller Plant", lat: 32.379521, lng: -83.344935, desc: "Utility building" },
      { name: "Memorial Hall", lat: 32.380955, lng: -83.346255, desc: "Math classrooms" }
    ]
  },
  {
    id: 2,
    name: "Macon Campus",
    address: "100 University Parkway, Macon, GA 31206",
    lat: 32.808092, lng: -83.732058,
    buildings: [
      { name: "Administration (ADMIN)", lat: 32.808127, lng: -83.732117, desc: "Student Services" },
     { 
  name: "Library (LIB)", 
  lat: 32.808469, 
  lng: -83.732992, 
  desc: "Library (LLIB) – Features the Library Café, Student Success Center, and Museum of Technology. Offers research resources, study areas, and the Technical Assistance Center for students.", 
  image: "Library,_Middle_Georgia_State_University_Macon_campus.jpg" 
},

      { name: "Plant Services", lat: 32.806992, lng: -83.733609, desc: "Facilities" },
      { name: "Campus Support Services (CSS)", lat: 32.808145, lng: -83.733839, desc: "Campus Support Services" },
      { name: "Mathematics (MATH)", lat: 32.808739, lng: -83.733855, desc: "Math" },
      { name: "Math Auditorium (AUD)", lat: 32.808717, lng: -83.73414, desc: "Math" },
      { name: "Charles H. Jones Building (Jones)", lat: 32.808732, lng: -83.735159, desc: "" },
      { name: "Professional Sciences Center (PSC)", lat: 32.809573, lng: -83.734059, desc: "" },
      { name: "Teacher Education Building (TEB)", lat: 32.809852, lng: -83.732879, desc: "" },
      { name: "Student Life Center (SLC)", lat: 32.810712, lng: -83.732085, desc: "Student Life" },
      { name: "Music (MUS)", lat: 32.811622, lng: -83.731222, desc: "Music" },
      { name: "Arts Complex (ART)", lat: 32.809319, lng: -83.731806, desc: "Art" },
      { name: "School of Arts & Letters (SOAL)", lat: 32.80894, lng: -83.732091, desc: "" },
      { name: "Recreation & Wellness Center (REC)", lat: 32.811571, lng: -83.733979, desc: "Recreation", image: "wellness.jpg" },
{ name: "Lakeview Pointe (LP)", lat: 32.812787, lng: -83.733544, desc: "Residence hall", image: "lakeview Pointe.jpg" },
{ name: "University Pointe (UP)", lat: 32.810116, lng: -83.736763, desc: "Residence hall", image: "university pointe.jpg" },
      { name: "Peyton T. Anderson Enrollment Center (PAC)", lat: 32.809854, lng: -83.729129, desc: "Enrollment" }
    ]
  },
  {
    id: 3,
    name: "Dublin Campus",
    address: "800 Veterans Blvd, Dublin, GA 31021",
    lat: 32.532837, lng: -82.935989,
    buildings: [
      { name: "Academic Building", lat: 32.532765, lng: -82.935265, desc: "Classrooms" },
      { name: "Student Services", lat: 32.53282, lng: -82.936, desc: "Admissions" }
    ]
  },
  {
    id: 4,
    name: "Warner Robins Campus",
    address: "100 University Boulevard, Warner Robins, GA 31093",
    lat: 32.613917, lng: -83.605486,
    buildings: [
      { name: "Thomas Hall", lat: 32.618323, lng: -83.608787, desc: "Classrooms, Student Life", image: "WR Thomas Hall.jpg" },
      { name: "Academic Services Building", lat: 32.617840, lng: -83.608701, desc: "Classrooms, labs, Walker Auditorium" },
      { name: "Oak Hall", lat: 32.615262, lng: -83.607937, desc: "Academic Resource Center" }
    ]
  },
  {
    id: 5,
    name: "Eastman Campus",
    address: "71 Airport Road, Eastman, GA 31023",
    lat: 32.208394, lng: -83.128126,
    buildings: [
      { name: "Primary Academic Building", lat: 32.207940, lng: -83.127939, desc: "Classrooms, Teaching Labs, Computer Labs; five hangars in main building for aircraft storage and maintenance" },
      { name: "W.S. Stuckey Terminal Building", lat: 32.213406, lng: -83.125911, desc: "Terminal Building / Training Facility, Air Traffic Control Tower, Simulation Equipment" },
      { name: "Aviation Hall", lat: 32.212053, lng: -83.126727, desc: "Student housing facility" }
    ]
  }
];
// ------- Building Info Modal (global) -------
(function () {
  const modal = document.getElementById("building-modal");
  if (!modal) return;

  const els = {
    title: document.getElementById("bm-title"),
    campus: document.getElementById("bm-campus"),
    desc: document.getElementById("bm-desc"),
    img: document.getElementById("bm-img")
  };

  function openModal(data){
    els.title.textContent  = data.name || "Building";
    els.campus.textContent = data.campus || "";
    els.desc.textContent   = data.desc || "No description available.";
    els.img.src = data.image || "";
    els.img.alt = (data.name || "Building") + " photo";
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal(){
    modal.setAttribute("aria-hidden", "true");
  }

  // expose
  window.openBuildingInfo = openModal;
  window.closeBuildingInfo = closeModal;

  // Allow map popup button to open the modal using campus+index
  window.openBuildingInfoFromMap = function (campusId, bIndex) {
    const campus = campuses.find(c => c.id === campusId);
    if (!campus) return;
    const b = campus.buildings[bIndex];
    window.openBuildingInfo({
      name: b.name,
      desc: b.desc || "",
      campus: campus.name,
      image: b.image || ""
    });
  };

  // delegate clicks for any .js-building-info button
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-building-info");
    if (btn){
      openModal({
        name:   btn.dataset.name,
        desc:   btn.dataset.desc,
        campus: btn.dataset.campus,
        image:  btn.dataset.image
      });
    }
    if (e.target.matches("[data-close-modal]")) closeModal();
  });

  // esc to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();


/* ======= Map & UI State ======= */
let map;
let markers = [];
let currentCampusId = 2;

// Tracking
let isTracking = false;
let followUser = true;
let userMarker = null;
let userAccuracyCircle = null;

// Routing
let destinationLatLng = null;
let driveRouteLine = null; // OSRM (driving)
let walkRouteLine = null;  // GraphHopper (walking) red dashed
let distanceControl;
let stepsControl;
let lastRouteFetch = 0;
let routeMode = "walk";    // "walk" | "drive"

/* ======= Helpers ======= */
const fmtDist = m => (m < 1000 ? `${Math.round(m)} m` : `${(m/1000).toFixed(2)} km`);
const fmtMin  = s => Math.max(1, Math.round(s / 60));
function formatBearing(a, b) {
  const y = Math.sin((b.lng - a.lng) * Math.PI/180) * Math.cos(b.lat * Math.PI/180);
  const x = Math.cos(a.lat * Math.PI/180)*Math.sin(b.lat * Math.PI/180) -
            Math.sin(a.lat * Math.PI/180)*Math.cos(b.lat * Math.PI/180)*Math.cos((b.lng - a.lng)*Math.PI/180);
  return Math.round((Math.atan2(y, x) * 180/Math.PI + 360) % 360);
}
function clearMarkers(){ markers.forEach(m => map.removeLayer(m)); markers = []; }
function styleBtn(btn, color){
  btn.style.background = color; btn.style.color = "#fff"; btn.style.border = `1px solid ${color}`;
  btn.style.borderRadius = "8px"; btn.style.padding = "8px 10px"; btn.style.cursor = "pointer";
  btn.style.boxShadow = "0 1px 3px rgba(0,0,0,.15)"; btn.style.font = "14px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif";
}

/* ======= Init ======= */
function initMap() {
  map = L.map("map", { scrollWheelZoom: false }).setView([32.808092, -83.732058], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  addLocateControl();
  addModeToggle();
  addHudControls();

  showCampus(2);

  window.addEventListener("resize", () => map.invalidateSize(false));
  const sb = document.getElementById("search-btn");
  const si = document.getElementById("search");
  if (sb) sb.addEventListener("click", search);
  if (si) si.addEventListener("keydown", e => { if (e.key === "Enter") search(); });
}

/* ======= Controls ======= */
function addLocateControl() {
  const Locate = L.Control.extend({
    onAdd: function () {
      const btn = L.DomUtil.create("button", "locate-btn");
      btn.type = "button"; btn.title = "Follow My Location"; btn.innerHTML = "📍 Follow Me";
      styleBtn(btn, "#0b3a6e");
      btn.onclick = () => {
        if (!isTracking) { startTracking(); btn.innerHTML = "🛑 Stop Follow"; styleBtn(btn, "#b91c1c"); }
        else { stopTracking(); btn.innerHTML = "📍 Follow Me"; styleBtn(btn, "#0b3a6e"); }
      };
      return btn;
    }
  });
  new Locate({ position: "topleft" }).addTo(map);
}
function addModeToggle() {
  const Mode = L.Control.extend({
    onAdd: function () {
      const wrap = L.DomUtil.create("div", "mode-toggle");
      wrap.style.display = "flex"; wrap.style.gap = "6px"; wrap.style.marginTop = "8px";
      wrap.innerHTML = `
        <button type="button" class="mode-btn active" data-mode="walk">🚶 Walk</button>
        <button type="button" class="mode-btn" data-mode="drive">🚗 Drive</button>`;
      wrap.querySelectorAll(".mode-btn").forEach(btn => {
        styleBtn(btn, "#475569");
        btn.onclick = () => {
          wrap.querySelectorAll(".mode-btn").forEach(b => { b.classList.remove("active"); styleBtn(b, "#475569"); });
          btn.classList.add("active");
          routeMode = btn.dataset.mode;
          styleBtn(btn, routeMode === "walk" ? "#ef4444" : "#0b3a6e");
          recomputeRoute();
        };
      });
      return wrap;
    }
  });
  new Mode({ position: "topleft" }).addTo(map);
}
function addHudControls() {
  distanceControl = L.control({ position: "bottomleft" });
  distanceControl.onAdd = function () {
    const div = L.DomUtil.create("div", "distance-info");
    Object.assign(div.style, {
      background: "rgba(255,255,255,.9)", border: "1px solid #e5e7eb",
      borderRadius: "8px", padding: "8px 10px", font: "14px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif"
    });
    div.innerHTML = "<b>Directions</b><br><span>No destination selected.</span>";
    return div;
  };
  distanceControl.addTo(map);

  stepsControl = L.control({ position: "bottomright" });
  stepsControl.onAdd = function () {
    const div = L.DomUtil.create("div", "steps-box");
    div.innerHTML = "<b>Directions</b><br><em>No route yet.</em>";
    return div;
  };
  stepsControl.addTo(map);
}

/* ======= Tracking ======= */
function startTracking(){
  if (isTracking) return;
  isTracking = true; followUser = true;
  map.locate({ watch:true, setView:false, enableHighAccuracy:true, maximumAge:5000 });
  map.on("locationfound", onLocationFound);
  map.on("locationerror", onLocationError);
}
function stopTracking(){
  isTracking = false; followUser = false;
  map.stopLocate();
  map.off("locationfound", onLocationFound);
  map.off("locationerror", onLocationError);
  if (userMarker) { map.removeLayer(userMarker); userMarker = null; }
  if (userAccuracyCircle) { map.removeLayer(userAccuracyCircle); userAccuracyCircle = null; }
  clearRoutes(); updateHUD(); updateSteps(null);
}
function onLocationFound(e){
  const { latlng, accuracy } = e;
  if (!userMarker) userMarker = L.marker(latlng, { icon: L.divIcon({ className:"user-icon", html:"🧭", iconSize:[28,28] }) }).addTo(map);
  else userMarker.setLatLng(latlng);
  if (!userAccuracyCircle) userAccuracyCircle = L.circle(latlng, { radius: accuracy, color:"#3b82f6", fillColor:"#93c5fd", fillOpacity:.25 }).addTo(map);
  else { userAccuracyCircle.setLatLng(latlng); userAccuracyCircle.setRadius(accuracy); }
  if (followUser) map.setView(latlng, Math.max(map.getZoom(), 17), { animate:false });

  if (destinationLatLng && Date.now() - lastRouteFetch > 5000) {
    if (routeMode === "drive") {
      requestOSRM(latlng, destinationLatLng);
    } else {
      requestGraphHopper(latlng, destinationLatLng, "foot");
    }
  }
  updateHUD();
}
function onLocationError(err){ alert("Location error: " + (err.message || "Unable to get your location.")); stopTracking(); }

/* ======= ROUTING ======= */
/*** DRIVING: OSRM (public demo server) ***/
async function osrmRoute(from, to){
  const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=true`;
  const res = await fetch(url); const data = await res.json();
  if (!data || data.code !== "Ok" || !data.routes || !data.routes[0]) return null;
  const r = data.routes[0];
  const coords = r.geometry.coordinates.map(([lon,lat]) => [lat,lon]);
  const steps = (r.legs?.[0]?.steps || []).map(s => {
    const name = s.name || "road"; const dist = fmtDist(s.distance);
    const t = s.maneuver?.type || "continue"; const mod = s.maneuver?.modifier || "";
    const onto = name ? ` onto ${name}` : "";
    switch (t) {
      case "depart": return `Start${onto} • ${dist}`;
      case "arrive": return `Arrive • ${dist}`;
      case "turn": return `Turn ${mod}${onto} • ${dist}`.replace("  "," ");
      case "roundabout": return `Enter roundabout${onto} • ${dist}`;
      case "merge": return `Merge${onto} • ${dist}`;
      case "fork": return `Keep ${mod}${onto} • ${dist}`.replace("  "," ");
      default: return `Continue${onto} • ${dist}`;
    }
  });
  return { coords, distance: r.distance, duration: r.duration, steps };
}
async function requestOSRM(from, to){
  lastRouteFetch = Date.now();
  const r = await osrmRoute(from, to);
  if (!r) { updateSteps(null); const d = map.distance(from,to); updateHUD(d,null); return; }
  if (!driveRouteLine) driveRouteLine = L.polyline(r.coords, { color:"#0b3a6e", weight:5, opacity:.95 }).addTo(map);
  else driveRouteLine.setLatLngs(r.coords);
  if (walkRouteLine) { map.removeLayer(walkRouteLine); walkRouteLine = null; }
  updateHUD(r.distance, r.duration); updateSteps(r.steps);
}

/*** WALKING: GraphHopper (follows OSM footways/paths) ***/
async function ghRoute(from, to, profile = "foot", optionalVia = null){
  if (!GRAPHOPPER_KEY || GRAPHOPPER_KEY === "YOUR_GRAPHHOPPER_KEY_HERE") {
    alert("Missing GraphHopper API key. Open your JS file and set GRAPHOPPER_KEY.");
    return null;
  }

  // Build URL with 2 or 3 points
  let url = `https://graphhopper.com/api/1/route?profile=${profile}`;
  url += `&point=${from.lat},${from.lng}`;
  if (optionalVia) url += `&point=${optionalVia.lat},${optionalVia.lng}`;
  url += `&point=${to.lat},${to.lng}`;
  url += `&points_encoded=false&instructions=true&locale=en&key=${GRAPHOPPER_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data || !data.paths || !data.paths[0]) return null;

    const path = data.paths[0];
    const coords = path.points.coordinates.map(([lon,lat]) => [lat,lon]);
    const steps = (path.instructions || []).map(i => `${i.text} • ${fmtDist(i.distance)}`);
    return { coords, distance: path.distance, duration: path.time/1000, steps };
  } catch {
    return null;
  }
}
async function requestGraphHopper(from, to, profile = "foot", optionalVia = null){
  lastRouteFetch = Date.now();
  const r = await ghRoute(from, to, profile, optionalVia);
  if (!r) {
    updateSteps(null);
    const d = map.distance(from, to);
    updateHUD(d, null);
    return;
  }

  // Style: red dashed for walking; blue solid for driving (if ever used)
  const style = profile === "foot"
    ? { color:"#ef4444", weight:4, opacity:.95, dashArray:"8,8" }
    : { color:"#0b3a6e", weight:5, opacity:.95 };

  if (!walkRouteLine) walkRouteLine = L.polyline(r.coords, style).addTo(map);
  else { walkRouteLine.setStyle(style); walkRouteLine.setLatLngs(r.coords); }

  // If a driving line exists from a previous mode, clear it
  if (driveRouteLine) { map.removeLayer(driveRouteLine); driveRouteLine = null; }

  updateHUD(r.distance, r.duration);
  updateSteps(r.steps);
}

/* ======= HUD & STEPS ======= */
function updateHUD(routeDistance=null, routeDuration=null){
  const box = document.querySelector(".distance-info"); if (!box) return;
  if (!destinationLatLng){ box.innerHTML = "<b>Directions</b><br><span>No destination selected.</span>"; return; }

  if (!userMarker){
    box.innerHTML = `<b>${routeMode === "drive" ? "Driving" : "Walking"}</b><br><em>Tap 📍 Follow Me to start.</em>`;
    return;
  }

  const from = userMarker.getLatLng(); const to = destinationLatLng;
  const crow = fmtDist(map.distance(from, to));

  if (routeDistance != null){
    const eta = fmtMin(routeDuration);
    box.innerHTML = `<b>${routeMode === "drive" ? "Driving route" : "Walking route"}</b><br>
      Distance: <strong>${fmtDist(routeDistance)}</strong><br>
      ETA: <strong>~${eta} min</strong><br>(Straight line: ${crow})`;
  } else {
    const brng = formatBearing(from, to);
    box.innerHTML = `<b>${routeMode === "drive" ? "Driving" : "Walking"}</b><br>
      Straight-line: <strong>${crow}</strong><br> Bearing: <strong>${brng}°</strong>`;
  }
}
function updateSteps(steps){
  const box = document.querySelector(".steps-box"); if (!box) return;
  if (!destinationLatLng){ box.innerHTML = "<b>Directions</b><br><em>No route yet.</em>"; return; }
  if (!userMarker){ box.innerHTML = `<b>${routeMode === "drive" ? "Driving" : "Walking"}</b><br><em>Tap 📍 Follow Me to get directions.</em>`; return; }
  if (!steps || !steps.length){ box.innerHTML = `<b>${routeMode === "drive" ? "Driving" : "Walking"}</b><br><em>Routing unavailable.</em>`; return; }
  box.innerHTML = `<b>${routeMode === "drive" ? "Driving" : "Walking"}</b><ol>${steps.map(s => `<li>${s}</li>`).join("")}</ol>`;
}

/* ======= UI ======= */
function showAllCampuses(){
  clearMarkers();
  let html = "";
  campuses.forEach(c => {
    const marker = L.marker([c.lat, c.lng]).addTo(map)
      .bindPopup(`<b>${c.name}</b><br>${c.address}`)
      .on("click", () => showCampus(c.id));
    markers.push(marker);
    html += `<div class="campus" onclick="showCampus(${c.id})"><h3>${c.name}</h3><p class="muted">${c.address}</p></div>`;
  });
  const resDiv = document.getElementById("results");
  if (resDiv) resDiv.innerHTML = html;
  map.fitBounds(markers.map(m => m.getLatLng()));
  destinationLatLng = null; clearRoutes(); updateHUD(); updateSteps(null);
}
function showCampus(campusId){
  currentCampusId = campusId; clearMarkers();
  const campus = campuses.find(c => c.id === campusId); if (!campus) return;

  const campusMarker = L.marker([campus.lat, campus.lng]).addTo(map)
    .bindPopup(`<b>${campus.name}</b><br>${campus.address}`);
  markers.push(campusMarker);

  campus.buildings.forEach((b, idx) => {
  const marker = L.marker([b.lat, b.lng], {
      icon: L.divIcon({ className:"building-icon", html:"🏛️", iconSize:[30,30] })
    })
    .addTo(map)
    .bindPopup(`
      <div style="min-width:220px">
        <b>${b.name}</b><br>${b.desc || ""}
        <div style="margin-top:8px;">
          <button type="button" class="back-btn" onclick="openBuildingInfoFromMap(${campus.id}, ${idx})">More info</button>
        </div>
      </div>
    `);
  markers.push(marker);
});

  map.setView([campus.lat, campus.lng], 15);

  let html = `
    <button class="back-btn" onclick="showAllCampuses()">← All Campuses</button>
    <h2 class="panel-title">${campus.name}</h2>
    <p class="muted">${campus.address}</p>
    <h3>Buildings</h3>
    <div class="buildings-list">`;
    campus.buildings.forEach((b, idx) => {
    html += `<div class="building">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <div style="flex:1; cursor:pointer;" onclick="zoomToBuilding(${b.lat}, ${b.lng})">
            <h4 style="margin-bottom:4px;">${b.name}</h4>
            <p class="muted" style="margin:0;">${b.desc || ""}</p>
          </div>
          <button
            type="button"
            class="back-btn js-building-info"
            style="white-space:nowrap;"
            data-name="${b.name.replace(/"/g,'&quot;')}"
            data-desc="${(b.desc || "").replace(/"/g,'&quot;')}"
            data-campus="${campus.name.replace(/"/g,'&quot;')}"
            data-image="${(b.image || "").replace(/"/g,'&quot;')}"
          >ℹ️ Info</button>
        </div>
      </div>`;
  });

  html += `</div>`;
  const resDiv = document.getElementById("results");
  if (resDiv) resDiv.innerHTML = html;

  destinationLatLng = null; clearRoutes(); updateHUD(); updateSteps(null);
}
function zoomToBuilding(lat, lng){
  map.setView([lat, lng], 18);
  destinationLatLng = L.latLng(lat, lng);
  if (!userMarker){
    clearRoutes(); updateSteps(null);
    const hud=document.querySelector(".distance-info");
    if(hud) hud.innerHTML=`<b>${routeMode==="drive"?"Driving":"Walking"}</b><br><em>Tap 📍 Follow Me to start.</em>`;
    return;
  }
  recomputeRoute();
}
function search(){
  const input = document.getElementById("search");
  const q = (input && input.value ? input.value : "").trim().toLowerCase();
  if (!q) return showCampus(currentCampusId);

  const campusMatches = campuses.filter(c => c.name.toLowerCase().includes(q));
  const buildingMatches = [];
  campuses.forEach(c => c.buildings.forEach(b => { if (b.name.toLowerCase().includes(q)) buildingMatches.push({ campus: c, building: b }); }));

  if (!campusMatches.length && buildingMatches.length === 1){
    const { campus, building } = buildingMatches[0]; showCampus(campus.id);
    return setTimeout(() => zoomToBuilding(building.lat, building.lng), 0);
  }

  clearMarkers();
  const bounds = [];
  let html = `<h3>Search Results</h3><div class="search-results">`;
  if (campusMatches.length){
    html += `<h4>Campuses</h4>`;
    campusMatches.forEach(c => { bounds.push([c.lat,c.lng]); html += `<div class="result campus-result" onclick="showCampus(${c.id})"><strong>${c.name}</strong><br><span class="muted">${c.address}</span></div>`; });
  }
  if (buildingMatches.length){
    html += `<h4>Buildings</h4>`;
    buildingMatches.forEach(({ campus, building }) => {
      bounds.push([building.lat, building.lng]);
      const click = `showCampus(${campus.id}); setTimeout(()=>zoomToBuilding(${building.lat}, ${building.lng}), 0);`;
      html += `<div class="result building-result" onclick='${click}'><strong>${building.name}</strong> <span class="muted">(${campus.name})</span><br><span class="muted">${building.desc || ""}</span></div>`;
      const m = L.marker([building.lat, building.lng], { icon: L.divIcon({ className:"building-icon", html:"🏛️", iconSize:[30,30] }) }).addTo(map);
      markers.push(m);
    });
  }
  if (!campusMatches.length && !buildingMatches.length) html += `<p class="muted">No matches found.</p>`;
  html += `</div>`;
  const resDiv = document.getElementById("results");
  if (resDiv) resDiv.innerHTML = html;
  if (bounds.length) map.fitBounds(bounds);

  destinationLatLng = null; clearRoutes(); updateHUD(); updateSteps(null);
}

/* ======= Route helpers ======= */
function clearRoutes(){
  if (driveRouteLine){ map.removeLayer(driveRouteLine); driveRouteLine=null; }
  if (walkRouteLine){ map.removeLayer(walkRouteLine); walkRouteLine=null; }
}
function recomputeRoute(){
  if (!destinationLatLng || !userMarker){ updateHUD(); updateSteps(null); return; }
  const from = userMarker.getLatLng();
  if (routeMode === "drive") {
    requestOSRM(from, destinationLatLng);
  } else {
    requestGraphHopper(from, destinationLatLng, "foot");
  }
}

window.addEventListener("load", initMap);
