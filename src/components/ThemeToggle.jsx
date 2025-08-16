import React from 'react';
export default function ThemeToggle(){
  const [dark, setDark] = React.useState(() => {
    try { const v = localStorage.getItem('theme'); if (v) return v==='dark'; return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; } catch { return true; }
  });
  React.useEffect(()=>{ if(dark) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); try{ localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch{} },[dark]);
  return (
    <button onClick={()=>setDark(d=>!d)} className="px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 inline-flex items-center">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
