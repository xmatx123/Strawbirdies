import React, { createContext, useContext, useState } from 'react';
import { mockOrganizations } from '../services/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentOrgId, setCurrentOrgId] = useState(1); // Default to Acme
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }
        const results = mockOrganizations.filter(org =>
            org.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

    const selectOrg = (id) => {
        setCurrentOrgId(id);
        setSearchQuery("");
        setSearchResults([]);
    };

    return (
        <AppContext.Provider value={{
            currentOrgId,
            selectOrg,
            searchQuery,
            handleSearch,
            searchResults
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
