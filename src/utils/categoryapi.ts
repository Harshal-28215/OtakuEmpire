export const categorydata = async (id: string) =>{
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const category = await response.json();
        return category.data;
        
    } catch (error) {
        console.error('Failed to fetch category:', error);
        return;
    }
}