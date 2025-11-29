'use client';

import { FaEye, FaRegClock, FaShareNodes, FaUser, FaVolumeLow } from "react-icons/fa6";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiBookMarkedLine } from "react-icons/ri";
import { LuMessageCircleMore } from "react-icons/lu";
import { useState } from "react";

export default function Home() {
  const [bookmarks, setBookmarks] = useState({});

  const articles = [
    {
      id: 1,
      title: "Les derniers développements en intelligence artificielle révolutionnent l'industrie technologique",
      excerpt: "Des avancées majeures dans le domaine de l'IA marquent un tournant décisif pour le secteur tech. Les experts analysent les implications...",
      category: "Technologie",
      author: "Marie Laurent",
      date: "15 min",
      image: "bg-gradient-to-br from-blue-500 to-cyan-600",
      views: 24500,
      isPremium: false,
      isFeatured: true
    },
    {
      id: 2,
      title: "Crise économique: les marchés mondiaux se stabilisent enfin",
      excerpt: "Après plusieurs semaines de volatilité, les indices boursiers montrent des signes de reprise. Analyse des facteurs clés...",
      category: "Économie",
      author: "Jean Moreau",
      date: "2h",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      views: 18230,
      isPremium: true,
      isFeatured: false
    },
    {
      id: 3,
      title: "Politique: accord majeur trouvé sur les réformes structurelles",
      excerpt: "Un consensus émerge entre les principaux partis concernant les réformes à venir. Les détails de cet accord historique...",
      category: "Politique",
      author: "Sophie Durand",
      date: "3h",
      image: "bg-gradient-to-br from-red-500 to-rose-600",
      views: 31420,
      isPremium: false,
      isFeatured: true
    },
    {
      id: 4,
      title: "Cinéma: palmarès des Oscars 2025, les grands gagnants",
      excerpt: "Les plus grands cinéastes du monde se sont affrontés dans une cérémonie mémorable. Découvrez les films et réalisateurs...",
      category: "Culture",
      author: "Thomas Petit",
      date: "4h",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      views: 42100,
      isPremium: false,
      isFeatured: false
    },
    {
      id: 5,
      title: "Climat: les engagements de la COP30 entrent en vigueur",
      excerpt: "Les nations du monde se mobilisent pour respecter les objectifs climatiques. Les premières mesures concrètes...",
      category: "Environnement",
      author: "Claire Martin",
      date: "5h",
      image: "bg-gradient-to-br from-amber-500 to-yellow-600",
      views: 15890,
      isPremium: true,
      isFeatured: false
    },
    {
      id: 6,
      title: "Sports: champion du monde couronnée après une finale intense",
      excerpt: "Une victoire spectaculaire clôt le championnat mondial. Les moments clés de cette compétition palpitante...",
      category: "Sports",
      author: "Marc Rousseau",
      date: "6h",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      views: 28340,
      isPremium: false,
      isFeatured: false
    }
  ];

  const toggleBookmark = (id) => {
    setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const featured = articles.filter(a => a.isFeatured);
  const recent = articles.filter(a => !a.isFeatured);

  return (
    <div className="bg-white text-gray-900">
      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6 text-slate-600">
          <HiArrowTrendingUp size={20} />
          <h2 className="text-xl font-bold">À la une</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((article, idx) => (
            <div 
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-4 bg-slate-200">
                <div className={`w-full h-full ${article.image}`}></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {article.isPremium && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <FaVolumeLow size={12} />
                      Premium
                    </span>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-slate-700 transition">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FaUser size={16} />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegClock size={16} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye size={16} />
                  {(article.views / 1000).toFixed(1)}K
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-t border-slate-200"></div>
      </div>

      {/* Recent Articles */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Articles récents</h2>

        <div className="space-y-6">
          {recent.map((article) => (
            <div 
              key={article.id}
              className="group flex gap-6 border border-slate-200 rounded-lg p-4 hover:border-slate-400 hover:shadow-md transition cursor-pointer"
            >
              <div className="w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200">
                <div className={`w-full h-full ${article.image}`}></div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded">
                      {article.category}
                    </span>
                    {article.isPremium && (
                      <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded flex items-center gap-1">
                        <FaVolumeLow size={12} />
                        Premium
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-slate-700 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                </div>

                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <FaEye size={14} />
                      {(article.views / 1000).toFixed(1)}K
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => toggleBookmark(article.id)}
                      className="p-2 hover:bg-slate-100 rounded transition"
                    >
                      <RiBookMarkedLine 
                        size={16} 
                        className={bookmarks[article.id] ? "fill-slate-800 text-slate-800" : "text-gray-400"}
                      />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded transition">
                      <FaShareNodes size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded transition">
                      <LuMessageCircleMore size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-slate-800 text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition">
            Charger plus d'articles
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Recevez nos meilleures histoires</h2>
          <p className="text-lg text-slate-300 mb-8">
            Abonnez-vous à nos newsletters pour ne rien manquer des actualités les plus importantes
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:shadow-xl transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
