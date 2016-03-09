//javascript: //from bookmarklet version
if (!window.location.href.includes("monobook"))
{
window.location=window.location.href.substring(0,(window.location.href.includes("#")?window.location.href.lastIndexOf("#"):window.location.href.length)).concat((window.location.search?"&":"?")+"useskin=monobook");
}