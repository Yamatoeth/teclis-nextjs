// Créez: src/app/[locale]/diagnostic/page.tsx
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function DiagnosticPage() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    addLog('Page montée');
    addLog(`useLocale() retourne: ${locale}`);
    addLog(`usePathname() retourne: ${pathname}`);
    addLog(`window.location.pathname: ${window.location.pathname}`);
    
    // Inspecter les liens après render
    setTimeout(() => {
      const links = document.querySelectorAll('a[data-test]');
      links.forEach((link, i) => {
        const href = link.getAttribute('href');
        addLog(`Lien ${i + 1} href: ${href}`);
      });
    }, 100);
  }, []);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
    console.log(message);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    addLog(`🔗 Click sur lien avec href: ${href}`);
  };

  const handleRouterPush = () => {
    addLog('🚀 router.push("/products") appelé');
    router.push('/products');
  };

  if (!mounted) return <div>Chargement...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Info actuelle */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">🔍 Diagnostic i18n</h1>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex gap-2">
              <span className="font-bold w-48">Locale (useLocale):</span>
              <span className="text-blue-600">{locale}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-48">Pathname (usePathname):</span>
              <span className="text-blue-600">{pathname}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-48">URL réelle:</span>
              <span className="text-green-600">{window.location.pathname}</span>
            </div>
          </div>
        </div>

        {/* Tests de navigation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">🧪 Tests de navigation</h2>
          
          <div className="space-y-4">
            {/* Test 1: Link simple */}
            <div className="border p-4 rounded">
              <p className="font-bold mb-2">Test 1: Link de @/i18n/routing</p>
              <Link 
                href="/products" 
                onClick={handleLinkClick}
                data-test="link-1"
                className="text-blue-600 underline"
              >
                → Cliquez ici (Link vers /products)
              </Link>
            </div>

            {/* Test 2: router.push */}
            <div className="border p-4 rounded">
              <p className="font-bold mb-2">Test 2: router.push programmatique</p>
              <Button onClick={handleRouterPush}>
                → router.push('/products')
              </Button>
            </div>

            {/* Test 3: Lien HTML natif */}
            <div className="border p-4 rounded">
              <p className="font-bold mb-2">Test 3: Lien HTML natif avec locale hardcodée</p>
              <a 
                href={`/${locale}/products`}
                className="text-green-600 underline"
              >
                → Lien HTML vers /{locale}/products
              </a>
            </div>

            {/* Test 4: window.location */}
            <div className="border p-4 rounded">
              <p className="font-bold mb-2">Test 4: window.location.href</p>
              <Button 
                onClick={() => {
                  addLog(`window.location.href = '/${locale}/products'`);
                  window.location.href = `/${locale}/products`;
                }}
                variant="outline"
              >
                → window.location vers /{locale}/products
              </Button>
            </div>
          </div>
        </div>

        {/* Logs */}
        <div className="bg-black text-green-400 p-6 rounded-lg shadow font-mono text-xs">
          <h2 className="text-lg font-bold mb-4 text-white">📋 Console de logs</h2>
          <div className="space-y-1 max-h-96 overflow-auto">
            {logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">📝 Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Vous êtes actuellement sur: <code className="bg-yellow-200 px-2 py-1 rounded">{window.location.pathname}</code></li>
            <li>Testez les 4 boutons/liens ci-dessus un par un</li>
            <li>Notez quelle URL vous obtenez après chaque clic</li>
            <li>Regardez les logs en bas de page</li>
            <li>Partagez-moi ces résultats</li>
          </ol>
        </div>

      </div>
    </div>
  );
}