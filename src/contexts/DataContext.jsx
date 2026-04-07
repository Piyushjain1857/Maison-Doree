import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

const loadData = async () => {
  const dataImports = await Promise.all([
    import('../data/siteConfig.json'),
    import('../data/navConfig.json'),
    import('../data/heroConfig.json'),
    import('../data/collectionsConfig.json'),
    import('../data/testimonialsConfig.json'),
    import('../data/featuredConfig.json'),
    import('../data/storyConfig.json'),
    import('../data/craftConfig.json')
  ]);

  return {
    siteConfig: dataImports[0].default,
    navConfig: dataImports[1].default,
    heroConfig: dataImports[2].default,
    collectionsConfig: dataImports[3].default,
    testimonialsConfig: dataImports[4].default,
    featuredConfig: dataImports[5].default,
    storyConfig: dataImports[6].default,
    craftConfig: dataImports[7].default
  };
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData().then((loadedData) => {
      setData(loadedData);
      setLoading(false);
    }).catch((error) => {
      console.error('Failed to load data:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loader
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

