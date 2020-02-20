import {Company} from "@interfaces/company";
import {Query, Weight} from "@interfaces/neo4j";

export class ApiService {
	private readonly host: string = process.env.API_URL;
	private readonly basePath: string = "api/portfolio";
	private readonly url: string = `${this.host}/${this.basePath}`;

	private post = (path: string, body: any): Promise<Response> => {
		const fetchOptions: RequestInit = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		};
		return fetch(`${this.url}/${path}`, fetchOptions);
	};

	public stockData = async (symbols: string[]): Promise<Query<Company>[]> => {
		const symbolParams: string = symbols.join(",");
		const response = await fetch(`${this.url}/company_info?symbol=${symbolParams}`);
		return response.json();
	};

	public optimizePortfolio = async (symbols: string[]): Promise<Weight[]> => {
		const body = {
			symbols,
		};
		const response = await this.post("optimize", body);
		return await response.json();
	};
}