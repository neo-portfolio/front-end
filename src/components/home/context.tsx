import {Context, createContext} from "react";
import {Company} from "@interfaces/company";
import {Query} from "@interfaces/neo4j";

interface ContextData {
	companies: Query<Company>,
	setCompanies: (newCompanies: Query<Company>) => void;
}

export const HomeContext: Context<ContextData> = createContext<ContextData>(null);