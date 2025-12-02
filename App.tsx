import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { RegisterPage } from './components/RegisterPage';
import { ProductPage } from './components/ProductPage';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== 'register' && <Header onRegisterClick={() => setCurrentPage('register')} />}

      {currentPage === 'home' && (
        <>
          <Hero />
          <ProductGrid onProductClick={() => setCurrentPage('product')} />
        </>
      )}

      {currentPage === 'product' && (
        <>
          <div className="bg-neutral-100 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-neutral-600 hover:text-neutral-900"
              >
                ← Назад на главную
              </button>
            </div>
          </div>
          <ProductPage />
        </>
      )}

      {currentPage === 'register' && (
        <>
          <div className="absolute top-4 left-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-neutral-600 hover:text-neutral-900"
            >
              ← Назад
            </button>
          </div>
          <RegisterPage />
        </>
      )}
    </div>
  );
}