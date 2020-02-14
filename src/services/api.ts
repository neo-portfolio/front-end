import {Company} from "@interfaces/company";
import {Query} from "@interfaces/neo4j";

export class ApiService {
    private readonly host: string = process.env.API_URL;
    private readonly basePath: string = "api/portfolio";
    private readonly url: string = `${this.host}/${this.basePath}`;

    public stockData = async (symbols: string[]): Promise<Query<Company>> => {
        const symbolParams: string = symbols.join(",");
        const response = await fetch(`${this.url}/company_info?symbol=${symbolParams}`);
        return response.json();
    };
}