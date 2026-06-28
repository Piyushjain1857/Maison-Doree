/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from "react";

const InquiryContext = createContext();

export const InquiryProvider = ({ children }) => {
  const [inquiryItems, setInquiryItems] = useState(() => {
    const saved = localStorage.getItem("maison_inquiries");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("maison_theme");
    return saved ? saved : "light";
  });

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("maison_inquiries", JSON.stringify(inquiryItems));
  }, [inquiryItems]);

  useEffect(() => {
    localStorage.setItem("maison_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const addToInquiry = (item) => {
    setInquiryItems((prev) => {
      // Avoid duplicate inquiries for the exact same piece
      if (prev.some((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
    // Open bag drawer so user gets visual feedback
    setIsBagOpen(true);
  };

  const removeFromInquiry = (itemId) => {
    setInquiryItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearInquiry = () => {
    setInquiryItems([]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleBag = () => {
    setIsBagOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <InquiryContext.Provider
      value={{
        inquiryItems,
        theme,
        isBagOpen,
        isMobileMenuOpen,
        addToInquiry,
        removeFromInquiry,
        clearInquiry,
        toggleTheme,
        toggleBag,
        toggleMobileMenu,
        setIsBagOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
};
