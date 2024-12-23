
import React, { useState } from 'react';
import { Globe, Plus, Trash2, Download, RefreshCw } from 'lucide-react';

interface SitemapUrl {
  url: string;
  lastmod: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export default function SitemapForm() {
  const [urls, setUrls] = useState<SitemapUrl[]>([
    {
      url: '',
      lastmod: new Date().toISOString().split('T')[0],
      priority: '0.5',
      changefreq: 'weekly'
    }
  ]);
  const [preview, setPreview] = useState('');

  const addUrl = () => {
    setUrls([...urls, {
      url: '',
      lastmod: new Date().toISOString().split('T')[0],
      priority: '0.5',
      changefreq: 'weekly'
    }]);
  };

  const removeUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const updateUrl = (index: number, field: keyof SitemapUrl, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = { ...newUrls[index], [field]: value };
    setUrls(newUrls);
  };

  const generateSitemap = () => {
    if (!urls.some(url => url.url.trim())) {
      alert('Please add at least one valid URL');
      return;
    }
    
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.filter(url => url.url.trim()).map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    setPreview(xmlContent);
  };

  const downloadSitemap = () => {
    const blob = new Blob([preview], { type: 'text/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        {urls.map((url, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">URL #{index + 1}</h3>
              <button
                onClick={() => removeUrl(index)}
                className="text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={urls.length === 1}
                title={urls.length === 1 ? "Can't remove the last URL" : "Remove URL"}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">URL</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    value={url.url}
                    onChange={(e) => updateUrl(index, 'url', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Last Modified</label>
                <input
                  type="date"
                  value={url.lastmod}
                  onChange={(e) => updateUrl(index, 'lastmod', e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Change Frequency</label>
                <select
                  value={url.changefreq}
                  onChange={(e) => updateUrl(index, 'changefreq', e.target.value as SitemapUrl['changefreq'])}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="always">Always</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="never">Never</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <select
                  value={url.priority}
                  onChange={(e) => updateUrl(index, 'priority', e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="1.0">1.0</option>
                  <option value="0.9">0.9</option>
                  <option value="0.8">0.8</option>
                  <option value="0.7">0.7</option>
                  <option value="0.6">0.6</option>
                  <option value="0.5">0.5</option>
                  <option value="0.4">0.4</option>
                  <option value="0.3">0.3</option>
                  <option value="0.2">0.2</option>
                  <option value="0.1">0.1</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-4">
          <button
            onClick={addUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add URL
          </button>

          <button
            onClick={generateSitemap}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Generate Sitemap
          </button>

          {preview && (
            <button
              onClick={downloadSitemap}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Sitemap
            </button>
          )}
        </div>

        {preview && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Preview</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono text-sm">
              {preview}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
