export default async function handler(req,res) {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
        const data = await response.json();
        res.status(200).json(data);
    }catch(error){
        console.error('Error fetching data:', error);
        res.status(500).json({error: 'Error fetching data'});
    }
}