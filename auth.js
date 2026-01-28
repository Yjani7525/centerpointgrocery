// Netlify Identity helper
window.netlifyIdentity && window.netlifyIdentity.on("init", user => {
  if (!user) {
    window.netlifyIdentity.on("login", () => document.location.reload());
  }
});
function currentUser(){
  return window.netlifyIdentity ? window.netlifyIdentity.currentUser() : null;
}
function requireLogin(allowedRoles){
  const user = currentUser();
  if(!user){ window.netlifyIdentity && window.netlifyIdentity.open(); return false; }
  const roles = (user.app_metadata && user.app_metadata.roles) || [];
  if(allowedRoles && allowedRoles.length){
    const ok = roles.some(r => allowedRoles.includes(r));
    if(!ok){
      alert("Access denied for this account.");
      window.location.href = "/"; 
      return false;
    }
  }
  return true;
}