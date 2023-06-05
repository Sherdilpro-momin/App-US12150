import axios from 'axios';

export class OpenAIService {
    private apiUrl = 'https://openai80.p.rapidapi.com/chat/completions';
    private apiKey = '5e425f8128msh991df62a96c9007p1a4c23jsn6d41509a2357'; // Replace with your RapidAPI API key


    public async getChatCompletion(prompt: string): Promise<any> {

        const headers = {
            'authority': 'openai80.p.rapidapi.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'expires': '0',
            'pragma': 'no-cache',
            'usequerystring': 'true',
            'x-rapidapi-host': 'openai80.p.rapidapi.com',
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-ua': 'RapidAPI-Playground'
        };
        debugger
        const data = {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        };

        try {
            const response = await axios.post(this.apiUrl, data, { headers });
            debugger
            console.log('API Response:', response.data);
            return response.data
            // Process the response as needed
        } catch (error) {
            debugger
            console.error('API Error:', error);
            // Handle the error
        }
    }

}
