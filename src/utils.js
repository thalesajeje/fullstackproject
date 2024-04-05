// Fetch Categories

export const fetchCategories = async () => {
    try {
        const response = await fetch('http://localhost:3001/categories');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};
