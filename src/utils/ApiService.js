import axios from "axios";
const url = "/api/quote";

class ApiService {
	static async getQuote() {
		const res = await axios.get(url);
		return res.data;
	}

	static async newQuote(quoteObject) {
		const res = await axios.post("/api/post/quote", quoteObject, {
			headers: {
				Authorization: `Bearer $2b$08$tMqw1.a5a/9oQ8TGh1759.KIS1nN9E/2u83fDdUHAKEIfoFrM.iaq`
			}
		});

		return res.data;
	}

	static async deleteQuote(id, admin) {
		const res = await axios.delete(`${url}?id=${id}&admin=${admin}`);
		return res.data;
	}
}

export default ApiService;
