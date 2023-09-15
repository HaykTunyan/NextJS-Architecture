export async function GET(request) {

    const posts = [
        { id: 1,  description: "Loram Ipsum" },
        { id: 2, description: "Loaram Ipsum" },
        { id: 3, description: "Loaram Ipsum" },
    ]

    return new Response(JSON.stringify(posts))

};


