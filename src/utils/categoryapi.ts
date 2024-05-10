export const categorydata = async (name: string) =>{
    try {
        const response = await fetch(`https://anime-api-k3tm.onrender.com/api/${name}?page=1`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const category = await response.json();
        const categorydata = category.results.data;
        return categorydata;
        
    } catch (error) {
        console.error('Failed to fetch category:', error);
        return;
    }
}